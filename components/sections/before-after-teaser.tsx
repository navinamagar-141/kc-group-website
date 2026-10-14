import Link from "next/link";
import ServiceTile from "@/components/sections/service-tile";
import { galleryPhotos } from "@/lib/gallery";
import { company } from "@/lib/site-config";

export default function WorkGalleryTeaser() {
  const featured = galleryPhotos.slice(0, 7);

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {featured.map((photo) => (
        <ServiceTile key={photo.src} photo={photo} />
      ))}
      <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-xl border border-gold/40 bg-charcoal p-4 text-center">
        <h3 className="font-display text-lg font-bold text-white sm:text-xl">Need a quote?</h3>
        <Link
          href="/quote"
          className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-white"
        >
          Get a free quote
        </Link>
        <a href={company.phoneHref} className="text-sm text-white/70 hover:text-gold">
          {company.phone}
        </a>
      </div>
    </div>
  );
}