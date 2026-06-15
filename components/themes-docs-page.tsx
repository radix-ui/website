"use client";
import * as React from "react";
import { Box, Flex } from "@radix-ui/themes";
import { DocsPagination } from "@components/docs-pagination";
import { allThemesRoutes, themesRoutes } from "@utils/themesRoutes";
import { ThemesHeader } from "./themes-header";
import { DocsNav } from "./docs-nav";
import { SideNav } from "./side-nav";
import { DocsPageWrapper } from "./docs-page-wrapper";
import { EditPageLink } from "./edit-page-link";
import { ThemesMobileMenu } from "./themes-mobile-menu";

export function ThemesDocsPage({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemesHeader />
			<ThemesMobileMenu />
			<Flex>
				<SideNav>
					<Box pt="4" px="3" pb="9">
						<DocsNav routes={themesRoutes} />
					</Box>
				</SideNav>

				<DocsPageWrapper>
					<Box data-search-page-scope>{children}</Box>
					<DocsPagination allRoutes={allThemesRoutes} />
					<EditPageLink />
				</DocsPageWrapper>
			</Flex>
		</>
	);
}
