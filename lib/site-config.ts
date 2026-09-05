// Central configuration for KC Group of Companies Pty Ltd
// Edit this file to update business information across the whole site.
// Anything marked "TODO" is a confirmed placeholder — replace with real data before launch.

export const company = {
  legalName: "KC Group of Companies Pty Ltd",
  brandName: "KC Group",
  established: 2018,
  domain: "kc-group-website.vercel.app", // TODO: replace with the final .com.au domain
  url: "https://kc-group-website.vercel.app", // TODO: replace with the final .com.au domain
  email: "kgccompany48@gmail.com",
  phone: "0451 331 522",
  phoneHref: "tel:+61451331522",
  // Derived for the WhatsApp button from the confirmed mobile number
  // (0451 331 522 → 61 451 331 522 in international format for wa.me).
  whatsappNumber: "61451331522",
  abn: "TODO: ABN TO BE CONFIRMED",
  tagline: "Professional Cleaning & Removal Services",
  description:
    "Reliable cleaning and removal teams for homes, businesses, builders and facilities across New South Wales and South Australia.",
};

export const whatsappHref = company.whatsappNumber
  ? `https://wa.me/${company.whatsappNumber}`
  : null;

// GOOGLE REVIEWS — placeholder only.
// Per the change brief, only a genuine, verifiable Google rating may be
// shown. Do not hardcode a number here. Once KC Group's Google Business
// Profile is live, either wire this up to the Google Places API, or update
// these two values manually and keep them current. Leaving both null hides
// the Google rating badge entirely.
export const googleReviews = {
  rating: null as number | null, // e.g. 4.9
  reviewCount: null as number | null, // e.g. 127
  profileUrl: "", // TODO: Google Business Profile URL, for "Read more reviews"
};

export const serviceAreas = [
  { name: "New South Wales", abbr: "NSW" },
  { name: "South Australia", abbr: "SA" },
];

