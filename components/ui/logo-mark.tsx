// Placeholder KC Group logo mark. Replace with the real supplied logo file
// (drop it into /public and swap this for a Next <Image>) — every place the
// logo appears (header, mobile menu, footer) uses this one component, so
// nothing else needs to change.

export default function LogoMark({ variant = "light" }: { variant?: "light" | "dark" }) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/50" : "text-ink/50";

  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-ink font-display font-bold text-lg">
        K
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold text-lg tracking-tight ${textColor}`}>KC GROUP</span>
        <span className={`font-mono-label text-[10px] tracking-[0.16em] uppercase ${subColor}`}>
          Of Companies Pty Ltd
        </span>
      </span>
    </div>
  );
}
