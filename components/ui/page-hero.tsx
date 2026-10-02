import Image from "next/image";
import Container from "@/components/ui/container";
import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-ink text-white seam overflow-hidden">
      <div
        className="absolute right-12 top-1/2 -translate-y-1/2 w-[360px] h-[360px] opacity-15 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/images/logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-3xl flex flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.08]">{title}</h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">{description}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}