import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
	typedRoutes: true,
	// Pin the workspace root so Next doesn't infer it from a parent lockfile.
	turbopack: {
		root: __dirname,
	},

	// Keep these out of the server bundle. They rely on dynamic/optional
	// imports (e.g. oxfmt's prettier plugins, mdx-bundler's esbuild) that the
	// bundler can't statically resolve and that should be required at runtime.
	serverExternalPackages: ["oxfmt", "mdx-bundler"],

	// Next.js config
	async rewrites() {
		return [
			{
				source: "/:path*.md",
				destination: "/api/markdown/:path*",
			},
		];
	},

	async redirects() {
		return [
			{
				source: "/case-studies/:slug*",
				destination: "/primitives/case-studies/:slug*",
				permanent: true,
			},
			{
				source: "/colors/docs",
				destination: "/colors/docs/overview/installation",
				permanent: true,
			},
			{
				source: "/colors/docs/tests/:slug*",
				destination: "/colors",
				permanent: true,
			},
			{
				source: "/docs/colors/palette-composition/the-scales",
				destination: "/colors/docs/palette-composition/scales",
				permanent: true,
			},
			{
				source: "/docs/colors/getting-started/:slug*",
				destination: "/colors/docs/overview/:slug*",
				permanent: true,
			},
			{
				source: "/docs/colors/:slug*",
				destination: "/colors/docs/:slug*",
				permanent: true,
			},
			{
				source: "/docs/primitives",
				destination: "/primitives/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/docs/primitives/utilities/aspect-ratio/:slug*",
				destination: "/primitives/docs/components/aspect-ratio",
				permanent: true,
			},
			{
				source: "/docs/primitives/utilities/label/:slug*",
				destination: "/primitives/docs/components/label",
				permanent: true,
			},
			{
				source: "/primitives/docs/components/:slug/:version",
				destination: "/primitives/docs/components/:slug",
				permanent: true,
			},
			{
				source: "/primitives/docs/utilities/:slug/:version",
				destination: "/primitives/docs/utilities/:slug",
				permanent: true,
			},
			{
				source: "/docs/primitives/:slug*",
				destination: "/primitives/docs/:slug*",
				permanent: true,
			},
			{
				source: "/primitives/docs",
				destination: "/primitives/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/themes",
				destination: "/",
				permanent: false,
			},
			{
				source: "/themes/docs",
				destination: "/themes/docs/overview/getting-started",
				permanent: false,
			},
		];
	},
};

export default config;
