import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { Favicon } from "@components/Favicon";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { baseMetadata } from "@utils/metadata";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Radix Colors",
	description:
		"An open-source color system for designing beautiful, accessible websites and apps.",
};

export default function ColorsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Theme
			accentColor="pink"
			grayColor="gray"
			className="radix-themes-custom-fonts"
		>
			<Favicon />
			<ColorsMobileMenu />
			{children}
		</Theme>
	);
}
