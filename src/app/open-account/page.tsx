import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { placeholderAssets } from "@/lib/placeholders";

const benefits = ["Commercial rate card", "Central billing and reporting", "Dedicated account support"];

export default function OpenAccountPage() {
  return (
    <>
      <section className="section-dark py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge className="border-white/35 bg-white/10 text-white">Open Account</Badge>
              <h1 className="section-title mt-3 text-white">Activate enterprise shipping with SkyNet GB.</h1>
              <p className="mt-3 max-w-2xl text-white/80">
                Start onboarding for business courier operations, account controls, and commercial rates.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/20">
              <PlaceholderImage
                src={placeholderAssets.pageHeroDashboard}
                fallbackSrc={placeholderAssets.fallback}
                alt="Account onboarding visual"
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
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="premium-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">Business account details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Company name" />
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Company number" />
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Primary contact" />
                <input className="rounded-md border bg-white px-3 py-2 text-sm" placeholder="Business email" />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/account-management" variant="primary">Submit Application</Button>
                <Button href="/contact" variant="secondary">Need Help?</Button>
              </div>
            </article>
            <article className="premium-card p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--brand-red)]">Account benefits</p>
              <div className="mt-3 space-y-3">
                {benefits.map((benefit) => (
                  <p key={benefit} className="rounded-md border bg-white px-3 py-2 text-sm">{benefit}</p>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-red py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="cta-command">
            <div>
              <p className="cta-kicker">Already onboard?</p>
              <h2 className="cta-title">Go directly to account management tools.</h2>
            </div>
            <div className="cta-command-actions">
              <Button href="/account-management" variant="secondary">Account Management</Button>
              <Button href="/create-shipment" variant="primary" className="shadow-none">Create Shipment</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
