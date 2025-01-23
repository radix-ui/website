import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { MDXProvider, components } from "@components/MDXComponents";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";
import { QuickNav } from "@components/QuickNav";
import { ColorScale01 } from "@components/ColorScales";
import { UseCasesTable } from "@components/UseCasesTable";
import { CopyIcon } from "@radix-ui/react-icons";

import type { Frontmatter } from "types/frontmatter";
import { GetStaticPropsContext } from "next";

type Doc = {
	frontmatter: Frontmatter;
	code: any;
};

export default function ColorsGettingStartedDoc({ frontmatter, code }: Doc) {
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
						{ ...components, ColorScale01, UseCasesTable, CopyIcon } as any
					}
				/>
			</MDXProvider>

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export async function getStaticPaths() {
	const frontmatters = getAllFrontmatter("colors/docs/overview");

	return {
		paths: frontmatters.map((frontmatter) => ({
			params: { slug: frontmatter.slug.replace("colors/docs/overview/", "") },
		})),
		fallback: false,
	};
}

export async function getStaticProps(
	context: GetStaticPropsContext<{ slug: string }>,
) {
	const { frontmatter, code } = await getMdxBySlug(
		"colors/docs/overview/",
		context.params!.slug,
	);
	return { props: { frontmatter, code } };
}
