import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

export default function CreateShipmentPage() {
  return (
    <>
      <section className="section-light py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge>Create Shipment</Badge>
              <h1 className="section-title mt-3">Book a consignment with guided service controls.</h1>
              <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
                Set service level, route details, and dispatch preferences from a single booking interface.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
              <PlaceholderImage
                src={placeholderAssets.pageHeroServices}
                fallbackSrc={placeholderAssets.fallback}
                alt="Shipment booking visual"
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
              <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Collection location" />
              <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Destination" />
              <select className="rounded-md border bg-white px-3 py-2 text-sm"><option>Service</option><option>Domestic Priority</option><option>International Express</option><option>Specialised</option></select>
              <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Parcel count" />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/track" variant="primary">Confirm Booking</Button>
              <Button href="/quote" variant="secondary">Get Pricing</Button>
              <Button href="/track" variant="ghost">Track Existing</Button>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Need account setup first?</p>
              <h2 className="cta-title">Open a business account before dispatch.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/open-account" variant="secondary">Open Account</Button>
              <Button href="/contact" variant="primary" className="shadow-none">Contact Operations</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
