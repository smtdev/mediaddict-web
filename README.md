# mediaddict-web

Static website for Mediaddict (Astro, no SSR), served by Cloudflare at https://mediaddict.app.

- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (writes `dist/`, which is not committed).
- Spanish at `/`, `/privacy` and `/terms`; English under `/en/`. Home page and footer copy live in `src/i18n.ts`; the legal pages in `src/components/Privacy.astro` and `Terms.astro`.
- Cloudflare build: build command `npm run build`, deploy command `npx wrangler deploy`, production branch `main`.

## Interactive home page
The home page (`src/components/Landing.astro`) shows an interactive phone that replicates the app. It is driven by `public/phone.js` (plain JavaScript, no dependencies) with the data in `src/data/demo.es.json` and `demo.en.json` (titles, posters, episodes and cast from TMDB; posters load from image.tmdb.org). The home page copy is in `src/landing-copy.ts` (es/en). Fonts are self-hosted (`@fontsource`), with no Google Fonts. `public/og.png` is the social sharing image.

Before publishing, the privacy policy (`src/components/Privacy.astro`) must match what the published version of the app actually does.
