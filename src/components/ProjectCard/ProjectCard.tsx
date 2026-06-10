import type { Project } from '@/types';
import { IconExternalLink } from '@/components/icons/Icons';
import './ProjectCard.scss';

export interface ProjectCardProps {
  /** Datos del proyecto */
  project: Project;
  /** Callback al hacer clic en la tarjeta */
  onSelect: (project: Project) => void;
}

/**
 * Tarjeta de proyecto con imagen lazy-loaded, tags y enlaces al sitio y repositorio.
 */
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="project-card">
      <button
        type="button"
        className="project-card__trigger"
        onClick={() => onSelect(project)}
        aria-label={`Ver detalles de ${project.title}`}
      >
        <div className="project-card__image-wrapper">
          <img
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
            className="project-card__image"
            loading="lazy"
            decoding="async"
            width={400}
            height={240}
          />
          <div className="project-card__overlay">
            <span>Ver detalles</span>
          </div>
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.shortDescription}</p>
          <div className="project-card__tags" role="list" aria-label="Tecnologías">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tag" role="listitem">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tag">+{project.technologies.length - 4}</span>
            )}
          </div>
        </div>
      </button>

      <div className="project-card__links">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="project-card__link project-card__link--live"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Sitio en vivo de ${project.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <IconExternalLink size={14} />
            Ver sitio
          </a>
        )}
        <a
          href={project.repoUrl}
          className="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Repositorio de ${project.title} en GitHub`}
          onClick={(e) => e.stopPropagation()}
        >
          <IconExternalLink size={14} />
          Repositorio
        </a>
      </div>
    </article>
  );
}
