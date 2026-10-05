<a href="https://radix-ui.com" >
  <img alt="Radix UI hero image" src="https://repository-images.githubusercontent.com/316012819/b7b19180-3f85-11eb-884c-1e19ce2f493a">
</a>

# Radix UI website and documentation

**Everything you need to build a design system, website or web app.**

Components, colors, icons, templates, and an extensive design system. Free and open-source.

---

## Documentation

For full documentation, visit [radix-ui.com](https://radix-ui.com).

## Contributing

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Please follow our [contributing guidelines](./.github/CONTRIBUTING.md).

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `pnpm build` to produce the static export in `out/`, and `pnpm preview` to serve it the way production does (see [Hosting](#hosting)).

## Hosting

The site is a Next.js static export (`output: "export"`) served from
[Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/)
in the **WorkOS Marketing Sites** Cloudflare account: Worker `radix-website`,
hostname `www.radix-ui.com`, config in `wrangler.jsonc`. The only Worker code
is `worker/`, which runs for the paths listed in `run_worker_first`: it
answers the legacy redirects (`worker/redirects.ts`) and, for docs and blog
pages, `Accept: text/markdown` requests with the Markdown version of a page;
every other request is served straight from `out/`.

### Build

`pnpm build` runs four steps and writes the site to `out/`:

1. `pnpm build:search` — the client-side search index (`public/search-index.json`).
2. `next build` — the static export.
3. `pnpm build:markdown` — a Markdown twin (`<page>.md`) next to every exported
   page, using the same conversion the former `/api/markdown` route did at
   request time. `/primitives/docs/components/dialog.md` and friends are plain
   static files.
4. `pnpm check:export` — fails the build if `out/404.html`, `_headers`, the
   search index, or a Markdown twin of a docs page is missing, or if a
   `_redirects` file has crept back in (see below).

`pnpm test` runs the Worker's unit tests (Node's test runner via `tsx`):
every legacy redirect, query-string preservation, and that no real page is
caught by a redirect rule.

**Redirects** are the former `redirects()` from `next.config.js`, which the
export ignores. They live in `worker/redirects.ts`, not in a `_redirects`
file: several dynamic rules overlap (`/docs/colors/getting-started/*` is also
matched by `/docs/colors/*`), and the platform's `_redirects` evaluation did
not honor file order for overlapping splat rules, so the broader rule won.
In the Worker the first matching rule wins, in the order written. The
`run_worker_first` list in `wrangler.jsonc` must cover every redirect source
(`REDIRECT_PATHS`, checked by the test). Response headers live in
`public/_headers`; the platform's default `Content-Type` carries no charset,
so `.md` and `.json` declare `charset=utf-8` there (HTML pages carry
`<meta charset>`). Unknown paths get Next's not-found page as `out/404.html`
with a 404 status.

Small behavior differences from Vercel, all harmless: trailing-slash
redirects (`/blog/` → `/blog`) and `.html` URLs (`/blog.html` → `/blog`) are
answered by the platform with a 307 (Vercel: 308 and 404), and there is no
`/robots.txt` or `/sitemap.xml` on the custom domain, as before. On
`workers.dev` hostnames Cloudflare injects a managed `robots.txt` and the
`_headers` file adds `X-Robots-Tag: noindex`, so previews are never indexed.

**Production vs preview.** `next.config.js` decides the build mode: Workers
Builds injects `WORKERS_CI_BRANCH`, and any branch other than `main` is a
preview build; `NEXT_PUBLIC_SITE_ENV=preview` forces preview mode for manual
builds, and `next dev` is always preview. Preview builds ship no Google
Analytics snippet and a `robots: noindex` meta tag; production builds ship
both as before. There are no other build variables: the site uses plain
`<img>` tags, so it needs neither the Next image optimizer nor Cloudflare
Image Transformations.

### Deploy

- `pnpm deploy` (`wrangler deploy`) builds and deploys; `pnpm preview`
  (`wrangler dev` in preview mode) builds and serves locally on
  http://localhost:8787. Both need a Cloudflare login with access to the
  Marketing Sites account.
- Production deploys run through **Workers Builds** (Cloudflare GitHub App) on
  push to `main`:
  - Build command: _empty_ (wrangler runs `pnpm build` itself via
    `build.command` in `wrangler.jsonc`).
  - Deploy command: `npx wrangler deploy`.
  - Non-production branch deploy command: `npx wrangler versions upload`, with
    _non-production branch builds_ enabled to get a preview URL and a PR
    comment for every branch. Those builds are detected as previews
    automatically (see above), so there are no per-branch variables to keep in
    sync.
  - Build variables: none required.
  - Node version comes from `.nvmrc`, the package manager from
    `packageManager` in `package.json` (pnpm).

### Hostnames

The Worker serves `www.radix-ui.com` (custom domain). The apex and the legacy
icons hostname are redirects only, best done with **Redirect Rules** in the
`radix-ui.com` zone (Rules → Redirect Rules, one rule each, no Worker
involved), matching what Vercel does today:

| Rule                    | When incoming requests match (custom filter expression) | Then                                                                                                                 | Status |
| ----------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------ |
| Apex to www             | `(http.host eq "radix-ui.com")`                         | Dynamic redirect, expression `concat("https://www.radix-ui.com", http.request.uri.path)`, _preserve query string_ on | 308    |
| Icons to the icons page | `(http.host eq "icons.radix-ui.com")`                   | Static redirect to `https://www.radix-ui.com/icons`, _preserve query string_ on                                      | 308    |

Both hostnames need a proxied DNS record in the zone for the rules to run
(e.g. an `AAAA` record with the value `100::` for each; the record only has to
exist and be proxied). This replaces the Vercel project `radix-icons` (the
`workos/radix-icons-redirect` repository), whose only job was the second rule.

### Cutover checklist

1. Move the `radix-ui.com` nameservers to the Cloudflare zone in the
   Marketing Sites account (records currently mirror Vercel).
2. Connect this repository to Workers Builds with the settings above and let
   `main` deploy to `radix-website.workos-sites.workers.dev`; check a few
   pages, `/…/dialog.md`, an `Accept: text/markdown` request and a 404.
3. Delete the interim `www`, apex and `icons` records that point at Vercel;
   add `www.radix-ui.com` as the Worker's custom domain (Settings → Domains &
   Routes) and create the two Redirect Rules above with their placeholder
   records.
4. Delete the Vercel projects `radix-website` and `radix-icons` in the
   `workos` team.

## Authors

- Pedro Duarte ([@peduarte](https://twitter.com/peduarte))
- Benoit Grelard ([@benoitgrelard](https://twitter.com/benoitgrelard)) - [WorkOS](https://workos.com)
- Jenna Smith ([@jjenzz](https://twitter.com/jjenzz))
- Colm Tuite ([@colmtuite](https://twitter.com/colmtuite)) - [WorkOS](https://workos.com)
- Chance Strickland ([@chancethedev](https://twitter.com/chancethedev))

---

Copyright © 2022-present [WorkOS](https://workos.com).
