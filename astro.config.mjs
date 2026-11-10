import { defineConfig } from 'astro/config';
import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// With build.format 'file' the build emits privacy.html, which Cloudflare serves at /privacy without redirecting to /privacy/.
// The side effect is that /es/ comes out as es.html; this hook adds es/index.html so that both /es/ and /es work.
const spanishHomeIndex = {
  name: 'spanish-home-index',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      await mkdir(`${root}es`, { recursive: true });
      await copyFile(`${root}es.html`, `${root}es/index.html`);
    },
  },
};

export default defineConfig({
  site: 'https://mediaddict.app',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'file' },
  integrations: [spanishHomeIndex],
});
