import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const about = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/about' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    summary: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    hours: z.string().optional(),
    licences: z.array(z.string()).optional(),
    ratings: z.array(z.string()).optional(),
    linkedin: z.string().url().optional(),
    heroImage: z.string().optional(),
  }),
});

const recommendations = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/recommendations' }),
  schema: z.object({
    author: z.string(),
    role: z.string(),
    company: z.string(),
    text: z.string(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    aircraft: z.string().optional(),
    highlights: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { about, recommendations, experience };