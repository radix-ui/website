import * as React from "react";
import {
	CubeIcon,
	DownloadIcon,
	FigmaLogoIcon,
	GitHubLogoIcon,
	IconJarLogoIcon,
	SketchLogoIcon,
} from "@radix-ui/react-icons";
import { Flex, Link } from "@radix-ui/themes";

export const Menu = () => {
	return (
		<Flex
			m="6"
			justify="end"
			display={{ initial: "none", md: "inline-flex" }}
			position="fixed"
			right="0"
			style={{ top: "var(--space-6)" }}
		>
			<Flex
				align="start"
				direction="column"
				gap="2"
				p="4"
				style={{
					backgroundColor: "var(--color-panel-solid)",
					backgroundImage:
						"linear-gradient(to top, var(--accent-a4), var(--accent-a4))",
					borderRadius: "var(--radius-1)",
					boxShadow: "0 10px 40px -10px hsla(174, 100%, 30%, 0.05)",
					userSelect: "none",
				}}
			>
				<Flex align="center" gap="2" asChild>
					<Link
						size="2"
						underline="hover"
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
						underline="hover"
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
						underline="hover"
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
						underline="hover"
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
						underline="hover"
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
						underline="hover"
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
		</Flex>
	);
};
