import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

const focusAreas = ["High-value consignments", "Regulated sector handling", "Time-critical mission routes"];

export default function SpecialisedPage() {
  return (
    <>
      <section className="section-dark py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-5">
              <Badge className="border-white/35 bg-white/10 text-white">Specialised Logistics</Badge>
              <h1 className="section-title text-white">Specialised logistics for sensitive business shipments.</h1>
              <p className="text-white/80">Dedicated handling procedures, restricted-chain controls, and priority support for critical cargo.</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" variant="primary">Speak to Specialist Team</Button>
                <Button href="/quote" variant="ghost" className="hero-ghost-btn">Request Pricing</Button>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/20">
              <PlaceholderImage
                src={placeholderAssets.pageHeroSpecialised}
                fallbackSrc={placeholderAssets.serviceSpecialised}
                alt="Specialised logistics placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="image-tag image-tag-dark">{placeholderAssets.pageHeroSpecialised}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-light py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area} className="premium-card p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-red)]">Focus area</p>
                <h2 className="mt-2 text-lg font-semibold">{area}</h2>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Specialist route design</p>
              <h2 className="cta-title">Plan a protected movement with SkyNet GB.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/contact" variant="secondary">Contact Team</Button>
              <Button href="/open-account" variant="ghost" className="hero-ghost-btn">Open Account</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
