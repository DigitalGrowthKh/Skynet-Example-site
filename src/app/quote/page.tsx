import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

export default function QuotePage() {
  return (
    <>
      <section className="section-light py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge>Get a Quote</Badge>
              <h1 className="section-title mt-3">Request business shipping rates in minutes.</h1>
              <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
                Share your route and volume profile to receive a tailored commercial proposal.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
              <PlaceholderImage
                src={placeholderAssets.pageHeroServices}
                fallbackSrc={placeholderAssets.fallback}
                alt="Quote and pricing visual"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="image-tag image-tag-dark">{placeholderAssets.pageHeroServices}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-grey py-12 sm:py-14 lg:py-16">
        <Container>
          <article className="premium-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <select className="rounded-md border bg-white px-3 py-2 text-sm"><option>Service type</option><option>Domestic</option><option>International</option><option>Specialised</option></select>
              <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Monthly shipment volume" />
              <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Collection postcode" />
              <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Destination country" />
              <textarea className="sm:col-span-2 rounded-md border bg-white px-3 py-2 text-sm" rows={4} placeholder="Shipment profile" />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/open-account" variant="primary">Submit Quote Request</Button>
              <Button href="/contact" variant="secondary">Talk to Sales</Button>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Ready to onboard?</p>
              <h2 className="cta-title">Open an account and lock in agreed rates.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/open-account" variant="primary" className="shadow-none">Open Account</Button>
              <Button href="/services" variant="secondary">View Services</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
