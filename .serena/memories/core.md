# Core

Personal blog "Observance" (Kapil Dube). Static site, Astro + MDX, deployed on Netlify to https://observance.io.

## Source map
- `src/content/*.mdx` — published blog posts (flat). Render at `/blog/<slug>/`.
- `src/musings/*.mdx`, `src/ramblings/*.mdx` — short-form note collections (see "Content collections" below). Render at `/musings/<slug>/` and `/ramblings/<slug>/`.
- `src/archive/*.md` — old posts, NOT part of any collection. Reference only.
- `src/content.config.ts` — defines all three collections (`blog`, `musings`, `ramblings`) and their Zod schemas.
- `src/templates/post.mdx` — starting template for new blog posts (not published; outside content base).
- `src/pages/` — routes: `index.astro`, `about.astro`, `404.astro`, `blog/[slug].astro`, `musings/[slug].astro` + `musings/index.astro`, `ramblings/[slug].astro` + `ramblings/index.astro`, `tags/index.astro`, `tags/[tag].astro`, `rss.xml.ts`.
- `src/layouts/` — `BaseLayout.astro` (page shell, head/meta, theme script), `PostLayout.astro` (article shell; props incl. optional `backHref`/`backLabel` for the back link, reused by blog + notes).
- `src/components/` — `Header` (nav + theme toggle), `Footer`, `BlogTeaser` (essay teaser, "Read essay"), `NoteTeaser` (lighter teaser for musings/ramblings), `ShortBio`, `TweetEmbed`.
- `src/utils/content.ts` — `sortPosts` (generic over any `{data:{date}}` entry), `groupPostsByTag`, `tagSlug`, `formatDate`. Reuse these.
- `src/styles/global.css`, `src/assets/` — styles and images.
- `scripts/smoke.mjs` — post-build smoke test, blog-only (see `mem:task_completion`).
- `astro.config.mjs` — custom markdown pipeline (see `mem:tech_stack`).

## Content collections
- **`blog`** loader is `glob('**/*.mdx', base: './src/content')` — RECURSIVE. Any `.mdx` in a subfolder of `src/content/` leaks into `blog`. Keep other collections in their own top-level `src/<name>/` base dirs (as musings/ramblings do) to avoid this.
- **`musings` / `ramblings`** are short/raw notes: schema is `path`, `date`, `title`, optional `excerpt` (no `tags`, deliberately — tags/RSS pages are blog-only). Adding a note = drop one `.mdx` in `src/musings/` or `src/ramblings/`; route slug comes from frontmatter `path`.
- **RSS** (`rss.xml.ts`) and **tags** pages cover `blog` only; extend them if notes should appear there.
- Adding a blog post = drop one `.mdx` in `src/content/`; no registration file.

## Adding a new nav section (pattern used for musings/ramblings)
1. Add a collection in `src/content.config.ts` with its own base dir. 2. Create `src/<name>/` content dir. 3. Add `src/pages/<name>/[slug].astro` (getStaticPaths over the collection → `PostLayout` with `backHref`/`backLabel`) and `src/pages/<name>/index.astro` (listing via `sortPosts` + `NoteTeaser`). 4. Add nav link + `xIsCurrent` flag in `Header.astro`.

See `mem:tech_stack`, `mem:suggested_commands`, `mem:conventions`, `mem:task_completion`.
