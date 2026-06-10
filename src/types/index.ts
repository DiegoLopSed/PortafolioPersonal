export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: ProjectCategory;
  repoUrl: string;
  liveUrl?: string;
  image: string;
  imageWebp?: string;
  featured: boolean;
}

export type ProjectCategory = 'backend' | 'aws' | 'fullstack' | 'automation';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 'beginner' | 'intermediate' | 'advanced';
  /** Porcentaje de dominio (0–100) para la barra visual */
  percentage: number;
  /** Clave del icono — ver SkillIcons */
  icon: string;
}

export type SkillCategory = 'languages' | 'frameworks' | 'cloud' | 'databases' | 'tools';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone';
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  aboutExtended: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  location: string;
  profileImage: string;
  siteUrl: string;
}
