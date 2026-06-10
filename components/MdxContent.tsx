"use client";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { MDXProvider, components } from "@components/MDXComponents";
import { ThemesMDXComponents } from "@components/ThemesMDXComponents";
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
import { CopyIcon, PlusIcon } from "@radix-ui/react-icons";
import type { Frontmatter } from "types/frontmatter";

export type MdxScope =
	| "primitives"
	| "themes"
	| "colors-overview"
	| "colors-palette";

function resolveComponents(scope: MdxScope) {
	switch (scope) {
		case "themes":
			return ThemesMDXComponents;
		case "colors-overview":
			return { ...components, ColorScale01, UseCasesTable, CopyIcon };
		case "colors-palette":
			return {
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
			};
		default:
			return components;
	}
}

export function MdxContent({
	code,
	frontmatter,
	scope = "primitives",
}: {
	code: string;
	frontmatter: Frontmatter;
	scope?: MdxScope;
}) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);
	return (
		<MDXProvider frontmatter={frontmatter}>
			<Component components={resolveComponents(scope) as any} />
		</MDXProvider>
	);
}
