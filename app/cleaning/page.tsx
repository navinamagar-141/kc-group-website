import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import CategoryBlock from "@/components/ui/category-block";
import CtaBanner from "@/components/ui/cta-banner";
import FaqAccordion from "@/components/ui/faq-accordion";
import SectionHeading from "@/components/ui/section-heading";
import { cleaningCategories, generalFaqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Residential, commercial, project and specialised cleaning across NSW and South Australia. Request a tailored, obligation-free quote.",
};

export default function CleaningPage() {
  return (
    <>
      <PageHero
        eyebrow="Cleaning Services"
        title="Cleaning built around how the space is actually used"
        description="From a single household clean to an ongoing commercial program, our cleaning services are organised into clear categories so it's easy to find what you need."
      >
        <div className="pt-2">
          <Button href="/quote" variant="gold">Request a Cleaning Quote</Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          {cleaningCategories.map((category, i) => (
            <CategoryBlock key={category.slug} category={category} index={i} />
          ))}
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Faq" title="Common Cleaning Questions" />
          <div className="mt-8 max-w-2xl">
            <FaqAccordion items={generalFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to book a clean?"
        description="Tell us about the property or site and we'll come back with a tailored quote."
        ctaLabel="Get My Free Quote"
        ctaHref="/quote"
      />
    </>
  );
}
