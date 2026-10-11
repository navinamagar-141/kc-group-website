import Image from "next/image";
import { galleryPhotos } from "@/lib/gallery";

export default function WorkGalleryTeaser() {
  const featured = galleryPhotos.slice(0, 8);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {featured.map((photo) => (
        <div
          key={photo.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 transition-colors duration-300 hover:border-gold/70"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
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
  );
}