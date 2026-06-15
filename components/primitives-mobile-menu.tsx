"use client";
import * as React from "react";
import { primitivesRoutes } from "@utils/primitivesRoutes";
import { Box, ScrollArea } from "@radix-ui/themes";
import { DocsNav } from "./docs-nav";
import { MobileMenu, type MobileMenuProps } from "./mobile-menu";
import { PrimitivesHeader } from "./primitives-header";
import { PrimitivesSearchMobile } from "./primitives-search-mobile";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const PrimitivesMobileMenu = (props: Omit<MobileMenuProps, "children">) => {
	const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);
	return (
		<MobileMenu {...props}>
			<PrimitivesHeader />
			<ScrollArea scrollbars="vertical">
				<Box pt="4" px="3" pb="9" style={{ maxWidth: "100vw" }}>
					<Box mb="4">
						<PrimitivesSearchMobile
							onSearchShow={() => setMobileSearchOpen(true)}
							onSearchHide={() => setMobileSearchOpen(false)}
						/>
					</Box>

					{!mobileSearchOpen && (
						<DocsNav
							routes={[
								{
									pages: [
										{
											title: "Homepage",
											slug: "primitives",
										},
										{
											title: "Case studies",
											slug: "primitives/case-studies",
										},
										{
											title: "Blog",
											slug: "blog",
										},
									],
								},
								...primitivesRoutes,
								{
									label: "Resources",
									pages: [
										{
											title: "GitHub",
											slug: "https://github.com/radix-ui/primitives",
											icon: <GitHubLogoIcon />,
										},
									],
								},
							]}
						/>
					)}
				</Box>
			</ScrollArea>
		</MobileMenu>
	);
};
