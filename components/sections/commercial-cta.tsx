import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function CommercialCta() {
  return (
    <section className="relative bg-gold text-ink overflow-hidden">
      <span
        className="absolute -left-16 -bottom-24 font-display font-extrabold text-ink/10 text-[240px] leading-[0.8] pointer-events-none select-none"
        aria-hidden="true"
      >
        KC
      </span>
      <Container className="relative py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="max-w-xl flex flex-col gap-2">
          <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-ink/70">Commercial Cleaning</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Request a Free Site Inspection &amp; Tailored Proposal
          </h2>
          <p className="text-ink/75 text-base leading-relaxed">
            For offices, gyms, retail, strata and facilities — a scoped proposal built around your site.
          </p>
        </div>
        <Button href="/commercial-cleaning" variant="outline-dark" className="border-ink/40 shrink-0">
          Request a Site Inspection
        </Button>
      </Container>
    </section>
  );
}
