import { components } from "@components/mdx-components";
import * as themesDocsAssets from "@components/themes-docs-assets";
import * as themesDocsTables from "@components/themes-docs-tables";
import * as icons from "@radix-ui/react-icons";
import { ThemesPropsTable } from "./themes-props-table";
import { ThemesUnofficialFigmaLibrary } from "./themes-unofficial-figma-library";
import { ThemesUnofficialTailwindPlugin } from "./themes-unofficial-tailwind-plugin";
import { Box, Text, Card } from "@radix-ui/themes";
import NextLink from "next/link";
import type { Route } from "next";

export const ThemesMDXComponents = {
	...components,
	...themesDocsAssets,
	...themesDocsTables,
	...icons,
	ThemesUnofficialFigmaLibrary,
	ThemesUnofficialTailwindPlugin,
	ThemesPropsTable: (props: any) => (
		<Box mt="4" mb="6">
			<ThemesPropsTable {...props} />
		</Box>
	),
	ThemesLinkCard: <T extends string>({
		title,
		desc,
		href,
	}: {
		title: string;
		desc: string;
		href: Route<T>;
	}) => {
		const cardContent = (
			<>
				<Text as="div" size="2" weight="bold" mb="1">
					{title}
				</Text>
				<Text as="p" size="2" color="gray">
					{desc}
				</Text>
			</>
		);

		return href ? (
			<Card size="2" asChild>
				<NextLink href={href}>{cardContent}</NextLink>
			</Card>
		) : (
			<Card size="2">{cardContent}</Card>
		);
	},
};