export const socialLinks = {
  facebook: "", // TODO: FACEBOOK_URL_HERE
  instagram: "", // TODO: INSTAGRAM_URL_HERE
  linkedin: "", // TODO: LINKEDIN_URL_HERE
  tiktok: "", // TODO: TIKTOK_URL_HERE
  youtube: "", // TODO: YOUTUBE_URL_HERE
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Cleaning", href: "/cleaning" },
  { label: "Removals", href: "/removals" },
  { label: "Commercial", href: "/commercial" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About KC Group", href: "/about" },
    { label: "Commercial Services", href: "/commercial" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Cleaning Services", href: "/cleaning" },
    { label: "Removal Services", href: "/removals" },
    { label: "Request a Quote", href: "/quote" },
    { label: "Service Areas", href: "/#service-areas" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export type ServiceItem = { name: string; description: string; href?: string };
export type ServiceCategory = {
  slug: string;
  title: string;
  intro: string;
  items: ServiceItem[];
};

export const cleaningCategories: ServiceCategory[] = [
  {
    slug: "residential",
    title: "Residential Cleaning",
    intro: "Regular upkeep or a one-off reset — cleaning built around how a household actually lives.",
    items: [
      { name: "Regular Cleaning", description: "Ongoing scheduled cleaning to keep a home consistently presentable." },
      { name: "One-Off Cleaning", description: "A single visit for a spring clean, a special occasion, or general catch-up." },
      { name: "Deep Cleaning", description: "A more thorough pass through kitchens, bathrooms and detail areas.", href: "/deep-cleaning" },
      { name: "End of Lease", description: "Presentation-focused cleaning aimed at a smooth handback.", href: "/end-of-lease-cleaning" },
      { name: "Move-In / Move-Out", description: "A fresh, thorough clean timed around a move." },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Cleaning",
    intro: "Cleaning programs built around your operating hours, foot traffic and presentation standards.",
    items: [
      { name: "Office Cleaning", description: "Workstations, common areas, kitchens and amenities.", href: "/office-cleaning" },
      { name: "Gym & Fitness Centre", description: "Equipment, mats, change rooms and high-touch surfaces.", href: "/gym-cleaning" },
      { name: "Retail Cleaning", description: "Customer-facing areas kept presentation-ready during trading hours.", href: "/retail-cleaning" },
      { name: "Strata / Common Areas", description: "Shared lobbies, stairwells and common-use spaces.", href: "/strata-cleaning" },
      { name: "Ongoing Programs", description: "Recurring cleaning plans tailored to a site's frequency needs.", href: "/commercial-cleaning" },
    ],
  },
  {
    slug: "project",
    title: "Project & Property Cleaning",
    intro: "Cleaning timed around construction, renovation and property-presentation milestones.",
    items: [
      { name: "Builders / Handover", description: "Detailed cleaning ahead of inspection or handover.", href: "/builders-cleaning" },
      { name: "Post-Renovation", description: "Clearing dust and residue after building or renovation work." },
      { name: "Property Presentation", description: "Presentation-focused cleaning for sale, lease or inspection." },
    ],
  },
  {
    slug: "specialised",
    title: "Specialised Cleaning",
    intro: "Detail work for the areas that general cleans don't reach.",
    items: [
      { name: "Window & Glass", description: "Glass, frames and tracks, inside and out.", href: "/window-cleaning" },
      { name: "Floor Care", description: "Vacuuming, mopping and detailed floor treatment." },
      { name: "Carpet Cleaning", description: "Deeper cleaning for carpeted areas.", href: "/carpet-cleaning" },
      { name: "Tile & Grout", description: "Detail cleaning for tiled surfaces and grout lines." },
      { name: "Pressure Cleaning", description: "Exterior surfaces, paths and hard-standing areas." },
    ],
  },
];

export const removalCategories: ServiceCategory[] = [
  {
    slug: "residential",
    title: "Residential Removals",
    intro: "House and apartment moves, scoped and quoted around the individual job.",
    items: [
      { name: "Home Removals", description: "Full household relocations, planned around your timeline.", href: "/home-removals" },
      { name: "Small Moves", description: "A lighter-weight option for studio and single-room moves.", href: "/small-moves" },
    ],
  },
  {
    slug: "business",
    title: "Office & Business Relocations",
    intro: "Relocation support built around minimising disruption to your operations.",
    items: [
      { name: "Office Removals", description: "Planned moves for workplaces of varying sizes.", href: "/office-removals" },
      { name: "Commercial Relocations", description: "Larger business relocations, coordinated site-to-site.", href: "/commercial-relocations" },
      { name: "Interstate Removals", description: "Longer-distance relocation support between states.", href: "/interstate-removals" },
    ],
  },
  {
    slug: "support",
    title: "Furniture, Packing & Loading",
    intro: "Flexible support that can be added to a move as needed.",
    items: [
      { name: "Furniture Removals", description: "Support for smaller moves and individual items.", href: "/furniture-removals" },
      { name: "Packing & Unpacking", description: "Help with packing ahead of, or after, moving day.", href: "/packing-and-unpacking" },
      { name: "Moving + Cleaning Package", description: "A move and an end-of-lease or move-in clean, coordinated together.", href: "/moving-and-cleaning-package" },
    ],
  },
];

export const whyChooseUs = [
  { title: "Professional Communication", description: "Clear, responsive communication from first enquiry through to job completion." },
  { title: "Clear Quote Process", description: "A straightforward path from enquiry to a tailored, obligation-free quote." },
  { title: "Flexible Service Options", description: "One-off jobs, regular contracts and requirements scoped around your site." },
  { title: "Presentation-Focused Work", description: "Attention to the details that customers, tenants and inspectors actually notice." },
  { title: "Residential & Commercial Capability", description: "One company across household, office and project-based work." },
  { title: "Established Since 2018", description: "Operating as a multi-service business across cleaning and removals since 2018." },
];

export const quoteServiceOptions = {
  serviceType: ["Cleaning", "Removals", "Commercial"] as const,
  cleaningCategory: cleaningCategories.flatMap((c) => c.items.map((i) => i.name)),
  removalCategory: removalCategories.flatMap((c) => c.items.map((i) => i.name)),
  commercialCategory: ["Commercial Cleaning", "Commercial Removals"],
  jobType: ["Residential", "Commercial"] as const,
  frequency: ["One-off", "Ongoing / Recurring"] as const,
  propertySize: ["Small (1-2 rooms)", "Medium (house/apartment)", "Large (multi-room / whole site)", "Not sure"] as const,
  contactMethod: ["Phone", "Email", "WhatsApp"] as const,
};

// TRUST BADGES — only genuinely confirmed claims are enabled by default.
// The change brief explicitly warns against unverified insurance,
// certification or compliance claims — items like "Fully Insured" or
// "Police-Checked Staff" are commented out below. Uncomment and enable only
// once KC Group has confirmed them, so the site never states a compliance
// claim that hasn't been verified.
export type TrustBadge = { label: string; note?: string };
export const trustBadges: TrustBadge[] = [
  { label: "Established 2018", note: "Operating across cleaning and removals since 2018" },
  { label: "NSW & South Australia", note: "Servicing both states directly" },
  { label: "Residential & Commercial", note: "One team across household and business work" },
  { label: "Tailored Quotes", note: "Scoped and quoted around the individual job" },
  // { label: "Fully Insured", note: "TODO: confirm cover before enabling" },
  // { label: "Public Liability Insurance", note: "TODO: confirm cover before enabling" },
  // { label: "Police-Checked Staff", note: "TODO: confirm before enabling" },
  // { label: "Commercial-Grade Equipment", note: "TODO: confirm before enabling" },
  // { label: "Australian Registered Business", note: "TODO: confirm ABN/ACN before enabling" },
];

export const industries = [
  "Offices",
  "Gyms & Fitness",
  "Builders & Construction",
  "Retail",
  "Hospitality",
  "Residential",
  "Strata",
  "Schools & Childcare",
  "Warehouses",
];

export const howItWorks = [
  { step: "01", title: "Request a Quote", description: "Tell us what you need and where." },
  { step: "02", title: "Site Assessment", description: "For commercial work, we inspect the site or review photos." },
  { step: "03", title: "Clear Proposal", description: "We confirm scope, schedule and price with you." },
  { step: "04", title: "Service Delivery", description: "Our team completes the agreed work." },
  { step: "05", title: "Quality Check", description: "Follow-up, reporting and ongoing support." },
];

// CASE STUDIES — placeholder slots only. None exist yet, so these are left
// as clearly-marked "coming soon" placeholders rather than inventing
// project outcomes. Replace once real jobs are documented with real photos.
export type CaseStudy = { category: string; title: string; summary: string };
export const caseStudies: CaseStudy[] = [
  { category: "Commercial Cleaning", title: "Case study coming soon", summary: "A real commercial cleaning project will be documented here once completed and approved for publishing." },
  { category: "Gym / Facility Cleaning", title: "Case study coming soon", summary: "A real gym or facility cleaning project will be documented here once completed and approved for publishing." },
  { category: "Builders Handover", title: "Case study coming soon", summary: "A real builders handover clean will be documented here once completed and approved for publishing." },
];

// PARTNER / CLIENT LOGOS — only display with the client's written
// permission (per brief). Add { name, logoUrl } entries once permission and
// assets are confirmed. Empty by default, same pattern as socialLinks — the
// strip renders a placeholder state until this has entries.
export type PartnerLogo = { name: string; logoUrl: string };
export const partnerLogos: PartnerLogo[] = [];

export const generalFaqs = [
  { question: "How quickly can I get a quote?", answer: "Send through your details via the quote form or get in touch directly — most enquiries are scoped and quoted within one business day." },
  { question: "Do you offer one-off cleans or only ongoing contracts?", answer: "Both. One-off jobs, regular scheduled cleaning, and ongoing commercial contracts are all available — let us know what suits your situation." },
  { question: "Do I need to be home or on-site for the job?", answer: "Not necessarily — many residential and commercial clients arrange access without being present. We'll talk through access arrangements when confirming your booking." },
  { question: "What areas do you service?", answer: "KC Group operates across New South Wales and South Australia. Let us know your suburb when requesting a quote and we'll confirm coverage." },
  { question: "Can I get cleaning and removals as a package?", answer: "Yes — if you need both a move and a clean (for example, an end of lease clean around a moving day), mention it in your quote request and we'll coordinate both." },
];
