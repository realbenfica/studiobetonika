<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single static Next.js 16 (App Router, Turbopack) marketing/press-kit site — no backend, database, or environment variables are required. Dependencies are installed by the startup update script (`npm ci`).

- Scripts live in `package.json` (`dev`, `build`, `lint`, `start`). The dev server binds to `127.0.0.1:3000` (see the `-H 127.0.0.1` flag in the `dev` script), so use `http://127.0.0.1:3000` rather than `localhost`/`0.0.0.0`.
- Run the dev server with `npm run dev` in a persistent (tmux) terminal so it keeps running; it is a long-lived foreground process, not part of the update script.
- Routes: `/` (home), `/dvor/press` (press kit), `/dvor/privacy-policy`.
- `npm run lint` currently reports one non-blocking `@next/next/no-img-element` warning on `app/page.tsx` (0 errors) — this is pre-existing and expected.
