import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl, buildOgImage, buildPageTitle } from '@/utils/seo';
import type { PageMeta } from '@/utils/seo';

/**
 * Componente SEO — meta tags dinámicos por página.
 *
 * @param title - Título de la página (se concatena con el nombre del sitio)
 * @param description - Meta description
 * @param path - Ruta relativa para canonical y OG url
 * @param image - Imagen Open Graph (opcional)
 * @param type - Tipo OG (default: website)
 */
export function SEO({ title, description, path = '', image, type = 'website' }: PageMeta) {
  const pageTitle = buildPageTitle(title);
  const canonical = buildCanonicalUrl(path);
  const ogImage = buildOgImage(image);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_MX" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
