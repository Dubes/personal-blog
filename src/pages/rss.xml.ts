import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { sortPosts } from '../utils/content'

export async function GET(context: { site: URL }) {
  const posts = sortPosts(await getCollection('blog'))

  return rss({
    title: "Kapil's personal blog",
    description:
      'Collection of my learnings, philosophy, mistakes & observations.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/blog${post.data.path}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  })
}
