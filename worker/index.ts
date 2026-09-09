/**
 * Content negotiation for the docs and blog: clients that send
 * `Accept: text/markdown` (or `text/x-markdown`) for a page get the page's
 * pre-rendered Markdown twin (`<route>.md`, written next to every exported
 * HTML page by scripts/build-markdown.ts) instead of the HTML. This replaces
 * the `proxy.ts` rewrite to `/api/markdown` that the Vercel deployment used.
 *
 * Per wrangler.jsonc `assets.run_worker_first`, this script only runs for
 * `/primitives/docs/*`, `/themes/docs/*`, `/colors/docs/*` and `/blog/*`;
 * every other request is served straight from the static assets. Whatever the
 * outcome, responses still come from the ASSETS binding, so `_redirects`,
 * `_headers`, `html_handling` and `not_found_handling` apply as usual.
 */

interface Env {
	ASSETS: { fetch(request: Request): Promise<Response> };
}

const MARKDOWN_TYPES = ["text/markdown", "text/x-markdown"];

const worker = {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.method === "GET" || request.method === "HEAD") {
			const accept = request.headers.get("accept") ?? "";
			const url = new URL(request.url);
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
				// No Markdown twin (e.g. a redirect-only path): fall through to the
				// regular asset handling for this URL.
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
