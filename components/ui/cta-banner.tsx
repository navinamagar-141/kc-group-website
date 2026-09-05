import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { company, whatsappHref } from "@/lib/site-config";

export default function CtaBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  showCallAndWhatsapp = true,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  showCallAndWhatsapp?: boolean;
}) {
  return (
    <section className="bg-ink text-white seam">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">{title}</h2>
            <p className="text-white/65 text-base leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button href={ctaHref} variant="gold">
              {ctaLabel}
            </Button>
            {showCallAndWhatsapp ? (
              <>
                <Button href={company.phoneHref} variant="outline-light">
                  Call Now
                </Button>
                {whatsappHref ? (
                  <Button href={whatsappHref} variant="outline-light">
                    WhatsApp Us
                  </Button>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
