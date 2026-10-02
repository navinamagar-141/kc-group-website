import Image from "next/image";
import { galleryPhotos } from "@/lib/gallery";

export default function WorkGalleryTeaser() {
  const featured = galleryPhotos.slice(0, 8);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {featured.map((photo) => (
        <div key={photo.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}