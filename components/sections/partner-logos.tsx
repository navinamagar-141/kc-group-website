import { partnerLogos } from "@/lib/site-config";

export default function PartnerLogos() {
  if (partnerLogos.length === 0) {
    // Professional empty state rather than hiding the section outright —
    // it signals the section exists and is ready, without inventing logos.
    // Swap this for the real logo strip below once client permission and
    // assets are confirmed (see partnerLogos in lib/site-config.ts).
    return (
      <div className="rounded-2xl border border-dashed border-ink/15 bg-white px-8 py-10 text-center">
        <p className="text-sm text-ink/45">
          Partner and client logos will be added here once businesses have confirmed permission to be featured.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-80">
      {partnerLogos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={logo.name} src={logo.logoUrl} alt={logo.name} className="h-10 w-auto object-contain" />
      ))}
    </div>
  );
}
