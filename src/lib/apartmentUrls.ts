import { getRelativeLocaleUrl } from 'astro:i18n';

export type Lang = 'cs' | 'de' | 'en';
export type ApartmentKey = 'cerveny' | 'zluty' | 'zeleny' | 'modry' | 'sedy';

const apartmentSlugs: Record<Lang, Record<ApartmentKey, string>> = {
  cs: {
    cerveny: 'cerveny',
    zluty: 'zluty',
    zeleny: 'zeleny',
    modry: 'modry',
    sedy: 'sedy',
  },
  de: {
    cerveny: 'cerveny',
    zluty: 'zluty',
    zeleny: 'zeleny',
    modry: 'modry',
    sedy: 'sedy',
  },
  en: {
    cerveny: 'cerveny',
    zluty: 'zluty',
    zeleny: 'zeleny',
    modry: 'modry',
    sedy: 'sedy',
  },
};

export function getApartmentUrl(lang: Lang, apartment: ApartmentKey) {
  return getRelativeLocaleUrl(lang, `apartmany/${apartmentSlugs[lang][apartment]}`);
}

export function getEquipmentUrl(lang: Lang) {
  return getRelativeLocaleUrl(lang, 'vybaveni');
}

export function getLocalizedSectionUrl(lang: Lang, hash: string) {
  const base = getRelativeLocaleUrl(lang, '');
  const cleanHash = hash.startsWith('#') ? hash : `#${hash}`;
  return `${base}${cleanHash}`;
}
