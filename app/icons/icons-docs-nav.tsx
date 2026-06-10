"use client";
import { iconsRoutes } from "@utils/iconsRoutes";
import { DocsNav } from "@components/DocsNav";

export function IconsDocsNav() {
	return (
		<DocsNav
			routes={[
				{
					pages: [
						{
							title: "Homepage",
							slug: "icons",
						},
						{
							title: "Blog",
							slug: "blog",
						},
					],
				},
				...iconsRoutes,
			]}
		/>
	);
}
