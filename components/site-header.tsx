"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import LogoMark from "@/components/ui/logo-mark";
import { primaryNav } from "@/lib/site-config";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu on route change. This is a deliberate exception to
  // the "no setState in effect" rule — there's no prop/key to derive this
  // from, since the route itself lives outside React's props tree.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate: closing the menu on route change has no prop/key to derive from.
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-ink"
      }`}
    >
      <Container className="flex items-center justify-between h-[72px]">
        <Link href="/" className="shrink-0" aria-label="KC Group home">
          <LogoMark className="h-10" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-white/85 hover:text-gold"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/quote" variant="gold">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-md text-white"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-ink transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Container className="flex flex-col gap-1 pt-6 overflow-y-auto h-full pb-24">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-lg font-display font-medium text-white/90 border-b border-white/10 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <Button href="/quote" variant="gold" className="w-full" onClick={() => setMenuOpen(false)}>
              Get a Free Quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
