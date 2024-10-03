import { Box, ScrollArea } from "@radix-ui/themes";
import { DocsNav } from "./DocsNav";
import { MobileMenu } from "./MobileMenu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BlogHeader } from "./BlogHeader";

export const BlogMobileMenu = () => (
	<MobileMenu>
		<BlogHeader />
		<ScrollArea>
			<Box pt="4" px="3" pb="9">
				<DocsNav
					routes={[
						{
							pages: [
								{
									title: "Homepage",
									slug: "",
								},
								{
									title: "Blog",
									slug: "blog",
								},
							],
						},
						{
							label: "Resources",
							pages: [
								{
									title: "GitHub",
									slug: "https://github.com/radix-ui/themes",
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
