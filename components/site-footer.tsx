import Link from "next/link";
import LogoMark from "@/components/ui/logo-mark";
import Container from "@/components/ui/container";
import { company, footerNav, socialLinks, serviceAreas } from "@/lib/site-config";

const socialIcons: { key: keyof typeof socialLinks; label: string; path: string }[] = [
  {
    key: "facebook",
    label: "Facebook",
    path: "M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9.5V11H9v2.5h1.5V19h2.5v-5.5h1.8l.3-2.5h-2.1v-1.2c0-.6.3-.8.5-.8Z",
  },
  {
    key: "instagram",
    label: "Instagram",
    path: "M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm0 6.1a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm4.7-6.9a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0ZM20 8.1c-.06-1.2-.33-2.27-1.2-3.14C17.93 4.1 16.86 3.83 15.66 3.77 14.42 3.7 9.58 3.7 8.34 3.77c-1.2.06-2.27.33-3.14 1.2C4.33 5.83 4.06 6.9 4 8.1 3.94 9.34 3.94 14.18 4 15.42c.06 1.2.33 2.27 1.2 3.14.87.87 1.94 1.14 3.14 1.2 1.24.07 6.08.07 7.32 0 1.2-.06 2.27-.33 3.14-1.2.87-.87 1.14-1.94 1.2-3.14.07-1.24.07-6.08 0-7.32ZM18.4 16.7c-.26.66-.77 1.17-1.43 1.43-1 .4-3.36.3-4.97.3s-3.98.1-4.97-.3a2.5 2.5 0 0 1-1.43-1.43c-.4-1-.3-3.36-.3-4.97s-.1-3.98.3-4.97c.26-.66.77-1.17 1.43-1.43 1-.4 3.36-.3 4.97-.3s3.98-.1 4.97.3c.66.26 1.17.77 1.43 1.43.4 1 .3 3.36.3 4.97s.1 3.98-.3 4.97Z",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    path: "M6.94 8.5H4.56V19h2.38V8.5ZM5.75 4.5a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76ZM19.5 19h-2.38v-5.4c0-1.29-.46-2.16-1.6-2.16-.88 0-1.4.59-1.63 1.16-.08.2-.1.49-.1.77V19h-2.38s.03-9.5 0-10.5h2.38v1.49c.32-.49.89-1.19 2.16-1.19 1.58 0 2.76 1.03 2.76 3.25V19Z",
  },
  {
    key: "tiktok",
    label: "TikTok",
    path: "M16.6 5.1c.5.9 1.3 1.6 2.4 1.9v2.3a5.7 5.7 0 0 1-2.4-.6v5.6a4.7 4.7 0 1 1-4.7-4.7c.2 0 .4 0 .6.02v2.4a2.3 2.3 0 1 0 1.9 2.27V3h2.2c0 .7.02 1.4 0 2.1Z",
  },
  {
    key: "youtube",
    label: "YouTube",
    path: "M21.5 8.5s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.85C15.9 5.4 12 5.4 12 5.4h0s-3.9 0-6.7.25c-.4.05-1.2.05-2 .85-.6.6-.8 2-.8 2S2.3 10 2.3 11.6v1.3C2.3 14.5 2.5 16 2.5 16s.2 1.4.8 2c.8.8 1.85.77 2.3.86 1.7.16 7.4.2 7.4.2s3.9 0 6.7-.25c.4-.05 1.2-.05 2-.85.6-.6.8-2 .8-2s.2-1.5.2-3.1v-1.3c0-1.6-.2-3.1-.2-3.1ZM10 14.4V8.9l5.2 2.75L10 14.4Z",
  },
];

export default function SiteFooter() {
  const activeSocials = (Object.keys(socialLinks) as (keyof typeof socialLinks)[]).filter((key) => socialLinks[key]);

  return (
    <footer className="bg-ink text-white seam">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <LogoMark className="h-10" />
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">{company.description}</p>
            {activeSocials.length > 0 ? (
              <div className="flex items-center gap-3 pt-2">
                {activeSocials.map((key) => {
                  const icon = socialIcons.find((s) => s.key === key)!;
                  return (
                    <a
                      key={key}
                      href={socialLinks[key]}
                      aria-label={icon.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-gold hover:text-gold transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d={icon.path} />
                      </svg>
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="pt-2 text-white/50 text-sm font-semibold uppercase tracking-[0.14em]">Service Areas</li>
              {serviceAreas.map((area) => (
                <li key={area.abbr}>{area.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-xs text-white/45 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
