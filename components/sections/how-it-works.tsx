import { howItWorks } from "@/lib/site-config";

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {howItWorks.map((step, i) => (
        <div key={step.step} className="relative flex flex-col gap-2">
          <span className="font-display text-4xl font-bold text-gold/30">{step.step}</span>
          <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
          <p className="text-sm text-ink/60 leading-relaxed">{step.description}</p>
          {i < howItWorks.length - 1 ? (
            <span className="hidden lg:block absolute top-5 -right-3 text-ink/20" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
