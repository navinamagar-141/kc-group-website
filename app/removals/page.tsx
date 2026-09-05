import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import CategoryBlock from "@/components/ui/category-block";
import CtaBanner from "@/components/ui/cta-banner";
import FaqAccordion from "@/components/ui/faq-accordion";
import SectionHeading from "@/components/ui/section-heading";
import { removalCategories, generalFaqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Removal Services",
  description:
    "Residential and business removal support across NSW and South Australia, scoped and quoted around the individual move.",
};

export default function RemovalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Removal Services"
        title="Flexible removal support, scoped around your move"
        description="Every move is different, so requirements are discussed and quoted individually rather than fixed in advance. Get in touch and we'll talk through what's involved."
      >
        <div className="pt-2">
          <Button href="/quote" variant="gold">Request a Removal Quote</Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          {removalCategories.map((category, i) => (
            <CategoryBlock key={category.slug} category={category} index={i} />
          ))}
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Faq" title="Common Removal Questions" />
          <div className="mt-8 max-w-2xl">
            <FaqAccordion items={generalFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Planning a move?"
        description="Share a few details about the move and we'll come back with a tailored quote."
        ctaLabel="Get My Free Quote"
        ctaHref="/quote"
      />
    </>
  );
}
