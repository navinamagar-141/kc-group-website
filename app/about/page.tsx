import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import CtaBanner from "@/components/ui/cta-banner";
import FadeUp from "@/components/ui/fade-up";
import { company, whyChooseUs, serviceAreas } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "KC Group of Companies Pty Ltd, started as a cleaning company in 2018, now established across both cleaning and removals for NSW and South Australia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KC Group"
        title="From a cleaning company to a two-service business"
        description="Established in 2018 as a dedicated cleaning service, KC Group has grown in response to our clients' evolving needs. Today, we deliver a comprehensive range of professional solutions across residential and commercial cleaning, full service removals, and precision car detailing."
      />

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <FadeUp>
              <div className="flex flex-col gap-5 max-w-xl">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">Our story</h2>
                <p className="text-ink/70 leading-relaxed">
                  {company.legalName} began in {company.established} as a cleaning company, working with households and businesses across New South Wales. Over time, the same focus on reliable, presentation focused work led to the addition of a removals service, and today KC Group is established as a two service business covering both cleaning and removals.
                </p>
                <p className="text-ink/70 leading-relaxed">
                  That shared foundation means clients get one point of contact whether the job is a routine office clean or a full business relocation, with the same standard of communication and care applied across both sides of the business.
                </p>
                <p className="text-ink/70 leading-relaxed">
                  Whether you&apos;re a homeowner, a tenant, a landlord, a builder or a business owner, the process starts the same way: tell us what you need, and we&apos;ll come back with a tailored, obligation-free quote.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="rounded-2xl border border-ink/10 bg-white p-8 flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold mb-1">Started As</p>
                    <p className="font-display text-xl font-semibold text-ink">Cleaning ({company.established})</p>
                  </div>
                  <div>
                    <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold mb-1">Today</p>
                    <p className="font-display text-xl font-semibold text-ink">Cleaning &amp; Removals</p>
                  </div>
                </div>
                <div className="h-px bg-ink/10" />
                <div>
                  <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold mb-2">Service Areas</p>
                  <ul className="flex flex-col gap-1">
                    {serviceAreas.map((area) => (
                      <li key={area.abbr} className="text-ink/75 text-sm">{area.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <FadeUp>
            <SectionHeading eyebrow="Our standards" title="Why customers choose KC Group" description="The same standards apply whether the job is residential or commercial." />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {whyChooseUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 60}>
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Get in touch with KC Group"
        description="Whether it's cleaning, removals, or a bit of both, we're happy to talk through what you need."
        ctaLabel="Get My Free Quote"
        ctaHref="/quote"
      />
    </>
  );
}
