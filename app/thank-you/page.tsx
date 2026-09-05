"use client";

import { useEffect } from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Pushes a conversion event for GA4/GTM if either is configured (see
    // NEXT_PUBLIC_GA_MEASUREMENT_ID / NEXT_PUBLIC_GTM_ID in .env.example).
    // Harmless no-op if neither is set — dataLayer simply won't exist yet.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "quote_form_submission" });
  }, []);

  return (
    <section className="bg-ink text-white min-h-[70vh] flex items-center">
      <Container className="py-24 text-center flex flex-col items-center gap-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold">Thanks — your request is in</h1>
        <p className="text-white/65 max-w-md">
          KC Group has received your quote request and will be in touch shortly to confirm the details and provide a tailored quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button href="/" variant="gold">Back to Home</Button>
          <Button href="/gallery" variant="outline-light">View Our Work</Button>
        </div>
      </Container>
    </section>
  );
}
