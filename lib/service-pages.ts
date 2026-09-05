// Individual service landing pages so paid campaigns and search queries can
// land on the exact service searched for, instead of a generic overview
// page. Each entry drives one route at /[slug] via app/[slug]/page.tsx.
//
// Copy here follows the same rule as the rest of the site: no invented
// certifications, guarantees, response times or statistics — descriptions
// stay factual and scoped to what the category covers.

export type ServicePageContent = {
  slug: string;
  category: "cleaning" | "removals";
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  inclusions: string[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePageContent[] = [
  // ---- CLEANING ----
  {
    slug: "commercial-cleaning",
    category: "cleaning",
    navLabel: "Commercial Cleaning",
    h1: "Commercial Cleaning",
    metaTitle: "Commercial Cleaning — NSW & South Australia",
    metaDescription: "Commercial cleaning programs for offices, retail, hospitality and facilities across NSW and South Australia, scoped around your operating hours.",
    intro: "Cleaning programs built around your operating hours, foot traffic and presentation standards — scoped to the site rather than treated as one-size-fits-all.",
    inclusions: ["Workstations and common areas", "Kitchens and amenities", "Floors and entryways", "High-touch surfaces", "Scheduled or ongoing programs"],
    idealFor: ["Offices", "Retail businesses", "Hospitality venues", "Multi-tenant facilities"],
    faqs: [
      { question: "Can cleaning happen outside business hours?", answer: "Scheduling can be arranged around your operating hours — let us know your preferred timing when requesting a quote." },
      { question: "Do you offer ongoing contracts?", answer: "Yes, alongside one-off cleans. Frequency and scope are agreed with you upfront." },
    ],
  },
  {
    slug: "office-cleaning",
    category: "cleaning",
    navLabel: "Office Cleaning",
    h1: "Office Cleaning",
    metaTitle: "Office Cleaning Services — NSW & South Australia",
    metaDescription: "Reliable office cleaning covering workstations, kitchens, amenities and common areas across NSW and South Australia.",
    intro: "Consistent cleaning for workplaces — desks, kitchens, amenities and shared spaces kept presentation-ready for staff and visitors.",
    inclusions: ["Workstations and desks", "Kitchen and breakout areas", "Bathrooms and amenities", "Reception and common areas", "Bin and waste management"],
    idealFor: ["Small and medium offices", "Co-working spaces", "Corporate floors"],
    faqs: [
      { question: "How often can office cleaning be scheduled?", answer: "From daily through to weekly or fortnightly, depending on the size and use of the space." },
    ],
  },
  {
    slug: "gym-cleaning",
    category: "cleaning",
    navLabel: "Gym & Fitness Centre Cleaning",
    h1: "Gym & Fitness Centre Cleaning",
    metaTitle: "Gym & Fitness Centre Cleaning — NSW & South Australia",
    metaDescription: "Cleaning for gyms and fitness centres — equipment, mats, change rooms and high-touch surfaces, across NSW and South Australia.",
    intro: "Fitness spaces get used hard, all day — cleaning that keeps equipment, mats and amenities presentable between and after peak hours.",
    inclusions: ["Equipment wipe-down areas", "Mats and studio floors", "Change rooms and showers", "Mirrors and glass", "High-touch surfaces"],
    idealFor: ["Gyms", "Fitness studios", "Health clubs"],
    faqs: [
      { question: "Can cleaning happen between opening hours?", answer: "Yes — scheduling can be arranged around class times and peak periods." },
    ],
  },
  {
    slug: "builders-cleaning",
    category: "cleaning",
    navLabel: "Builders / Handover Cleaning",
    h1: "Builders & Handover Cleaning",
    metaTitle: "Builders Cleaning & Handover Cleans — NSW & South Australia",
    metaDescription: "Detailed builders and handover cleaning ahead of inspection or handover, across NSW and South Australia.",
    intro: "Detailed cleaning timed around construction milestones — clearing dust and residue ahead of inspection or handover.",
    inclusions: ["Dust and debris removal", "Windows and glass", "Floors and skirting", "Kitchens and bathrooms", "Final presentation pass"],
    idealFor: ["Builders", "Developers", "Renovation projects"],
    faqs: [
      { question: "How soon after construction finishes can you clean?", answer: "Timing is coordinated with your project schedule — get in touch as your handover date approaches." },
    ],
  },
  {
    slug: "end-of-lease-cleaning",
    category: "cleaning",
    navLabel: "End of Lease Cleaning",
    h1: "End of Lease Cleaning",
    metaTitle: "End of Lease Cleaning — NSW & South Australia",
    metaDescription: "Presentation-focused end of lease cleaning aimed at a smooth handback, across NSW and South Australia.",
    intro: "A thorough, presentation-focused clean aimed at a smooth handback to your landlord or agent.",
    inclusions: ["Kitchen degrease and detail", "Bathroom and tile cleaning", "Floors throughout", "Windows and tracks", "Skirting and detail areas"],
    idealFor: ["Tenants", "Property managers", "Landlords"],
    faqs: [
      { question: "Can this be timed around my exact move-out date?", answer: "Yes — let us know your preferred date when requesting a quote and we'll confirm availability." },
    ],
  },
  {
    slug: "deep-cleaning",
    category: "cleaning",
    navLabel: "Deep Cleaning",
    h1: "Deep Cleaning",
    metaTitle: "Deep Cleaning Services — NSW & South Australia",
    metaDescription: "A more thorough deep clean covering kitchens, bathrooms and detail areas, across NSW and South Australia.",
    intro: "A more thorough pass through the areas a regular clean doesn't always reach — kitchens, bathrooms and built-up detail.",
    inclusions: ["Kitchen degrease", "Bathroom detail cleaning", "Skirting and edges", "Behind and under furniture where accessible", "Light fittings and switches"],
    idealFor: ["Households due for a reset", "Pre- or post-event cleaning", "Seasonal cleans"],
    faqs: [
      { question: "How is this different from a regular clean?", answer: "A deep clean spends more time on build-up and detail areas that a routine visit doesn't always cover." },
    ],
  },
  {
    slug: "carpet-cleaning",
    category: "cleaning",
    navLabel: "Carpet Cleaning",
    h1: "Carpet Cleaning",
    metaTitle: "Carpet Cleaning Services — NSW & South Australia",
    metaDescription: "Carpet cleaning for homes and businesses across NSW and South Australia.",
    intro: "Deeper cleaning for carpeted areas in homes, offices and commercial sites.",
    inclusions: ["High-traffic area treatment", "Stain and spot attention", "Residential and commercial carpet"],
    idealFor: ["Households", "Offices", "Rental properties"],
    faqs: [
      { question: "Can carpet cleaning be booked alongside another service?", answer: "Yes — mention it in your quote request and we can scope it alongside an end of lease or regular clean." },
    ],
  },
  {
    slug: "window-cleaning",
    category: "cleaning",
    navLabel: "Window Cleaning",
    h1: "Window & Glass Cleaning",
    metaTitle: "Window Cleaning Services — NSW & South Australia",
    metaDescription: "Window and glass cleaning for homes and businesses across NSW and South Australia.",
    intro: "Glass, frames and tracks, cleaned inside and out for homes and commercial premises.",
    inclusions: ["Interior and exterior glass", "Frames and tracks", "Shopfronts and office glazing"],
    idealFor: ["Households", "Retail shopfronts", "Offices"],
    faqs: [
      { question: "Do you clean exterior windows on multi-storey buildings?", answer: "Let us know the site details in your quote request and we'll confirm what's practical for the property." },
    ],
  },
  {
    slug: "retail-cleaning",
    category: "cleaning",
    navLabel: "Retail Cleaning",
    h1: "Retail Cleaning",
    metaTitle: "Retail Cleaning Services — NSW & South Australia",
    metaDescription: "Cleaning for retail businesses across NSW and South Australia, scheduled around trading hours.",
    intro: "Customer-facing cleaning that keeps retail spaces presentable during trading hours, without disrupting business.",
    inclusions: ["Shop floor and displays", "Fitting rooms", "Entryways and glass", "Bathrooms and staff areas"],
    idealFor: ["Retail stores", "Shopping strips", "Showrooms"],
    faqs: [
      { question: "Can cleaning happen before opening?", answer: "Yes — early morning or after-hours scheduling can be arranged." },
    ],
  },
  {
    slug: "strata-cleaning",
    category: "cleaning",
    navLabel: "Strata / Common Area Cleaning",
    h1: "Strata & Common Area Cleaning",
    metaTitle: "Strata Cleaning Services — NSW & South Australia",
    metaDescription: "Cleaning for strata and common areas across NSW and South Australia.",
    intro: "Scheduled cleaning for shared lobbies, stairwells and common-use spaces in strata-managed buildings.",
    inclusions: ["Lobbies and entryways", "Stairwells and corridors", "Lift interiors", "Shared amenities"],
    idealFor: ["Strata managers", "Body corporates", "Apartment buildings"],
    faqs: [
      { question: "Can you work directly with our strata manager?", answer: "Yes — we're happy to coordinate scheduling and reporting directly with a managing agent." },
    ],
  },
  // ---- REMOVALS ----
  {
    slug: "home-removals",
    category: "removals",
    navLabel: "Home Removals",
    h1: "Home Removals",
    metaTitle: "Home Removals — NSW & South Australia",
    metaDescription: "Residential home removals across NSW and South Australia, scoped and quoted around your move.",
    intro: "Full household relocations, planned around your timeline and scoped to the size of the move.",
    inclusions: ["House and apartment moves", "Furniture handling", "Loading and unloading", "Coordination around access and timing"],
    idealFor: ["Homeowners", "Renters", "Families relocating"],
    faqs: [
      { question: "How far in advance should I book a home removal?", answer: "As early as you can once your move date is confirmed, though we can also accommodate shorter notice depending on availability." },
    ],
  },
  {
    slug: "office-removals",
    category: "removals",
    navLabel: "Office Removals",
    h1: "Office Removals",
    metaTitle: "Office Removals — NSW & South Australia",
    metaDescription: "Business and office relocations across NSW and South Australia, planned to reduce disruption to operations.",
    intro: "Planned office moves for workplaces of varying sizes, coordinated to reduce disruption to your operations.",
    inclusions: ["Desk, equipment and furniture moves", "Planning around business hours", "Loading and unloading", "Coordination across move-out and move-in sites"],
    idealFor: ["Small and medium offices", "Co-working spaces", "Corporate relocations"],
    faqs: [
      { question: "Can the move happen after hours or on a weekend?", answer: "Yes — scheduling can be arranged to minimise disruption to your team." },
    ],
  },
  {
    slug: "interstate-removals",
    category: "removals",
    navLabel: "Interstate Removals",
    h1: "Interstate Removals",
    metaTitle: "Interstate Removals — NSW & South Australia",
    metaDescription: "Longer-distance relocation support between New South Wales and South Australia.",
    intro: "Relocation support for moves between New South Wales and South Australia, coordinated around your timeline.",
    inclusions: ["Longer-distance relocation planning", "Loading and unloading", "Coordination across both ends of the move"],
    idealFor: ["Households relocating between states", "Businesses expanding across states"],
    faqs: [
      { question: "Do you service moves between any NSW and SA locations?", answer: "Let us know your specific origin and destination in your quote request and we'll confirm coverage." },
    ],
  },
  {
    slug: "furniture-removals",
    category: "removals",
    navLabel: "Furniture Removals",
    h1: "Furniture Removals",
    metaTitle: "Furniture Removals — NSW & South Australia",
    metaDescription: "Furniture and single-item removals across NSW and South Australia.",
    intro: "Support for smaller moves and individual items — a flexible option when a full household move isn't needed.",
    inclusions: ["Single or multiple furniture items", "Careful handling and loading", "Short or longer-distance transport"],
    idealFor: ["Single-item moves", "Furniture purchases and deliveries", "Downsizing"],
    faqs: [
      { question: "Can you move just one or two large items?", answer: "Yes — let us know the items and locations involved and we'll scope it as a smaller job." },
    ],
  },
  {
    slug: "packing-and-unpacking",
    category: "removals",
    navLabel: "Packing & Unpacking",
    h1: "Packing & Unpacking",
    metaTitle: "Packing & Unpacking Services — NSW & South Australia",
    metaDescription: "Packing and unpacking assistance for household and office moves across NSW and South Australia.",
    intro: "Optional support with packing ahead of moving day, or unpacking once you've arrived.",
    inclusions: ["Packing assistance", "Unpacking on arrival", "Can be added to any removal booking"],
    idealFor: ["Households short on time", "Larger or more complex moves"],
    faqs: [
      { question: "Can packing be booked without a full removal?", answer: "Yes — let us know what you need in your quote request and we'll scope it accordingly." },
    ],
  },
  {
    slug: "small-moves",
    category: "removals",
    navLabel: "Small Moves",
    h1: "Small Moves",
    metaTitle: "Small Moves — NSW & South Australia",
    metaDescription: "A lighter-weight removal option for studio and single-room moves across NSW and South Australia.",
    intro: "A lighter-weight option for studio apartments, single rooms, or smaller relocations that don't need a full household move.",
    inclusions: ["Studio and single-room moves", "Loading and unloading", "Flexible scheduling"],
    idealFor: ["Students", "Studio and one-bedroom moves", "Downsizing"],
    faqs: [
      { question: "Is there a minimum job size?", answer: "No set minimum — let us know the scope in your quote request and we'll confirm the best fit." },
    ],
  },
  {
    slug: "commercial-relocations",
    category: "removals",
    navLabel: "Commercial Relocations",
    h1: "Commercial Relocations",
    metaTitle: "Commercial Relocations — NSW & South Australia",
    metaDescription: "Larger business relocations coordinated site-to-site across NSW and South Australia.",
    intro: "Larger business relocations, coordinated between sites with planning built around minimising downtime.",
    inclusions: ["Multi-site coordination", "Equipment and furniture handling", "Planning around operational continuity"],
    idealFor: ["Larger businesses", "Multi-department relocations", "Facility moves"],
    faqs: [
      { question: "Can this be planned in phases?", answer: "Yes — larger relocations can be scoped and scheduled in stages to suit your operations." },
    ],
  },
  {
    slug: "moving-and-cleaning-package",
    category: "removals",
    navLabel: "Moving + Cleaning Package",
    h1: "Moving + Cleaning Package",
    metaTitle: "Moving & Cleaning Package — NSW & South Australia",
    metaDescription: "A coordinated move and end-of-lease or move-in clean, across NSW and South Australia.",
    intro: "A move and a clean, coordinated together — useful when you need both an end-of-lease clean and a removal handled as one job.",
    inclusions: ["Coordinated move and clean scheduling", "End-of-lease or move-in cleaning", "Single point of contact for both services"],
    idealFor: ["Tenants moving out", "Homeowners moving in", "Anyone timing a move and a clean together"],
    faqs: [
      { question: "Do I need to book these separately?", answer: "No — mention both in a single quote request and we'll coordinate the scheduling together." },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}
