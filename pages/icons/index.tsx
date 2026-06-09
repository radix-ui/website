import { IconsHeader } from "@components/IconsHeader";
import { MobileMenu } from "@components/mobile-menu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { IconsHero } from "@components/icons/IconsHero";
import { IconsPanel } from "@components/icons/IconsPanel";
import { iconsRoutes } from "@utils/iconsRoutes";
import { Box, Container, ScrollArea } from "@radix-ui/themes";
import { Menu } from "@components/icons/Menu";
import { DocsNav } from "@components/DocsNav";
import { ColorsHeader } from "@components/ColorsHeader";

export default function Home() {
	return (
		<>
			<MobileMenu legacyPagesRouter>
				<ColorsHeader />
				<ScrollArea>
					<Box pt="4" px="3" pb="9">
						<DocsNav
							routes={[
								{
									pages: [
										{
											title: "Homepage",
											slug: "icons",
										},
										{
											title: "Blog",
											slug: "blog",
										},
									],
								},
								...iconsRoutes,
							]}
						/>
					</Box>
				</ScrollArea>
			</MobileMenu>

			<TitleAndMetaTags
				title="Radix Icons"
				description="A crisp set of 15×15 icons designed by the WorkOS team."
				image="icons.png"
			/>

			<IconsHeader ghost />

			<IconsHero />
			<Menu />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} pb="9">
				<IconsPanel />
			</Container>
		</>
	);
}
