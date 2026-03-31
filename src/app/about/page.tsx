import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { leadershipPreview } from "@/lib/data";
import { placeholderAssets } from "@/lib/placeholders";

const pillars = [
  "UK-first operational control",
  "Global partner network connectivity",
  "Business-grade shipment governance",
];

export default function AboutPage() {
  return (
    <>
      <section className="section-light py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <Badge>About SkyNet GB</Badge>
              <h1 className="section-title">Built for enterprise courier performance.</h1>
              <p className="max-w-2xl text-[var(--text-muted)]">
                  SkyNet GB combines operational precision, global network access, and enterprise-grade shipping governance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" variant="primary">Contact SkyNet GB</Button>
                <Button href="/services" variant="secondary">Explore Services</Button>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
              <PlaceholderImage
                src={placeholderAssets.pageHeroAbout}
                fallbackSrc={placeholderAssets.fallback}
                alt="Operations placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="image-tag image-tag-dark">{placeholderAssets.pageHeroAbout}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-grey py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar} className="premium-card p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-red)]">Capability</p>
                <h2 className="mt-2 text-lg font-semibold">{pillar}</h2>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-light py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="section-header-block">
            <Badge>Leadership</Badge>
            <h2 className="section-title">Executive team</h2>
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

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Next step</p>
              <h2 className="cta-title">See the full service model and operating coverage.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/services" variant="primary" className="shadow-none">View Services</Button>
              <Button href="/quote" variant="secondary">Request a Quote</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
