import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StickyMobileCTA from "@/components/sticky-mobile-cta";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.brandName} — ${company.tagline}`,
    template: `%s | ${company.brandName}`,
  },
  description: company.description,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  alternateName: company.brandName,
  url: company.url,
  email: company.email,
  telephone: company.phone,
  foundingDate: String(company.established),
  areaServed: [
    { "@type": "State", name: "New South Wales" },
    { "@type": "State", name: "South Australia" },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cleaning Services" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Removal Services" } },
  ],
};

// Analytics/tracking are entirely opt-in via environment variables — see
// .env.example. Nothing renders (and no real or placeholder ID is ever
// hardcoded) until NEXT_PUBLIC_GA_MEASUREMENT_ID / NEXT_PUBLIC_GTM_ID are
// set by whoever deploys the site.
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <head>
        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
      </head>
      <body className="antialiased bg-paper text-ink">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}

        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="pb-[64px] lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
