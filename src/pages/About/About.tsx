import { SEO } from '@/components/SEO/SEO';
import { Hero } from '@/components/Hero/Hero';
import { siteConfig } from '@/data/site';
import { skills, skillCategories } from '@/data/skills';
import './About.scss';

export function About() {
  return (
    <>
      <SEO
        title="Sobre mí"
        description={`Conoce más sobre ${siteConfig.name}: ${siteConfig.role}. ${siteConfig.bio}`}
        path="/about"
      />

      <Hero showCta={false} compact />

      <section className="section" aria-labelledby="about-heading">
        <div className="container about">
          <div className="about__content">
            <h2 id="about-heading">Mi trayectoria</h2>
            {siteConfig.aboutExtended.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>

          <aside className="about__sidebar" aria-label="Datos de contacto">
            <div className="about__info-card">
              <h3>Contacto rápido</h3>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <strong>Ubicación:</strong> {siteConfig.location}
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                    @DiegoLopSed
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                    diego-devop
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="skills-preview-heading">
        <div className="container">
          <h2 id="skills-preview-heading" className="about__skills-title">
            Tecnologías que domino
          </h2>
          <div className="about__skills-grid">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="about__skill-group">
                <h3>{cat.label}</h3>
                <ul role="list">
                  {skills
                    .filter((s) => s.category === cat.id)
                    .map((skill) => (
                      <li key={skill.name}>
                        <span className="tag">{skill.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
