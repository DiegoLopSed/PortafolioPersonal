import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/types';

const mockProject: Project = {
  id: 'test-project',
  title: 'Proyecto de Prueba',
  shortDescription: 'Descripción corta del proyecto.',
  fullDescription: 'Descripción completa del proyecto de prueba.',
  technologies: ['React', 'TypeScript'],
  category: 'backend',
  repoUrl: 'https://github.com/test/repo',
  image: '/images/projects/project-1.svg',
  featured: true,
};

describe('ProjectCard', () => {
  it('renderiza título y descripción', () => {
    render(<ProjectCard project={mockProject} onSelect={vi.fn()} />);

    expect(screen.getByText('Proyecto de Prueba')).toBeInTheDocument();
    expect(screen.getByText('Descripción corta del proyecto.')).toBeInTheDocument();
  });

  it('muestra las tecnologías como tags', () => {
    render(<ProjectCard project={mockProject} onSelect={vi.fn()} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('llama onSelect al hacer clic en la tarjeta', async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();

    render(<ProjectCard project={mockProject} onSelect={onSelect} />);

    await user.click(screen.getByLabelText('Ver detalles de Proyecto de Prueba'));
    expect(onSelect).toHaveBeenCalledWith(mockProject);
  });

  it('tiene enlace al repositorio', () => {
    render(<ProjectCard project={mockProject} onSelect={vi.fn()} />);

    const repoLink = screen.getByLabelText('Repositorio de Proyecto de Prueba en GitHub');
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo');
    expect(repoLink).toHaveAttribute('target', '_blank');
  });

  it('muestra enlace al sitio en vivo cuando liveUrl está definido', () => {
    const projectWithLive = { ...mockProject, liveUrl: 'https://ejemplo.com' };
    render(<ProjectCard project={projectWithLive} onSelect={vi.fn()} />);

    const liveLink = screen.getByLabelText('Sitio en vivo de Proyecto de Prueba');
    expect(liveLink).toHaveAttribute('href', 'https://ejemplo.com');
  });
});
