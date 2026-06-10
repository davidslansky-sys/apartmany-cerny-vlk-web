import type { Locale } from '../data/apartments';

export type StaticRouteKey =
  | 'home'
  | 'vybaveni'
  | 'okoli'
  | 'recenze'
  | 'kontakt';

const routes: Record<StaticRouteKey, Record<Locale, string>> = {
  home: {
    cs: '/',
    de: '/de/',
    en: '/en/'
  },
  vybaveni: {
    cs: '/vybaveni/',
    de: '/de/vybaveni/',
    en: '/en/vybaveni/'
  },
  okoli: {
    cs: '/okoli/',
    de: '/de/okoli/',
    en: '/en/okoli/'
  },
  recenze: {
    cs: '/recenze/',
    de: '/de/recenze/',
    en: '/en/recenze/'
  },
  kontakt: {
    cs: '/#rezervace',
    de: '/de/#rezervace',
    en: '/en/#rezervace'
  }
};

export function getRoute(key: StaticRouteKey, locale: Locale): string {
  return routes[key][locale];
}

export function getHomeUrl(locale: Locale): string {
  return routes.home[locale];
}
