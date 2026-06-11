import type { ApartmentKey } from '../data/apartments';

type Lang = 'cs' | 'de' | 'en';

const apartmentPaths: Record<Lang, Record<ApartmentKey, string>> = {
  cs: {
    cerveny: '/apartmany/cerveny/',
    zluty:   '/apartmany/zluty/',
    zeleny:  '/apartmany/zeleny/',
    modry:   '/apartmany/modry/',
    sedy:    '/apartmany/sedy/',
  },
  de: {
    cerveny: '/de/cerveny/',
    zluty:   '/de/zluty/',
    zeleny:  '/de/zeleny/',
    modry:   '/de/modry/',
    sedy:    '/de/sedy/',
  },
  en: {
    cerveny: '/en/cerveny/',
    zluty:   '/en/zluty/',
    zeleny:  '/en/zeleny/',
    modry:   '/en/modry/',
    sedy:    '/en/sedy/',
  },
};

const equipmentPaths: Record<Lang, string> = {
  cs: '/vybaveni/',
  de: '/de/vybaveni/',
  en: '/en/vybaveni/',
};

export function getApartmentUrl(lang: Lang, key: ApartmentKey): string {
  return apartmentPaths[lang][key];
}

export function getEquipmentUrl(lang: Lang): string {
  return equipmentPaths[lang];
}

export function getLocalizedSectionUrl(
  lang: Lang,
  sectionId: string
): string {
  const base = lang === 'cs' ? '/' : `/${lang}/`;
  return `${base}#${sectionId}`;
}
