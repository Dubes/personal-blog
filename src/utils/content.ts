import type { CollectionEntry } from 'astro:content'

export type BlogPost = CollectionEntry<'blog'>

export function sortPosts<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return [...posts].sort(
    (left, right) => right.data.date.getTime() - left.data.date.getTime()
  )
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date)
}

export function tagSlug(tag: string): string {
  return tag
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export interface TagGroup {
  label: string
  slug: string
  posts: BlogPost[]
}

export function groupPostsByTag(posts: BlogPost[]): TagGroup[] {
  const groups = new Map<string, TagGroup>()

  for (const post of sortPosts(posts)) {
    for (const label of post.data.tags) {
      const slug = tagSlug(label)
      const group = groups.get(slug)

      if (group) {
        group.posts.push(post)
      } else {
        groups.set(slug, { label, slug, posts: [post] })
      }
    }
  }

  return [...groups.values()].sort((left, right) =>
    left.label.localeCompare(right.label)
  )
}
