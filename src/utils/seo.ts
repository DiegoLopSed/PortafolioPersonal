import { siteConfig } from '@/data/site';

export interface PageMeta {
  title?: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
}

export function buildPageTitle(pageTitle?: string): string {
  if (!pageTitle) return `${siteConfig.name} | ${siteConfig.role}`;
  return `${pageTitle} | ${siteConfig.name}`;
}

export function buildCanonicalUrl(path = ''): string {
  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath === '/' ? '' : cleanPath}`;
}

export function buildOgImage(image?: string): string {
  if (!image) return `${siteConfig.siteUrl}/images/og-default.png`;
  if (image.startsWith('http')) return image;
  return `${siteConfig.siteUrl}${image}`;
}
