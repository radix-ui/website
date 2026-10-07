/**
 * The little code in front of the static export. It runs only for the paths
 * listed in wrangler.jsonc `assets.run_worker_first` and does two things:
 *
 * 1. Legacy redirects (worker/redirects.ts): the former `redirects()` from
 *    next.config.js, which a static export ignores.
 * 2. Content negotiation for the docs and blog: clients that send
 *    `Accept: text/markdown` (or `text/x-markdown`) for a page get the page's
 *    pre-rendered Markdown twin (`<route>.md`, written next to every exported
 *    HTML page by scripts/build-markdown.ts) instead of the HTML. This
 *    replaces the `proxy.ts` rewrite to `/api/markdown` that the Vercel
 *    deployment used.
 *
 * Everything else, and every response that is not a redirect, comes from the
 * ASSETS binding, so `_headers`, `html_handling` and `not_found_handling`
 * apply as usual.
 */

import { resolveRedirect } from "./redirects";

interface Env {
	ASSETS: { fetch(request: Request): Promise<Response> };
}

const MARKDOWN_TYPES = ["text/markdown", "text/x-markdown"];

const worker = {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		const redirect = resolveRedirect(url);
		if (redirect) {
			return new Response(null, {
				status: redirect.status,
				headers: { Location: redirect.location },
			});
		}

		if (request.method === "GET" || request.method === "HEAD") {
			const accept = request.headers.get("accept") ?? "";
			const lastSegment = url.pathname.slice(url.pathname.lastIndexOf("/") + 1);
			const wantsMarkdown = MARKDOWN_TYPES.some((type) => accept.includes(type));

			// Only negotiate extensionless page URLs; `/foo.md` and `/foo.png` are
			// explicit already.
			if (wantsMarkdown && lastSegment !== "" && !lastSegment.includes(".")) {
				const markdownUrl = new URL(url);
				markdownUrl.pathname = `${url.pathname.replace(/\/+$/, "")}.md`;
				const markdown = await env.ASSETS.fetch(new Request(markdownUrl, request));
				if (markdown.ok) {
					return withVaryAccept(markdown);
				}
				// No Markdown twin: fall through to the regular asset handling.
			}
		}

		return env.ASSETS.fetch(request);
	},
};

export default worker;

// The same URL can answer with HTML or Markdown depending on `Accept`, so tell
// caches to key on it.
function withVaryAccept(response: Response): Response {
	const headers = new Headers(response.headers);
	headers.append("Vary", "Accept");
	return new Response(response.body, { status: response.status, headers });
}
