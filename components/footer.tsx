"use client";
import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Grid,
	Text,
	Flex,
	Link,
	Heading,
	AccessibleIcon,
} from "@radix-ui/themes";
import { RadixLogo } from "./radix-logo";
import { usePathname } from "next/navigation";
import { BoxLink } from "./box-link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import styles from "./footer.module.css";

export const Footer = () => {
	const pathname = usePathname();
	const isColors = pathname?.includes("/colors") || false;

	return (
		<Grid asChild pb="9" gapX="7" gapY="3" className={styles.Footer}>
			<footer>
				<Flex
					align="start"
					direction="column"
					className={styles.RadixLogo}
					mb="5"
				>
					<BoxLink asChild>
						<NextLink href="/">
							<AccessibleIcon label="Radix Homepage">
								<RadixLogo />
							</AccessibleIcon>
						</NextLink>
					</BoxLink>
					<Box pr="8" mt="5">
						<Heading
							as="h6"
							size="2"
							style={{
								lineHeight: "20px",
								color: "var(--gray-10)",
								fontWeight: "inherit",
							}}
						>
							A project by{" "}
							<Link color="gray" href="https://workos.com">
								WorkOS
							</Link>
							.
						</Heading>
					</Box>
				</Flex>
				<Box>
					<Heading as="h6" size="3">
						Products
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<Link color="gray" asChild>
									<NextLink href="/">Themes</NextLink>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link color="gray" asChild>
									<NextLink href="/primitives">Primitives</NextLink>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link color="gray" asChild>
									<NextLink href="/colors">Colors</NextLink>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link color="gray" asChild>
									<NextLink href="/icons">Icons</NextLink>
								</Link>
							</Text>
						</li>
					</ul>
				</Box>
				{isColors === false && (
					<Box>
						<Heading as="h6" size="3">
							Docs
						</Heading>
						<ul>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/primitives/docs/overview/introduction">
											Introduction
										</NextLink>
									</Link>
								</Text>
							</li>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/primitives/docs/guides/styling">
											Styling
										</NextLink>
									</Link>
								</Text>
							</li>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/primitives/docs/overview/accessibility">
											Accessibility
										</NextLink>
									</Link>
								</Text>
							</li>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/primitives/docs/overview/releases">
											Releases
										</NextLink>
									</Link>
								</Text>
							</li>
						</ul>
					</Box>
				)}
				{isColors && (
					<Box>
						<Heading as="h6" size="3">
							Docs
						</Heading>
						<ul>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/colors/docs/overview/installation">
											Installation
										</NextLink>
									</Link>
								</Text>
							</li>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/colors/docs/palette-composition/scales">
											Scales
										</NextLink>
									</Link>
								</Text>
							</li>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/colors/docs/palette-composition/composing-a-palette">
											Palette composition
										</NextLink>
									</Link>
								</Text>
							</li>
							<li>
								<Text as="p" size="2" mt="3">
									<Link color="gray" asChild>
										<NextLink href="/colors/docs/palette-composition/understanding-the-scale">
											Understanding the scale
										</NextLink>
									</Link>
								</Text>
							</li>
						</ul>
					</Box>
				)}
				<Box>
					<Heading as="h6" size="3">
						Community
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://github.com/radix-ui"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									GitHub
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://bsky.app/profile/radix-ui.com"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Bluesky
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://twitter.com/radix_ui"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Twitter
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://discord.com/invite/7Xb99uG"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Discord
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
					</ul>
				</Box>
			</footer>
		</Grid>
	);
};
