import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { unified } from '@astrojs/markdown-remark'
import rehypeExternalLinks from 'rehype-external-links'

function normalizeContentHeadings() {
  return (tree) => {
    const headings = []

    function collect(node) {
      if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
        headings.push(node)
      }
      node.children?.forEach(collect)
    }

    collect(tree)
    if (headings.length === 0) return

    const minimumLevel = Math.min(
      ...headings.map((heading) => Number(heading.tagName.slice(1)))
    )
    const offset = 2 - minimumLevel

    for (const heading of headings) {
      const level = Number(heading.tagName.slice(1))
      heading.tagName = `h${Math.min(6, Math.max(2, level + offset))}`
    }
  }
}

export default defineConfig({
  site: 'https://observance.io',
  output: 'static',
  integrations: [mdx()],
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  markdown: {
    processor: unified({
      rehypePlugins: [
        normalizeContentHeadings,
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener', 'noreferrer'],
          },
        ],
      ],
    }),
    shikiConfig: {
      theme: 'github-dark',
    },
  },
})
