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

// Short-form, informal notes. Each lives in its own base directory so it never
// leaks into the recursive `blog` glob above. `excerpt` is optional here since
// these are meant to be quick and raw.
const notes = (base: string) =>
  defineCollection({
    loader: glob({ pattern: '*.mdx', base }),
    schema: z.object({
      path,
      date: z.coerce.date(),
      title: z.string().min(1),
      excerpt: z.string().min(1).optional(),
    }),
  })

const musings = notes('./src/musings')
const ramblings = notes('./src/ramblings')

export const collections = { blog, musings, ramblings }
