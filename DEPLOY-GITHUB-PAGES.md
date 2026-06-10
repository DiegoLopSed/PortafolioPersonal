# Despliegue en GitHub + GitHub Pages

Guía para publicar este portafolio en [GitHub Pages](https://pages.github.com/).

---

## 1. Subir el proyecto a GitHub

```bash
cd c:\Workspace\Portafolio

git init
git add .
git commit -m "Portafolio personal — React + Vite"

# Crea el repo en https://github.com/new (ej. nombre: Portafolio)
git remote add origin https://github.com/DiegoLopSed/Portafolio.git
git branch -M main
git push -u origin main
```

> No subas `.env` con secretos. `node_modules/` y `dist/` ya están en `.gitignore`.

---

## 2. Activar GitHub Pages

1. En GitHub: **Settings → Pages**
2. **Build and deployment → Source**: selecciona **GitHub Actions**
3. Tras el primer push a `main`, el workflow `.github/workflows/deploy-github-pages.yml` construirá y publicará el sitio.

URL esperada (repo de proyecto):

**https://diegolopsed.github.io/Portafolio/**

---

## 3. Configurar la ruta base (`VITE_BASE_PATH`)

| Tipo de sitio | Repositorio | `VITE_BASE_PATH` |
|---------------|-------------|------------------|
| Proyecto | `DiegoLopSed/Portafolio` | `/Portafolio/` |
| Usuario | `DiegoLopSed/DiegoLopSed.github.io` | `/` |

Edita la variable en `.github/workflows/deploy-github-pages.yml` si tu repo tiene otro nombre.

Prueba local con la misma ruta:

```bash
# Windows PowerShell
$env:VITE_BASE_PATH="/Portafolio/"; npm run build:pages; npm run preview
```

---

## 4. Actualizar SEO y enlaces absolutos

En `src/data/site.ts` cambia `siteUrl`:

```ts
siteUrl: 'https://diegolopsed.github.io/Portafolio',
```

Actualiza también las URLs en `public/sitemap.xml` y `public/robots.txt`.

---

## 5. Formulario de contacto en GitHub Pages

**Netlify Forms no funciona en GitHub Pages.** Opciones:

- [Formspree](https://formspree.io) — ver README, sección Contacto
- [EmailJS](https://www.emailjs.com/)
- Enlace `mailto:` directo

---

## 6. Comandos útiles

```bash
npm run build:pages   # Build + 404.html para SPA en Pages
npm run preview       # Vista previa del build
```

---

## Solución de problemas

| Problema | Solución |
|----------|----------|
| Página en blanco / sin estilos | Revisa que `VITE_BASE_PATH` coincida con el nombre del repo (`/Repo/`) |
| 404 al refrescar `/about` | El workflow ya copia `index.html` → `404.html` |
| Assets no cargan | Limpia caché del navegador y verifica `base` en `vite.config.ts` |
