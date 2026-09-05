import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import CtaBanner from "@/components/ui/cta-banner";
import FaqAccordion from "@/components/ui/faq-accordion";
import SectionHeading from "@/components/ui/section-heading";
import { getServicePage, servicePages, ServicePageContent } from "@/lib/service-pages";
import { getLocationPage, locationPages } from "@/lib/location-pages";
import { company, generalFaqs } from "@/lib/site-config";

export function generateStaticParams() {
  return [
    ...servicePages.map((p) => ({ slug: p.slug })),
    ...locationPages.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (service) {
    return { title: service.metaTitle, description: service.metaDescription };
  }
  const location = getLocationPage(slug);
  if (location) {
    return { title: location.metaTitle, description: location.metaDescription };
  }
  return {};
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  const location = getLocationPage(slug);

  if (service) return <ServicePageView service={service} />;
  if (location) return <LocationPageView location={location} />;
  notFound();
}

function ServicePageView({ service }: { service: ServicePageContent }) {
  const quoteLabel = service.category === "cleaning" ? "Get a Cleaning Quote" : "Get a Removal Quote";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    areaServed: ["New South Wales", "South Australia"],
    provider: { "@type": "LocalBusiness", name: company.legalName },
    description: service.metaDescription,
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <PageHero
        eyebrow={service.category === "cleaning" ? "Cleaning Services" : "Removal Services"}
        title={service.h1}
        description={service.intro}
      >
        <div className="pt-2">
          <Button href="/quote" variant="gold">{quoteLabel}</Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">What&apos;s Included</h2>
              <ul className="flex flex-col gap-3">
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="mt-1 text-gold shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">Ideal For</h2>
              <div className="flex flex-wrap gap-3">
                {service.idealFor.map((type) => (
                  <span key={type} className="rounded-full border border-ink/12 bg-white px-4 py-2 text-sm text-ink/75">{type}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Faq" title="Frequently Asked Questions" />
          <div className="mt-8 max-w-2xl">
            <FaqAccordion items={service.faqs.length > 0 ? service.faqs : generalFaqs.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Ready to book ${service.h1.toLowerCase()}?`}
        description="Tell us about the property or site and we'll come back with a tailored quote."
        ctaLabel={quoteLabel}
        ctaHref="/quote"
      />
    </>
  );
}

function LocationPageView({ location }: { location: ReturnType<typeof getLocationPage> & object }) {
  return (
    <>
      <PageHero eyebrow={`Serving ${location.state}`} title={location.h1} description={location.intro}>
        <div className="pt-2">
          <Button href="/quote" variant="gold">Get a Free Quote</Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Services available" title="What We Offer in This Area" description="Cleaning and removal services scoped and quoted individually." />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/cleaning" className="lift rounded-xl border border-ink/10 bg-white p-6 hover:border-gold/50">
              <h3 className="font-display text-lg font-semibold text-ink mb-1">Cleaning Services</h3>
              <p className="text-sm text-ink/60">Residential, commercial and project cleaning.</p>
            </Link>
            <Link href="/removals" className="lift rounded-xl border border-ink/10 bg-white p-6 hover:border-gold/50">
              <h3 className="font-display text-lg font-semibold text-ink mb-1">Removal Services</h3>
              <p className="text-sm text-ink/60">Home and business relocations.</p>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Faq" title="Frequently Asked Questions" />
          <div className="mt-8 max-w-2xl">
            <FaqAccordion items={generalFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Get a quote for ${location.name}`}
        description="Tell us what you need and we'll confirm coverage and pricing for your area."
        ctaLabel="Get My Free Quote"
        ctaHref="/quote"
      />
    </>
  );
}
