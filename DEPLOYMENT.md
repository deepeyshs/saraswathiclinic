# Deploying the Saraswathi Clinic Website

## Easiest option: Lovable
Click **Publish** in the Lovable editor. Live at https://saraswathiclinic.lovable.app. No setup needed.

## Self-hosting the downloaded project

### Requirements
- Node.js 20 or newer (or Bun 1.1+)
- A Cloudflare account (default build target), or any Node host (see below)

### 1. Install and build
```sh
npm install
npm run build
```
Output goes to `.output/` (server bundle + static assets in `.output/public`).

### 2a. Deploy to Cloudflare Workers (recommended, default)
```sh
npx wrangler login
npx wrangler deploy
```
`wrangler.jsonc` in the project root is already configured to point at the build output.

### 2b. Deploy to a Node server (VPS, Render, Railway, etc.)
Build with the Node preset, then start:
```sh
NITRO_PRESET=node-server npm run build
node .output/server/index.mjs
```
Set `PORT` (default 3000) if your host requires it.

### 2c. Vercel / Netlify
Import the repository and set the build env var `NITRO_PRESET=vercel` or `NITRO_PRESET=netlify`. Build command: `npm run build`.

## Environment variables
This website currently needs **no secrets or environment variables** to run. The phone number, address, and map links are written directly into the site.

| Variable | Required | Where | Purpose |
| --- | --- | --- | --- |
| `NITRO_PRESET` | No | Build time | Deployment target (`cloudflare-module` default, `node-server`, `vercel`, `netlify`) |
| `PORT` | No | Runtime (Node only) | Port for the Node server (default 3000) |
| `NODE_ENV` | No | Runtime | Set to `production` on Node hosts |

See `.env.example`. If you add features later:
- Variables starting with `VITE_` are embedded in the browser code — only use for public values.
- All other variables are server-only; never commit real values. Add them in your host's dashboard (Cloudflare: `npx wrangler secret put NAME`).

## Custom domain
Point your domain's DNS to your host following its instructions (Cloudflare: Workers → your worker → Domains & Routes).

## Checklist after deploying
- Home page loads, and the Call button opens the dialer on a phone
- Get Directions opens Google Maps
- `/privacy` and `/terms` load
- Update the canonical URL in `src/routes/index.tsx` if you use a new domain
