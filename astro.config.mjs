import { defineConfig } from 'astro/config';
import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// With build.format 'file' the build emits privacy.html, which Cloudflare serves at /privacy without redirecting to /privacy/.
// The side effect is that /en/ comes out as en.html; this hook adds en/index.html so that both /en/ and /en work.
const englishHomeIndex = {
  name: 'english-home-index',
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
  integrations: [englishHomeIndex],
});
