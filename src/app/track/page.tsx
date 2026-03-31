import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const updates = [
  { time: "08:15", status: "Collected at London Gateway" },
  { time: "11:40", status: "In transit to Midlands hub" },
  { time: "14:20", status: "Arrived at destination gateway" },
  { time: "Out for delivery", status: "Estimated delivery by 18:00" },
];

export default function TrackPage() {
  return (
    <>
      <section className="section-dark py-14 sm:py-16 lg:py-20">
        <Container>
          <Badge className="border-white/35 bg-white/10 text-white">Track Package</Badge>
          <h1 className="section-title mt-3 text-white">Real-time shipment visibility.</h1>
          <p className="mt-3 max-w-2xl text-white/80">Live milestone tracking with clear delivery confidence for enterprise consignments.</p>
        </Container>
      </section>

      <section className="section-light py-12 sm:py-14 lg:py-16">
        <Container>
          <article className="premium-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <input className="rounded-md border bg-white px-3 py-3 text-sm" placeholder="Enter tracking number (e.g. SKY123456789GB)" />
              <Button href="/track" variant="primary">Track</Button>
            </div>
            <div className="mt-6 grid gap-3">
              {updates.map((update) => (
                <div key={update.time} className="rounded-md border bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--brand-red)]">{update.time}</p>
                  <p className="mt-1 text-sm font-medium">{update.status}</p>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Need help with this shipment?</p>
              <h2 className="cta-title">Create a new shipment or contact operations.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/create-shipment" variant="primary" className="shadow-none">Create Shipment</Button>
              <Button href="/contact" variant="secondary">Contact Team</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
