import { getAllFrontmatter } from "@utils/mdx";
import { getMdxBySlug } from "@utils/mdx";
import { getPackageData, formatBytes } from "@utils/bundlephobia";
import { MdxContent } from "@components/MdxContent";
import { QuickNav } from "@components/QuickNav";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const { frontmatter } = await getMdxBySlug(DOCS_BASE, slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Radix Primitives`,
		description: frontmatter.metaDescription,
	};
}

export default async function UtilitiesDoc({ params }: PageProps) {
	const { slug } = await params;
	const { frontmatter, code } = await getMdxBySlug(DOCS_BASE, slug);

	const packageData = frontmatter.name
		? await getPackageData(frontmatter.name, "latest").catch(() => null)
		: null;

	const extendedFrontmatter = {
		...frontmatter,
		version: packageData?.version ?? undefined,
		gzip:
			typeof packageData?.gzip === "number"
				? formatBytes(packageData.gzip)
				: undefined,
	};

	return (
		<>
			<div data-search-lvl0 style={{ display: "none" }}>
				Utilities
			</div>

			<MdxContent
				code={code}
				frontmatter={extendedFrontmatter}
				scope="primitives"
			/>

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export const dynamicParams = false;

const DOCS_BASE = "primitives/docs/utilities";

export function generateStaticParams() {
	const frontmatters = getAllFrontmatter(DOCS_BASE);
	return frontmatters.map((frontmatter) => ({
		slug: frontmatter.slug.replace(`${DOCS_BASE}/`, ""),
	}));
}
