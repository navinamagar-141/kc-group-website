import { trustBadges } from "@/lib/site-config";

export default function TrustBadges() {
  if (trustBadges.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {trustBadges.map((badge) => (
        <div key={badge.label} className="flex flex-col items-center text-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-5">
          <span className="text-gold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display text-sm font-semibold text-white">{badge.label}</span>
          {badge.note ? <span className="text-xs text-white/50 leading-snug">{badge.note}</span> : null}
        </div>
      ))}
    </div>
  );
}
