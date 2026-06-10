import type { Skill, Service } from '@/types';

export const skills: Skill[] = [
  { name: 'Python', category: 'languages', level: 'advanced', percentage: 90, icon: 'python' },
  { name: 'PHP', category: 'languages', level: 'advanced', percentage: 88, icon: 'php' },
  { name: 'JavaScript', category: 'languages', level: 'intermediate', percentage: 82, icon: 'javascript' },
  { name: 'TypeScript', category: 'languages', level: 'intermediate', percentage: 78, icon: 'typescript' },
  { name: 'Java', category: 'languages', level: 'intermediate', percentage: 72, icon: 'java' },
  { name: 'C#', category: 'languages', level: 'beginner', percentage: 55, icon: 'csharp' },
  { name: 'HTML5', category: 'languages', level: 'advanced', percentage: 95, icon: 'html5' },
  { name: 'CSS3 / SCSS', category: 'languages', level: 'advanced', percentage: 90, icon: 'css3' },
  { name: 'Node.js', category: 'frameworks', level: 'intermediate', percentage: 80, icon: 'nodejs' },
  { name: 'Laravel', category: 'frameworks', level: 'intermediate', percentage: 76, icon: 'laravel' },
  { name: 'React', category: 'frameworks', level: 'intermediate', percentage: 82, icon: 'react' },
  { name: 'MySQL', category: 'databases', level: 'advanced', percentage: 92, icon: 'mysql' },
  { name: 'MariaDB', category: 'databases', level: 'advanced', percentage: 88, icon: 'mariadb' },
  { name: 'SQLite', category: 'databases', level: 'intermediate', percentage: 75, icon: 'sqlite' },
  { name: 'AWS EC2', category: 'cloud', level: 'intermediate', percentage: 78, icon: 'aws' },
  { name: 'AWS S3', category: 'cloud', level: 'intermediate', percentage: 80, icon: 'aws-s3' },
  { name: 'Route 53', category: 'cloud', level: 'intermediate', percentage: 72, icon: 'aws-route53' },
  { name: 'Docker', category: 'tools', level: 'intermediate', percentage: 74, icon: 'docker' },
  { name: 'Git', category: 'tools', level: 'advanced', percentage: 93, icon: 'git' },
  { name: 'CI/CD', category: 'tools', level: 'intermediate', percentage: 70, icon: 'cicd' },
];

export const skillCategories = [
  { id: 'languages', label: 'Lenguajes', icon: 'code' },
  { id: 'frameworks', label: 'Frameworks', icon: 'layers' },
  { id: 'cloud', label: 'Cloud / AWS', icon: 'cloud' },
  { id: 'databases', label: 'Bases de datos', icon: 'database' },
  { id: 'tools', label: 'Herramientas', icon: 'tools' },
] as const;

export const services: Service[] = [
  {
    id: 'api-development',
    title: 'Desarrollo de APIs REST',
    description:
      'Diseño e implementación de APIs escalables con PHP, Python y Node.js, siguiendo estándares REST y buenas prácticas de seguridad.',
    icon: 'api',
  },
  {
    id: 'aws-architecture',
    title: 'Arquitectura AWS',
    description:
      'Diseño y despliegue de infraestructura en la nube con EC2, S3, Route 53 y estrategias de alta disponibilidad.',
    icon: 'cloud',
  },
  {
    id: 'database-design',
    title: 'Diseño de Bases de Datos',
    description:
      'Modelado relacional, optimización de consultas y administración de MySQL, MariaDB y SQLite.',
    icon: 'database',
  },
  {
    id: 'automation',
    title: 'Automatización de Procesos',
    description:
      'Scripts y pipelines para automatizar despliegues, tareas repetitivas y flujos de CI/CD.',
    icon: 'automation',
  },
  {
    id: 'backend-services',
    title: 'Servicios Backend',
    description:
      'Desarrollo de lógica de negocio, autenticación, integración de servicios y mantenimiento de plataformas internas.',
    icon: 'server',
  },
  {
    id: 'mentoring',
    title: 'Mentoría y Docencia',
    description:
      'Formación en programación para principiantes, con enfoque práctico y acompañamiento personalizado.',
    icon: 'mentor',
  },
];
