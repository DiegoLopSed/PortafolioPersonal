/**
 * Copia index.html → 404.html para que GitHub Pages enrute la SPA al refrescar.
 */
import { copyFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const index = resolve('dist', 'index.html');
const notFound = resolve('dist', '404.html');

if (!existsSync(index)) {
  console.error('No se encontró dist/index.html. Ejecuta vite build primero.');
  process.exit(1);
}

copyFileSync(index, notFound);
console.log('✓ 404.html generado para GitHub Pages');
