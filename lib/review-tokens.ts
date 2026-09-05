// Signed, expiring tokens for the "Approve" / "Reject" links sent to the
// owner's email. This avoids anyone being able to approve a review just by
// guessing or tweaking a review ID in a URL.

import crypto from "crypto";

const SECRET = process.env.REVIEW_APPROVAL_SECRET || "dev-only-insecure-secret-change-me";
const EXPIRY_MS = 1000 * 60 * 60 * 24 * 14; // 14 days

function sign(payload: string) {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function createReviewActionToken(reviewId: string, action: "approve" | "reject") {
  const expires = Date.now() + EXPIRY_MS;
  const payload = `${reviewId}.${action}.${expires}`;
  const signature = sign(payload);
  return `${reviewId}.${action}.${expires}.${signature}`;
}

export function verifyReviewActionToken(
  token: string
): { reviewId: string; action: "approve" | "reject" } | null {
  const parts = token.split(".");
  if (parts.length !== 4) return null;
  const [reviewId, action, expiresStr, signature] = parts;
  if (action !== "approve" && action !== "reject") return null;

  const payload = `${reviewId}.${action}.${expiresStr}`;
  const expected = sign(payload);

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  if (Date.now() > Number(expiresStr)) return null;

  return { reviewId, action };
}
