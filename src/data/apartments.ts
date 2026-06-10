export const locales = ['cs', 'de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const apartmentKeys = [
  'cerveny',
  'zluty',
  'zeleny',
  'modry',
  'sedy'
] as const;

export type ApartmentKey = (typeof apartmentKeys)[number];

export interface Apartment {
  key: ApartmentKey;
  buildingNumber: '116' | '117';
  capacity: string;
  bedrooms: number;
  area: string;
  colorHex: string;
  image: string;
  names: Record<Locale, string>;
  urls: Record<Locale, string>;
}

export const apartments: Apartment[] = [
  {
    key: 'cerveny',
    buildingNumber: '116',
    capacity: '8',
    bedrooms: 3,
    area: '116 m²',
    colorHex: '#c0392b',
    image: '/images/apartmany/cerveny/cerveny-01.jpg',
    names: {
      cs: 'Červený',
      de: 'Rotes',
      en: 'Red'
    },
    urls: {
      cs: '/apartmany/cerveny/',
      de: '/de/cerveny/',
      en: '/en/cerveny/'
    }
  },
  {
    key: 'zluty',
    buildingNumber: '116',
    capacity: '4+1',
    bedrooms: 2,
    area: '56 m²',
    colorHex: '#d4a017',
    image: '/images/apartmany/zluty/zluty-01.jpg',
    names: {
      cs: 'Žlutý',
      de: 'Gelbes',
      en: 'Yellow'
    },
    urls: {
      cs: '/apartmany/zluty/',
      de: '/de/zluty/',
      en: '/en/zluty/'
    }
  },
  {
    key: 'zeleny',
    buildingNumber: '116',
    capacity: '4+1',
    bedrooms: 2,
    area: '56 m²',
    colorHex: '#2e7d32',
    image: '/images/apartmany/zeleny/zeleny-01.jpg',
    names: {
      cs: 'Zelený',
      de: 'Grünes',
      en: 'Green'
    },
    urls: {
      cs: '/apartmany/zeleny/',
      de: '/de/zeleny/',
      en: '/en/zeleny/'
    }
  },
  {
    key: 'modry',
    buildingNumber: '117',
    capacity: '4+1',
    bedrooms: 2,
    area: '56 m²',
    colorHex: '#1565c0',
    image: '/images/apartmany/modry/modry-01.jpg',
    names: {
      cs: 'Modrý',
      de: 'Blaues',
      en: 'Blue'
    },
    urls: {
      cs: '/apartmany/modry/',
      de: '/de/modry/',
      en: '/en/modry/'
    }
  },
  {
    key: 'sedy',
    buildingNumber: '117',
    capacity: '4+1',
    bedrooms: 2,
    area: '56 m²',
    colorHex: '#607d8b',
    image: '/images/apartmany/sedy/sedy-01.jpg',
    names: {
      cs: 'Šedý',
      de: 'Graues',
      en: 'Grey'
    },
    urls: {
      cs: '/apartmany/sedy/',
      de: '/de/sedy/',
      en: '/en/sedy/'
    }
  }
];

export function getApartmentByKey(key: ApartmentKey): Apartment {
  const apartment = apartments.find((item) => item.key === key);

  if (!apartment) {
    throw new Error(`Unknown apartment key: ${key}`);
  }

  return apartment;
}
