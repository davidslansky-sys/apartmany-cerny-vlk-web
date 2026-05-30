import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
