"use client";
import * as React from "react";
import { Box, Link, Separator } from "@radix-ui/themes";
import { useRouterContext } from "@utils/use-router-context";

const DATA_FOLDER_PATH = "https://github.com/radix-ui/website/edit/main/data";

export function EditPageLink() {
	const { params, legacyPathname } = useRouterContext<{
		slug: string | string[] | undefined;
	}>();
	const routerSlug = params?.slug;
	let filePath = `${DATA_FOLDER_PATH}/${legacyPathname ? legacyPathname.replace("/", "") : ""}`;
	if (Array.isArray(routerSlug)) {
		filePath = filePath.replace("[...slug]", routerSlug.join("/"));
	} else {
		filePath = filePath.replace("[slug]", routerSlug ?? "");
	}
	const editUrl = `${filePath}.mdx`;

	return (
		<Box>
			<Separator size="2" my="8" />
			<Link
				href={editUrl}
				title="Edit this page on GitHub."
				rel="noopener noreferrer"
				target="_blank"
				color="gray"
				size="2"
			>
				Edit this page on GitHub.
			</Link>
		</Box>
	);
}
