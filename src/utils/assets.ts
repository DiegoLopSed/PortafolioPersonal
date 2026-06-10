/**
 * Resuelve rutas de archivos en /public respetando VITE_BASE_PATH (GitHub Pages).
 * Usar siempre esta función para imágenes referenciadas desde datos estáticos.
 */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
