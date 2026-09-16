import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build context. Workers Builds injects WORKERS_CI_BRANCH; any branch other
// than the production branch is a preview build. NEXT_PUBLIC_SITE_ENV=preview
// forces preview mode for manual builds, and `next dev` is never production.
// Preview builds opt out of analytics and search indexing (see utils/), so a
// workers.dev preview can never report into or be indexed as the live site.
const productionBranch = "main";
const ciBranch = process.env.WORKERS_CI_BRANCH;
const isPreview =
	process.env.NODE_ENV !== "production" ||
	process.env.NEXT_PUBLIC_SITE_ENV === "preview" ||
	(ciBranch !== undefined && ciBranch !== productionBranch);

const config = {
	// Static export served from Cloudflare Workers static assets (see
	// wrangler.jsonc). Redirects live in worker/redirects.ts and response
	// headers in public/_headers; `redirects()`/`rewrites()`/`headers()` here
	// would be ignored by the export.
	output: "export",

	env: {
		// Inlined into both bundles; the only environment gate the app reads.
		SITE_ENV: isPreview ? "preview" : "production",
	},

	typedRoutes: true,
	// Pin the workspace root so Next doesn't infer it from a parent lockfile.
	turbopack: {
		root: __dirname,
	},

	// Keep these out of the server bundle. They rely on dynamic/optional
	// imports (e.g. mdx-bundler's esbuild) that the bundler can't statically
	// resolve and that should be required at runtime.
	serverExternalPackages: ["mdx-bundler"],
};

export default config;
