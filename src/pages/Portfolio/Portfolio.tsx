import { useMemo, useState } from 'react';
import { SEO } from '@/components/SEO/SEO';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { Modal } from '@/components/Modal/Modal';
import { projects, projectCategories } from '@/data/projects';
import { siteConfig } from '@/data/site';
import type { Project, ProjectCategory } from '@/types';
import './Portfolio.scss';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === (activeFilter as ProjectCategory));
  }, [activeFilter]);

  return (
    <>
      <SEO
        title="Portafolio"
        description={`Proyectos de ${siteConfig.name}: desarrollo backend, arquitectura AWS y soluciones full-stack.`}
        path="/portfolio"
      />

      <section className="section portfolio" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Portafolio</span>
            <h1 id="portfolio-heading" className="section-header__title">
              Mis proyectos
            </h1>
            <p className="section-header__description">
              Explora mi trabajo en backend, infraestructura cloud y desarrollo de aplicaciones.
            </p>
          </div>

          <div className="filter-bar" role="group" aria-label="Filtrar proyectos por categoría">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-bar__btn ${activeFilter === cat.id ? 'filter-bar__btn--active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
                aria-pressed={activeFilter === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div
            className="grid grid--3 portfolio__grid"
            role="list"
            aria-live="polite"
            aria-label="Lista de proyectos"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div key={project.id} role="listitem">
                  <ProjectCard project={project} onSelect={setSelectedProject} />
                </div>
              ))
            ) : (
              <p className="portfolio__empty" role="status">
                No hay proyectos en esta categoría.
              </p>
            )}
          </div>
        </div>
      </section>

      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
