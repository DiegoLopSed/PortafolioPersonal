import { useEffect, useRef } from 'react';
import type { Project } from '@/types';
import { IconClose, IconExternalLink } from '@/components/icons/Icons';
import './Modal.scss';

export interface ModalProps {
  /** Proyecto a mostrar (null = cerrado) */
  project: Project | null;
  /** Callback para cerrar el modal */
  onClose: () => void;
}

/**
 * Modal de detalle de proyecto con trap de foco y cierre con Escape.
 */
export function Modal({ project, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <IconClose />
        </button>

        <div className="modal__image-wrapper">
          <img
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
            className="modal__image"
            width={800}
            height={400}
          />
        </div>

        <div className="modal__body">
          <h2 id="modal-title" className="modal__title">
            {project.title}
          </h2>
          <p className="modal__description">{project.fullDescription}</p>

          <div className="modal__tags" role="list" aria-label="Tecnologías utilizadas">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag" role="listitem">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal__actions">
            <a
              href={project.repoUrl}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconExternalLink size={16} />
              Ver repositorio
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconExternalLink size={16} />
                Ver demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
