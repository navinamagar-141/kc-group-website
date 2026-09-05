import { industries } from "@/lib/site-config";

export default function IndustryCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {industries.map((industry) => (
        <div
          key={industry}
          className="rounded-xl border border-ink/10 bg-white px-4 py-6 text-center flex flex-col items-center gap-2 lift hover:border-gold/50"
        >
          <span className="text-gold">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="9" width="16" height="11" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 9V5a3 3 0 0 1 6 0v4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="font-display text-sm font-semibold text-ink leading-snug">{industry}</span>
        </div>
      ))}
    </div>
  );
}
