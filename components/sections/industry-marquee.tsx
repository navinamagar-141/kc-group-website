import Marquee from "@/components/ui/marquee";
import { industries } from "@/lib/site-config";

export default function IndustryMarquee() {
  return (
    <section className="seam bg-ink py-6 text-white" aria-label="Industries we service">
      <Marquee>
        {industries.map((industry) => (
          <span
            key={industry}
            className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold uppercase tracking-wide text-white/80"
          >
            {industry}
            <span className="text-gold" aria-hidden="true">&#9670;</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}