import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/site';
import { navLinks, socialLinks } from '@/data/navigation';
import {
  IconGitHub,
  IconLinkedIn,
  IconEmail,
  IconPhone,
} from '@/components/icons/Icons';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import './Footer.scss';

const socialIcons = {
  github: IconGitHub,
  linkedin: IconLinkedIn,
  email: IconEmail,
  phone: IconPhone,
} as const;

/**
 * Footer con enlaces de navegación, redes sociales y formulario de contacto compacto.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-mark">DL</span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="footer__tagline">{siteConfig.tagline}</p>
            <p className="footer__role">{siteConfig.role}</p>

            <div className="footer__social" role="list" aria-label="Redes sociales">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="footer__social-link"
                    target={link.icon === 'email' || link.icon === 'phone' ? undefined : '_blank'}
                    rel={link.icon === 'email' || link.icon === 'phone' ? undefined : 'noopener noreferrer'}
                    aria-label={link.name}
                    role="listitem"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="footer__nav" aria-label="Enlaces del sitio">
            <h3 className="footer__heading">Navegación</h3>
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <h3 className="footer__heading">Escríbeme</h3>
            <ContactForm compact />
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="footer__location">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
