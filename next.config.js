const path = require("path");
const { globSync } = require("glob");
const compareVersions = require("compare-versions");

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mjs/,
			include: /node_modules/,
			type: "javascript/auto",
		});
		return config;
	},

	// Next.js config
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
				destination: "/primitives/docs/components/aspect-ratio/:slug*",
				permanent: true,
			},
			{
				source: "/docs/primitives/utilities/label/:slug*",
				destination: "/primitives/docs/components/label/:slug*",
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
