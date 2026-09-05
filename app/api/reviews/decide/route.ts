import { NextRequest, NextResponse } from "next/server";
import { verifyReviewActionToken } from "@/lib/review-tokens";
import { getReviewById, setReviewStatus } from "@/lib/reviews-store";
import { company } from "@/lib/site-config";

export const runtime = "nodejs";

function htmlPage(title: string, message: string) {
  return `<!DOCTYPE html>
  <html lang="en-AU">
    <head><meta charset="utf-8" /><title>${title} — ${company.brandName}</title></head>
    <body style="font-family: -apple-system, sans-serif; background:#0E1116; color:#fff; display:flex; align-items:center; justify-content:center; height:100vh; margin:0;">
      <div style="text-align:center; max-width:420px; padding:32px;">
        <h1 style="color:#D6A62B; font-size:1.4rem;">${title}</h1>
        <p style="color:rgba(255,255,255,0.7);">${message}</p>
      </div>
    </body>
  </html>`;
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") || "";
  const verified = verifyReviewActionToken(token);

  if (!verified) {
    return new NextResponse(
      htmlPage("Link expired or invalid", "This approval link is no longer valid. Review links expire after 14 days."),
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  const review = await getReviewById(verified.reviewId);
  if (!review) {
    return new NextResponse(htmlPage("Review not found", "This review may have already been decided."), {
      status: 404,
      headers: { "Content-Type": "text/html" },
    });
  }

  if (review.status !== "pending") {
    return new NextResponse(htmlPage("Already decided", `This review was already marked as ${review.status}.`), {
      headers: { "Content-Type": "text/html" },
    });
  }

  const status = verified.action === "approve" ? "approved" : "rejected";
  await setReviewStatus(review.id, status);

  return new NextResponse(
    htmlPage(
      status === "approved" ? "Review approved" : "Review rejected",
      status === "approved" ? `${review.name}'s review is now live on the website.` : `${review.name}'s review will not be published.`
    ),
    { headers: { "Content-Type": "text/html" } }
  );
}
