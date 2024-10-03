import * as React from "react";
import { Box, Flex } from "@radix-ui/themes";
import { DocsPagination } from "@components/DocsPagination";
import { allThemesRoutes, themesRoutes } from "@utils/themesRoutes";
import { ThemesHeader } from "./ThemesHeader";
import { DocsNav } from "./DocsNav";
import { MobileMenuProvider } from "./MobileMenu";
import { SideNav } from "./SideNav";
import { DocsPageWrapper } from "./DocsPageWrapper";
import { EditPageLink } from "./EditPageLink";
import { ThemesMobileMenu } from "./ThemesMobileMenu";

export function ThemesDocsPage({ children }: { children: React.ReactNode }) {
	return (
		<MobileMenuProvider>
			<ThemesHeader />
			<ThemesMobileMenu />

			<Flex>
				<SideNav>
					<Box pt="4" px="3" pb="9">
						<DocsNav routes={themesRoutes} />
					</Box>
				</SideNav>

				<DocsPageWrapper>
					<Box data-algolia-page-scope>{children}</Box>
					<DocsPagination allRoutes={allThemesRoutes} />
					<EditPageLink />
				</DocsPageWrapper>
			</Flex>
		</MobileMenuProvider>
	);
}
