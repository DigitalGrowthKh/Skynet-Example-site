import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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
                priority
              />
              <div className="hero-overlay" />
              <div className="hero-gridlines" aria-hidden="true" />
              <div className="hero-routes" aria-hidden="true" />
            </div>

            <div className="hero-content-wrap">
              <div className="hero-main animate-enter" style={{ animationDelay: "50ms" }}>
                <Badge className="border-white/35 bg-white/10 text-white">{heroContent.eyebrow}</Badge>
                <h1 className="hero-heading">Delivering enterprise shipping at global scale.</h1>
                <p className="hero-copy">
                  Trusted UK operations. International reach. Built for business-critical logistics.
                </p>

                <div className="hero-cta-row">
                  <Button href={heroContent.supportingAction.href} variant="primary">
                    Track Package
                  </Button>
                  <Button href={heroContent.primaryAction.href} variant="secondary">
                    Open an Account
                  </Button>
                  <Button href={heroContent.secondaryAction.href} variant="ghost" className="hero-ghost-btn">
                    Create a Shipment
                  </Button>
                </div>
              </div>

              <aside className="hero-control-panel animate-enter" style={{ animationDelay: "120ms" }}>
                <p className="hero-panel-label">Quick Controls</p>
                <div className="hero-action-grid">
                  {heroQuickActions.map((action) => (
                    <a key={action.title} href={action.href} className="lux-action-card group">
                      <p className="text-sm font-semibold text-white">{action.title}</p>
                      <p className="mt-1 text-xs text-white/75">{action.detail}</p>
                      <span className="lux-action-dot" />
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-grey py-14 sm:py-16 lg:py-20">
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
                    <span className="image-tag image-tag-dark">{imageSrc}</span>
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

      <section className="section-dark py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="network-stage">
            <div className="network-left">
              <Badge className="border-white/30 bg-white/10 text-white">Global Network</Badge>
              <h2 className="section-title text-white">Scale you can see. Coverage you can trust.</h2>

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
                <span className="image-tag image-tag-dark">{placeholderAssets.networkMap}</span>
              </div>
            </div>

            <div className="network-right">
              <div className="stats-grid-bold">
                {credibilityStats.map((stat) => (
                  <article key={stat.label} className="stat-card stat-card-spotlight">
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </article>
                ))}
              </div>

              <div className="network-chip-panels">
                <article className="premium-card premium-card-dark p-5">
                  <p className="panel-label">UK Hubs</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {networkRegionalHubs.ukHubs.map((hub) => (
                      <span key={hub} className="hub-chip hub-chip-dark">
                        {hub}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="premium-card premium-card-dark p-5">
                  <p className="panel-label">Global Gateways</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {networkRegionalHubs.globalGateways.map((hub) => (
                      <span key={hub} className="hub-chip hub-chip-dark">
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

      <section className="section-light py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="section-header-block">
            <Badge>Leadership</Badge>
            <h2 className="section-title">Leadership driving operational excellence</h2>
          </div>

          <div className="leadership-grid-premium">
            {leadershipPreview.profiles.map((profile) => (
              <article key={profile.name} className="leader-card-premium group">
                <div className="leader-media-premium">
                  <PlaceholderImage
                    src={`/${profile.image}`}
                    fallbackSrc={placeholderAssets.fallback}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="leader-portrait transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="leader-overlay" />
                  <span className="image-tag image-tag-dark">{`/${profile.image}`}</span>
                </div>
                <div className="leader-body">
                  <p className="leader-name">{profile.name}</p>
                  <p className="leader-role">{profile.role}</p>
                  <p className="leader-bio">{profile.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-red py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="cta-command section-divider">
            <div>
              <p className="cta-kicker">Move with confidence</p>
              <h2 className="cta-title">{finalCta.title}</h2>
            </div>
            <div className="cta-command-actions">
              <Button href={heroContent.supportingAction.href} variant="primary" className="shadow-none">
                Track Package
              </Button>
              <Button href={finalCta.primaryAction.href} variant="secondary">
                Open an Account
              </Button>
              <Button href={heroContent.secondaryAction.href} variant="ghost" className="hero-ghost-btn">
                Create a Shipment
              </Button>
              <Button href="/services" variant="ghost" className="hero-ghost-btn">
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
