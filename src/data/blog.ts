import type { BlogPost } from '@/types';

/**
 * Publicaciones de blog (opcional).
 * Añade entradas con título, extracto y enlace externo si aplica.
 */
export const blogPosts: BlogPost[] = [
  {
    id: 'aws-ec2-basics',
    title: 'Primeros pasos con EC2: despliegue de una API en AWS',
    excerpt:
      'Guía práctica para lanzar una instancia EC2, configurar grupos de seguridad y desplegar una aplicación backend.',
    date: '2025-11-15',
    readTime: '8 min',
    tags: ['AWS', 'EC2', 'Backend'],
    url: '#',
  },
  {
    id: 'rest-api-best-practices',
    title: 'Buenas prácticas al diseñar APIs REST',
    excerpt:
      'Convenciones de nomenclatura, manejo de errores, versionado y documentación para APIs mantenibles.',
    date: '2025-09-22',
    readTime: '6 min',
    tags: ['API', 'REST', 'PHP'],
    url: '#',
  },
  {
    id: 'mysql-optimization',
    title: 'Optimización de consultas en MySQL',
    excerpt:
      'Índices, EXPLAIN y patrones comunes para mejorar el rendimiento de bases de datos relacionales.',
    date: '2025-07-10',
    readTime: '10 min',
    tags: ['MySQL', 'Bases de datos'],
    url: '#',
  },
];
