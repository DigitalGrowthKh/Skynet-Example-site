import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

const features = ["Cross-border customs guidance", "Priority lane options", "Door-to-door visibility"];

export default function InternationalPage() {
  return (
    <>
      <section className="section-dark py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-5">
              <Badge className="border-white/35 bg-white/10 text-white">International</Badge>
              <h1 className="section-title text-white">International shipping with operational certainty.</h1>
              <p className="text-white/80">Global movement with local accountability for high-value business consignments.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/quote" variant="primary">Get a Quote</Button>
                <Button href="/create-shipment" variant="ghost" className="hero-ghost-btn">Create Shipment</Button>
              </div>
            </div>
            <div className="network-map-frame min-h-[280px]">
                <PlaceholderImage
                  src={placeholderAssets.pageHeroInternational}
                  fallbackSrc={placeholderAssets.networkMap}
                  alt="Global map placeholder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              <div className="network-map-overlay" />
                <span className="image-tag image-tag-dark">{placeholderAssets.pageHeroInternational}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-light py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature} className="premium-card p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-red)]">International capability</p>
                <h2 className="mt-2 text-lg font-semibold">{feature}</h2>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">International desk</p>
              <h2 className="cta-title">Talk to our cross-border operations team.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/contact" variant="secondary">Speak to Sales</Button>
              <Button href="/open-account" variant="ghost" className="hero-ghost-btn">Open Account</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
