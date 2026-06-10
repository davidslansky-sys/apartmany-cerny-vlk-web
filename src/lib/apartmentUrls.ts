type Lang = 'cs' | 'de' | 'en';
type ApartmentKey = 'cerveny' | 'zluty' | 'zeleny' | 'modry' | 'sedy';
type SectionKey = 'rezervace';

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

const pageSlugs: Record<Lang, { equipment: string }> = {
  cs: { equipment: 'vybaveni' },
  de: { equipment: 'ausstattung' },
  en: { equipment: 'amenities' },
};

const sectionIds: Record<Lang, Record<SectionKey, string>> = {
  cs: { rezervace: 'rezervace' },
  de: { rezervace: 'rezervace' },
  en: { rezervace: 'rezervace' },
};

const withLocalePrefix = (lang: Lang, slug: string) => {
  if (lang === 'cs') return `/${slug}`;
  return `/${lang}/${slug}`;
};

export function getApartmentUrl(lang: Lang, apartment: ApartmentKey) {
  return withLocalePrefix(lang, apartmentSlugs[lang][apartment]);
}

export function getEquipmentUrl(lang: Lang) {
  return withLocalePrefix(lang, pageSlugs[lang].equipment);
}

export function getLocalizedSectionUrl(lang: Lang, section: SectionKey) {
  if (lang === 'cs') return `/#${sectionIds[lang][section]}`;
  return `/${lang}/#${sectionIds[lang][section]}`;
}
