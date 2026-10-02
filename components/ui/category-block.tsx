import Link from "next/link";
import { ServiceCategory } from "@/lib/site-config";

export default function CategoryBlock({ category, index }: { category: ServiceCategory; index: number }) {
  return (
    <div id={category.slug} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 py-12 border-t border-ink/10 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">{category.title}</h3>
        <p className="text-ink/65 text-sm leading-relaxed max-w-sm">{category.intro}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {category.items.map((item) => {
          const Card = (
            <div className="rounded-xl border border-ink/10 bg-white p-5 flex flex-col gap-1.5 h-full hover:border-gold/50 transition-colors">
              <h4 className="font-display text-base font-semibold text-ink">{item.name}</h4>
              <p className="text-sm text-ink/60 leading-relaxed">{item.description}</p>
              {item.href ? <span className="text-xs font-semibold text-gold uppercase tracking-wide mt-1">View Service →</span> : null}
            </div>
          );
          return item.href ? (
            <Link key={item.name} href={item.href}>
              {Card}
            </Link>
          ) : (
            <div key={item.name}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
}
