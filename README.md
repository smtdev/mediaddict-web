# mediaddict-web

Web estática de Mediaddict (Astro, sin SSR). Destino: Cloudflare Pages en https://mediaddict.app.

- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (genera `dist/`, no se comitea).
- Español en `/`, `/privacy`, `/terms`; inglés bajo `/en/`. Textos de portada y pie en `src/i18n.ts`; legales en `src/components/Privacy.astro` y `Terms.astro`.
- Cloudflare Pages: build command `npm run build`, output directory `dist`, variable `NODE_VERSION=22`.

## Portada interactiva
La portada (`src/components/Landing.astro`) lleva un móvil interactivo que replica la app: lo mueve `public/phone.js` (JS clásico, sin dependencias) con los datos de `src/data/demo.es.json` y `demo.en.json` (títulos, pósters, episodios y reparto de TMDB; los pósters se cargan desde image.tmdb.org). El texto de la portada está en `src/landing-copy.ts` (es/en). Las tipografías están autoalojadas (`@fontsource`), sin Google Fonts. `public/og.png` es la imagen para compartir.

Antes de publicar, la política de privacidad (`src/components/Privacy.astro`) debe coincidir con lo que la app hace de verdad en la versión publicada.
