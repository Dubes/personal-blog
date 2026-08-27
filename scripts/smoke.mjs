import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

async function entries(directory) {
  const files = (await readdir(path.join(root, 'src', directory))).filter(
    (file) => file.endsWith('.mdx')
  )

  return Promise.all(
    files.map(async (file) => {
      const source = await readFile(
        path.join(root, 'src', directory, file),
        'utf8'
      )
      const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
      const value = (field) =>
        frontmatter.match(
          new RegExp(`^${field}: ['"]?(.*?)['"]?$`, 'm')
        )?.[1] ?? ''
      const tags = (frontmatter.match(/^tags: \[(.*)\]$/m)?.[1] ?? '')
        .split(',')
        .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)

      return {
        date: value('date'),
        path: value('path').replace(/^['"]|['"]$/g, ''),
        title: value('title').replace(/^['"]|['"]$/g, ''),
        tags,
      }
    })
  )
}

function outputPath(prefix, postPath) {
  return path.join(root, 'dist', prefix, postPath.slice(1), 'index.html')
}

function tagSlug(tag) {
  return tag
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const publicPosts = await entries('content')
const drafts = await entries('drafts')
const homepage = await readFile(path.join(root, 'dist', 'index.html'), 'utf8')
const feed = await readFile(path.join(root, 'dist', 'rss.xml'), 'utf8')

let previousIndex = -1
for (const post of [...publicPosts].sort((a, b) =>
  b.date.localeCompare(a.date)
)) {
  const html = await readFile(outputPath('blog', post.path), 'utf8')
  assert.match(html, /rel="canonical"/)
  assert.match(html, /property="og:type" content="article"/)
  assert.ok(
    feed.includes(`/blog${post.path}/`),
    `${post.path} missing from RSS`
  )

  const homepageIndex = homepage.indexOf(`/blog${post.path}/`)
  assert.ok(
    homepageIndex > previousIndex,
    `${post.path} is out of order on the homepage`
  )
  previousIndex = homepageIndex

  for (const tag of post.tags) {
    const tagPage = await readFile(
      path.join(root, 'dist', 'tags', tagSlug(tag), 'index.html'),
      'utf8'
    )
    assert.ok(
      tagPage.includes(`/blog${post.path}/`),
      `${post.path} missing from ${tag}`
    )
  }
}

for (const draft of drafts) {
  const html = await readFile(outputPath('drafts', draft.path), 'utf8')
  assert.match(html, /name="robots" content="noindex, nofollow"/)
  assert.ok(
    !homepage.includes(`/drafts${draft.path}/`),
    `${draft.path} leaked to homepage`
  )
  assert.ok(!feed.includes(draft.path), `${draft.path} leaked to RSS`)
}

const imagePost = await readFile(
  outputPath('blog', '/making-story-points-work'),
  'utf8'
)
assert.match(imagePost, /\/_astro\//)
assert.match(
  imagePost,
  /<a(?=[^>]*target="_blank")(?=[^>]*rel="noopener noreferrer")[^>]*>/
)

const codePost = await readFile(
  outputPath('blog', '/making-scope-negotiable'),
  'utf8'
)
assert.match(codePost, /class="astro-code github-dark"/)

console.log(
  `Smoke-tested ${publicPosts.length} posts and ${drafts.length} drafts.`
)
