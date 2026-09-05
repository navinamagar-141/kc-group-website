import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at KC Group's cleaning and removal work across NSW and South Australia.",
};

const categories = ["Cleaning", "Commercial", "Removals", "Team & Vehicles", "Projects", "Before & After"];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Our work" description="Genuine project photography will be added here once supplied. The layout below is ready to receive it." />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category} className="aspect-[4/3] rounded-xl border border-dashed border-ink/20 bg-white flex flex-col items-center justify-center gap-2 text-center p-4">
                <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold">{category}</span>
                <span className="text-sm text-ink/40">Photos coming soon</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
