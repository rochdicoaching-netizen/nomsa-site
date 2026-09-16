import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig, footerColumns, emergencyNotice } from "@/lib/site-config";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.94 1.42-3.94 4.03V10H7.7v3.1h2.7v8h3.1Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="font-heading text-xl font-semibold text-white">
            Dr Nomsa Ntshingila
          </Link>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-sage-500">
            Psychological Services
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.tagline} Evidence-based therapy, coaching and organizational
            consulting, {siteConfig.company}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: FacebookIcon, label: "Facebook" },
              { icon: InstagramIcon, label: "Instagram" },
              { icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-600 hover:text-white"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
            Let&apos;s Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-sage-500" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-sage-500" aria-hidden="true" />
              <a href={siteConfig.emailHref} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sage-500" aria-hidden="true" />
              <span>{siteConfig.location}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-xs leading-relaxed text-white/50">
          {emergencyNotice}
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            <Link href="/legal/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/legal/cookie-policy" className="hover:text-white">Cookie Policy</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
