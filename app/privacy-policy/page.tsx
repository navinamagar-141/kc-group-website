import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import { company } from "@/lib/site-config";

export const metadata: Metadata = { title: "Privacy Policy", description: "How KC Group of Companies Pty Ltd handles personal information." };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="This is placeholder legal content. Final wording should be reviewed and approved by KC Group before the site is published." />
      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl flex flex-col gap-6 text-ink/70 leading-relaxed">
            <p>
              {company.legalName} respects your privacy. This placeholder page outlines the kind of information a completed privacy policy would typically cover, including what personal information is collected through this website (such as details submitted via the quote or review forms), how it is used, how it is stored, and who it may be shared with in the course of providing cleaning and removal services.
            </p>
            <p>This content has not yet been legally reviewed. Please replace this page with a privacy policy prepared or approved by a qualified professional before the website is published.</p>
            <p>
              Questions about this policy can be directed to{" "}
              <a href={`mailto:${company.email}`} className="text-gold hover:underline">{company.email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
