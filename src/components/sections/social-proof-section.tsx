import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const facebookPageUrl = "https://www.facebook.com/SkyNetWorldwideExpressUK";
const facebookEmbedUrl =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSkyNetWorldwideExpressUK&tabs=timeline&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
const instagramProfileUrl = "https://www.instagram.com/skynetsouthafrica/";

export function SocialProofSection() {
  return (
    <section className="section-grey py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="section-header-block">
          <Badge>Follow SkyNet</Badge>
          <h2 className="section-title">See more from SkyNet across our social channels.</h2>
          <p className="max-w-3xl text-[var(--text-muted)]">
            A simple, honest social section for live brand presence today, with room for deeper platform integrations later.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="premium-card overflow-hidden p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">Facebook</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">
                  SkyNet Worldwide Express UK
                </h3>
              </div>
              <Button href={facebookPageUrl} variant="ghost" size="sm" className="shrink-0">
                Visit Page
              </Button>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-white">
              <iframe
                title="SkyNet Worldwide Express UK Facebook Page"
                src={facebookEmbedUrl}
                width="100%"
                height="520"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </article>

          <article className="premium-card p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-red)]">Instagram</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">
              Follow SkyNet South Africa on Instagram
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              This profile can be viewed directly on Instagram for recent posts, stories, and day-to-day brand activity.
            </p>

            <div className="mt-5 rounded-xl border border-[var(--border-subtle)] bg-white px-4 py-4">
              <p className="text-sm font-semibold text-[var(--text-main)]">@skynetsouthafrica</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                We are intentionally linking to the real profile here instead of showing a fake feed preview.
              </p>
              <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">
                Note: a custom live Instagram feed on this site would require Meta-approved access and a supported integration path.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
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