import { howItWorks } from "@/lib/site-config";

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {howItWorks.map((step, i) => (
        <div
          key={step.step}
          className="lift group relative flex h-full flex-col gap-2 rounded-2xl border border-ink/10 bg-paper p-6 hover:border-gold/60 hover:shadow-[0_18px_40px_-24px_rgba(14,17,22,0.35)]"
        >
          <span className="font-display text-4xl font-bold text-gold/30 transition-colors duration-300 group-hover:text-gold">
            {step.step}
          </span>
          <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
          <p className="text-sm leading-relaxed text-ink/60">{step.description}</p>
          {i < howItWorks.length - 1 ? (
            <span
              className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-ink/25 lg:block"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}