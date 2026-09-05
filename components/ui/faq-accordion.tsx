"use client";

import { useState } from "react";

export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base sm:text-lg font-semibold text-ink">{item.question}</span>
              <span className={`shrink-0 text-gold transition-transform ${open ? "rotate-45" : ""}`} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {open ? <p className="pb-5 text-sm text-ink/65 leading-relaxed max-w-2xl">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
