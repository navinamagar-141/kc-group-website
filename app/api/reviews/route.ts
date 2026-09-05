import { NextRequest, NextResponse } from "next/server";
import { createReview, getApprovedReviews } from "@/lib/reviews-store";
import { createReviewActionToken } from "@/lib/review-tokens";
import { sendEmail } from "@/lib/send-email";
import { company } from "@/lib/site-config";

export const runtime = "nodejs";

const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function GET() {
  const reviews = await getApprovedReviews();
  return NextResponse.json({ reviews });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const message = String(body.message || "").trim();
  const serviceType = String(body.serviceType || "Other").trim();
  const rating = Number(body.rating);

  if (!name || !message) {
    return NextResponse.json({ error: "Please add your name and a short review." }, { status: 400 });
  }
  if (name.length > 100 || message.length > 1000) {
    return NextResponse.json({ error: "That's a little long — please shorten it." }, { status: 400 });
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Please select a star rating from 1 to 5." }, { status: 400 });
  }

  const review = await createReview({ name, rating, serviceType, message });

  const approveToken = createReviewActionToken(review.id, "approve");
  const rejectToken = createReviewActionToken(review.id, "reject");
  const base = process.env.NEXT_PUBLIC_SITE_URL || company.url;
  const approveUrl = `${base}/api/reviews/decide?token=${approveToken}`;
  const rejectUrl = `${base}/api/reviews/decide?token=${rejectToken}`;

  try {
    await sendEmail({
      to: process.env.QUOTE_NOTIFICATION_EMAIL || company.email,
      subject: `New review awaiting approval — ${review.name} (${review.rating}★)`,
      html: `
        <h2>New review submitted</h2>
        <p><strong>Name:</strong> ${review.name}</p>
        <p><strong>Rating:</strong> ${review.rating} / 5</p>
        <p><strong>Service:</strong> ${review.serviceType}</p>
        <p><strong>Review:</strong></p>
        <p>${review.message}</p>
        <p style="margin-top:24px;">
          <a href="${approveUrl}" style="background:#D6A62B;color:#0E1116;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600;margin-right:12px;">Approve &amp; Publish</a>
          <a href="${rejectUrl}" style="background:#eee;color:#333;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600;">Reject</a>
        </p>
        <p style="color:#888;font-size:12px;margin-top:16px;">This link expires in 14 days.</p>
      `,
    });
  } catch (err) {
    console.error("Failed to send review approval email:", err);
  }

  return NextResponse.json({ ok: true });
}
