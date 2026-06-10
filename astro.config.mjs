import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.apartmanycernyvlk.cz',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
