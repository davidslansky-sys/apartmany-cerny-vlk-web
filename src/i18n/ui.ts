import type { Locale } from '../data/apartments';

export const languages: Record<Locale, string> = {
  cs: 'Čeština',
  de: 'Deutsch',
  en: 'English'
};

export const ui = {
  cs: {
    navHome: 'Domů',
    navApartments: 'Apartmány',
    navAmenities: 'Vybavení',
    navSurroundings: 'Okolí',
    navReviews: 'Recenze',
    navBooking: 'Rezervace',
    ctaAvailability: 'Zobrazit dostupnost',
    ctaReviews: 'Přečíst všechny recenze'
  },
  de: {
    navHome: 'Start',
    navApartments: 'Apartments',
    navAmenities: 'Ausstattung',
    navSurroundings: 'Umgebung',
    navReviews: 'Bewertungen',
    navBooking: 'Reservierung',
    ctaAvailability: 'Verfügbarkeit prüfen',
    ctaReviews: 'Alle Bewertungen lesen'
  },
  en: {
    navHome: 'Home',
    navApartments: 'Apartments',
    navAmenities: 'Amenities',
    navSurroundings: 'Surroundings',
    navReviews: 'Reviews',
    navBooking: 'Booking',
    ctaAvailability: 'Check availability',
    ctaReviews: 'Read all reviews'
  }
} as const;

export type TranslationKey = keyof (typeof ui)['cs'];

export function t(locale: Locale, key: TranslationKey): string {
  return ui[locale][key];
}
