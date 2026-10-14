// @ts-check
import { defineConfig } from 'astro/config';

// Déploiement GitHub Pages (project page).
// → https://haitodann.github.io/PlaZma_web/
// Si un domaine personnalisé est ajouté plus tard, remettre `base: '/'`
// et changer `site` par le domaine (ex. 'https://plazma.gg').
export default defineConfig({
  site: 'https://haitodann.github.io',
  base: '/PlaZma_web',
  trailingSlash: 'ignore',
});
