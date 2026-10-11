import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import CtaBanner from "@/components/ui/cta-banner";
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
        description="A look at our team at work across homes, offices, gyms and facilities."
      />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-ink/10 transition-colors duration-300 hover:border-gold/70"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(14,17,22,0.85), transparent)" }}
                >
                  <span className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-gold">{photo.category}</span>
                </div>
              </div>
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