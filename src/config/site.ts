/** Production site origin — override locally via VITE_SITE_URL in .env */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://tanzeemfalah.org').replace(/\/$/, '');

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (p === '/') return SITE_URL;
  return `${SITE_URL}${p}`;
}

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;
