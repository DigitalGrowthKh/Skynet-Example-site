import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { LeadershipCarousel } from "@/components/sections/leadership-carousel";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import {
  credibilityStats,
  finalCta,
  footerLinkGroups,
  heroContent,
  leadershipPreview,
  networkRegionalHubs,
  serviceCards,
  siteMetadata,
} from "@/lib/data";
import {
  getServicePlaceholder,
  placeholderAssets,
} from "@/lib/placeholders";

const heroQuickActions = [
  { title: "Track Package", detail: "Live status and milestones", href: "/track" },
  { title: "Get a Quote", detail: "Fast business pricing", href: "/quote" },
  { title: "Open an Account", detail: "Enterprise onboarding", href: "/open-account" },
  { title: "Create Shipment", detail: "Book in under 2 minutes", href: "/create-shipment" },
];

const serviceIcons: Record<string, string> = {
  domestic: "UK",
  international: "INT",
  ecommerce: "EC",
  specialised: "SP",
};

export default function Home() {
  return (
    <>
      <section className="hero-stage section-top">
        <Container>
          <div className="hero-shell">
            <div className="hero-image-wrap">
              <PlaceholderImage
                src={placeholderAssets.heroGlobal}
                fallbackSrc={placeholderAssets.fallback}
                alt="Global logistics network placeholder"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="hero-overlay" />
            </div>

            <div className="hero-content-wrap">
              <div className="hero-main animate-enter" style={{ animationDelay: "50ms" }}>
                <Badge>{heroContent.eyebrow}</Badge>
                <h1 className="hero-heading">Trusted courier services for everyday business shipping.</h1>
                <p className="hero-copy">
                  Reliable UK operations, international reach, and practical support to keep your deliveries moving.
                </p>

                <div className="hero-cta-row">
                  <Button href={heroContent.supportingAction.href} variant="primary">
                    Track Package
                  </Button>
                  <Button href={heroContent.primaryAction.href} variant="secondary">
                    Open an Account
                  </Button>
                  <Button href={heroContent.secondaryAction.href} variant="ghost" className="hero-ghost-btn home-ghost-btn">
                    Create a Shipment
                  </Button>
                </div>
              </div>

              <aside className="hero-control-panel animate-enter" style={{ animationDelay: "120ms" }}>
                <p className="hero-panel-label">Quick Actions</p>
                <div className="hero-action-grid">
                  {heroQuickActions.map((action) => (
                    <a key={action.title} href={action.href} className="lux-action-card group">
                      <p className="text-sm font-semibold text-[var(--text-main)]">{action.title}</p>
                      <p className="mt-1 text-xs text-[var(--text-muted)]">{action.detail}</p>
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-grey py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="section-header-block">
            <Badge>Services</Badge>
            <h2 className="section-title">Core services, built for speed and reliability</h2>
          </div>

          <div className="service-mosaic">
            {serviceCards.map((service) => {
              const key = service.category.toLowerCase();
                  const imageSrc = getServicePlaceholder(key);
              const badgeText = serviceIcons[key] ?? "SRV";
              return (
                <article key={service.title} className="service-super-card group">
                  <div className="service-super-media">
                        <PlaceholderImage
                      src={imageSrc}
                          fallbackSrc={placeholderAssets.fallback}
                      alt={`${service.title} placeholder`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="service-super-overlay" />
                    <span className="service-super-icon">{badgeText}</span>
                  </div>
                  <div className="service-super-body">
                    <p className="service-kicker">{service.category}</p>
                    <h3 className="service-title">{service.title}</h3>
                    <a href={service.href} className="service-link-strong">
                      Explore service
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-light py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="network-stage">
            <div className="network-left">
              <Badge>Network and Coverage</Badge>
              <h2 className="section-title">Coverage you can trust, from local routes to global lanes.</h2>
              <p className="max-w-2xl text-[var(--text-muted)]">
                SkyNet combines strong UK operations with established international gateways, helping businesses ship with confidence.
              </p>

              <div className="network-map-frame">
                <PlaceholderImage
                  src={placeholderAssets.networkMap}
                  fallbackSrc={placeholderAssets.fallback}
                  alt="Global network map placeholder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover opacity-85"
                />
                <div className="network-map-overlay" />
              </div>
            </div>

            <div className="network-right">
              <div className="grid gap-3 sm:grid-cols-2">
                {credibilityStats.slice(0, 2).map((stat) => (
                  <article key={stat.label} className="premium-card p-5">
                    <p className="text-2xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">{stat.value}</p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
                  </article>
                ))}
              </div>

              <div className="grid gap-3">
                <article className="premium-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">UK Hubs</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {networkRegionalHubs.ukHubs.map((hub) => (
                      <span key={hub} className="hub-chip">
                        {hub}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="premium-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">Global Gateways</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {networkRegionalHubs.globalGateways.map((hub) => (
                      <span key={hub} className="hub-chip">
                        {hub}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SocialProofSection />

      <section className="section-light py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="section-header-block">
            <Badge>Leadership</Badge>
            <h2 className="section-title">Leadership driving operational excellence</h2>
          </div>

          <LeadershipCarousel profiles={leadershipPreview.profiles} />
        </Container>
      </section>

      <section className="section-light py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="cta-command home-cta section-divider">
            <div>
              <p className="cta-kicker">Ready to ship?</p>
              <h2 className="cta-title">{finalCta.title}</h2>
            </div>
            <div className="cta-command-actions">
              <Button href={heroContent.supportingAction.href} variant="primary" className="shadow-none">
                Track Package
              </Button>
              <Button href={finalCta.primaryAction.href} variant="secondary">
                Open an Account
              </Button>
              <Button href={heroContent.secondaryAction.href} variant="ghost" className="hero-ghost-btn home-ghost-btn">
                Create a Shipment
              </Button>
              <Button href="/services" variant="ghost" className="hero-ghost-btn home-ghost-btn">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="footer-shell py-12 sm:py-14">
        <Container>
          <div className="footer-grid-premium">
            <div className="lg:col-span-2">
              <div className="relative h-12 w-[188px] lg:h-14 lg:w-[220px]">
                <PlaceholderImage
                  src="/skynet-website-logo.webp"
                  fallbackSrc={placeholderAssets.fallback}
                  alt="SkyNet logo"
                  fill
                  sizes="(max-width: 1024px) 188px, 220px"
                  className="object-contain object-left"
                />
              </div>
              <p className="footer-sub">Trusted business shipping across the UK and global network routes.</p>
              <div className="footer-contact">
                <span>{siteMetadata.contactNumber}</span>
                <span>{siteMetadata.supportEmail}</span>
              </div>
            </div>

            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <p className="footer-group-title">{group.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </footer>
    </>
  );
}
