import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

export default function ContactPage() {
  return (
    <>
      <section className="section-light py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge>Contact</Badge>
              <h1 className="section-title mt-3">Talk to the SkyNet GB enterprise team.</h1>
              <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
                Contact sales or operations for domestic, international, and specialised service planning.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
              <PlaceholderImage
                src={placeholderAssets.pageHeroContact}
                fallbackSrc={placeholderAssets.fallback}
                alt="Contact operations visual"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="image-tag image-tag-dark">{placeholderAssets.pageHeroContact}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-grey py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="premium-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">Send an enquiry</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Company name" />
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Work email" />
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Phone" />
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Service needed" />
                <textarea className="sm:col-span-2 rounded-md border bg-white px-3 py-2 text-sm" rows={4} placeholder="Brief requirement" />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/quote" variant="primary">Submit Enquiry</Button>
                <Button href="/quote" variant="secondary">Request Quote</Button>
              </div>
            </article>

            <article className="premium-card p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-red)]">Enterprise desk</p>
              <p className="mt-2 text-lg font-semibold">+44 (0)20 0000 0000</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">enterprise@skynetgb.com</p>
              <div className="mt-5 space-y-3 text-sm text-[var(--text-muted)]">
                <p>London Gateway operations</p>
                <p>Mon-Fri 07:00 to 20:00</p>
                <p>Priority support for account clients</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Fast route to action</p>
              <h2 className="cta-title">Need immediate shipment support?</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/create-shipment" variant="primary" className="shadow-none">Create Shipment</Button>
              <Button href="/track" variant="secondary">Track Package</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
