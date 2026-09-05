import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import ReviewForm from "@/components/review-form";
import GoogleReviewBadge from "@/components/sections/google-review-badge";
import { StarDisplay } from "@/components/ui/stars";
import { getApprovedReviews } from "@/lib/reviews-store";

export const metadata: Metadata = {
  title: "What Clients Say",
  description: "Reviews from KC Group customers across cleaning and removal jobs in NSW and South Australia.",
};

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const reviews = await getApprovedReviews();

  return (
    <>
      <PageHero
        eyebrow="What Clients Say"
        title="Reviews from KC Group customers"
        description="Every review is checked by KC Group before it goes live, so what you see here has come from a real job."
      >
        <div className="pt-2">
          <GoogleReviewBadge />
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12">
            <div>
              <SectionHeading
                eyebrow="Customer reviews"
                title={reviews.length > 0 ? `${reviews.length} review${reviews.length === 1 ? "" : "s"}` : "Be the first to leave a review"}
                description={reviews.length > 0 ? "Feedback from households and businesses we've worked with." : "No reviews have been published yet — check back soon, or share your own experience."}
              />

              {reviews.length > 0 ? (
                <div className="mt-10 flex flex-col gap-5">
                  {reviews.map((review) => (
                    <div key={review.id} className="rounded-2xl border border-ink/10 bg-white p-6 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <StarDisplay rating={review.rating} />
                        <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold">{review.serviceType}</span>
                      </div>
                      <p className="text-ink/75 text-sm leading-relaxed">{review.message}</p>
                      <p className="font-display text-sm font-semibold text-ink">{review.name}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">Leave a review</h2>
              <ReviewForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
