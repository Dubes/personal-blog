# Suggested Commands

Package manager is Yarn 4 (see `mem:tech_stack`).

- `yarn install` — install deps.
- `yarn develop` (alias `yarn start`) — dev server (`astro dev`).
- `yarn build` — production build to `dist/` (`astro build`).
- `yarn check` — `astro check` (type/diagnostics).
- `yarn format` — prettier write; `yarn format:check` — prettier check.
- `yarn test` — `node --test` (node native test runner).
- `yarn test:smoke` — `node scripts/smoke.mjs`; requires a prior `yarn build` (asserts against `dist/`).

Platform is Darwin (macOS); standard BSD userland. No non-standard system-command forms needed. Run all commands from the worktree root.
