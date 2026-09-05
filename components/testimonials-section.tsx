import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FadeUp from "@/components/ui/fade-up";

const placeholders = [1, 2, 3];

export default function TestimonialsSection() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <FadeUp>
          <SectionHeading
            eyebrow="Reviews"
            title="What clients say"
            description="Genuine customer reviews will be added here once supplied — no review shown on this site is invented."
          />
        </FadeUp>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {placeholders.map((n) => (
            <FadeUp key={n} delay={n * 60}>
              <div className="rounded-2xl border border-dashed border-ink/20 bg-paper p-6 flex flex-col gap-4 h-full">
                <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold">
                  Review placeholder
                </span>
                <p className="text-sm text-ink/45 leading-relaxed">
                  A customer testimonial will be added here once real reviews are supplied by KC
                  Group.
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
