import { caseStudies } from "@/lib/site-config";

export default function CaseStudies() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {caseStudies.map((study) => (
        <div key={study.title + study.category} className="rounded-2xl border border-dashed border-ink/15 bg-white p-6 flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">{study.category}</span>
          <h3 className="font-display text-lg font-semibold text-ink">{study.title}</h3>
          <p className="text-sm text-ink/55 leading-relaxed">{study.summary}</p>
        </div>
      ))}
    </div>
  );
}
