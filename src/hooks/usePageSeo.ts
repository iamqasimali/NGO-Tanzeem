import { useEffect } from 'react';
import { absoluteUrl, DEFAULT_OG_IMAGE } from '../config/site';
import type { SeoPath } from '../config/seo';
import { SEO_ROUTES } from '../config/seo';

export interface PageSeoInput {
  /** Short title; suffix added unless it already contains the org name */
  title: string;
  description: string;
  path: string;
  /** Set true for pages you do not want indexed */
  noIndex?: boolean;
}

const TITLE_SUFFIX = 'Tanzeem Falah Insaniyat';

function buildDocumentTitle(title: string): string {
  if (title.includes(TITLE_SUFFIX) || title.includes('|')) return title;
  return `${title} | ${TITLE_SUFFIX}`;
}

function ensureMeta(attrs: Record<string, string>, content: string) {
  const [[attr, value]] = Object.entries(attrs);
  const selector = `meta[${attr}="${value.replace(/"/g, '\\"')}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function ensureCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Updates document title, canonical, description, Open Graph, and Twitter meta for SPA routes.
 * Call once per page (top-level route component).
 */
export function usePageSeo({ title, description, path, noIndex }: PageSeoInput) {
  const canonical = absoluteUrl(path);
  const fullTitle = buildDocumentTitle(title);

  useEffect(() => {
    document.title = fullTitle;
    ensureCanonical(canonical);

    ensureMeta({ name: 'description' }, description);

    if (noIndex) {
      ensureMeta({ name: 'robots' }, 'noindex, follow');
    } else {
      ensureMeta({ name: 'robots' }, 'index, follow');
    }

    ensureMeta({ property: 'og:type' }, 'website');
    ensureMeta({ property: 'og:url' }, canonical);
    ensureMeta({ property: 'og:title' }, fullTitle);
    ensureMeta({ property: 'og:description' }, description);
    ensureMeta({ property: 'og:image' }, DEFAULT_OG_IMAGE);
    ensureMeta({ property: 'og:site_name' }, TITLE_SUFFIX);
    ensureMeta({ property: 'og:locale' }, 'en_US');

    ensureMeta({ name: 'twitter:card' }, 'summary_large_image');
    ensureMeta({ name: 'twitter:url' }, canonical);
    ensureMeta({ name: 'twitter:title' }, fullTitle);
    ensureMeta({ name: 'twitter:description' }, description);
    ensureMeta({ name: 'twitter:image' }, DEFAULT_OG_IMAGE);
  }, [fullTitle, description, canonical, noIndex]);
}

/** Apply SEO from centralized `SEO_ROUTES` for the current path. */
export function useRouteSeo(path: SeoPath) {
  const cfg = SEO_ROUTES[path];
  usePageSeo({ title: cfg.title, description: cfg.description, path });
}

export { SITE_URL } from '../config/site';
