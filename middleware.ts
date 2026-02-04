import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if the request accepts markdown
	const acceptHeader = request.headers.get("accept") || "";
	const wantsMarkdown =
		acceptHeader.includes("text/markdown") ||
		acceptHeader.includes("text/x-markdown");

	// If the client accepts markdown and this is a docs page, rewrite to markdown API
	if (wantsMarkdown && isDocsPage(pathname)) {
		const url = request.nextUrl.clone();
		url.pathname = `/api/markdown${pathname}`;
		return NextResponse.rewrite(url);
	}

	return NextResponse.next();
}

/**
 * Check if a path is a documentation page that can be served as markdown
 */
function isDocsPage(pathname: string): boolean {
	// Match documentation paths
	const docPatterns = [
		/^\/primitives\/docs\//,
		/^\/themes\/docs\//,
		/^\/colors\/docs\//,
		/^\/blog\//,
	];

	return docPatterns.some((pattern) => pattern.test(pathname));
}

// Configure which paths the middleware runs on
export const config = {
	matcher: [
		// Match all docs paths
		"/primitives/docs/:path*",
		"/themes/docs/:path*",
		"/colors/docs/:path*",
		"/blog/:path*",
	],
};
