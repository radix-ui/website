"use client";
import { Box, Link, Separator } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

const DATA_FOLDER_PATH = "https://github.com/radix-ui/website/edit/main/data";

export function EditPageLink() {
	const pathname = usePathname();
	const editUrl = `${DATA_FOLDER_PATH}${pathname}.mdx`;

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
