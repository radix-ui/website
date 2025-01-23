import * as React from "react";
import {
	Box,
	Section,
	Text,
	Flex,
	Grid,
	Heading,
	Card,
} from "@radix-ui/themes";
import { MarketingCaption } from "./MarketingCaption";
import { Container, Theme } from "@radix-ui/themes";
import { HiddenScroll } from "./HiddenScroll";
import { CodeBlock } from "@components/CodeBlock";
import rangeParser from "parse-numeric-range";
import { useIsomorphicLayoutEffect } from "@utils/useIsomorphicLayoutEffect";

enum Highlights {
	Unstyled = "1-18",
	Composable = "20-37",
	Customizable = "39-55",
	Consistent = "57-74",
}

export const DeveloperExperienceSection = () => {
	const [activeLines, setActiveLines] = React.useState<Highlights>(
		Highlights.Unstyled,
	);
	const preRef = React.useRef<HTMLPreElement>(null);

	useIsomorphicLayoutEffect(() => {
		const pre = preRef.current;
		if (!pre) {
			return;
		}

		const paddingY = 24;
		const codeInner = pre.querySelector("code")!;
		const codeBlockHeight = pre.clientHeight - paddingY * 2;

		const lines = pre.querySelectorAll<HTMLElement>("[data-highlighted]");

		if (!activeLines) {
			codeInner.style.transform = `translate3d(0, 0, 0)`;
			return;
		}

		const linesToHighlight = rangeParser(activeLines);

		const firstLineNumber = Math.max(0, linesToHighlight[0] - 1);
		const lastLineNumber = Math.min(
			lines.length - 1,
			[...linesToHighlight].reverse()[0] - 1,
		);
		const firstLine = lines[firstLineNumber];
		const lastLine = lines[lastLineNumber];

		// Prevent errors in case the right line doesnt exist
		if (!firstLine || !lastLine) {
			console.warn(`NewCodeDemo: Error finding the right line`);
			return;
		}

		const linesHeight =
			lastLine.offsetTop + lastLine.offsetHeight - firstLine.offsetTop;
		const maxDistance = codeInner.clientHeight - codeBlockHeight;

		const codeFits = linesHeight < codeBlockHeight;
		const lastLineIsBelow =
			lastLine.offsetTop + lastLine.offsetHeight > codeBlockHeight - paddingY;
		const lastLineIsAbove = !lastLineIsBelow;

		let translateY: number;
		if (codeFits && lastLineIsAbove) {
			translateY = 0;
		} else if (codeFits && lastLineIsBelow) {
			const dist = firstLine.offsetTop - (codeBlockHeight - linesHeight) / 2;
			translateY = dist > maxDistance ? maxDistance : dist;
		} else {
			translateY = firstLine.offsetTop;
		}

		lines.forEach((line, i) => {
			const lineIndex = i + 1;

			if (linesToHighlight.includes(lineIndex)) {
				line.setAttribute("data-highlighted", "true");
			} else {
				line.setAttribute("data-highlighted", "false");
			}
		});

		requestAnimationFrame(
			() => (codeInner.style.transform = `translate3d(0, ${-translateY}px, 0)`),
		);
	}, [activeLines]);

	return (
		<Section
			size={{ initial: "2", sm: "4" }}
			overflow="hidden"
			style={{
				backgroundColor: "var(--sky-6)",
				background: `
					radial-gradient(ellipse at 100% 100%, hsl(254 100% 6% / 0.07), var(--violet-a1), transparent),
					linear-gradient(to bottom right, var(--mint-2), var(--indigo-2), var(--pink-3), var(--cyan-3))`,
			}}
		>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Grid gap={{ initial: "5", md: "8" }} columns={{ sm: "auto 1fr" }}>
					<Box style={{ maxWidth: 430 }}>
						<MarketingCaption mb="1">
							Developer experience to love
						</MarketingCaption>
						<Heading as="h2" size="7" mb="4">
							Develop with an open, thought‑out API
						</Heading>

						<Text as="p" mb="5" style={{ maxWidth: 500 }}>
							One of our main goals is to provide the best possible developer
							experience. Radix Primitives provides a fully-typed API. All
							components share a similar API, creating a consistent and
							predictable experience.
						</Text>

						<HiddenScroll
							pl="5"
							py="1"
							width="100vw"
							display={{ md: "none" }}
							mx={{ initial: "-5", xs: "-6", sm: "-7" }}
						>
							<Grid
								gapX={{ initial: "3", xs: "5" }}
								gapY="3"
								flow="column"
								columns="repeat(4, max-content) 1px"
								rows="430px auto"
							>
								<Theme asChild appearance="dark">
									<CodeBlock.Root style={codeBlockRootStyles}>
										<CodeBlock.Content>
											<CodeBlock.Pre>
												<CodeBlock.Code language="jsx">
													{code.unstyled}
												</CodeBlock.Code>
											</CodeBlock.Pre>
										</CodeBlock.Content>
									</CodeBlock.Root>
								</Theme>

								<Box>
									<Heading as="h3" size="3">
										Unstyled
									</Heading>
									<Text as="p" size="3" color="gray">
										No need to override styles, no specificity wars.
									</Text>
								</Box>

								<Theme asChild appearance="dark">
									<CodeBlock.Root style={codeBlockRootStyles}>
										<CodeBlock.Content>
											<CodeBlock.Pre>
												<CodeBlock.Code language="jsx">
													{code.composable}
												</CodeBlock.Code>
											</CodeBlock.Pre>
										</CodeBlock.Content>
									</CodeBlock.Root>
								</Theme>

								<Box>
									<Heading as="h3" size="3">
										Composable
									</Heading>
									<Text as="p" size="3" color="gray">
										Granular access to each component part.
									</Text>
								</Box>

								<Theme asChild appearance="dark">
									<CodeBlock.Root style={codeBlockRootStyles}>
										<CodeBlock.Content>
											<CodeBlock.Pre>
												<CodeBlock.Code language="jsx">
													{code.customizable}
												</CodeBlock.Code>
											</CodeBlock.Pre>
										</CodeBlock.Content>
									</CodeBlock.Root>
								</Theme>

								<Box>
									<Heading as="h3" size="3">
										Customizable
									</Heading>
									<Text as="p" size="3" color="gray">
										Configure behavior, control focus, add event listeners.
									</Text>
								</Box>

								<Theme asChild appearance="dark">
									<CodeBlock.Root style={codeBlockRootStyles}>
										<CodeBlock.Content>
											<CodeBlock.Pre>
												<CodeBlock.Code language="jsx">
													{code.consistent}
												</CodeBlock.Code>
											</CodeBlock.Pre>
										</CodeBlock.Content>
									</CodeBlock.Root>
								</Theme>

								<Box>
									<Heading as="h3" size="3">
										Consistent
									</Heading>
									<Text as="p" size="3" color="gray">
										Components with similar functionality share similar API.
									</Text>
								</Box>
								<Box />
							</Grid>
						</HiddenScroll>

						<Flex
							gap="1"
							direction="column"
							ml="-3"
							display={{ initial: "none", md: "flex" }}
						>
							<Card
								asChild
								onMouseDown={() => setActiveLines(Highlights.Unstyled)}
								onClick={() => setActiveLines(Highlights.Unstyled)}
								variant="ghost"
								style={{
									margin: 0,
									backgroundColor:
										activeLines === Highlights.Unstyled
											? "var(--gray-a3)"
											: undefined,
								}}
							>
								<button>
									<Heading as="h3" size="3">
										Unstyled
									</Heading>
									<Text as="p" size="3" color="gray">
										No need to override styles, no specificity wars.
									</Text>
								</button>
							</Card>

							<Card
								asChild
								onMouseDown={() => setActiveLines(Highlights.Composable)}
								onClick={() => setActiveLines(Highlights.Composable)}
								variant="ghost"
								style={{
									margin: 0,
									backgroundColor:
										activeLines === Highlights.Composable
											? "var(--gray-a3)"
											: undefined,
								}}
							>
								<button>
									<Heading as="h3" size="3">
										Composable
									</Heading>
									<Text as="p" size="3" color="gray">
										Granular access to each component part.
									</Text>
								</button>
							</Card>

							<Card
								asChild
								onMouseDown={() => setActiveLines(Highlights.Customizable)}
								onClick={() => setActiveLines(Highlights.Customizable)}
								variant="ghost"
								style={{
									margin: 0,
									backgroundColor:
										activeLines === Highlights.Customizable
											? "var(--gray-a3)"
											: undefined,
								}}
							>
								<button>
									<Heading as="h3" size="3">
										Customizable
									</Heading>
									<Text as="p" size="3" color="gray">
										Configure behavior, control focus, add event listeners.
									</Text>
								</button>
							</Card>

							<Card
								asChild
								onMouseDown={() => setActiveLines(Highlights.Consistent)}
								onClick={() => setActiveLines(Highlights.Consistent)}
								variant="ghost"
								style={{
									margin: 0,
									backgroundColor:
										activeLines === Highlights.Consistent
											? "var(--gray-a3)"
											: undefined,
								}}
							>
								<button>
									<Heading as="h3" size="3">
										Consistent
									</Heading>
									<Text as="p" size="3" color="gray">
										Components with similar functionality share similar API.
									</Text>
								</button>
							</Card>
						</Flex>
					</Box>

					<Box
						display={{ initial: "none", md: "block" }}
						position="relative"
						minWidth="480px"
						minHeight="602px"
					>
						<Theme asChild appearance="dark">
							<CodeBlock.Root
								style={{
									...codeBlockRootStyles,
									position: "absolute",
									inset: 0,
									paddingTop: "var(--space-6)",
									boxShadow: "0 50px 100px -50px hsl(254 100% 6% / 0.7)",
								}}
							>
								<Box position="absolute" top="10px" left="10px">
									<WindowControlButtons />
								</Box>

								<Box position="absolute" top="0" left="0" right="0">
									<WindowTitle />
								</Box>

								<CodeBlock.Content>
									<CodeBlock.Pre ref={preRef} overflow="hidden">
										<CodeBlock.Code
											language="jsx"
											invertLineHighlight
											style={codeBlockCodeStyles}
										>
											{allCode}
										</CodeBlock.Code>
									</CodeBlock.Pre>
								</CodeBlock.Content>
							</CodeBlock.Root>
						</Theme>
					</Box>
				</Grid>
			</Container>
		</Section>
	);
};

