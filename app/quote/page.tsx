import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import QuoteForm from "@/components/quote-form";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a tailored, obligation-free quote from KC Group for cleaning or removal services.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Free Quote"
        title="Tell us what you need"
        description="A few quick steps and we'll come back with a tailored, obligation free quote. Pricing depends on the scope and requirements of each job."
      />
      <section className="bg-paper">
        <Container className="py-14 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <QuoteForm />
            <p className="text-center text-sm text-ink/50 mt-6">
              Prefer to talk it through? Email {company.email} or call {company.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
