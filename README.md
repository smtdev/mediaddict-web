# Mediaddict

**Keep track of what you watch.** Mediaddict is an Android app to follow your movies, TV shows and anime: what you have watched, which episode you are on and what is coming next.

<a href="https://play.google.com/store/apps/details?id=smt.app.mediaddict"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" height="80"></a>

Website: [mediaddict.app](https://mediaddict.app)

## What it does

- **Movies, shows and anime in one place.** Your watch history, the episode you are on, ratings and notes.
- **Trakt, Simkl or no account.** Connect your Trakt or Simkl account, or use the app with no account and keep your library on your phone.
- **Calendar and release alerts.** See what premieres and get a notification when a new episode or movie arrives.
- **Your library is yours.** No account of its own and no servers holding your list. Optional backups to a folder on your phone or to your own Google Drive.
- **Free, with no ads.**

## Powered by

<p>
  <a href="https://www.themoviedb.org"><img alt="TMDB" src=".github/readme/tmdb.svg" height="56"></a>
  <a href="https://trakt.tv"><img alt="Trakt" src=".github/readme/trakt.svg" height="56"></a>
  <a href="https://simkl.com"><img alt="Simkl" src=".github/readme/simkl.svg" height="56"></a>
  <a href="https://thetvdb.com"><img alt="TheTVDB" src=".github/readme/thetvdb.svg" height="56"></a>
  <a href="https://www.justwatch.com"><img alt="JustWatch" src=".github/readme/justwatch.svg" height="56"></a>
</p>

Movie, show and anime data from TMDB, Trakt, Simkl and TheTVDB; where to watch from JustWatch. This product uses the TMDB API but is not endorsed or certified by TMDB.

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
