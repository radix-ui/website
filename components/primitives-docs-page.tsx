"use client";
import { Box, Flex } from "@radix-ui/themes";
import { DocsPagination } from "@components/docs-pagination";
import { PrimitivesHeader } from "@components/primitives-header";
import { allPrimitivesRoutes, primitivesRoutes } from "@utils/primitivesRoutes";
import { DocsNav } from "./docs-nav";
import { SideNav } from "./side-nav";
import { PrimitivesSearchDesktop } from "./primitives-search-desktop";
import { DocsPageWrapper } from "./docs-page-wrapper";
import { EditPageLink } from "./edit-page-link";
import { PrimitivesMobileMenu } from "./primitives-mobile-menu";

export function PrimitivesDocsPage({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<PrimitivesHeader />
			<PrimitivesMobileMenu />
			<Flex>
				<SideNav>
					<Box pt="4" px="3" pb="9">
						<Box mb="4">
							<PrimitivesSearchDesktop />
						</Box>

						<DocsNav routes={primitivesRoutes} />
					</Box>
				</SideNav>

				<DocsPageWrapper>
					<Box data-search-page-scope>{children}</Box>
					<DocsPagination allRoutes={allPrimitivesRoutes} />
					<EditPageLink />
				</DocsPageWrapper>
			</Flex>
		</>
	);
}
