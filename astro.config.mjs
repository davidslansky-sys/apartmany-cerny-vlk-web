import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.apartmanycernyvlk.cz',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
