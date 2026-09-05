// KC GROUP — REVIEWS DATA STORE
//
// This is a thin storage interface so the rest of the app (API routes, pages)
// never talks to the underlying database directly. Right now it's implemented
// with a JSON file on local disk, which is fine for local development and for
// previewing the review/approval flow — but it will NOT reliably persist on
// Vercel or most serverless hosts, because their filesystem is ephemeral and
// not shared across function invocations or deployments.
//
// Before launching the reviews feature for real, swap the implementation
// below for a real database (Upstash Redis, Vercel Postgres, Supabase, etc.)
// — every call site in the app only imports the functions at the bottom of
// this file, so the swap is contained to this one file.

import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type ReviewStatus = "pending" | "approved" | "rejected";

export type Review = {
  id: string;
  name: string;
  rating: number; // 1-5
  serviceType: string; // Cleaning / Removals / Commercial / Other
  message: string;
  status: ReviewStatus;
  submittedAt: string;
  decidedAt?: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "reviews.json");

async function readAll(): Promise<Review[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Review[];
  } catch {
    return [];
  }
}

async function writeAll(reviews: Review[]) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2), "utf-8");
}

export async function createReview(input: {
  name: string;
  rating: number;
  serviceType: string;
  message: string;
}): Promise<Review> {
  const reviews = await readAll();
  const review: Review = {
    id: randomUUID(),
    name: input.name,
    rating: input.rating,
    serviceType: input.serviceType,
    message: input.message,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  reviews.push(review);
  await writeAll(reviews);
  return review;
}

export async function getApprovedReviews(): Promise<Review[]> {
  const reviews = await readAll();
  return reviews
    .filter((r) => r.status === "approved")
    .sort((a, b) => (b.decidedAt || "").localeCompare(a.decidedAt || ""));
}

export async function getReviewById(id: string): Promise<Review | undefined> {
  const reviews = await readAll();
  return reviews.find((r) => r.id === id);
}

export async function setReviewStatus(id: string, status: "approved" | "rejected"): Promise<Review | null> {
  const reviews = await readAll();
  const index = reviews.findIndex((r) => r.id === id);
  if (index === -1) return null;
  reviews[index] = { ...reviews[index], status, decidedAt: new Date().toISOString() };
  await writeAll(reviews);
  return reviews[index];
}
