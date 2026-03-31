export const siteMetadata = {
  brandName: "SKYNET",
  demoLabel: "SkyNet GB Concept",
  title: "Trusted Business Shipping for UK and Global Operations",
  description:
    "Premium logistics and enterprise courier services designed for high-performance domestic, international, and ecommerce shipping.",
  contactNumber: "+44 (0)20 0000 0000",
  supportEmail: "enterprise@skynetgb.com",
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "International", href: "/international" },
  { label: "Domestic", href: "/domestic" },
  { label: "Specialised", href: "/specialised" },
  { label: "Contact", href: "/contact" },
];

export const utilityActions = [
  { label: "Open an Account", href: "/open-account", variant: "primary" },
  {
    label: "Create a Shipment",
    href: "/create-shipment",
    variant: "secondary",
  },
  { label: "Track a Package", href: "/track", variant: "ghost" },
  { label: "Account Management", href: "/account-management", variant: "ghost" },
] as const;

export const heroContent = {
  eyebrow: "Enterprise Courier and Logistics",
  heading: "Operational Confidence Across the UK and Global Markets",
  summary:
    "From domestic time-critical lanes to international distribution, SkyNet delivers resilient, business-ready shipping at scale.",
  primaryAction: { label: "Open an Account", href: "/open-account" },
  secondaryAction: { label: "Create a Shipment", href: "/create-shipment" },
  supportingAction: { label: "Track a Package", href: "/track" },
};

export const quickActionCards = [
  {
    title: "Open an Account",
    description: "Set up business shipping with agreed rates, billing controls, and onboarding support.",
    href: "/open-account",
    icon: "account-plus",
  },
  {
    title: "Create a Shipment",
    description: "Book domestic and international consignments in minutes with clear service options.",
    href: "/create-shipment",
    icon: "box-send",
  },
  {
    title: "Track a Package",
    description: "Monitor every movement with real-time milestones and proactive delivery updates.",
    href: "/track",
    icon: "radar",
  },
  {
    title: "Account Management",
    description: "Manage users, permissions, invoices, and shipment performance in one place.",
    href: "/account-management",
    icon: "settings-shield",
  },
];

export const serviceCards = [
  {
    title: "Domestic Delivery",
    category: "Domestic",
    description:
      "Priority and economy services across UK routes, backed by dependable transit performance.",
    href: "/domestic",
  },
  {
    title: "International Shipping",
    category: "International",
    description:
      "Cross-border delivery with customs guidance, network visibility, and predictable lead times.",
    href: "/international",
  },
  {
    title: "Ecommerce Fulfilment",
    category: "Ecommerce",
    description:
      "Scalable last-mile and returns workflows for brands selling across channels and regions.",
    href: "/services#ecommerce",
  },
  {
    title: "Specialised Logistics",
    category: "Specialised",
    description:
      "Tailored handling for sensitive, regulated, or high-value consignments with clear controls.",
    href: "/specialised",
  },
];

export const credibilityStats = [
  {
    label: "Countries and Territories Served",
    value: "220+",
    note: "Through an established global partner network.",
  },
  {
    label: "UK Operational Sites",
    value: "35",
    note: "Regional hubs supporting business-critical delivery lanes.",
  },
  {
    label: "Annual Consignments Managed",
    value: "18M+",
    note: "Across domestic, international, and ecommerce flows.",
  },
  {
    label: "Enterprise Client Retention",
    value: "96%",
    note: "Based on internal account portfolio reporting.",
  },
];

export const networkRegionalHubs = {
  title: "Network Strength, Regional Control",
  summary:
    "SkyNet combines global network reach with focused UK operations to keep shipments moving without compromise.",
  ukHubs: [
    "London Gateway",
    "Birmingham Midlands Hub",
    "Manchester North Hub",
    "Bristol South West Hub",
    "Glasgow Scotland Hub",
  ],
  globalGateways: [
    "Dubai",
    "Singapore",
    "Frankfurt",
    "Johannesburg",
    "New York",
  ],
};

export const leadershipPreview = {
  title: "Leadership Focused on Execution",
  summary:
    "Operational leadership with deep expertise in enterprise shipping, cross-border logistics, and service reliability.",
  profiles: [
    {
      name: "Eugene Swanepoel",
      role: "Managing Director",
      focus: "Strategic direction and operational growth",
      image: "Eugene_Swanepoel_Managing_Director_headshot.webp",
      bio: "Eugene leads SkyNet GB with a strong focus on disciplined growth, service resilience, and operational accountability across domestic and international networks.",
    },
    {
      name: "Martin Misselhorn",
      role: "Chief Finance Officer",
      focus: "Commercial control and financial governance",
      image: "Martin_Misselhorn_Chief_Finance_Officer_headshot.webp",
      bio: "Martin oversees financial strategy, commercial governance, and performance reporting, helping align investment decisions with long-term operational efficiency.",
    },
    {
      name: "Corrine Bowry",
      role: "Head of HR",
      focus: "People leadership and culture development",
      image: "Corrine_Bowry_Head_of_HR_headshot.webp",
      bio: "Corrine drives people strategy, leadership development, and workforce capability, supporting a high-performance culture across customer and operations teams.",
    },
    {
      name: "Niki Capacci",
      role: "Customer Experience Manager",
      focus: "Service quality and client experience",
      image: "Niki_Capacci_Customer_Experience_Manager_headshot.webp",
      bio: "Niki leads customer experience initiatives focused on service consistency, client communication, and continuous improvement across key account journeys.",
    },
    {
      name: "Zeeshan Ahmed",
      role: "IT Manager",
      focus: "Technology systems and operational resilience",
      image: "Zeeshan_Ahmed_IT_Manager_headshot.webp",
      bio: "Zeeshan manages the technology environment behind shipment visibility, operational stability, and secure systems that support day-to-day logistics delivery.",
    },
  ],
};

export const finalCta = {
  title: "Move with a Logistics Partner Built for Business",
  summary:
    "Open an account to access trusted business shipping, international reach, and dedicated account support.",
  primaryAction: { label: "Open an Account", href: "/open-account" },
  secondaryAction: { label: "Speak to Sales", href: "/contact" },
};

export const footerLinkGroups = [
  {
    title: "Shipping",
    links: [
      { label: "Create a Shipment", href: "/create-shipment" },
      { label: "Track a Package", href: "/track" },
      { label: "Get a Quote", href: "/quote" },
      { label: "Open an Account", href: "/open-account" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Domestic", href: "/domestic" },
      { label: "International", href: "/international" },
      { label: "Specialised", href: "/specialised" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About SkyNet GB", href: "/about" },
      { label: "Global Network", href: "/international" },
      { label: "Contact", href: "/contact" },
      { label: "Request a Quote", href: "/quote" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Open an Account", href: "/open-account" },
      { label: "Account Management", href: "/account-management" },
      { label: "Create Shipment", href: "/create-shipment" },
      { label: "Track Package", href: "/track" },
    ],
  },
];

export const skynetHomeData = {
  siteMetadata,
  navItems,
  utilityActions,
  heroContent,
  quickActionCards,
  serviceCards,
  credibilityStats,
  networkRegionalHubs,
  leadershipPreview,
  finalCta,
  footerLinkGroups,
};
