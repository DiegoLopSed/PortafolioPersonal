import type { NavLink, SocialLink } from '@/types';
import { siteConfig } from './site';

export const navLinks: NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/about' },
  { label: 'Portafolio', path: '/portfolio' },
  { label: 'Habilidades', path: '/skills' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: siteConfig.github, icon: 'github' },
  { name: 'LinkedIn', url: siteConfig.linkedin, icon: 'linkedin' },
  { name: 'Email', url: `mailto:${siteConfig.email}`, icon: 'email' },
  ...(siteConfig.phone
    ? [{ name: 'Teléfono', url: `tel:+52${siteConfig.phone}`, icon: 'phone' as const }]
    : []),
];
