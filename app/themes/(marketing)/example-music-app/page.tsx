import { Flex, Heading, Separator, Theme, Link, Box } from "@radix-ui/themes";
import { ExampleThemesMusicApp } from "@components/example-themes-music-app";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { baseMetadata } from "@utils/metadata";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Music App Example Layout – Radix Themes",
};

export const viewport: Viewport = {
	width: "device-width",
};

export default function ExamplePage() {
	return (
		<Theme
			grayColor="slate"
			accentColor="red"
			radius="medium"
			className="radix-themes-default-fonts"
		>
			<Box p="9" minWidth="fit-content">
				<Box mx="auto" width="fit-content">
					<Flex align="center" direction="column">
						<Heading align="center" mb="2">
							Example layout built with Radix Themes
						</Heading>
						<Flex asChild align="center" gap="6px">
							<Link
								size="2"
								color="gray"
								target="_blank"
								href="https://github.com/radix-ui/website/blob/main/components/example-themes-music-app.tsx"
							>
								Source code
								<ExternalLinkIcon />
							</Link>
						</Flex>
						<Separator size="2" my="8" />
					</Flex>
					<ExampleThemesMusicApp />
				</Box>
			</Box>
		</Theme>
	);
}
