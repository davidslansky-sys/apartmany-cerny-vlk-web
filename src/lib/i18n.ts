import type { Locale } from '../data/apartments';
import { locales } from '../data/apartments';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split('/');

  if (maybeLocale && isLocale(maybeLocale)) {
    return maybeLocale;
  }

  return 'cs';
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return '/';
  }

  if (isLocale(segments[0])) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}/` : '/';
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function localizePath(path: string, locale: Locale): string {
  const normalized =
    path === '/'
      ? '/'
      : path.endsWith('/')
        ? path
        : `${path}/`;

  if (locale === 'cs') {
    return normalized;
  }

  if (normalized === '/') {
    return `/${locale}/`;
  }

  return `/${locale}${normalized}`;
}
