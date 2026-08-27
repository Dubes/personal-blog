import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const path = z.string().regex(/^\/[a-z0-9]+(?:-[a-z0-9]+)*$/)
const tags = z.array(z.string().min(1)).default([])

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content' }),
  schema: z.object({
    path,
    date: z.coerce.date(),
    title: z.string().min(1),
    tags,
    excerpt: z.string().min(1),
  }),
})

export const collections = { blog }
