import Link from "next/link";
import { ReactNode } from "react";

export default function ServiceCard({
  title,
  description,
  href,
  cta,
  icon,
  tone = "light",
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon?: ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <Link
      href={href}
      className={`lift group flex flex-col justify-between gap-8 rounded-2xl border p-8 h-full ${
        isDark
          ? "border-white/12 bg-charcoal hover:border-gold/60"
          : "border-ink/10 bg-white hover:border-gold/60 hover:shadow-[0_18px_40px_-24px_rgba(14,17,22,0.35)]"
      }`}
    >
      <div className="flex flex-col gap-4">
        {icon ? (
          <span className={`flex h-11 w-11 items-center justify-center rounded-full ${isDark ? "bg-gold/15 text-gold" : "bg-gold/12 text-gold"}`}>
            {icon}
          </span>
        ) : null}
        <h3 className={`font-display text-2xl font-semibold ${isDark ? "text-white" : "text-ink"}`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${isDark ? "text-white/65" : "text-ink/65"}`}>{description}</p>
      </div>
      <span className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide ${isDark ? "text-gold" : "text-ink"} group-hover:gap-3 transition-all`}>
        {cta}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
