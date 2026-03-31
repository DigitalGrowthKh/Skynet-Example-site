import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { navItems, siteMetadata } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { placeholderAssets } from "@/lib/placeholders";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-white/88 shadow-[0_10px_35px_-32px_rgba(16,24,40,0.65)] backdrop-blur-xl">
      <Container>
        <div className="header-line"></div>
        <div className="flex h-20 items-center justify-between gap-4 lg:gap-6">
          <Link href="/" className="group inline-flex min-w-0 items-center gap-3 lg:gap-4">
            <span className="relative h-11 w-[152px] shrink-0 lg:h-12 lg:w-[176px]">
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
            <span className="min-w-0">
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-main)] transition-colors duration-200 group-hover:text-[var(--brand-red)]">
                {siteMetadata.brandName}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
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

          <div className="flex items-center gap-2">
            <Button href="/track" variant="ghost" size="sm" className="hidden sm:inline-flex">
              Track
            </Button>
            <Button href="/open-account" variant="primary" size="sm">
              Open an Account
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
