import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/site';
import { publicAsset } from '@/utils/assets';
import { IconArrowRight, IconLocation } from '@/components/icons/Icons';
import './Hero.scss';

export interface HeroProps {
  /** Mostrar botones de acción (default: true) */
  showCta?: boolean;
  /** Variante compacta para páginas internas */
  compact?: boolean;
}

/**
 * Sección Hero con foto de perfil, nombre, rol y resumen.
 */
export function Hero({ showCta = true, compact = false }: HeroProps) {
  return (
    <section
      className={`hero ${compact ? 'hero--compact' : ''}`}
      aria-labelledby="hero-heading"
    >
      <div className="container hero__inner">
        <div className="hero__content animate-fade-in-up">
          <p className="hero__greeting">Hola, soy</p>
          <h1 id="hero-heading" className="hero__name">
            {siteConfig.name}
          </h1>
          <p className="hero__role">{siteConfig.role}</p>
          <p className="hero__tagline">{siteConfig.tagline}</p>
          <p className="hero__bio">{siteConfig.bio}</p>

          <p className="hero__location">
            <IconLocation size={18} />
            <span>{siteConfig.location}</span>
          </p>

          {showCta && (
            <div className="hero__actions">
              <Link to="/portfolio" className="btn btn--primary btn--lg">
                Ver portafolio
                <IconArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn--secondary btn--lg">
                Contáctame
              </Link>
            </div>
          )}
        </div>

        <div className="hero__image-wrapper animate-fade-in-up">
          <div className="hero__image-ring">
            <img
              src={publicAsset(siteConfig.profileImage)}
              alt={`Foto de perfil de ${siteConfig.name}`}
              className="hero__image"
              width={320}
              height={320}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
