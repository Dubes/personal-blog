# Core

Personal blog "Observance" (Kapil Dube). Static site, Astro + MDX, deployed on Netlify to https://observance.io.

## Source map
- `src/content/*.mdx` — published blog posts (flat, no subdirs). Render at `/blog/<slug>/`.
- `src/archive/*.md` — old posts, NOT part of the `blog` collection (loader base is `./src/content`). Kept for reference only.
- `src/content.config.ts` — the single `blog` collection: glob loader over `**/*.mdx` under `src/content`, Zod schema (see `mem:conventions` for frontmatter contract).
- `src/templates/post.mdx` — starting template for new posts (not published; outside content base).
- `src/pages/` — routes: `index.astro`, `about.astro`, `404.astro`, `blog/[slug].astro`, `tags/index.astro`, `tags/[tag].astro`, `rss.xml.ts`.
- `src/layouts/` — `BaseLayout.astro`, `PostLayout.astro`.
- `src/components/` — `Header`, `Footer`, `BlogTeaser`, `ShortBio`, `TweetEmbed`.
- `src/utils/content.ts` — post helpers: `sortPosts`, `groupPostsByTag`, `tagSlug`, `formatDate`, `BlogPost`/`TagGroup` types. Reuse these; don't re-derive tag/date logic.
- `src/styles/global.css`, `src/assets/` — styles and images (referenced relatively from MDX).
- `scripts/smoke.mjs` — post-build smoke test (see `mem:task_completion`).
- `astro.config.mjs` — custom markdown pipeline (see `mem:tech_stack`).

## Invariants
- Adding a post = drop one `.mdx` in `src/content/`; no index/registration file to update.
- See `mem:tech_stack` (stack/build), `mem:suggested_commands` (commands), `mem:conventions` (style + frontmatter), `mem:task_completion` (done criteria).
