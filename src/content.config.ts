import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apartments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apartments' }),
  schema: z.object({
    id: z.enum(['cerveny', 'zluty', 'zeleny', 'sedy', 'modry']),
    lang: z.enum(['cs', 'de', 'en']),
    slug: z.string(),
    title: z.string(),
    navTitle: z.string().optional(),
    summary: z.string(),
    body: z.string().optional(),
    capacityText: z.string(),
    capacityBase: z.number(),
    extraBeds: z.number().optional(),
    sizeM2: z.number(),
    houseNumber: z.enum(['116', '117']).optional(),
    featured: z.boolean().default(false),
    highlights: z.array(z.string()).default([]),
    amenities: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]),
    heroImage: z.string(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      ogImage: z.string().optional(),
    }),
    source: z
      .object({
        originalHtml: z.string().optional(),
      })
      .optional(),
    sortOrder: z.number(),
  }),
});

export const collections = {
  apartments,
};
