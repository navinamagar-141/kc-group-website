import { caseStudies } from "@/lib/site-config";

export default function CaseStudies() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {caseStudies.map((study) => (
        <div
          key={study.title + study.category}
          className="lift group flex h-full flex-col gap-3 rounded-2xl border border-dashed border-ink/15 bg-paper p-6 hover:border-solid hover:border-gold/60 hover:shadow-[0_18px_40px_-24px_rgba(14,17,22,0.35)]"
        >
          <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold">{study.category}</span>
          <h3 className="font-display text-lg font-semibold text-ink">{study.title}</h3>
          <p className="text-sm leading-relaxed text-ink/55">{study.summary}</p>
        </div>
      ))}
    </div>
  );
}