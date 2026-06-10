import type { Project } from '@/types';

/**
 * Lista de proyectos del portafolio.
 *
 * Para añadir un nuevo proyecto:
 * 1. Agrega un objeto con la estructura de Project
 * 2. Coloca la imagen en /public/images/projects/
 * 3. Asigna un id único y una categoría válida
 */
export const projects: Project[] = [
  {
    id: 'pipiltajtol',
    title: 'Pipiltajtol',
    shortDescription:
      'Sitio web del movimiento juvenil que impulsa voces para transformar comunidades en Cuetzalan.',
    fullDescription:
      'Plataforma web profesional para Pipiltajtol, organización que impulsa las voces de las juventudes para transformar sus comunidades. Incluye secciones de movimiento, logros, testimonios, actividades y formulario de contacto. Desplegado en producción con dominio propio.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    category: 'fullstack',
    repoUrl: 'https://github.com/DiegoLopSed/Pipiltajtol',
    liveUrl: 'https://pipiltajtol.com/',
    image: '/images/projects/pipiltajtol.svg',
    featured: true,
  },
  {
    id: 'colonia-el-mirador',
    title: 'Colonia El Mirador',
    shortDescription:
      'Sitio oficial de la colonia con noticias, eventos, avance de obras y portal de transparencia.',
    fullDescription:
      'Portal web comunitario para la Colonia El Mirador Tecómavaca. Presenta comunicados, calendario de eventos, avance de desarrollo, servicios, patrocinadores y contacto. Diseñado para mantener informada a la comunidad con transparencia y participación ciudadana.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'fullstack',
    repoUrl: 'https://github.com/DiegoLopSed/ColoniaElMirador',
    liveUrl: 'https://elmiradortecomavaca.com/',
    image: '/images/projects/colonia-el-mirador.svg',
    featured: true,
  },
  {
    id: 'mediascreen-hub',
    title: 'MediaScreen Hub',
    shortDescription:
      'Sistema PHP para gestión de pantallas digitales con dashboard, multimedia y enlaces externos.',
    fullDescription:
      'MediaScreen Hub es un sistema web en PHP para digital signage. Ofrece dashboard con autenticación segura, gestión de archivos multimedia locales y soporte para enlaces externos (YouTube/Vimeo). Diseño responsivo ideal para menús digitales, displays informativos y señalización digital.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'fullstack',
    repoUrl: 'https://github.com/DiegoLopSed/MediaScreen-Hub',
    image: '/images/projects/mediascreen-hub.svg',
    featured: true,
  },
  {
    id: 'api-rest-restaurante',
    title: 'Ikigai Sushi API',
    shortDescription:
      'API REST y panel de gestión de platillos para restaurante con autenticación JWT y subida de imágenes.',
    fullDescription:
      'Sistema completo de gestión de menú para Ikigai Sushi. Backend API REST con Node.js, Express y MySQL: CRUD de platillos, autenticación JWT, búsqueda en tiempo real y gestión de imágenes con Multer. Frontend web responsive integrado con el sitio en producción del restaurante.',
    technologies: ['Node.js', 'Express', 'MySQL', 'JWT', 'Multer'],
    category: 'backend',
    repoUrl: 'https://github.com/DiegoLopSed/API-REST-Restaurante',
    liveUrl: 'https://www.ikigaisushi.com.mx/',
    image: '/images/projects/ikigai-sushi.svg',
    featured: true,
  },
];

export const projectCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'aws', label: 'AWS' },
  { id: 'automation', label: 'Automatización' },
] as const;
