import { useEffect, useRef, useState } from 'react';
import { SkillIcon } from '@/components/icons/SkillIcons';
import './SkillBar.scss';

export interface SkillBarProps {
  /** Nombre de la tecnología */
  name: string;
  /** Clave del icono */
  icon: string;
  /** Porcentaje de dominio (0–100) */
  percentage: number;
  /** Retraso de animación en ms */
  delay?: number;
}

/**
 * Barra de habilidad con icono, porcentaje y progreso animado.
 */
export function SkillBar({ name, icon, percentage, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar__header">
        <div className="skill-bar__identity">
          <div className="skill-bar__icon" aria-hidden="true">
            <SkillIcon name={icon} size={32} />
          </div>
          <span className="skill-bar__name">{name}</span>
        </div>
        <span className="skill-bar__percent" aria-label={`${name}: ${percentage}%`}>
          {percentage}%
        </span>
      </div>

      <div
        className="skill-bar__track"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Nivel de ${name}`}
      >
        <div
          className={`skill-bar__fill ${visible ? 'skill-bar__fill--animated' : ''}`}
          style={{
            width: visible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
