import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-ink text-white min-h-[70vh] flex items-center">
      <Container className="py-24 text-center flex flex-col items-center gap-6">
        <span className="font-mono-label text-xs uppercase tracking-[0.2em] text-gold">404</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold">Page not found</h1>
        <p className="text-white/65 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Head back to the homepage or get a quote directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button href="/" variant="gold">Back to Home</Button>
          <Button href="/quote" variant="outline-light">Get a Free Quote</Button>
        </div>
      </Container>
    </section>
  );
}
