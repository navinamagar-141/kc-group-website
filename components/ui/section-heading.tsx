export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
}) {
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const descColor = tone === "light" ? "text-white/65" : "text-ink/65";

  return (
    <div className="max-w-2xl flex flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
      <h2 className={`font-display text-3xl sm:text-4xl font-semibold leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description ? <p className={`text-base leading-relaxed ${descColor}`}>{description}</p> : null}
    </div>
  );
}
