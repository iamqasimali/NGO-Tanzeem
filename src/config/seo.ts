/** Per-route SEO copy (path must match React Router paths) */
export const SEO_ROUTES = {
  '/': {
    title: 'Tanzeem Falah Insaniyat Khumra Roundu | Social Welfare Organization in Gilgit-Baltistan',
    description:
      'Tanzeem Falah Insaniyat is a registered social welfare organization improving lives in Gilgit-Baltistan through education, healthcare, and community development.',
  },
  '/about': {
    title: 'About Us',
    description:
      'Learn about Tanzeem Falah Insaniyat Khumra Roundu — our story, vision, mission, values, and legal registration as a social welfare organization in Baltistan.',
  },
  '/programs': {
    title: 'Our Programs',
    description:
      'Explore our programs in education, health, women and girls development, and agriculture in Gilgit-Baltistan — outcomes and how we serve communities.',
  },
  '/gallery': {
    title: 'Gallery',
    description:
      'Photos from our work in education, health, women’s literacy, agriculture, and community life in Khumra Roundu and Gilgit-Baltistan.',
  },
  '/contact': {
    title: 'Contact Us',
    description:
      'Contact Tanzeem Falah Insaniyat — address, phone, and email in Khumra Roundu, Gilgit-Baltistan. Send us a message or get involved.',
  },
  '/donate': {
    title: 'Donate',
    description:
      'Support Tanzeem Falah Insaniyat — bank details, impact areas, and our commitment to transparency for communities in Baltistan.',
  },
  '/privacy': {
    title: 'Privacy Policy',
    description:
      'How Tanzeem Falah Insaniyat Khumra Roundu collects, uses, and protects information when you use our website and contact forms.',
  },
} as const;

export type SeoPath = keyof typeof SEO_ROUTES;

export const SITEMAP_PATHS: SeoPath[] = [
  '/',
  '/about',
  '/programs',
  '/gallery',
  '/contact',
  '/donate',
  '/privacy',
];
