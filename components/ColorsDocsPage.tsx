"use client";
import * as React from "react";
import { Box, Flex } from "@radix-ui/themes";
import { DocsPagination } from "@components/DocsPagination";
import { allColorsRoutes, colorsRoutes } from "@utils/colorsRoutes";
import { ColorsHeader } from "./ColorsHeader";
import { DocsNav } from "./DocsNav";
import { SideNav } from "./SideNav";
import { DocsPageWrapper } from "./DocsPageWrapper";
import { EditPageLink } from "./EditPageLink";
import { ColorsMobileMenu } from "./ColorsMobileMenu";

export function ColorsDocsPage({
	children,
	legacyPagesRouter,
}: {
	children: React.ReactNode;
	legacyPagesRouter?: boolean;
}) {
	return (
		<>
			<ColorsHeader />
			<ColorsMobileMenu legacyPagesRouter={legacyPagesRouter} />
			<Flex>
				<SideNav>
					<Box pt="4" px="3" pb="9">
						<DocsNav routes={colorsRoutes} />
					</Box>
				</SideNav>
				<DocsPageWrapper>
					<Box data-algolia-page-scope>{children}</Box>
					<DocsPagination allRoutes={allColorsRoutes} />
					<EditPageLink />
				</DocsPageWrapper>
			</Flex>
		</>
	);
}
