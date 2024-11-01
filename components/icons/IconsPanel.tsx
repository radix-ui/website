import {
	CubeIcon,
	DownloadIcon,
	FigmaLogoIcon,
	GitHubLogoIcon,
	IconJarLogoIcon,
	SketchLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";
import * as React from "react";
import { CopyToastProvider } from "./CopyToast";
import { MainContent } from "./MainContent";

import styles from "./IconsPanel.module.css";
import { CodeBlock } from "@components/CodeBlock";

export const IconsPanel = () => {
	return (
		<CopyToastProvider>
			<Box
				style={{
					borderRadius: "var(--radius-4)",
					minHeight: 900,
					background: "var(--color-background)",
					position: "relative",
				}}
			>
				<Box
					position="absolute"
					inset="0"
					style={{
						pointerEvents: "none",
						borderRadius: "inherit",
						boxShadow: "var(--shadow-5)",
					}}
				/>
				<MainContent />

				<Separator size="4" />

				<Box
					p={{ initial: "5", sm: "6" }}
					className={styles.IconsPanelMainSection}
				>
					<Box mb="5" style={{ gridColumn: "3 / 4" }}>
						<Heading as="h3" size="5">
							Assets
						</Heading>

						<Flex direction="column" gap="2" mt="3">
							<Flex align="center" gap="2" asChild>
								<Link
									size="2"
									href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons"
									target="_blank"
									highContrast
									color="gray"
								>
									<FigmaLogoIcon />
									Open in Figma
								</Link>
							</Flex>
							<Flex align="center" gap="2" asChild>
								<Link
									size="2"
									href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.sketch"
									target="_blank"
									highContrast
									color="gray"
								>
									<SketchLogoIcon />
									Download for Sketch
								</Link>
							</Flex>

							<Flex align="center" gap="2" asChild>
								<Link
									size="2"
									href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.iconjar.zip"
									target="_blank"
									highContrast
									color="gray"
								>
									<IconJarLogoIcon />
									Download IconJar
								</Link>
							</Flex>

							<Flex align="center" gap="2" asChild>
								<Link
									size="2"
									href="https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip"
									target="_blank"
									highContrast
									color="gray"
								>
									<DownloadIcon />
									Download SVG
								</Link>
							</Flex>
							<Flex align="center" gap="2" asChild>
								<Link
									size="2"
									href="https://www.npmjs.com/package/@radix-ui/react-icons"
									target="_blank"
									highContrast
									color="gray"
								>
									<CubeIcon />
									Install with npm
								</Link>
							</Flex>

							<Flex align="center" gap="2" asChild>
								<Link
									size="2"
									href="https://github.com/radix-ui/icons"
									target="_blank"
									highContrast
									color="gray"
								>
									<GitHubLogoIcon />
									View on GitHub
								</Link>
							</Flex>
						</Flex>
					</Box>

					<Box
						mb={{ initial: "5", sm: "0" }}
						className={styles.IconsPanelSectionContent}
					>
						<Heading as="h3" size="5">
							React components
						</Heading>

						<Text as="p" size="3" mt="3">
							All icons are available as individual React components. Install
							Radix Icons from npm:
						</Text>

						<CodeBlock.Root mt="3">
							<CodeBlock.Content>
								<CodeBlock.Pre>
									<CodeBlock.Code language="bash">
										npm install @radix-ui/react-icons
									</CodeBlock.Code>
								</CodeBlock.Pre>
								<CodeBlock.CopyButton />
							</CodeBlock.Content>
						</CodeBlock.Root>

						<Text as="p" size="3" mt="4">
							Import the icons into your React project:
						</Text>

						<CodeBlock.Root mt="3">
							<CodeBlock.Content>
								<CodeBlock.Pre>
									<CodeBlock.Code language="jsx">
										{`
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons"

function MyComponent () {
	return (
		<div>
			<FaceIcon />
			<SunIcon />
			<ImageIcon />
		</div>
	)
}
`.trim()}
									</CodeBlock.Code>
								</CodeBlock.Pre>
							</CodeBlock.Content>
						</CodeBlock.Root>
					</Box>

					<Box style={{ gridColumn: "3 / 4" }}>
						<Heading as="h3" size="5">
							License
						</Heading>

						<Text as="p" size="2" mt="2">
							Licensed under the{" "}
							<Link
								size="2"
								href="https://github.com/radix-ui/icons/blob/master/LICENSE"
								highContrast
								color="gray"
							>
								MIT License
							</Link>
							.
							<br />
							Copyright © 2022–present WorkOS.
						</Text>
					</Box>
				</Box>
			</Box>
		</CopyToastProvider>
	);
};
