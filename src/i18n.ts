export type Lang = 'es' | 'en';
export type Slug = '' | 'privacy' | 'terms';

export const EMAIL = 'app@mediaddict.app';

/** Path of a page in a language: English at the root, Spanish under /es/. */
export function href(lang: Lang, slug: Slug): string {
  if (slug === '') return lang === 'es' ? '/es/' : '/';
  return lang === 'es' ? `/es/${slug}` : `/${slug}`;
}

export const ui = {
  es: {
    htmlLang: 'es',
    theme: 'Cambiar entre modo claro y oscuro',
    privacy: 'Privacidad',
    terms: 'Términos',
    attrTmdb: 'This product uses the TMDB API but is not endorsed or certified by TMDB.',
    attrData: 'Datos de títulos y de cuentas proporcionados por',
    and: ' y ',
    attrNotAffiliated:
      'Mediaddict es una app independiente y no está afiliada, respaldada ni patrocinada por Trakt, Simkl, TMDB, TheTVDB, Wikidata, KLIPY ni Google.',
    tagline: 'Lleva el control de lo que ves',
    sub: 'Mediaddict es una app para Android para seguir tus películas, series y anime: qué has visto, por qué episodio vas y qué viene.',
    homeTitle: 'Mediaddict: lleva el control de lo que ves',
    homeDesc: 'App para Android para seguir tus películas, series y anime con Trakt, Simkl o sin cuenta.',
    points: [
      ['Películas, series y anime', 'Todo tu historial en un solo sitio: lo visto, el episodio por el que vas, valoraciones y notas.'],
      ['Trakt, Simkl o sin cuenta', 'Conecta tu cuenta de Trakt o de Simkl, o úsala sin cuenta, con la biblioteca guardada en tu teléfono.'],
      ['Calendario y avisos de estreno', 'Mira qué se estrena y recibe avisos en tu teléfono cuando llega un episodio o una película.'],
      ['Tus datos, contigo', 'Sin servidores propios: tu biblioteca vive en el teléfono. Sin publicidad ni analítica.'],
      ['Copia de seguridad opcional', 'Guarda una copia en una carpeta de tu móvil o en tu propio Google Drive, en una carpeta oculta que solo lee la app.'],
    ],
  },
  en: {
    htmlLang: 'en',
    theme: 'Switch between light and dark mode',
    privacy: 'Privacy',
    terms: 'Terms',
    attrTmdb: 'This product uses the TMDB API but is not endorsed or certified by TMDB.',
    attrData: 'Title and account data provided by',
    and: ' and ',
    attrNotAffiliated:
      'Mediaddict is an independent app and is not affiliated with, endorsed by or sponsored by Trakt, Simkl, TMDB, TheTVDB, Wikidata, KLIPY or Google.',
    tagline: 'Keep track of what you watch',
    sub: 'Mediaddict is an Android app to follow your movies, TV shows and anime: what you have watched, which episode you are on and what is coming next.',
    homeTitle: 'Mediaddict: keep track of what you watch',
    homeDesc: 'Android app to track your movies, TV shows and anime with Trakt, Simkl or no account.',
    points: [
      ['Movies, shows and anime', 'Your whole history in one place: what you watched, the episode you are on, ratings and notes.'],
      ['Trakt, Simkl or no account', 'Connect your Trakt or Simkl account, or use the app with no account and the library stored on your phone.'],
      ['Calendar and release alerts', 'See what is coming out and get alerts on your phone when an episode or a movie arrives.'],
      ['Your data stays with you', 'No servers of our own: your library lives on your phone. No ads, no analytics.'],
      ['Optional backup', 'Save a copy to a folder on your phone or to your own Google Drive, in a hidden folder only the app can read.'],
    ],
  },
} as const;
