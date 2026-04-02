import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://adgewalker.github.io',
  base: '/github-pages-demo',
  vite: {
    plugins: [tailwindcss()],
  },
});