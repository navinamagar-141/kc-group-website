import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import ServiceCard from "@/components/ui/service-card";
import FadeUp from "@/components/ui/fade-up";
import CtaBanner from "@/components/ui/cta-banner";
import FaqAccordion from "@/components/ui/faq-accordion";
import { StarDisplay } from "@/components/ui/stars";
import TrustBadges from "@/components/sections/trust-badges";
import GoogleReviewBadge from "@/components/sections/google-review-badge";
import IndustryCards from "@/components/sections/industry-cards";
import HowItWorks from "@/components/sections/how-it-works";
import PartnerLogos from "@/components/sections/partner-logos";
import CaseStudies from "@/components/sections/case-studies";
import BeforeAfterTeaser from "@/components/sections/before-after-teaser";
import CommercialCta from "@/components/sections/commercial-cta";
import { company, serviceAreas, whyChooseUs, generalFaqs, whatsappHref } from "@/lib/site-config";
import { servicePages } from "@/lib/service-pages";
import { getApprovedReviews } from "@/lib/reviews-store";
import Image from "next/image";

export const dynamic = "force-dynamic";

const mostPopular = ["commercial-cleaning", "builders-cleaning", "end-of-lease-cleaning", "home-removals"]
  .map((slug) => servicePages.find((p) => p.slug === slug)!)
  .filter(Boolean);

