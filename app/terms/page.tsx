import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import { company } from "@/lib/site-config";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms and conditions for KC Group of Companies Pty Ltd services." };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="This is placeholder legal content. Final wording should be reviewed and approved by KC Group before the site is published." />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl flex flex-col gap-6 text-ink/70 leading-relaxed">
            <p>
              These placeholder terms outline the kind of content a completed terms and conditions page for {company.legalName} would typically cover — how quote requests and bookings are handled, how pricing is confirmed, cancellation arrangements, and the basis on which cleaning and removal services are provided.
            </p>
            <p>This content has not yet been legally reviewed. Please replace this page with terms prepared or approved by a qualified professional before the website is published.</p>
            <p>
              Questions can be directed to{" "}
              <a href={`mailto:${company.email}`} className="text-gold hover:underline">{company.email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
