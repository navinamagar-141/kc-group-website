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
      <span
        className="absolute -right-10 -top-16 font-display font-extrabold text-gold/5 text-[220px] leading-[0.8] pointer-events-none select-none"
        aria-hidden="true"
      >
        KC
      </span>
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-3xl flex flex-col gap-5">
          <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.08]">{title}</h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">{description}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}
