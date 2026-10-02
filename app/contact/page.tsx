import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { company, serviceAreas, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact KC Group of Companies Pty Ltd cleaning and removals across NSW and South Australia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch with KC Group" description="Call, WhatsApp, email, or send through a quote request whichever is easiest for you." />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <a href={company.phoneHref} className="rounded-2xl border border-ink/10 bg-white p-8 flex flex-col gap-4 hover:border-gold/50 transition-colors">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink mb-1">Call Us</h2>
                <p className="text-sm text-ink/60">{company.phone}</p>
              </div>
            </a>

            {whatsappHref ? (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-ink/10 bg-white p-8 flex flex-col gap-4 hover:border-gold/50 transition-colors">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink mb-1">WhatsApp</h2>
                  <p className="text-sm text-ink/60">Message us directly</p>
                </div>
              </a>
            ) : null}

            <a href={`mailto:${company.email}`} className="rounded-2xl border border-ink/10 bg-white p-8 flex flex-col gap-4 hover:border-gold/50 transition-colors">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink mb-1">Email Us</h2>
                <p className="text-sm text-ink/60 break-all">{company.email}</p>
              </div>
            </a>

            <div className="rounded-2xl border border-ink/10 bg-white p-8 flex flex-col gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink mb-1">Service Areas</h2>
                <p className="text-sm text-ink/60">{serviceAreas.map((a) => a.name).join(" & ")}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-ink text-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-xl font-semibold mb-1">Prefer to send details straight through?</h2>
              <p className="text-white/65 text-sm">Use our quote form and we&apos;ll get back to you with a tailored quote.</p>
            </div>
            <Button href="/quote" variant="gold">Request a Quote</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
