import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import CtaBanner from "@/components/ui/cta-banner";
import ServiceTile from "@/components/sections/service-tile";
import { galleryPhotos } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at KC Group's cleaning and removal work across NSW and South Australia.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our work"
        description="A look at our team at work. Tap any service to find out what is included."
      />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {galleryPhotos.map((photo) => (
              <ServiceTile key={photo.src} photo={photo} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Want results like these for your property?"
        description="Tell us what you need and we will come back with a tailored, obligation-free quote."
        ctaLabel="Get My Free Quote"
        ctaHref="/quote"
      />
    </>
  );
}