"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/button";
import { StarInput } from "@/components/ui/stars";

const serviceTypeOptions = ["Cleaning", "Removals", "Commercial", "Other"];

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (rating === 0) {
      setErrorMessage("Please select a star rating.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    const payload = {
      name: formData.get("name"),
      serviceType: formData.get("serviceType"),
      message: formData.get("message"),
      rating,
      website: formData.get("website"),
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-white p-8 text-center flex flex-col items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">Thanks for your review</h3>
        <p className="text-ink/60 text-sm max-w-sm">
          It&apos;s been sent to KC Group for a quick check and will appear on the site once approved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 flex flex-col gap-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <span className="block text-sm font-medium text-ink/70 mb-2">Your rating</span>
        <StarInput name="rating" value={rating} onChange={setRating} />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink/70 mb-2">Your name</label>
        <input id="name" name="name" required maxLength={100} className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none" />
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-ink/70 mb-2">Service type</label>
        <select id="serviceType" name="serviceType" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none" defaultValue="Cleaning">
          {serviceTypeOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/70 mb-2">Your review</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={1000}
          rows={4}
          className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
          placeholder="Tell other customers about your experience."
        />
      </div>

      {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

      <p className="text-xs text-ink/45">Reviews are checked by KC Group before they appear on the site.</p>

      <Button type="submit" variant="gold">{status === "submitting" ? "Sending…" : "Submit Review"}</Button>
    </form>
  );
}
