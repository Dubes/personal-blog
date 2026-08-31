# Tech Stack

- Astro `^7.2.9`, static output (`output: 'static'`), site `https://observance.io`. Build dir `dist/`.
- MDX via `@astrojs/mdx`; RSS via `@astrojs/rss`.
- TypeScript `^6`, config extends `astro/tsconfigs/strict`.
- Package manager: **Yarn 4.1.1** (pinned via `packageManager` + `.yarn/releases`). Do not use npm/pnpm.
- Node **24** (`.nvmrc`, `netlify.toml`; package.json engines says `>=22.12.0` but README/CI target 24).
- `ASTRO_TELEMETRY_DISABLED=1` is set in all astro scripts.

## Custom markdown pipeline (astro.config.mjs)
- Uses a custom `unified()` processor (overrides Astro defaults) with rehype plugins:
  - `normalizeContentHeadings` (local): rewrites each post's headings so the shallowest becomes `h2`, clamped to h2–h6. Author headings semantically; levels get normalized.
  - `rehypeExternalLinks`: external links get `target=_blank` + `rel=noopener noreferrer`.
- Shiki syntax highlighting, theme `github-dark`.
- Images: `layout: 'constrained'`, `responsiveStyles: true`.
