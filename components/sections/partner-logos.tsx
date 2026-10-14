import Marquee from "@/components/ui/marquee";
import { partnerLogos } from "@/lib/site-config";

export default function PartnerLogos() {
  if (partnerLogos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink/15 bg-white px-8 py-10 text-center">
        <p className="text-sm text-ink/45">
          Partner and client logos will be added here once businesses have confirmed permission to be featured.
        </p>
      </div>
    );
  }

  return (
    <Marquee duration={30}>
      {partnerLogos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={logo.name}
          src={logo.logoUrl}
          alt={logo.name}
          className="h-10 w-auto shrink-0 object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
        />
      ))}
    </Marquee>
  );
}