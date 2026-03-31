import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

const widgets = [
  { title: "Open Shipments", value: "142" },
  { title: "In Transit", value: "89" },
  { title: "Delivered Today", value: "37" },
  { title: "Invoices Due", value: "2" },
];

export default function AccountManagementPage() {
  return (
    <>
      <section className="section-dark py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge className="border-white/35 bg-white/10 text-white">Account Management</Badge>
              <h1 className="section-title mt-3 text-white">Manage enterprise shipping in one workspace.</h1>
              <p className="mt-3 max-w-2xl text-white/80">
                Track live operations, billing posture, and shipment throughput from a unified control surface.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/20">
              <PlaceholderImage
                src={placeholderAssets.pageHeroDashboard}
                fallbackSrc={placeholderAssets.fallback}
                alt="Account dashboard visual"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="image-tag image-tag-dark">{placeholderAssets.pageHeroDashboard}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-light py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {widgets.map((widget) => (
              <article key={widget.title} className="premium-card p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-red)]">Dashboard</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.02em]">{widget.value}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{widget.title}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-grey py-12 sm:py-14 lg:py-16">
        <Container>
          <article className="premium-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">Account tools</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a href="/create-shipment" className="rounded-md border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">Create Shipment</a>
              <a href="/track" className="rounded-md border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">Track Package</a>
              <a href="/quote" className="rounded-md border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">Request Quote</a>
              <a href="/contact" className="rounded-md border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">Contact Support</a>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Operational next action</p>
              <h2 className="cta-title">Dispatch your next shipment now.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/create-shipment" variant="primary" className="shadow-none">Create Shipment</Button>
              <Button href="/open-account" variant="secondary">Add Another Account</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
