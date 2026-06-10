import { SEO } from '@/components/SEO/SEO';
import { SkillBar } from '@/components/SkillBar/SkillBar';
import { SkillIcon } from '@/components/icons/SkillIcons';
import { skills, services, skillCategories } from '@/data/skills';
import { siteConfig } from '@/data/site';
import './Skills.scss';

export function Skills() {
  return (
    <>
      <SEO
        title="Habilidades y Servicios"
        description={`Habilidades técnicas y servicios de ${siteConfig.name}: APIs REST, AWS, bases de datos y automatización.`}
        path="/skills"
      />

      <section className="section skills" aria-labelledby="skills-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Habilidades</span>
            <h1 id="skills-heading" className="section-header__title">
              Stack tecnológico
            </h1>
            <p className="section-header__description">
              Herramientas y tecnologías con las que construyo soluciones digitales escalables.
            </p>
          </div>

          {skillCategories.map((cat) => {
            const categorySkills = skills.filter((s) => s.category === cat.id);
            if (categorySkills.length === 0) return null;

            return (
              <div key={cat.id} className="skills__category-block">
                <div className="skills__category-header">
                  <div className="skills__category-icon" aria-hidden="true">
                    <SkillIcon name={cat.icon} size={28} />
                  </div>
                  <h2 className="skills__category-title">{cat.label}</h2>
                  <span className="skills__category-count">
                    {categorySkills.length} tecnologías
                  </span>
                </div>

                <div className="skills__grid" role="list">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} role="listitem">
                      <SkillBar
                        name={skill.name}
                        icon={skill.icon}
                        percentage={skill.percentage}
                        delay={index * 80}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Servicios</span>
            <h2 id="services-heading" className="section-header__title">
              Lo que ofrezco
            </h2>
          </div>

          <div className="grid grid--3">
            {services.map((service) => (
              <article key={service.id} className="skills__service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
