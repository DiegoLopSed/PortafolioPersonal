import type { ReactElement } from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

const icons: Record<string, (props: IconProps) => ReactElement> = {
  python: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#3776AB" d="M12 2C7.03 2 7.5 4.57 7.5 4.57v2.28h4.72v.68H5.06S2 6.86 2 12.14c0 5.28 2.73 5.08 2.73 5.08h1.63v-2.45s-.09-2.73 2.68-2.73h4.62s2.59.04 2.59-2.5V5.34S16.97 2 12 2zm-2.43 1.47a.86.86 0 110 1.72.86.86 0 010-1.72z" />
      <path fill="#FFD43B" d="M12 22c4.97 0 4.5-2.57 4.5-2.57v-2.28h-4.72v-.68h6.66S22 17.14 22 11.86c0-5.28-2.73-5.08-2.73-5.08h-1.63v2.45s.09 2.73-2.68 2.73H11.3s-2.59-.04-2.59 2.5v4.32S7.03 22 12 22zm2.43-1.47a.86.86 0 110-1.72.86.86 0 010 1.72z" />
    </svg>
  ),
  php: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
      <text x="12" y="14.5" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">PHP</text>
    </svg>
  ),
  javascript: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path fill="#000" d="M15.5 17.5c.5.8 1 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.6-1.5l-.6-.2c-1.6-.7-2.6-1.5-2.6-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.4.5 3.1 1.7l-1.7 1.1c-.4-.7-.8-1-1.5-1-1 0-1.6.6-1.6 1.4 0 1 .6 1.4 2 2l.6.3c1.9.8 2.9 1.7 2.9 3.6 0 2-1.6 3.2-3.8 3.2-2.1 0-3.4-1-4-2.4l1.7-1zM8.8 17.6l1.9-1.1c.4.7.7 1.3 1.5 1.3.8 0 1.3-.3 1.3-1.5V8.5h2.2v7.9c0 2.3-1.3 3.3-3.3 3.3-1.8 0-2.8-.8-3.6-1.9z" />
    </svg>
  ),
  typescript: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path fill="#fff" d="M13.5 16.5v1.8H8.5v-1.8h5zm-1-9H8.5v1.8h1.5v6.2h2.5V7.5zM17 10.5h-2.5V9H17v1.5zm0 3h-2.5v-1.5H17V13.5z" />
      <text x="14" y="17" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="Arial">TS</text>
    </svg>
  ),
  java: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#E76F00" d="M8.5 18.5s-.5.4.4.6c1.2.3 1.8.3 3.1 0 1-.2.4-.6.4-.6s.3.4-.3.7c-.7.4-2.6.7-3.2.6-.6-.1-2.4-.4-2.4-.7z" />
      <path fill="#5382A1" d="M12 3s3.5 2.2 3.5 5.3c0 2.5-1.8 3.8-1.8 3.8s2.2-.5 2.2-3.5c0-3.5-3.9-5.6-3.9-5.6z" />
      <path fill="#E76F00" d="M9.5 14.5c1.2 1.2 3.5.5 3.5.5s-.8.5-2.2.5c-1.8 0-3.5-1-3.5-1s1 .8 2.2 1z" />
      <ellipse cx="12" cy="20" rx="6" ry="1.5" fill="#5382A1" opacity="0.5" />
    </svg>
  ),
  csharp: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#68217A" />
      <text x="12" y="15" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="Arial">C#</text>
    </svg>
  ),
  html5: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#E44D26" d="M4.5 2l1.5 17 6 2 6-2 1.5-17H4.5z" />
      <path fill="#F16529" d="M12 20.5l4.5-1.3 1-11.7H12v13z" />
      <path fill="#EBEBEB" d="M12 8.5h5.5l-.3-3.5H12v3.5zm0 7h-.1l-.1 1.1-.3 3.1 4.2-1.2.6-5H12v2.1z" />
    </svg>
  ),
  css3: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1572B6" d="M4.5 2l1.5 17 6 2 6-2 1.5-17H4.5z" />
      <path fill="#33A9DC" d="M12 20.5l4.5-1.3 1-11.7H12v13z" />
      <path fill="#EBEBEB" d="M12 8.5h5l-.3-1.5H12V8.5zm0 3.5h4.5l-.3-1.5H12v1.5zm-.1 3.5l-.1 1.1-.3 3.1 4.2-1.2.6-5H12v2.1z" />
    </svg>
  ),
  nodejs: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#339933" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15.5v-5l-4-2.3 4-2.3v5l4 2.3-4 2.3z" />
      <path fill="#fff" opacity="0.3" d="M11 7.9v5l-4-2.3 4-2.3z" />
    </svg>
  ),
  laravel: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#FF2D20" d="M3 4h5l2 3.5L12 4h5l-4 7 4 7h-5l-2-3.5L7 18H2l4-7-3-7z" />
    </svg>
  ),
  react: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  mysql: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00758F" d="M12 3C8 3 4 4.5 4 7.5c0 1.5 1 2.8 2.5 3.7C5 12.5 4 13.5 4 15c0 2.5 3.5 4 8 4s8-1.5 8-4c0-1.5-1-2.5-2.5-3.3C19 10.3 20 9 20 7.5 20 4.5 16 3 12 3z" />
      <path d="M8 9.5c1.5.8 2.5 1.2 4 1.2s2.5-.4 4-1.2" stroke="#F29111" strokeWidth="1" fill="none" />
    </svg>
  ),
  mariadb: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#003545" d="M12 3C7 3 3 5 3 8c0 2 1.5 3.5 4 4.5-1.5 1-2.5 2.2-2.5 3.5 0 2.5 3.8 4 7.5 4s7.5-1.5 7.5-4c0-1.3-1-2.5-2.5-3.5C19.5 11.5 21 10 21 8c0-3-4-5-9-5z" />
      <path d="M9 10c1 .6 2 .9 3 .9s2-.3 3-.9" stroke="#C49A3C" strokeWidth="1" fill="none" />
    </svg>
  ),
  sqlite: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#003B57" d="M12 2l8 4v12l-8 4-8-4V6l8-4z" />
      <path fill="#97CCE4" d="M12 6v12M8 8l8 8M16 8l-8 8" stroke="#97CCE4" strokeWidth="1" />
    </svg>
  ),
  aws: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#FF9900" d="M6.5 17l1-3h9l1 3H6.5zM4 14l2-6h12l2 6H4z" />
      <text x="12" y="13" textAnchor="middle" fill="#232F3E" fontSize="5" fontWeight="bold" fontFamily="Arial">EC2</text>
    </svg>
  ),
  'aws-s3': ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#569A31" d="M4 14l4-8h8l4 8H4z" />
      <text x="12" y="13" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold" fontFamily="Arial">S3</text>
    </svg>
  ),
  'aws-route53': ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#8C4FFF" strokeWidth="2" />
      <path fill="#8C4FFF" d="M12 6v6l4 2" />
      <text x="12" y="20" textAnchor="middle" fill="#8C4FFF" fontSize="4" fontFamily="Arial">R53</text>
    </svg>
  ),
  docker: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#2496ED" d="M3 14h2v2H3v-2zm3 0h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zm-9-3h2v2H3v-2zm3 0h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6-3h2v2H9v-2zm3 0h2v2h-2v-2zm6 3c1 1 2.5 1 4 0-1-3-3-5-6-5.5l-1-2C8 5 5 6 3 9c2 3 5 5 9 5z" />
    </svg>
  ),
  git: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F05032" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V8h2v2z" />
      <circle cx="12" cy="7" r="1.5" fill="#fff" />
      <rect x="11" y="10" width="2" height="6" fill="#fff" />
    </svg>
  ),
  cicd: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#7C3AED" strokeWidth="2" />
      <path fill="none" stroke="#7C3AED" strokeWidth="2" d="M12 7v5l3 3" />
      <path fill="#E879F9" d="M16 4l2 2-2 2V4z" />
    </svg>
  ),
  code: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  layers: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  cloud: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  database: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  tools: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  default: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#7C3AED" opacity="0.2" />
      <text x="12" y="16" textAnchor="middle" fill="#7C3AED" fontSize="10" fontWeight="bold">{'</>'}</text>
    </svg>
  ),
};

export interface SkillIconProps extends IconProps {
  name: string;
}

/** Icono SVG por tecnología — sin dependencias externas */
export function SkillIcon({ name, size = 28, className }: SkillIconProps) {
  const Icon = icons[name] ?? icons.default;
  return <span className={className}><Icon size={size} /></span>;
}
