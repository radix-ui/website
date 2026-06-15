"use client";
import * as React from "react";
import { Box, Flex } from "@radix-ui/themes";
import { DocsPagination } from "@components/docs-pagination";
import { allColorsRoutes, colorsRoutes } from "@utils/colorsRoutes";
import { ColorsHeader } from "./colors-header";
import { DocsNav } from "./docs-nav";
import { SideNav } from "./side-nav";
import { DocsPageWrapper } from "./docs-page-wrapper";
import { EditPageLink } from "./edit-page-link";
import { ColorsMobileMenu } from "./colors-mobile-menu";

export function ColorsDocsPage({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ColorsHeader />
			<ColorsMobileMenu />
			<Flex>
				<SideNav>
					<Box pt="4" px="3" pb="9">
						<DocsNav routes={colorsRoutes} />
					</Box>
				</SideNav>
				<DocsPageWrapper>
					<Box data-search-page-scope>{children}</Box>
					<DocsPagination allRoutes={allColorsRoutes} />
					<EditPageLink />
				</DocsPageWrapper>
			</Flex>
		</>
	);
}
