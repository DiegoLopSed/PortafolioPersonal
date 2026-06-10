import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '@/data/navigation';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { IconMenu, IconClose } from '@/components/icons/Icons';
import './Header.scss';

/**
 * Header con navegación principal, menú hamburguesa en móvil y CTA.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <div className="header__inner container">
        <Link to="/" className="header__logo" onClick={closeMenu} aria-label="Ir al inicio">
          <span className="header__logo-mark">DL</span>
          <span className="header__logo-text">Diego Lopez</span>
        </Link>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list" role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <Link to="/contact" className="btn btn--primary btn--sm header__cta">
            Contáctame
          </Link>
          <button
            type="button"
            className="header__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`header__mobile-nav ${menuOpen ? 'header__mobile-nav--open' : ''}`}
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`
                }
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="btn btn--primary"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              Contáctame
            </Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          className="header__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
