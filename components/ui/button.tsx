import Link from "next/link";
import { ReactNode } from "react";

type Variant = "gold" | "outline-light" | "outline-dark" | "ghost-dark";

const variantClasses: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold/90",
  "outline-light": "border border-white/30 text-white hover:border-gold hover:text-gold",
  "outline-dark": "border border-ink/20 text-ink hover:border-gold hover:text-gold",
  "ghost-dark": "text-ink hover:text-gold",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors disabled:opacity-40 disabled:pointer-events-none";

export default function Button({
  href,
  variant = "gold",
  children,
  className = "",
  ariaLabel,
  onClick,
  type = "button",
  disabled = false,
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href && !disabled) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
