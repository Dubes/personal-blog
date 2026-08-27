# Observance

Kapil Dube's personal blog, statically generated with Astro and authored in MDX.

## Requirements

- Node.js 24
- Yarn 4.1.1 (the repository pins its Yarn release)

## Local development

```sh
yarn install
yarn develop
```

The development server renders the posts in the current branch.

## Writing

- Published posts live in `src/content/` and render at `/blog/<slug>/`.
- Start new posts from `src/templates/post.mdx`.
- Images live in `src/assets/` and can be referenced relatively from MDX.

## Authoring workflow

1. Create `post/<slug>` from `main`.
2. Add the MDX file directly to `src/content/`.
3. Open a draft pull request.
4. Review the Netlify Deploy Preview, using the PR template's entry path.
5. Update the publication date.
6. Merge to `main` to publish.

Netlify previews are `noindex`, but they are not inherently private. Public Git branches also expose draft source, so do not put confidential material in a draft.

## Content frontmatter

Published posts require:

```yaml
---
path: '/my-post'
date: '2026-01-01'
title: 'My post'
tags: ['example']
excerpt: 'A short feed and listing summary.'
---
```

## Validation

```sh
yarn check
yarn test
yarn build
yarn test:smoke
yarn format:check
```

The static output is written to `dist/`. The smoke test verifies published routes, ordering, RSS/tag inclusion, metadata, image processing, external links, and syntax highlighting.

## Deployment

Netlify builds the site with `yarn build` and publishes `dist/`. Pull requests should use Netlify deploy previews; production deploys from `main`.

The historical `preview` branch is intentionally left untouched until the Astro deployment is verified and Netlify is confirmed not to depend on it.
