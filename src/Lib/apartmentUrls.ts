export type Lang = 'cs' | 'de' | 'en';
export type ApartmentKey = 'cerveny' | 'zluty' | 'zeleny' | 'modry' | 'sedy';

const apartmentBaseByLang: Record<Lang, string> = {
  cs: '/apartmany',
  de: '/apartmany',
  en: '/apartmany',
};

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

export function getLocalizedPath(lang: Lang, path: string) {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const localized = lang === 'cs' ? `/${clean}/` : `/${lang}/${clean}/`;
  return localized.replace(/\/+/g, '/');
}

export function getApartmentUrl(lang: Lang, apartment: ApartmentKey) {
  const base = apartmentBaseByLang[lang];
  const slug = apartmentSlugs[lang][apartment];
  return getLocalizedPath(lang, `${base.replace(/^\/+|\/+$/g, '')}/${slug}`);
}

export function getEquipmentUrl(lang: Lang) {
  return getLocalizedPath(lang, 'vybaveni');
}

export function getLocalizedSectionUrl(lang: Lang, hash: string) {
  const cleanHash = hash.startsWith('#') ? hash : `#${hash}`;
  return `${getLocalizedPath(lang, '')}${cleanHash}`;
}
