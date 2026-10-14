import Image from "next/image";
import Link from "next/link";
import type { GalleryPhoto } from "@/lib/gallery";

export default function ServiceTile({ photo }: { photo: GalleryPhoto }) {
  return (
    <Link
      href={photo.href}
      className="lift group relative block aspect-square overflow-hidden rounded-xl border border-ink/10 hover:border-gold/70 hover:shadow-[0_18px_40px_-24px_rgba(14,17,22,0.55)]"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        style={{ objectPosition: photo.position ?? "center" }}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(14,17,22,0.9) 0%, rgba(14,17,22,0.4) 45%, rgba(14,17,22,0) 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-4 text-center">
        <h3 className="font-display text-base font-bold leading-tight text-white sm:text-lg">{photo.title}</h3>
        <span className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-colors group-hover:bg-white">
          Find out more
        </span>
      </div>
    </Link>
  );
}