# KC Group of Companies Pty Ltd — Website

A production-ready Next.js (App Router) website for KC Group's cleaning and
removal services, built to the Website Developer Change Brief and Visual
Sample PDFs.

## Stack

Next.js 16 (App Router, TypeScript, Turbopack) + Tailwind CSS v4. No extra
runtime dependencies beyond what's needed.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## What's confirmed vs. still placeholder

**Confirmed and live:**
- Email: `kgccompany48@gmail.com`
- Phone: `0451 331 522`
- WhatsApp: derived from the confirmed phone number as `61451331522`
  (international format for the `wa.me` link)
- About page narrative: started as a cleaning company in 2018, now a
  two-service cleaning + removals business

**Still placeholder — see `lib/site-config.ts`:**
- The public domain (site currently points at the Vercel URL —
  `company.url` / `company.domain`)
- Google rating/review count — intentionally hidden until real numbers are
  added (never a fabricated placeholder number; see `googleReviews`)
- Partner/client logos — empty until permission + assets are confirmed
  (`partnerLogos`)
- Case studies and before/after gallery photos — placeholder "coming soon"
  slots (`caseStudies`, and the Gallery page)
- Additional trust badges (Fully Insured, Public Liability, Police-Checked
  Staff, etc.) — commented out in `trustBadges` until KC Group confirms them

## Site architecture

### Editable configuration
- `lib/site-config.ts` — company info, nav, service categories, trust
  badges, industries, FAQs, quote form options
- `lib/service-pages.ts` — content for the 17 individual service landing
  pages (e.g. `/commercial-cleaning`, `/office-removals`)
- `lib/location-pages.ts` — content for the 4 service-area landing pages
  (`/sydney`, `/western-sydney`, `/parramatta`, `/adelaide`)

### Dynamic landing pages
`app/[slug]/page.tsx` is a single route that serves all 21 service and
location pages from the two data files above — each with a unique title,
meta description, H1, FAQ schema and Service schema. Add a new page by
adding an entry to either data file; no new route file needed.

### Reviews (star ratings with owner approval)
`/reviews` submission → saved as pending → owner emailed one-click
Approve/Reject links → `app/api/reviews/decide/route.ts` verifies a signed,
expiring token (14-day expiry) and flips the status. Only approved reviews
ever render on `/reviews` or the homepage.

**Storage is a local JSON file (`lib/reviews-store.ts`) — this will not
persist on Vercel or most serverless hosts**, since their filesystem is
ephemeral. Swap the implementation in that one file for a real database
(Upstash Redis, Vercel Postgres, Supabase, etc.) before relying on this
feature in production; every other file only calls its exported functions.

### Analytics / tracking
GA4 and GTM are wired into `app/layout.tsx` but stay completely inactive
until `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_GTM_ID` are set (see
`.env.example`). The `/thank-you` page (shown after a successful quote
submission) pushes a `quote_form_submission` event to `dataLayer` for
conversion tracking once GTM is configured.

### Quote form
`components/quote-form.tsx` — a 4-step flow: service type → category (with
one-off/ongoing and approximate job size) → job details + optional photos →
contact details. Submits to `app/api/quote/route.ts` (validation, file-type
checks, rate limiting, honeypot spam field), then redirects to `/thank-you`.

### Email delivery
`lib/send-email.ts` is a pluggable sender used by both the quote and review
flows. Without `RESEND_API_KEY` set, submissions are logged to the server
console instead of emailed, so nothing is silently lost during setup.

## Fonts

Type is set via a system-font stack in `app/globals.css`
(`--font-display`, `--font-body`, `--font-mono`) rather than
`next/font/google`, to avoid a build-time dependency on fetching Google
Fonts in restricted environments. Swap in self-hosted or `next/font` files
on a deployment target with internet access — every component already
reads from these CSS variable names.

## Pages

Home · Cleaning · Removals · Commercial · About · Reviews · Contact · Get a
Quote · Thank You · Gallery · Privacy Policy · Terms · 404 · 17 individual
service landing pages · 4 service-area landing pages

Plus `/sitemap.xml` (includes every page above), `/robots.txt`, and
`LocalBusiness` structured data in `app/layout.tsx`.

## Deploying

Any Node.js host that supports the Next.js App Router works (Vercel is the
simplest). Set the environment variables from `.env.example` in your
hosting provider's dashboard before going live.
