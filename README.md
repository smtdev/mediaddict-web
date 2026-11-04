# mediaddict-web

Web estática de Mediaddict (Astro, sin SSR). Destino: Cloudflare Pages en https://mediaddict.app.

- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (genera `dist/`, no se comitea).
- Español en `/`, `/privacy`, `/terms`; inglés bajo `/en/`. Textos de portada y pie en `src/i18n.ts`; legales en `src/components/Privacy.astro` y `Terms.astro`.
- Cloudflare Pages: build command `npm run build`, output directory `dist`, variable `NODE_VERSION=22`.
