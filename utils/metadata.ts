import type { Metadata } from "next";

// Set at build time by next.config.js: "production" only for builds of the
// production branch, "preview" for every other build and for `next dev`.
export const isProductionSite = process.env.SITE_ENV === "production";

export const baseMetadata: Metadata = {
	// Absolute base for Open Graph images and other relative metadata URLs. A
	// static export can't infer the host, so this must be the canonical one.
	metadataBase: new URL("https://www.radix-ui.com"),
	title: "Radix UI",
	description: "Everything you need to build a design system, website or web app.",
	twitter: {
		site: "@radix_ui",
		card: "summary_large_image",
	},
	// Preview builds (workers.dev URLs) must never compete with the live site
	// in search results.
	...(isProductionSite ? {} : { robots: { index: false, follow: false } }),
};
