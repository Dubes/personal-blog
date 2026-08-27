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

The development server includes both published posts and unlisted draft routes.

## Writing

- Published posts live in `src/content/` and render at `/blog/<path>/`.
- Drafts live in `src/drafts/` and render at `/drafts/<path>/`.
- Start new posts from `src/templates/post.mdx`.
- Images live in `src/assets/` and can be referenced relatively from MDX.

Draft routes are included in production builds so they can be shared by URL. They are excluded from the homepage, tags, and RSS, and include `noindex, nofollow`; they are not password-protected.

Promote or demote a post by its filename without the `.mdx` extension:

```sh
yarn post:promote my-post
yarn post:demote my-post
```

The commands reject missing or duplicate targets, validate the resulting content collections, and roll back when validation fails.

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

Drafts use the same fields, but `title`, `tags`, and `excerpt` may remain incomplete until promotion.

## Validation

```sh
yarn check
yarn test
yarn build
yarn test:smoke
yarn format:check
```

The static output is written to `dist/`. The smoke test runs against that output and verifies routes, ordering, RSS/tag inclusion, draft exclusion, metadata, image processing, and syntax highlighting.

## Deployment

Netlify builds the site with `yarn build` and publishes `dist/`. Pull requests should use Netlify deploy previews; production deploys from `main`.

The historical `preview` branch is intentionally left untouched until the Astro deployment is verified and Netlify is confirmed not to depend on it.