export default async function Home() {
  const reviews = (await getApprovedReviews()).slice(0, 6);

  return (
    <>
      {/* 1. HERO — service + location + Call / WhatsApp / Free Quote */}
      <section className="relative bg-ink text-white overflow-hidden">
     <div 
  className="absolute -right-10 top-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-10 pointer-events-none"
  aria-hidden="true"
>
  <Image
    src="/images/logo.png"
    alt=""
    fill
    className="object-contain"
    priority
  />
</div>
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="font-mono-label text-xs uppercase tracking-[0.22em] text-gold">
              NSW &amp; South Australia
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Professional Cleaning &amp; Removal Services
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
              Residential &middot; Commercial &middot; Builders Cleaning &middot; End of Lease &middot; Office &amp; Facility Cleaning &middot; Home &amp; Office Removals
            </p>
            <p className="font-mono-label text-sm uppercase tracking-[0.14em] text-white/50">
              Fast Quotes &middot; Reliable Teams &middot; Flexible Scheduling
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/quote" variant="gold">Get a Free Quote</Button>
              <Button href={company.phoneHref} variant="outline-light">Call Now</Button>
              {whatsappHref ? (
                <Button href={whatsappHref} variant="outline-light">WhatsApp Us</Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Genuine Google rating + trust badges */}
      <section className="bg-charcoal">
        <Container className="py-12 flex flex-col gap-8">
          <GoogleReviewBadge />
          <TrustBadges />
        </Container>
      </section>

      {/* 3. Cleaning / Removals category cards */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <FadeUp>
            <SectionHeading
              eyebrow="Where to start"
              title="Cleaning or removals, choose your service"
              description="Two capabilities, one point of contact. Tell us what you need and we'll take it from there."
            />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp>
              <ServiceCard
                title="Cleaning Services"
                description="Professional cleaning for homes, offices and project-based work, regular visits or a single deep clean."
                href="/cleaning"
                cta="Explore Cleaning"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 3v4M7 3h6l2 4H5l2-4Zm-2 4h12l1.4 12.2a1 1 0 0 1-1 1.1H4.6a1 1 0 0 1-1-1.1L5 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                }
              />
            </FadeUp>
            <FadeUp delay={100}>
              <ServiceCard
                title="Removal Services"
                description="Flexible removal and relocation support for households and businesses, scoped around the individual job."
                href="/removals"
                cta="Explore Removals"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 16V7a1 1 0 0 1 1-1h8v10M3 16h13m0 0h5m-5 0V9h3l2 3v4h-2M6 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm12 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 4. Most popular services */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <FadeUp>
            <SectionHeading
              eyebrow="Most requested"
              title="Our Most Requested Services"
              description="Direct links to the exact service you're after."
            />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mostPopular.map((service, i) => (
              <FadeUp key={service.slug} delay={i * 60}>
                <a href={`/${service.slug}`} className="lift block rounded-xl border border-ink/10 bg-paper p-6 h-full hover:border-gold/50">
                  <h3 className="font-display text-base font-semibold text-ink mb-2">{service.navLabel}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-3">{service.intro}</p>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold">View Service →</span>
                </a>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Before & After / Recent Work */}
      <section className="bg-ink text-white seam">
        <Container className="py-20 sm:py-24">
          <FadeUp>
            <SectionHeading eyebrow="Recent work" title="Our Team at Work" tone="light" description="A look at the KC Group team across homes, offices, gyms and facilities." />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-10">
              <BeforeAfterTeaser />
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div className="mt-8">
              <Button href="/gallery" variant="outline-light">View Full Gallery</Button>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 6. Industries We Service */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <FadeUp>
            <SectionHeading eyebrow="Who we work with" title="Industries We Service" description="Visual categories linking to the right service page for your site." />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-10">
              <IndustryCards />
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 7. Why Choose KC Group */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <FadeUp>
            <SectionHeading eyebrow="Why kc group" title="Why Choose KC Group?" description="A straightforward way of working, built to hold up across a one-off job or an ongoing contract." />
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

          <FadeUp delay={200}>
            <div className="mt-16">
              <h3 className="font-display text-xl font-semibold text-ink mb-6">How It Works</h3>
              <HowItWorks />
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 8. Approved client logos */}
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

      {/* 9. Commercial Cleaning — Free Site Inspection CTA */}
      <CommercialCta />

      {/* Case studies */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <FadeUp>
            <SectionHeading eyebrow="Case studies" title="Project Case Studies" description="Short write-ups of real jobs added as they're completed and approved for publishing." />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-10">
              <CaseStudies />
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 10. Customer reviews */}
      {reviews.length > 0 ? (
        <section className="bg-paper">
          <Container className="py-20 sm:py-24">
            <FadeUp>
              <SectionHeading eyebrow="What clients say" title="Reviews from KC Group Customers" description="Every review is checked by KC Group before it goes live." />
            </FadeUp>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <FadeUp key={review.id} delay={i * 80}>
                  <div className="rounded-2xl border border-ink/10 bg-white p-6 h-full flex flex-col gap-3">
                    <StarDisplay rating={review.rating} />
                    <p className="text-ink/75 text-sm leading-relaxed">{review.message}</p>
                    <p className="font-display text-sm font-semibold text-ink mt-auto">{review.name}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={200}>
              <div className="mt-10">
                <Button href="/reviews" variant="outline-dark">Read All Reviews</Button>
              </div>
            </FadeUp>
          </Container>
        </section>
      ) : null}

      {/* 11. Areas We Service */}
      <section id="service-areas" className="bg-white">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <FadeUp>
              <SectionHeading eyebrow="Service area" title="Areas We Service" description="KC Group operates across New South Wales and South Australia." />
              <div className="mt-8">
                <Button href="/sydney" variant="outline-dark">Browse Service Areas</Button>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceAreas.map((area) => (
                  <div key={area.abbr} className="rounded-2xl border border-ink/10 bg-paper p-8 flex flex-col gap-2">
                    <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-gold">{area.abbr}</span>
                    <span className="font-display text-2xl font-semibold text-ink">{area.name}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 13. FAQ */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <FadeUp>
            <SectionHeading eyebrow="Faq" title="Common Questions" />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-10 max-w-3xl">
              <FaqAccordion items={generalFaqs} />
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 14. Final large Free Quote CTA */}
      <CtaBanner
        title="Need a cleaner or a removal team?"
        description="Tell us what you need and we'll come back with a tailored, obligation-free quote."
        ctaLabel="Get My Free Quote"
        ctaHref="/quote"
      />
    </>
  );
}
