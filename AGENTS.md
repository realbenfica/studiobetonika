<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Releases

Production is the Vercel project `studiobetonika` (team `realbenficas-projects`), built from `main` on `realbenfica/studiobetonika` and served at `www.studiobetonika.com`. The project IDs live in `scripts/deploy.mjs`.

- A bare "push" means commit on `main`, push to GitHub, and deploy to Vercel. This overrides any general rule that treats "push" as `git push` only. After committing on `main`, release with `npm run ship`. It requires a clean tree, pushes `main`, confirms `origin/main` is the exact commit, and deploys with the cached Vercel CLI path (`vercel deploy --prod`, built remotely). It cancels only pending Git production builds of `main` for that same commit, and skips rebuilding when `www.studiobetonika.com` already serves that commit. It then checks that the domain is READY on the commit, returns HTTP 200, and has no duplicate builds left. It reports build time and end-to-end time separately.
- `npm run release:check` is read-only: commit, remote, live deployment, and pending duplicates. `npm run deploy` deploys a commit already pushed, without pushing. `npm run test:deploy` tests the safeguards.
- `.vercelignore` keeps local-only files out of the upload. The script refuses to deploy if a Git-ignored local file isn't covered there. Root-only entries start with `/` so `public/fonts/` is still uploaded.
- Any push to `main` also triggers Vercel's Git deployment. For "commit only" or "do not deploy", commit without pushing. Keep the Git integration enabled.
- Preserve original media bytes and quality, and keep media in Git. Don't recompress, add storage services, rewrite history, or force-push without approval.

## Cursor Cloud specific instructions

This is a single static Next.js 16 (App Router, Turbopack) marketing/press-kit site — no backend, database, or environment variables are required. Dependencies are installed by the startup update script (`npm ci`).

- Scripts live in `package.json` (`dev`, `build`, `lint`, `start`). The dev server binds to `127.0.0.1:3000` (see the `-H 127.0.0.1` flag in the `dev` script), so use `http://127.0.0.1:3000` rather than `localhost`/`0.0.0.0`.
- Run the dev server with `npm run dev` in a persistent (tmux) terminal so it keeps running; it is a long-lived foreground process, not part of the update script.
- Routes: `/` (home), `/dvor/press` (press kit), `/dvor/privacy-policy`.
- `npm run lint` currently reports one non-blocking `@next/next/no-img-element` warning on `app/page.tsx` (0 errors) — this is pre-existing and expected.
