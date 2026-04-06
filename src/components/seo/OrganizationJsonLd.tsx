import { SITE_URL } from '../../config/site';
import { contactInfo, organizationInfo, socialLinks } from '../../data/content';

/**
 * Organization JSON-LD (schema.org) — one graph per page in SPA is acceptable; identical content.
 */
const OrganizationJsonLd = () => {
  const sameAs = socialLinks.map((s) => s.url).filter((u) => u.startsWith('http'));

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${organizationInfo.name} ${organizationInfo.subtitle}`.trim(),
    alternateName: organizationInfo.name,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.png`,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address,
      addressCountry: 'PK',
    },
    description: organizationInfo.description,
  };

  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default OrganizationJsonLd;
