import { ReactNode } from "react";

export default function Marquee({ children, duration = 40 }: { children: ReactNode; duration?: number }) {
  const fade = "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

  return (
    <div className="overflow-hidden" style={{ maskImage: fade, WebkitMaskImage: fade }}>
      <div className="marquee-track flex w-max" style={{ animationDuration: `${duration}s` }}>
        <div className="flex shrink-0 items-center gap-10 pr-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}