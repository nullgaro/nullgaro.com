import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updDate: z.coerce.date().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './blog-posts/blog/es' }),
  schema: postSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './blog-posts/blog/en' }),
  schema: postSchema,
});

export const collections = { blogEs, blogEn };
