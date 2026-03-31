import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

const lanes = ["Next-day business delivery", "Timed city lanes", "Secure collection windows"];

export default function DomesticPage() {
  return (
    <>
      <section className="section-light py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-5">
              <Badge>Domestic UK</Badge>
              <h1 className="section-title">Domestic delivery engineered for business continuity.</h1>
              <p className="text-[var(--text-muted)]">Reliable national coverage with premium service controls and transparent milestone tracking.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/create-shipment" variant="primary">Create Shipment</Button>
                <Button href="/track" variant="secondary">Track Package</Button>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
              <PlaceholderImage
                src={placeholderAssets.pageHeroDomestic}
                fallbackSrc={placeholderAssets.serviceDomestic}
                alt="Domestic service placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="image-tag image-tag-dark">{placeholderAssets.pageHeroDomestic}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-grey py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {lanes.map((lane) => (
              <article key={lane} className="premium-card p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-red)]">Service lane</p>
                <h2 className="mt-2 text-lg font-semibold">{lane}</h2>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Domestic operations</p>
              <h2 className="cta-title">Scale UK delivery with enterprise controls.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/open-account" variant="secondary">Open Account</Button>
              <Button href="/quote" variant="ghost" className="hero-ghost-btn">Get Quote</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
