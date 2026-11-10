# Mediaddict

**Keep track of what you watch.** Mediaddict is an Android app to follow your movies, TV shows and anime: what you have watched, which episode you are on and what is coming next.

- Website: [mediaddict.app](https://mediaddict.app)
- Google Play: [Mediaddict](https://play.google.com/store/apps/details?id=smt.app.mediaddict)

## What it does

- **Movies, shows and anime in one place.** Your watch history, the episode you are on, ratings and notes.
- **Trakt, Simkl or no account.** Connect your Trakt or Simkl account, or use the app with no account and keep your library on your phone.
- **Calendar and release alerts.** See what premieres and get a notification when a new episode or movie arrives.
- **Your library is yours.** No account of its own and no servers holding your list. Optional backups to a folder on your phone or to your own Google Drive.
- **Free, with no ads.**

Title data comes from [TMDB](https://www.themoviedb.org), [Trakt](https://trakt.tv), [Simkl](https://simkl.com) and [TheTVDB](https://thetvdb.com). This product uses the TMDB API but is not endorsed or certified by TMDB.

## Privacy and terms

- [Privacy policy](https://mediaddict.app/privacy) ([en español](https://mediaddict.app/es/privacy))
- [Terms of use](https://mediaddict.app/terms) ([en español](https://mediaddict.app/es/terms))
- Contact: [app@mediaddict.app](mailto:app@mediaddict.app)

## About this repository

This repository holds the source of the website: the landing page, the privacy policy and the terms, in English and Spanish. It does not contain the app.

- Built with [Astro](https://astro.build) as a static site (no SSR) and served by Cloudflare.
- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (writes `dist/`, which is not committed).
- English (the default) lives at `/`, `/privacy` and `/terms`; Spanish under `/es/`. The old `/en/...` addresses redirect to the root (`public/_redirects`).
- Copy: home page in `src/landing-copy.ts`, header and footer in `src/i18n.ts`, legal pages in `src/components/Privacy.astro` and `Terms.astro`.
- The interactive phone on the home page is `public/phone.js` (plain JavaScript, no dependencies), fed by `src/data/demo.en.json` and `demo.es.json`. Fonts are self-hosted with `@fontsource`.
- Cloudflare build: `npm run build`, deploy `npx wrangler deploy`, production branch `main`.

The privacy policy must always match what the published version of the app actually does.
