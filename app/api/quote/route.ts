import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB per file
const MAX_FILES = 5;
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 4;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (formData.get("website")) {
    return NextResponse.json({ ok: true });
  }

  const fullName = String(formData.get("fullName") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const serviceType = String(formData.get("serviceType") || "").trim();

  if (!fullName || !phone || !email || !serviceType) {
    return NextResponse.json({ error: "Please complete all required fields before submitting." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const files = formData.getAll("fileUpload").filter((f): f is File => f instanceof File && f.size > 0);

  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: `Please attach no more than ${MAX_FILES} photos.` }, { status: 400 });
  }

  for (const file of files) {
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Each photo must be under 8MB." }, { status: 400 });
    }
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Only JPEG, PNG, WEBP or HEIC photos are accepted." }, { status: 400 });
    }
  }

  const submission = {
    fullName,
    phone,
    email,
    serviceType,
    commercialCategory: String(formData.get("commercialCategory") || ""),
    jobType: String(formData.get("jobType") || ""),
    serviceCategory: String(formData.get("serviceCategory") || ""),
    frequency: String(formData.get("frequency") || ""),
    propertySize: String(formData.get("propertySize") || ""),
    suburb: String(formData.get("suburb") || ""),
    state: String(formData.get("state") || ""),
    postcode: String(formData.get("postcode") || ""),
    preferredDate: String(formData.get("preferredDate") || ""),
    preferredContact: String(formData.get("preferredContact") || ""),
    jobDetails: String(formData.get("jobDetails") || ""),
    attachmentCount: files.length,
    submittedAt: new Date().toISOString(),
  };

  try {
    await sendQuoteEmail(submission, files);
  } catch (err) {
    console.error("Failed to send quote notification email:", err);
    return NextResponse.json({ error: "We couldn't send your request right now. Please call or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

async function sendQuoteEmail(submission: Record<string, string | number>, files: File[]) {
  const notifyTo = process.env.QUOTE_NOTIFICATION_EMAIL || "kcgcompanies48@gmail.com";
  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
    }))
  );

  const html = `
    <h2>New Quote Request — KC Group</h2>
    <table cellpadding="6" cellspacing="0">
      ${Object.entries(submission)
        .map(([key, value]) => `<tr><td style="font-weight:600;text-transform:capitalize;">${key}</td><td>${value}</td></tr>`)
        .join("")}
    </table>
  `;

  await sendEmail({
    to: notifyTo,
    subject: `New ${submission.serviceType} quote request — ${submission.fullName}`,
    html,
    replyTo: String(submission.email),
    attachments,
  });
}
