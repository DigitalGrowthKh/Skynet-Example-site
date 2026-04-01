"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { navItems, siteMetadata } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { placeholderAssets } from "@/lib/placeholders";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-[90] border-b border-[var(--border-subtle)] bg-white/88 shadow-[0_10px_35px_-32px_rgba(16,24,40,0.65)] backdrop-blur-xl">
      <Container>
        <div className="header-line"></div>
        <div className="relative z-[95] flex h-20 items-center justify-between gap-3 lg:gap-6">
          <Link href="/" className="group inline-flex min-w-0 items-center gap-2 sm:gap-3 lg:gap-4">
            <span className="relative h-10 w-[124px] shrink-0 sm:h-11 sm:w-[152px] lg:h-12 lg:w-[176px]">
              <PlaceholderImage
                src="/skynet-website-logo.webp"
                fallbackSrc={placeholderAssets.fallback}
                alt="SkyNet logo"
                fill
                sizes="(max-width: 1024px) 152px, 176px"
                className="object-contain object-left"
                priority
              />
            </span>
            <span className="hidden min-w-0 md:block">
              <span className="block truncate text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-main)] transition-colors duration-200 group-hover:text-[var(--brand-red)] sm:text-sm sm:tracking-[0.2em]">
                {siteMetadata.brandName}
              </span>
              <span className="block truncate text-[9px] uppercase tracking-[0.12em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.14em]">
                GB Express Logistics
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--brand-red)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button href="/track" variant="ghost" size="sm" className="hidden sm:inline-flex">
              Track
            </Button>
            <Button href="/open-account" variant="primary" size="sm">
              Open an Account
            </Button>
          </div>

          <button
            type="button"
            className="relative z-[110] inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-white/80 text-[var(--text-main)] transition-colors duration-200 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red)]/55 focus-visible:ring-offset-2 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileMenuOpen ? (
                <path d="M6 6L18 18M18 6L6 18" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" />
              )}
            </svg>
          </button>

          {mobileMenuOpen ? (
            <>
              <button
                type="button"
                aria-label="Close menu overlay"
                className="fixed inset-0 z-[85] bg-black/30 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <div
                id="mobile-navigation-panel"
                className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[100] md:hidden"
              >
                <div className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border border-[var(--border-subtle)] bg-white p-4 shadow-[0_20px_38px_-24px_rgba(16,24,40,0.65)]">
                  <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium leading-snug text-[var(--text-main)] transition-colors duration-200 hover:bg-[var(--grey-050)] hover:text-[var(--brand-red)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="break-words">{item.label}</span>
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-4 grid grid-cols-1 gap-2">
                    <Button
                      href="/track"
                      variant="ghost"
                      size="sm"
                      className="w-full justify-center whitespace-normal px-3 text-center leading-tight"
                    >
                      Track Package
                    </Button>
                    <Button
                      href="/open-account"
                      variant="primary"
                      size="sm"
                      className="w-full justify-center whitespace-normal px-3 text-center leading-tight"
                    >
                      Open an Account
                    </Button>
                    <Button
                      href="/create-shipment"
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center whitespace-normal px-3 text-center leading-tight"
                    >
                      Create a Shipment
                    </Button>
                    <Button
                      href="/services"
                      variant="ghost"
                      size="sm"
                      className="w-full justify-center whitespace-normal px-3 text-center leading-tight"
                    >
                      Explore Services
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
