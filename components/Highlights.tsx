"use client";
import * as React from "react";
import {
	Text,
	Box,
	Flex,
	Heading,
	Separator,
	Link,
	Select,
} from "@radix-ui/themes";
import { ArrowTopRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { VisuallyHidden } from "radix-ui";
import { FrontmatterContext } from "./MDXComponents";

export function Highlights({ features }: { features: React.ReactNode[] }) {
	const router = useRouter();
	const frontmatter = React.useContext(FrontmatterContext);

	const publishedName = frontmatter.publishedName || frontmatter.name;

	return (
		<Flex
			direction={{ initial: "column", sm: "row" }}
			mt={{ initial: "4", sm: "7" }}
		>
			<Box mb="5" flexGrow={{ sm: "1" }} mr={{ sm: "5" }}>
				<Heading as="h2" size="4" mb="4">
					Features
				</Heading>

				<Flex asChild m="0" p="0" gap="3" direction="column">
					<ul>
						{features.map(
							(feature, i) =>
								feature != null && (
									<Flex key={i} gap="4" align="start">
										<Flex
											width="24px"
											height="24px"
											align="center"
											justify="center"
											flexShrink="0"
											style={{
												backgroundColor: "var(--green-4)",
												borderRadius: "50%",
												color: "var(--green-11)",
											}}
										>
											<CheckIcon />
										</Flex>
										<Text size="3" as="p">
											{feature}
										</Text>
									</Flex>
								),
						)}
					</ul>
				</Flex>
			</Box>

			<Box
				style={{ width: "fit-content" }}
				asChild
				aria-labelledby="site-component-info-heading"
				data-algolia-exclude
			>
				<nav>
					<VisuallyHidden.Root asChild>
						<h2 id="site-component-info-heading">Component Reference Links</h2>
					</VisuallyHidden.Root>

					<Box asChild display={{ sm: "none" }}>
						<Separator size="2" mb="4" />
					</Box>

					{frontmatter.version && (
						<Text size="2" color="gray" as="p">
							Version: {frontmatter.version}
						</Text>
					)}

					{frontmatter.gzip && (
						<Text size="2" color="gray" as="p">
							Size:{" "}
							<Link
								color="gray"
								href={`https://bundlephobia.com/package/@radix-ui/react-${frontmatter.name}@${frontmatter.version}`}
								target="_blank"
								rel="noreferrer noopener"
							>
								{frontmatter.gzip}
							</Link>
						</Text>
					)}

					<Box
						asChild
						display={{ /* initial: 'none', sm: 'block' */ initial: "block" }}
					>
						<Separator size="2" my="5" />
					</Box>

					<Flex direction="column" gap="2" style={{ whiteSpace: "nowrap" }}>
						<Box>
							<Flex
								asChild
								display="inline-flex"
								align="center"
								position="relative"
								gap="1"
							>
								<Link
									size="2"
									href={`https://github.com/radix-ui/primitives/tree/main/packages/react/${publishedName}/src`}
									target="_blank"
								>
									View source
									<ArrowTopRightIcon style={{ color: "var(--gray-9)" }} />
								</Link>
							</Flex>
						</Box>

						<Box>
							<Flex
								asChild
								display="inline-flex"
								align="center"
								position="relative"
								gap="1"
							>
								<Link
									size="2"
									href="https://github.com/radix-ui/primitives/issues/new/choose"
									target="_blank"
								>
									Report an issue
									<ArrowTopRightIcon style={{ color: "var(--gray-9)" }} />
								</Link>
							</Flex>
						</Box>

						{frontmatter.aria && (
							<Box>
								<Flex
									asChild
									display="inline-flex"
									align="center"
									position="relative"
									gap="1"
								>
									<Link size="2" href={frontmatter.aria} target="_blank">
										ARIA design pattern
										<ArrowTopRightIcon style={{ color: "var(--gray-9)" }} />
									</Link>
								</Flex>
							</Box>
						)}
					</Flex>
				</nav>
			</Box>
		</Flex>
	);
}
