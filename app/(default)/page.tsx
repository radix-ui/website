import { baseMetadata } from "@utils/metadata";
import { Metadata } from "next";
import ThemesHome from "./page.client";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Radix UI",
	description:
		"Components, icons, and colors for building high‑quality, accessible UI. Free and open-source.",
};

export default function Page() {
	return <ThemesHome />;
}
