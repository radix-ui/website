import type { Metadata } from "next";

export const baseMetadata: Metadata = {
	metadataBase: new URL("https://radix-ui.com"),
	title: "Radix UI",
	description: "Everything you need to build a design system, website or web app.",
	twitter: {
		site: "@radix_ui",
		card: "summary_large_image",
	},
};
