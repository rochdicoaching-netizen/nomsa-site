"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" className="size-9 text-teal-800" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path
        d="M20 30V16m0 0c0-4-3-6.5-6.5-6.5S9 12.5 10.5 16c1 2.3 3.8 3 5.7 2m3.8-2c0-4 3-6.5 6.5-6.5S31 12.5 29.5 16c-1 2.3-3.8 3-5.7 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="31" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenGroup(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-grey-200/80 bg-white/90 backdrop-blur-md"
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${siteConfig.shortName}, home`}>
          <BrandMark />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-semibold text-teal-900 sm:text-xl">
              Dr Nomsa Ntshingila
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-sage-700">
              Psychological Services
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((group) => {
              const hasChildren = group.links.length > 0;
              const isOpen = openGroup === group.label;
              const isActive = group.href === "/" ? pathname === "/" : pathname.startsWith(group.href ?? "#");

              return (
                <li key={group.label} className="relative">
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenGroup(isOpen ? null : group.label);
                      }}
                      className={cn(
                        "flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-teal-50 hover:text-teal-800",
                        isActive ? "text-teal-800" : "text-charcoal/80",
                      )}
                    >
                      {group.label}
                      <ChevronDown
                        className={cn("size-3.5 transition-transform duration-200", isOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      href={group.href ?? "#"}
                      className={cn(
                        "block rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-teal-50 hover:text-teal-800",
                        isActive ? "text-teal-800" : "text-charcoal/80",
                      )}
                    >
                      {group.label}
                    </Link>
                  )}

                  {hasChildren ? (
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-20 w-96 -translate-x-1/2 pt-3 transition-all duration-200 ease-out",
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0",
                      )}
                    >
                      <div className="overflow-hidden rounded-2xl border border-grey-200 bg-white p-2 shadow-xl shadow-teal-900/10">
                        {group.href ? (
                          <Link
                            href={group.href}
                            className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-50"
                          >
                            View all {group.label.toLowerCase()} →
                          </Link>
                        ) : null}
                        <ul className="grid gap-0.5">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="block rounded-xl px-4 py-2.5 transition-colors duration-150 hover:bg-teal-50"
                              >
                                <span className="block text-sm font-medium text-charcoal">{link.label}</span>
                                {link.description ? (
                                  <span className="block text-xs text-charcoal/55">{link.description}</span>
                                ) : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-charcoal/70 transition-colors hover:text-teal-800"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Button href="/contact#book" variant="primary" className="px-5 py-2.5">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2.5 text-teal-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={(e) => {
            e.stopPropagation();
            setMobileOpen((v) => !v);
          }}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-t border-grey-200 bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((group) => (
              <div key={group.label} className="border-b border-grey-100 py-1 last:border-none">
                <Link
                  href={group.href ?? "#"}
                  className="block px-2 py-2.5 text-sm font-semibold text-teal-900"
                >
                  {group.label}
                </Link>
                {group.links.length > 0 ? (
                  <ul className="mb-1 grid gap-0.5 pl-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-2 py-2 text-sm text-charcoal/70 transition-colors hover:bg-teal-50 hover:text-teal-800"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 px-2 text-sm font-medium text-charcoal/70">
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <Button href="/contact#book" variant="primary" className="w-full">
                Book Appointment
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
