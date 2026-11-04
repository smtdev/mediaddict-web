import { defineConfig } from 'astro/config';
import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Con build.format 'file' se genera privacy.html, que Cloudflare Pages sirve en /privacy sin redirigir a /privacy/.
// El efecto secundario es que /en/ sale como en.html; este gancho añade en/index.html para que /en/ y /en funcionen.
const portadaIngles = {
  name: 'portada-en-index',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      await mkdir(`${root}en`, { recursive: true });
      await copyFile(`${root}en.html`, `${root}en/index.html`);
    },
  },
};

export default defineConfig({
  site: 'https://mediaddict.app',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'file' },
  integrations: [portadaIngles],
});
