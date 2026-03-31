import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const facebookPageUrl = "https://www.facebook.com/SkyNetWorldwideExpressUK";
const instagramProfileUrl = "https://www.instagram.com/skynet.uk/";

export function SocialProofSection() {
  return (
    <section className="section-grey py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="section-header-block">
          <Badge>Follow SkyNet</Badge>
          <h2 className="section-title">Follow SkyNet across the channels our customers already use.</h2>
          <p className="max-w-3xl text-[var(--text-muted)]">
            A cleaner, pitch-ready social showcase with direct access to the real profiles and a clear path for future native feed support.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="premium-card p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">Instagram</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">
              Follow SkyNet UK on Instagram
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              Visit the real profile directly on Instagram for current posts, updates, and brand activity.
            </p>

            <div className="mt-5 rounded-xl border border-[var(--border-subtle)] bg-white px-4 py-4 shadow-[0_12px_24px_-22px_rgba(8,16,26,0.28)]">
              <p className="text-sm font-semibold text-[var(--text-main)]">@skynet.uk</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                This section is intentionally honest: no fake thumbnails, no simulated live feed, just a direct route to the real profile.
              </p>
              <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">
                Live native social feed can be enabled once Meta business access is connected.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={instagramProfileUrl} variant="primary">
                View on Instagram
              </Button>
            </div>
          </article>

          <article className="premium-card p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">Facebook</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">
              SkyNet Worldwide Express UK
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              Use Facebook as a supporting touchpoint for brand presence, company updates, and customer-facing visibility.
            </p>

            <div className="mt-5 rounded-xl border border-[var(--border-subtle)] bg-white px-4 py-4 shadow-[0_12px_24px_-22px_rgba(8,16,26,0.28)]">
              <p className="text-sm font-semibold text-[var(--text-main)]">Facebook Page</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                The embedded Page Plugin has been removed in favor of a cleaner native-looking homepage section with direct outbound access.
              </p>
              <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">
                If a richer native social module is required later, it can be connected through approved platform access rather than third-party scraping.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={facebookPageUrl} variant="ghost" className="home-ghost-btn">
                Visit Facebook Page
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}