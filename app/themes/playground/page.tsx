import { baseMetadata } from "@utils/metadata";
import { Metadata, Viewport } from "next";
import ComponentsPage from "./page.client";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Playground – Radix Themes",
	description:
		"An open source component library for building modern React apps that helps you build faster and makes it easy to create beautiful, accessible interfaces that are a breeze to maintain.",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function Page() {
	return <ComponentsPage />;
}
