import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { MDXProvider } from "@components/MDXComponents";
import { ThemesMDXComponents } from "@components/ThemesMDXComponents";
import { QuickNav } from "@components/QuickNav";
import { getMdxBySlug } from "@utils/mdx";
import type { Frontmatter } from "types/frontmatter";

type Doc = {
	frontmatter: Frontmatter;
	code: string;
};

export default function ComponentsIndex({ frontmatter, code }: Doc) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<>
			<div data-algolia-lvl0 style={{ display: "none" }}>
				Components
			</div>

			<TitleAndMetaTags
				title={`${frontmatter.metaTitle} – Radix Themes`}
				description={frontmatter.metaDescription}
				image="themes.png"
			/>

			<MDXProvider frontmatter={frontmatter}>
				<Component components={ThemesMDXComponents as any} />
			</MDXProvider>

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export async function getStaticProps() {
	const { frontmatter, code } = await getMdxBySlug(
		"themes/docs/components/",
		"index",
	);
	return { props: { frontmatter, code } };
}
