import { googleReviews } from "@/lib/site-config";

export default function GoogleReviewBadge() {
  // Deliberately hidden until a genuine rating is confirmed — see the
  // comment on `googleReviews` in lib/site-config.ts. Never fabricate a
  // number here as a "placeholder"; showing nothing is safer than showing a
  // rating that isn't real.
  if (googleReviews.rating === null || googleReviews.reviewCount === null) {
    return null;
  }

  const fullStars = Math.round(googleReviews.rating);

  return (
    <a
      href={googleReviews.profileUrl || undefined}
      target={googleReviews.profileUrl ? "_blank" : undefined}
      rel={googleReviews.profileUrl ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3"
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < fullStars ? "#D6A62B" : "none"} stroke="#D6A62B" strokeWidth="1.4">
            <path d="M12 3.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.2 6-.8L12 3.5Z" strokeLinejoin="round" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-white/85">
        <strong className="text-white">{googleReviews.rating}</strong> Google Reviews ({googleReviews.reviewCount})
      </span>
    </a>
  );
}
