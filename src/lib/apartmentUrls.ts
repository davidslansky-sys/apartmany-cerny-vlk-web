import type { ApartmentKey, Locale } from '../data/apartments';
import { getApartmentByKey } from '../data/apartments';

export function getApartmentUrl(key: ApartmentKey, locale: Locale): string {
  return getApartmentByKey(key).urls[locale];
}

export function getApartmentName(key: ApartmentKey, locale: Locale): string {
  return getApartmentByKey(key).names[locale];
}
