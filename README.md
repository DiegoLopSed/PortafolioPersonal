# Portafolio — Diego Lopez Sedeño

Sitio web personal y portafolio profesional construido con **React 19**, **TypeScript**, **Vite 6** y **SCSS**.

Desarrollador Backend Junior y arquitectura AWS — [GitHub](https://github.com/DiegoLopSed) · [LinkedIn](https://www.linkedin.com/in/diego-devop)

---

## Características

- **6 páginas**: Inicio, Sobre mí, Portafolio, Habilidades, Blog y Contacto
- **Responsive mobile-first** con breakpoints en 320, 480, 768, 1024 y 1440 px
- **Dark mode** con toggle persistente en `localStorage`
- **SEO**: meta tags dinámicos, Open Graph, `sitemap.xml` y `robots.txt`
- **Accesibilidad**: HTML semántico, ARIA, skip link, contraste WCAG, navegación por teclado
- **Formulario de contacto** compatible con [Netlify Forms](https://docs.netlify.com/forms/setup/)
- **Filtrado de proyectos** sin recarga de página
- **Tests** con Vitest, Testing Library y auditorías axe-core

---

## Requisitos

- Node.js 18+ (recomendado 20 LTS)
- npm 9+

---

## Instalación

```bash
git clone <tu-repositorio>
cd Portafolio
npm install
```

---

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

---

## Build de producción

```bash
npm run build
npm run preview
```

El output optimizado queda en `/dist`, listo para desplegar.

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint con auto-fix |
| `npm run format` | Prettier |
| `npm run test` | Tests unitarios |
| `npm run test:a11y` | Tests de accesibilidad (axe-core) |

---

## Despliegue

### Netlify (recomendado — incluye formularios)

1. Conecta el repositorio en [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. El archivo `netlify.toml` ya incluye redirects SPA y la config del formulario

Los envíos del formulario aparecen en **Netlify → Forms**.

### Vercel

1. Importa el repo en [Vercel](https://vercel.com)
2. Framework: Vite
3. El archivo `vercel.json` maneja el routing SPA

> Para formularios en Vercel, usa [Formspree](https://formspree.io) (ver sección Contacto).

### Actualizar dominio en SEO

Edita `siteUrl` en `src/data/site.ts` y las URLs en `public/sitemap.xml`.

---

## Personalización

### Información personal

Archivo: `src/data/site.ts`

```ts
export const siteConfig = {
  name: 'Tu Nombre',
  role: 'Tu rol',
  email: 'tu@email.com',
  profileImage: '/images/profile.jpg', // coloca tu foto en public/images/
  siteUrl: 'https://tudominio.com',
  // ...
};
```

### Añadir un nuevo proyecto

Archivo: `src/data/projects.ts`

```ts
{
  id: 'mi-proyecto',              // ID único (usado en URLs futuras)
  title: 'Nombre del Proyecto',
  shortDescription: 'Resumen de 1-2 líneas',
  fullDescription: 'Descripción completa para el modal',
  technologies: ['React', 'Node.js'],
  category: 'backend',            // backend | aws | fullstack | automation
  repoUrl: 'https://github.com/...',
  liveUrl: 'https://demo.com',    // opcional
  image: '/images/projects/mi-proyecto.jpg',
  featured: true,                 // aparece en la home
}
```

Pasos:

1. Añade el objeto al array `projects`
2. Coloca la imagen en `public/images/projects/`
3. (Opcional) Añade una categoría en `projectCategories` si necesitas un filtro nuevo

### Habilidades y servicios

- Habilidades: `src/data/skills.ts` → array `skills`
- Servicios: `src/data/skills.ts` → array `services`
- Blog: `src/data/blog.ts` → array `blogPosts`

### Formulario de contacto (Formspree alternativo)

En `src/components/ContactForm/ContactForm.tsx`, reemplaza el `fetch('/')` por:

```tsx
<form action="https://formspree.io/f/TU_ID" method="POST">
```

Y elimina los atributos `data-netlify`.

---

## Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Header/       # Navegación + menú hamburguesa
│   ├── Footer/       # Enlaces + formulario compacto
│   ├── Hero/         # Presentación principal
│   ├── ProjectCard/  # Tarjeta de proyecto
│   ├── Modal/        # Detalle de proyecto
│   ├── ContactForm/  # Formulario Netlify/Formspree
│   ├── SEO/          # Meta tags dinámicos
│   └── ThemeToggle/  # Dark mode
├── pages/            # Páginas de la SPA
├── data/             # Contenido editable (proyectos, skills, etc.)
├── hooks/            # useTheme, useScrollSpy
├── styles/           # SCSS global (variables, temas, layout)
├── types/            # Tipos TypeScript
└── test/             # Setup de Vitest
public/
├── images/           # Imágenes estáticas
├── sitemap.xml
└── robots.txt
```

---

## Dependencias y justificación

| Librería | Uso | ¿Por qué? |
|----------|-----|-----------|
| `react-router-dom` | Routing SPA | Estándar de facto, ligero |
| `react-helmet-async` | SEO meta tags | Gestión declarativa de `<head>` |
| `sass` | Estilos | Variables, mixins y anidamiento |
| `vitest` + Testing Library | Tests | Integración nativa con Vite |
| `vitest-axe` + `axe-core` | A11y tests | Auditoría automatizada WCAG |
| `eslint-plugin-jsx-a11y` | Lint a11y | Detección en tiempo de desarrollo |

No se usan librerías de UI pesadas (Material, Bootstrap) para mantener el bundle pequeño y control total del diseño.

---

## Paleta de colores

| Token | Valor | Uso |
|-------|-------|-----|
| Primario | `#7C3AED` | CTAs, enlaces, acentos |
| Secundario | `#1A0B2E` | Fondos oscuros, headings |
| Acento | `#E879F9` | Destacados, enlaces a sitios en vivo |

---

## Licencia

Proyecto personal — © Diego Lopez Sedeño