const codeBlockRootStyles = {
	"--code-block-background":
		"var(--developer-experience-code-block-background)",
	"--code-block-border": "transparent",
	"--code-block-radius": "var(--radius-5)",
	"--scrollarea-scrollbar-vertical-margin-top": "var(--space-2)",
	"--scrollarea-scrollbar-vertical-margin-bottom": "var(--space-2)",
} as React.CSSProperties;

const codeBlockCodeStyles = {
	display: "block",
	transition: "transform 200ms ease-in-out",
	willChange: "transform",
};

const WindowControlButtons = () => (
	<Box
		width="52px"
		height="12px"
		style={{
			background: `
				radial-gradient(circle closest-side at 6px, var(--gray-a7) 90%, #FFFFFF00),
				radial-gradient(circle closest-side at 24px, var(--gray-a7) 90%, #FFFFFF00),
				radial-gradient(circle closest-side at 42px, var(--gray-a7) 90%, #FFFFFF00)`,
		}}
	/>
);

const WindowTitle = () => (
	<Flex align="center" justify="center" height="32px">
		<Text size="1" style={{ color: "var(--slate-a9)", userSelect: "none" }}>
			MyComponent.jsx
		</Text>
	</Flex>
);

const code = {
	unstyled: `// Add styles with your preferred CSS technology
const TooltipContent = styled(Tooltip.Content, {
	backgroundColor: "black",
	borderRadius: "3px",
	padding: "5px"
});

const PopoverContent = styled(Popover.Content, {
	backgroundColor: "white",
	boxShadow: "0 2px 10px -3px rgb(0 0 0 / 20%)",
	borderRadius: "3px",
});

const DialogContent = styled(Dialog.Content, {
	backgroundColor: "white",
	boxShadow: "0 3px 15px -4px rgb(0 0 0 / 30%)",
	borderRadius: "5px",
});`,

	composable: `

// Compose a custom Tooltip component
export const StatusTooltip = ({ state, label }) => {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Text>
					<Status variant={state} />
				</Text>
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<TooltipContent>
					<Tooltip.Arrow />
					{label}
				</TooltipContent>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
};`,

	customizable: `// Compose a Popover with custom focus and positioning
export const StatusPopover = ({ children }) => {
	const popoverCloseButton = React.useRef(null);
	return (
		<Popover.Root>
			<Popover.Trigger>View status</Popover.Trigger>
			<Popover.Portal>
				<PopoverContent
					align="start"
					collisionPadding={10}
					onOpenAutoFocus={(event) => {
						// Focus the close button when popover opens
						popoverCloseButton.current?.focus();
						event.preventDefault();
					}}
				>
					{children}
					<Popover.Close ref={popoverCloseButton}>
						Close
					</Popover.Close>
				</PopoverContent>
			</Popover.Portal>
		</Popover.Root>
	);
};`,

	consistent: `// Compose a Dialog with custom focus management
export const InfoDialog = ({ children }) => {
	const dialogCloseButton = React.useRef(null);
	return (
		<Dialog.Root>
			<Dialog.Trigger>View details</Dialog.Trigger>
			<Dialog.Overlay />
			<Dialog.Portal>
				<DialogContent
					onOpenAutoFocus={(event) => {
						// Focus the close button when dialog opens
						dialogCloseButton.current?.focus();
						event.preventDefault();
					}}
				>
					{children}
					<Dialog.Close ref={dialogCloseButton}>
						Close
					</Dialog.Close>
				</DialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
};`,
};

const allCode = [
	code.unstyled,
	code.composable,
	code.customizable,
	code.consistent,
].join("\t");
