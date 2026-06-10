import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO/SEO';
import { Hero } from '@/components/Hero/Hero';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { Modal } from '@/components/Modal/Modal';
import { projects } from '@/data/projects';
import { services } from '@/data/skills';
import { siteConfig } from '@/data/site';
import { IconArrowRight } from '@/components/icons/Icons';
import { useState } from 'react';
import type { Project } from '@/types';
import './Home.scss';

export function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <SEO
        description={`${siteConfig.bio} Portafolio profesional de ${siteConfig.name}.`}
        path="/"
      />

      <Hero />

      <section className="section section--alt" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Destacados</span>
            <h2 id="featured-heading" className="section-header__title">
              Proyectos recientes
            </h2>
            <p className="section-header__description">
              Una selección de mis trabajos más representativos en backend, cloud y desarrollo
              full-stack.
            </p>
          </div>

          <div className="grid grid--3 home__projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          <div className="home__cta-center">
            <Link to="/portfolio" className="btn btn--secondary">
              Ver todos los proyectos
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Servicios</span>
            <h2 id="services-heading" className="section-header__title">
              ¿En qué puedo ayudarte?
            </h2>
          </div>

          <div className="grid grid--3 home__services">
            {services.slice(0, 3).map((service) => (
              <article key={service.id} className="home__service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="home__cta-center">
            <Link to="/skills" className="btn btn--ghost">
              Ver todas las habilidades
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
