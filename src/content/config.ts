import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The CMS writes an empty string for an optional date left blank; z.coerce.date()
// turns '' into an Invalid Date and fails the build. Treat blank/null as "unset".
const optionalDate = z.preprocess(
  (v) => (v === '' || v === null ? undefined : v),
  z.coerce.date().optional(),
);

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: optionalDate,
  updDate: optionalDate,
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
}).refine(
  (data) => data.draft || !!data.pubDate,
  { message: "pubDate is required when draft is false" }
).refine(
  (data) => !(data.pubDate && data.draft),
  { message: "A post cannot have pubDate and be a draft at the same time" }
);

const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './blog-posts/blog/es' }),
  schema: postSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './blog-posts/blog/en' }),
  schema: postSchema,
});

export const collections = { blogEs, blogEn };
