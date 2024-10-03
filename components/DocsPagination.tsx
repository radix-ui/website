import * as React from "react";
import NextLink from "next/link";
import { Box, Flex, Link, Text } from "@radix-ui/themes";
import { useCurrentPageSlug } from "@utils/useCurrentPageSlug";

export function DocsPagination({ allRoutes }: { allRoutes: Route[] }) {
	const currentPageSlug = useCurrentPageSlug();
	const currentPageIndex = allRoutes.findIndex(
		(page) => page.slug === currentPageSlug,
	);
	const previous = allRoutes[currentPageIndex - 1];
	const next = allRoutes[currentPageIndex + 1];

	return (
		<Box>
			{(previous || next) && (
				<Flex aria-label="Pagination navigation" justify="between" my="8">
					{previous && (
						<DocsPaginationLink route={previous} direction="Previous" />
					)}
					{next && (
						<Box flexGrow="1" style={{ textAlign: "right" }}>
							<DocsPaginationLink route={next} direction="Next" />
						</Box>
					)}
				</Flex>
			)}
		</Box>
	);
}

function DocsPaginationLink({
	route,
	direction,
}: {
	route: Route;
	direction: string;
}) {
	return (
		<Flex
			gap="1"
			direction="column"
			display="inline-flex"
			aria-label={`${direction} page: ${route.title}`}
		>
			<Text size="2" color="gray">
				{direction}
			</Text>
			<NextLink href={`/${route.slug}`} passHref legacyBehavior>
				<Link>
					<Text size="4">{route.title}</Text>
				</Link>
			</NextLink>
		</Flex>
	);
}

type Route = { title: string; slug: string };
