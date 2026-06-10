import { SEO } from '@/components/SEO/SEO';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { siteConfig } from '@/data/site';
import {
  IconGitHub,
  IconLinkedIn,
  IconEmail,
  IconPhone,
  IconLocation,
} from '@/components/icons/Icons';
import './Contact.scss';

export function Contact() {
  return (
    <>
      <SEO
        title="Contacto"
        description={`Contacta a ${siteConfig.name} para proyectos de desarrollo backend, arquitectura AWS o colaboraciones.`}
        path="/contact"
      />

      <section className="section contact" aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Contacto</span>
            <h1 id="contact-heading" className="section-header__title">
              Hablemos
            </h1>
            <p className="section-header__description">
              ¿Tienes un proyecto en mente? Escríbeme y conversemos sobre cómo puedo ayudarte.
            </p>
          </div>

          <div className="contact__grid">
            <div className="contact__info">
              <h2>Información de contacto</h2>
              <ul className="contact__list" role="list">
                <li>
                  <IconEmail size={20} aria-hidden="true" />
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </li>
                {siteConfig.phone && (
                  <li>
                    <IconPhone size={20} aria-hidden="true" />
                    <div>
                      <strong>Teléfono</strong>
                      <a href={`tel:+52${siteConfig.phone}`}>+52 {siteConfig.phone}</a>
                    </div>
                  </li>
                )}
                <li>
                  <IconLocation size={20} aria-hidden="true" />
                  <div>
                    <strong>Ubicación</strong>
                    <span>{siteConfig.location}</span>
                  </div>
                </li>
                <li>
                  <IconGitHub size={20} aria-hidden="true" />
                  <div>
                    <strong>GitHub</strong>
                    <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                      github.com/DiegoLopSed
                    </a>
                  </div>
                </li>
                <li>
                  <IconLinkedIn size={20} aria-hidden="true" />
                  <div>
                    <strong>LinkedIn</strong>
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/diego-devop
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact__form-wrapper">
              <h2>Envíame un mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
