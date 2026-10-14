"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { company, serviceAreas, whatsappHref } from "@/lib/site-config";

const needs = ["Cleaning", "Removals", "Car Detailing", "Commercial"];

const fieldClass =
  "w-full border-b border-white/25 bg-transparent py-3 text-sm text-white placeholder:text-white/45 focus:border-gold focus:outline-none";

export default function QuickEnquiry() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = new FormData(e.currentTarget);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get("website")) {
      router.push("/thank-you");
      return;
    }

    const first = String(data.get("firstName") || "").trim();
    const last = String(data.get("lastName") || "").trim();

    const body = new FormData();
    body.set("fullName", `${first} ${last}`.trim());
    body.set("email", String(data.get("email") || "").trim());
    body.set("phone", String(data.get("phone") || "").trim());
    body.set("serviceType", String(data.get("serviceType") || ""));
    body.set("jobDetails", String(data.get("message") || "").trim());

    try {
      const res = await fetch("/api/quote", { method: "POST", body });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error || "Something went wrong. Please try again.");
      }
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="enquiry" className="bg-ink text-white seam">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-gold">Get in touch</span>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Tell us about your job</h2>
            <p className="max-w-md leading-relaxed text-white/70">
              Tell us what you need and the KC Group team will come back to you with a tailored, obligation-free quote.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li>
                <span className="font-mono-label mr-3 text-xs uppercase tracking-[0.14em] text-gold">Call</span>
                <a href={company.phoneHref} className="hover:text-gold">{company.phone}</a>
              </li>
              {whatsappHref ? (
                <li>
                  <span className="font-mono-label mr-3 text-xs uppercase tracking-[0.14em] text-gold">WhatsApp</span>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Message us</a>
                </li>
              ) : null}
              <li>
                <span className="font-mono-label mr-3 text-xs uppercase tracking-[0.14em] text-gold">Email</span>
                <a href={`mailto:${company.email}`} className="break-all hover:text-gold">{company.email}</a>
              </li>
              <li>
                <span className="font-mono-label mr-3 text-xs uppercase tracking-[0.14em] text-gold">Areas</span>
                {serviceAreas.map((a) => a.name).join(" & ")}
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-charcoal p-6 sm:p-8">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <input name="firstName" required placeholder="First name *" aria-label="First name" autoComplete="given-name" className={fieldClass} />
              <input name="lastName" required placeholder="Last name *" aria-label="Last name" autoComplete="family-name" className={fieldClass} />
              <input name="email" type="email" required placeholder="Email *" aria-label="Email" autoComplete="email" className={fieldClass} />
              <input name="phone" type="tel" required placeholder="Phone *" aria-label="Phone" autoComplete="tel" className={fieldClass} />
              <select
                name="serviceType"
                required
                defaultValue=""
                aria-label="What do you need?"
                className={`${fieldClass} sm:col-span-2 [color-scheme:dark]`}
              >
                <option value="" disabled>What do you need? *</option>
                {needs.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Message *"
                aria-label="Message"
                className={`${fieldClass} sm:col-span-2`}
              />
            </div>
            {error ? <p role="alert" className="mt-4 text-sm text-red-400">{error}</p> : null}
            <Button type="submit" variant="gold" disabled={status === "sending"} className="mt-6 w-full">
              {status === "sending" ? "Sending..." : "Send my enquiry"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}