const categories = ["Commercial Cleaning", "Builders Handover", "Gym / Facility", "Removals"];

export default function BeforeAfterTeaser() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((category) => (
        <div key={category} className="aspect-[4/3] rounded-xl border border-dashed border-white/15 bg-white/5 flex flex-col items-center justify-center gap-2 text-center p-4">
          <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-gold">{category}</span>
          <span className="text-xs text-white/40">Before / after photos coming soon</span>
        </div>
      ))}
    </div>
  );
}
