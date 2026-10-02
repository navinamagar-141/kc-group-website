import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import CtaBanner from "@/components/ui/cta-banner";
import FadeUp from "@/components/ui/fade-up";
import PartnerLogos from "@/components/sections/partner-logos";
import { industries } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Commercial Services",
  description:
    "Commercial cleaning and commercial removals for Australian businesses across NSW and South Australia, two clear service paths, one point of contact.",
};

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Services"
        title="Solutions designed around the needs of Australian businesses"
        description="Commercial work is split into two clear paths cleaning and removals, so it's easy to find the right service and request the right quote."
      />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp>
              <div id="commercial-cleaning" className="scroll-mt-24 rounded-2xl border border-ink/10 bg-white p-8 sm:p-10 flex flex-col gap-5 h-full">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Path One</span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">Commercial Cleaning</h2>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Professional cleaning solutions for business environments: offices, retail, hospitality, facilities and construction or handover sites.
                </p>
                <ul className="flex flex-col gap-2 text-sm text-ink/70">
                  <li>&bull; Office &amp; workplace cleaning</li>
                  <li>&bull; Retail &amp; hospitality cleaning</li>
                  <li>&bull; Facility &amp; multi-tenant sites</li>
                  <li>&bull; Builders / handover cleaning</li>
                  <li>&bull; Ongoing cleaning programs</li>
                </ul>
                <div className="pt-2">
                  <Button href="/commercial-cleaning" variant="outline-dark">View Commercial Cleaning</Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div id="commercial-removals" className="scroll-mt-24 rounded-2xl border border-ink/10 bg-white p-8 sm:p-10 flex flex-col gap-5 h-full">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Path Two</span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">Commercial Removals</h2>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Practical relocation support for businesses and workplaces, office moves and other commercial relocation requirements.
                </p>
                <ul className="flex flex-col gap-2 text-sm text-ink/70">
                  <li>&bull; Office &amp; business relocations</li>
                  <li>&bull; Relocation planning &amp; support</li>
                  <li>&bull; Furniture &amp; equipment moves</li>
                  <li>&bull; Loading &amp; unloading assistance</li>
                </ul>
                <div className="pt-2">
                  <Button href="/commercial-relocations" variant="outline-dark">View Commercial Removals</Button>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <FadeUp>
            <SectionHeading eyebrow="Who we work with" title="Built for a range of commercial clients" description="Requirements and quoting are tailored to the type of business and the nature of the site." />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((type) => (
                <span key={type} className="rounded-full border border-ink/12 bg-paper px-4 py-2 text-sm text-ink/75">{type}</span>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <FadeUp>
            <SectionHeading eyebrow="Trusted by businesses" title="Our Commercial Partners" />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-8">
              <PartnerLogos />
            </div>
          </FadeUp>
        </Container>
      </section>

      <CtaBanner
        title="Request a Free Site Inspection & Tailored Proposal"
        description="Let us know whether you need commercial cleaning, commercial removals, or both, and we'll come back with a tailored quote."
        ctaLabel="Request a Site Inspection"
        ctaHref="/quote"
      />
    </>
  );
}
