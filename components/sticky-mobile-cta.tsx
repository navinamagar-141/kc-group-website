import Link from "next/link";
import { company, whatsappHref } from "@/lib/site-config";

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3">
        <a
          href={company.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 py-3 text-[11px] font-semibold uppercase tracking-wide text-white border-r border-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          Call Now
        </a>

        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 py-3 text-[11px] font-semibold uppercase tracking-wide text-white border-r border-white/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 .9-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"
                fill="currentColor"
              />
              <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            WhatsApp
          </a>
        ) : (
          <span className="flex flex-col items-center justify-center gap-0.5 py-3 text-[11px] font-semibold uppercase tracking-wide text-white/30 border-r border-white/10">
            WhatsApp
          </span>
        )}

        <Link
          href="/quote"
          className="flex flex-col items-center justify-center gap-0.5 py-3 text-[11px] font-semibold uppercase tracking-wide text-ink bg-gold"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 4h16v12H8l-4 4V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          Free Quote
        </Link>
      </div>
    </div>
  );
}
