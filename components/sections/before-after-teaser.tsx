import Image from "next/image";
import Link from "next/link";
import { galleryPhotos } from "@/lib/gallery";

export default function BeforeAfterTeaser() {
  // Select first 8 photos for clean grid display
  const teaserPhotos = galleryPhotos.slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {teaserPhotos.map((photo) => (
        <div
          key={photo.title}
          className="group relative overflow-hidden rounded-2xl bg-charcoal aspect-[4/3] sm:aspect-square border border-white/10"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: photo.position || "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-5 flex flex-col justify-end">
            <h3 className="font-display text-lg font-bold text-white mb-2">
              {photo.title}
            </h3>
            <div>
              <Link
                href={photo.href}
                className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink transition-transform duration-300 hover:scale-105"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}