# Conventions

## Formatting (.prettierrc)
- No semicolons, single quotes, `trailingComma: es5`. `prettier-plugin-astro` for `.astro`.
- TS strict (astro strict preset). Match existing `.astro` component idioms.

## Post frontmatter contract (src/content.config.ts, Zod-enforced)
Required fields on every published `src/content/*.mdx`:
- `path` — string matching `^/[a-z0-9]+(?:-[a-z0-9]+)*$` (leading slash, lowercase, hyphenated slug; no trailing slash).
- `date` — coerced to Date (`YYYY-MM-DD`).
- `title` — non-empty string.
- `tags` — string array, defaults `[]`.
- `excerpt` — non-empty string (feed/listing summary).
Extra/misnamed fields or a malformed `path` fail the build. Start from `src/templates/post.mdx`.

## Post file naming
Files are named `YYYY-MM-DD-<slug>.mdx` by convention, but the route slug comes from frontmatter `path`, not the filename.

## Content helpers
Use `src/utils/content.ts` (`sortPosts`, `groupPostsByTag`, `tagSlug`, `formatDate`) rather than re-implementing ordering/tag-slug/date formatting.
