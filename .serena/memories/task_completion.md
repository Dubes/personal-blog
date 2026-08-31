# Task Completion

Run these after any change (from worktree root, order matters — smoke needs a fresh build):

1. `yarn format:check` (or `yarn format` to fix)
2. `yarn check`
3. `yarn test`
4. `yarn build`
5. `yarn test:smoke`

`scripts/smoke.mjs` asserts against `dist/`: published routes exist, correct ordering, RSS + tag inclusion, metadata, image processing, external-link rel/target, syntax highlighting. If you changed posts, routing, RSS, or the markdown pipeline, a passing smoke test is the real gate.

Per user prefs: commit each coherent unit once these gates pass; never push unless asked.
