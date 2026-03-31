import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { getServicePlaceholder, placeholderAssets } from "@/lib/placeholders";

const services = [
  { title: "Domestic", href: "/domestic", image: getServicePlaceholder("domestic") },
  { title: "International", href: "/international", image: getServicePlaceholder("international") },
  { title: "Specialised", href: "/specialised", image: getServicePlaceholder("specialised") },
  { title: "Ecommerce", href: "#ecommerce", image: getServicePlaceholder("ecommerce") },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-light py-14 sm:py-16 lg:py-20">
        <Container>
          <Badge>Services</Badge>
          <h1 className="section-title mt-3">End-to-end courier and logistics services.</h1>
          <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
            Designed for business-critical domestic delivery, international shipping, ecommerce flows, and specialised handling.
          </p>
        </Container>
      </section>

      <section className="section-grey py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="service-mosaic">
            {services.map((service) => (
              <article key={service.title} className="service-super-card group">
                <div className="service-super-media">
                  <PlaceholderImage
                    src={service.image}
                    fallbackSrc={placeholderAssets.fallback}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="service-super-overlay" />
                  <span className="image-tag image-tag-dark">{service.image}</span>
                </div>
                <div className="service-super-body">
                  <p className="service-kicker">Service</p>
                  <h2 className="service-title">{service.title}</h2>
                  <a href={service.href} className="service-link-strong">Explore</a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="ecommerce" className="section-light py-12 sm:py-14 lg:py-16">
        <Container>
          <article className="premium-card p-6 sm:p-8">
            <Badge>Ecommerce</Badge>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">Scalable fulfilment and returns support.</h2>
            <p className="mt-3 max-w-3xl text-[var(--text-muted)]">UI concept: API-ready label creation, pickup planning, and customer notification touchpoints.</p>
            <div className="mt-5 flex gap-3">
              <Button href="/quote" variant="primary">Get a Quote</Button>
              <Button href="/create-shipment" variant="secondary">Create Shipment</Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
