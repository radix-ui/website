import { FigmaLogoIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";

export function ThemesUnofficialFigmaLibrary() {
	return (
		<Card asChild size="3">
			<a
				href="https://www.figma.com/community/file/1280428825266545105"
				target="_blank"
			>
				<Flex align="start" gap="5">
					<Flex>
						<FigmaLogoIcon width="45" height="45" />
					</Flex>
					<Box>
						<Heading as="h2" size="3">
							Figma library
						</Heading>
						<Text as="p" size="3" color="gray">
							Unofficial Radix Themes components for Figma, by Victor Allegret.
						</Text>
					</Box>
				</Flex>
			</a>
		</Card>
	);
}
