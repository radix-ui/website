import { components } from "@components/MDXComponents";
import * as themesDocsAssets from "@components/ThemesDocsAssets";
import * as themesDocsTables from "@components/ThemesDocsTables";
import * as icons from "@radix-ui/react-icons";
import { ThemesPropsTable } from "./ThemesPropsTable";
import { ThemesUnofficialFigmaLibrary } from "./ThemesUnofficialFigmaLibrary";
import { ThemesUnofficialTailwindPlugin } from "./ThemesUnofficialTailwindPlugin";
import { Box, Text, Card } from "@radix-ui/themes";
import NextLink from "next/link";

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
	ThemesLinkCard: ({
		title,
		desc,
		href,
	}: {
		title: string;
		desc: string;
		href: string;
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
			<NextLink href={href} passHref legacyBehavior>
				<Card size="2" asChild>
					<a>{cardContent}</a>
				</Card>
			</NextLink>
		) : (
			<Card size="2">{cardContent}</Card>
		);
	},
};
