import { IconsHeader } from "@components/icons-header";
import { MobileMenu } from "@components/mobile-menu";
import { IconsHero } from "@components/icons/icons-hero";
import { IconsPanel } from "@components/icons/icons-panel";
import { Box, Container, ScrollArea } from "@radix-ui/themes";
import { Menu } from "@components/icons/menu";
import { ColorsHeader } from "@components/colors-header";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";
import { IconsDocsNav } from "./icons-docs-nav";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Radix Icons",
	description: "A crisp set of 15×15 icons designed by the WorkOS team.",
};

export default function Home() {
	return (
		<>
			<MobileMenu>
				<ColorsHeader />
				<ScrollArea>
					<Box pt="4" px="3" pb="9">
						<IconsDocsNav />
					</Box>
				</ScrollArea>
			</MobileMenu>

			<IconsHeader ghost />

			<IconsHero />
			<Menu />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} pb="9">
				<IconsPanel />
			</Container>
		</>
	);
}
