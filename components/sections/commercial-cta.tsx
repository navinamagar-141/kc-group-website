import Link from "next/link";
import Container from "@/components/ui/container";

export default function CommercialCta() {
  return (
    <section className="relative overflow-hidden bg-gold text-ink">
      <span
        className="pointer-events-none absolute -left-16 -bottom-24 select-none font-display text-[240px] font-extrabold leading-[0.8] text-ink/10"
        aria-hidden="true"
      >
        KC
      </span>
      <Container className="relative flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center sm:py-20">
        <div className="flex max-w-xl flex-col gap-2">
          <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-ink/70">Commercial Cleaning</span>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Request a Free Site Inspection &amp; Tailored Proposal
          </h2>
          <p className="text-base leading-relaxed text-ink/75">
            For offices, gyms, retail, strata and facilities, a scoped proposal built around your site.
          </p>
        </div>
        <Link
          href="/commercial-cleaning"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-ink bg-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:border-white hover:bg-white hover:text-ink"
        >
          Request a Site Inspection
        </Link>
      </Container>
    </section>
  );
}