import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * GitHub Pages (repo de proyecto): VITE_BASE_PATH=/NombreDelRepo/
 * GitHub Pages (usuario.github.io): VITE_BASE_PATH=/
 * Local / Netlify / Vercel: no definir (default /)
 */
const base = process.env.VITE_BASE_PATH ?? '/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet-async'],
        },
      },
    },
    target: 'es2020',
    sourcemap: false,
  },
});
