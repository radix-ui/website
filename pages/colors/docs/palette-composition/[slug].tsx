import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { MDXProvider, components } from "@components/MDXComponents";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";
import { QuickNav } from "@components/QuickNav";
import {
	ColorScale01,
	ColorScale02,
	ColorScale03,
	ColorScale04,
	ColorScale05,
} from "@components/ColorScales";
import { UseCasesTable } from "@components/UseCasesTable";
import { ColorGrays } from "@components/ColorGrays";
import { ColorGrayPairs } from "@components/ColorGrayPairs";
import { ColorGrayPairsComplementary } from "@components/ColorGrayPairsComplementary";
import { PlusIcon } from "@radix-ui/react-icons";

import type { Frontmatter } from "types/frontmatter";
import { GetStaticPropsContext } from "next";

type Doc = {
	frontmatter: Frontmatter;
	code: any;
};

export default function ColorsPaletteCompostionDoc({ frontmatter, code }: Doc) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<>
			<TitleAndMetaTags
				title={`${frontmatter.metaTitle} – Radix Colors`}
				description={frontmatter.metaDescription}
				image="colors.png"
			/>

			<MDXProvider frontmatter={frontmatter}>
				<Component
					components={
						{
							...components,
							ColorScale01,
							ColorScale02,
							ColorScale03,
							ColorScale04,
							ColorScale05,
							UseCasesTable,
							ColorGrays,
							ColorGrayPairs,
							ColorGrayPairsComplementary,
							PlusIcon,
						} as any
					}
				/>
			</MDXProvider>

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export async function getStaticPaths() {
	const frontmatters = getAllFrontmatter("colors/docs/palette-composition");

	return {
		paths: frontmatters.map((frontmatter) => ({
			params: {
				slug: frontmatter.slug.replace("colors/docs/palette-composition/", ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps(
	context: GetStaticPropsContext<{ slug: string }>,
) {
	const { frontmatter, code } = await getMdxBySlug(
		"colors/docs/palette-composition/",
		context.params!.slug,
	);
	return { props: { frontmatter, code } };
}
