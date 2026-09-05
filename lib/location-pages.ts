// Service-area landing pages. Per the change brief: start with a small
// number of genuinely serviced major areas rather than generating dozens of
// thin, near-duplicate suburb pages. Each of these needs unique copy — no
// specific suburb-level claims (response times, job counts) are made, since
// those aren't confirmed.

export type LocationPageContent = {
  slug: string;
  name: string;
  state: "NSW" | "SA";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
};

export const locationPages: LocationPageContent[] = [
  {
    slug: "sydney",
    name: "Sydney",
    state: "NSW",
    metaTitle: "Cleaning & Removals in Sydney | KC Group",
    metaDescription: "Cleaning and removal services for homes and businesses across Sydney, NSW.",
    h1: "Cleaning & Removals in Sydney",
    intro: "KC Group provides residential and commercial cleaning alongside home and business removals across Sydney, scoped and quoted around the individual job.",
  },
  {
    slug: "western-sydney",
    name: "Western Sydney",
    state: "NSW",
    metaTitle: "Cleaning & Removals in Western Sydney | KC Group",
    metaDescription: "Cleaning and removal services for homes and businesses across Western Sydney, NSW.",
    h1: "Cleaning & Removals in Western Sydney",
    intro: "From homes to commercial sites, KC Group services cleaning and removal jobs across Western Sydney, with quotes tailored to each property or site.",
  },
  {
    slug: "parramatta",
    name: "Parramatta, Blacktown & Rouse Hill",
    state: "NSW",
    metaTitle: "Cleaning & Removals in Parramatta, Blacktown & Rouse Hill | KC Group",
    metaDescription: "Cleaning and removal services across Parramatta, Blacktown and Rouse Hill, NSW.",
    h1: "Cleaning & Removals — Parramatta, Blacktown & Rouse Hill",
    intro: "KC Group supports households and businesses across the Parramatta, Blacktown and Rouse Hill areas with cleaning and removal services scoped to the job.",
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    state: "SA",
    metaTitle: "Cleaning & Removals in Adelaide | KC Group",
    metaDescription: "Cleaning and removal services for homes and businesses across Adelaide, South Australia.",
    h1: "Cleaning & Removals in Adelaide",
    intro: "KC Group provides residential and commercial cleaning alongside home and business removals across Adelaide, South Australia.",
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((p) => p.slug === slug);
}
