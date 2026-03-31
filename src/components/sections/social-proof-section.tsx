import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FacebookEmbeddedPost } from "@/components/ui/facebook-embedded-post";

const facebookPageUrl = "https://www.facebook.com/SkyNetWorldwideExpressUK";
const instagramProfileUrl = "https://www.instagram.com/skynet.uk/";

const facebookPostUrls = [
  "https://www.facebook.com/SkyNetWorldwideExpressUK/photos/your-logistics-provider-should-operate-as-an-extension-of-your-business-not-a-va/1500428472087295/",
  "https://www.facebook.com/SkyNetWorldwideExpressUK/photos/-see-you-in-berlinin-february-skynet-worldwide-express-will-be-at-the-e-commerce/1476401351156674/",
  "https://www.facebook.com/SkyNetWorldwideExpressUK/photos/eid-mubarak-skynet-worldwide-express-extends-warm-wishes-to-all-colleagues-partn/1518955466901262/",
];

export function SocialProofSection() {
  return (
    <section className="section-grey py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="section-header-block">
          <Badge>Follow SkyNet</Badge>
          <h2 className="section-title">Follow SkyNet across the channels our customers already use.</h2>
          <p className="max-w-3xl text-[var(--text-muted)]">
            Real public Facebook content is embedded below, while Instagram remains an honest access point until Meta-connected native feed support is enabled.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* ── Facebook — real embedded public posts ─────────────────────── */}
          <article className="premium-card p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">
                  Facebook
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">
                  Public posts from SkyNet Worldwide Express UK
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">
                  A curated selection of real public Facebook posts — not an auto-syncing live feed.
                </p>
              </div>
              <Button
                href={facebookPageUrl}
                variant="ghost"
                size="sm"
                className="home-ghost-btn shrink-0"
              >
                Visit Facebook Page
              </Button>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {facebookPostUrls.map((postUrl, index) => (
                <FacebookEmbeddedPost
                  key={postUrl}
                  postUrl={postUrl}
                  title={`SkyNet UK Facebook post ${index + 1}`}
                />
              ))}
            </div>
          </article>

          {/* ── Instagram — honest access-pending card ────────────────────── */}
          <article className="premium-card p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">
              Instagram
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">
              Follow SkyNet UK on Instagram
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              Visit our Instagram profile for real-time updates, brand stories, and industry insights from the SkyNet team.
            </p>

            <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
              <p className="text-sm font-semibold text-[var(--text-main)]">@skynet.uk</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                A live embedded feed can be enabled once Meta business access is connected. For now, visit our profile directly to see our latest posts.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={instagramProfileUrl} variant="primary">
                View on Instagram
              </Button>
              <Button href={facebookPageUrl} variant="ghost" className="home-ghost-btn">
                Explore Facebook
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}