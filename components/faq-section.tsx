"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How quickly will I hear back after submitting a quote request?",
    a: "We aim to respond promptly to confirm details and provide a tailored quote. If your job is urgent, calling or emailing directly is the fastest option.",
  },
  {
    q: "Is the quote obligation-free?",
    a: "Yes. Submitting a request doesn't commit you to booking, it simply starts the conversation so we can scope the job properly.",
  },
  {
    q: "Do you service my area?",
    a: "KC Group operates across New South Wales and South Australia. Include your suburb and state in the form and we'll confirm availability.",
  },
  {
    q: "Can I request both cleaning and removals?",
    a: "Yes, choose the service that best matches your main need, then mention the other requirement in the job details field.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-2xl mx-auto mt-14">
      <h2 className="font-display text-xl font-semibold text-ink mb-6">Common questions</h2>
      <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-medium text-ink text-sm sm:text-base">{faq.q}</span>
                <span
                  className={`shrink-0 text-gold transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div id={`faq-panel-${i}`} className={isOpen ? "pb-4" : "hidden"}>
                <p className="text-sm text-ink/60 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
