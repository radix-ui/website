"use client";
import { colorsRoutes } from "@utils/colorsRoutes";
import { Box, ScrollArea } from "@radix-ui/themes";
import { ColorsHeader } from "./colors-header";
import { DocsNav } from "./docs-nav";
import { MobileMenu, type MobileMenuProps } from "./mobile-menu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const ColorsMobileMenu = (props: Omit<MobileMenuProps, "children">) => (
	<MobileMenu {...props}>
		<ColorsHeader />
		<ScrollArea>
			<Box pt="4" px="3" pb="9">
				<DocsNav
					routes={[
						{
							pages: [
								{
									title: "Homepage",
									slug: "colors",
								},
								{
									title: "Blog",
									slug: "blog",
								},
							],
						},
						...colorsRoutes,
						{
							label: "Resources",
							pages: [
								{
									title: "GitHub",
									slug: "https://github.com/radix-ui/colors",
									icon: <GitHubLogoIcon />,
								},
							],
						},
					]}
				/>
			</Box>
		</ScrollArea>
	</MobileMenu>
);
