export const placeholderAssets = {
  fallback: "/placeholders/fallback-generic.svg",
  heroGlobal: "/placeholders/hero-global-network.svg",
  ctaBanner: "/placeholders/cta-banner.svg",
  networkMap: "/placeholders/network-map.svg",
  serviceDomestic: "/placeholders/service-domestic.svg",
  serviceInternational: "/placeholders/service-international.svg",
  serviceSpecialised: "/placeholders/service-specialised.svg",
  serviceEcommerce: "/placeholders/service-ecommerce.svg",
  pageHeroAbout: "/placeholders/page-hero-about.svg",
  pageHeroServices: "/placeholders/page-hero-services.svg",
  pageHeroInternational: "/placeholders/page-hero-international.svg",
  pageHeroDomestic: "/placeholders/page-hero-domestic.svg",
  pageHeroSpecialised: "/placeholders/page-hero-specialised.svg",
  pageHeroContact: "/placeholders/page-hero-contact.svg",
  pageHeroDashboard: "/placeholders/page-hero-dashboard.svg",
} as const;

export function getServicePlaceholder(key: string): string {
  const normalized = key.toLowerCase();

  if (normalized === "domestic") return placeholderAssets.serviceDomestic;
  if (normalized === "international") return placeholderAssets.serviceInternational;
  if (normalized === "specialised") return placeholderAssets.serviceSpecialised;
  if (normalized === "ecommerce") return placeholderAssets.serviceEcommerce;

  return placeholderAssets.fallback;
}
