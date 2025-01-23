import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { MarketingCaption } from "./MarketingCaption";
import {
	Box,
	Flex,
	Grid,
	Container,
	Section,
	Heading,
	Text,
} from "@radix-ui/themes";
import { HiddenScroll } from "./HiddenScroll";

export const ComponentHighlightsSection = () => {
	return (
		<Section
			position="relative"
			overflow="hidden"
			size={{ initial: "2", sm: "4" }}
			mb={{ md: "9" }}
		>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Flex
					direction="column"
					align="center"
					position="relative"
					mb="6"
					pb={{ lg: "9" }}
				>
					<MarketingCaption mb="1">Case in point</MarketingCaption>
					<Heading align="center" as="h2" size="7" mb="3">
						So, you think you can{" "}
						<span style={{ whiteSpace: "nowrap" }}>build a dropdown?</span>
					</Heading>
					<Text align="center" as="p" size="3" style={{ maxWidth: 340 }}>
						We agonise over API design, performance, and accessibility so you
						don't need to.
					</Text>
				</Flex>

				<Box position="relative">
					{/* Use guides to position things sanely */}
					{/* <Guides7 /> */}
					{/* <Guides8 /> */}

					<Box position="relative" mb="4" style={{ pointerEvents: "none" }}>
						<Box
							position="absolute"
							height="100%"
							top="50%"
							left="50%"
							style={{ transform: "translate(-50%, -50%)" }}
						>
							<Circle
								size={180}
								angle={-45}
								color1="var(--slate-a4)"
								color2="var(--indigo-a6)"
							/>
							<Circle
								size={300}
								angle={20}
								color1="var(--slate-a3)"
								color2="var(--indigo-a5)"
							/>
							<Circle
								size={420}
								angle={35}
								color1="var(--slate-a2)"
								color2="var(--indigo-a4)"
							/>
							<Circle
								size={540}
								angle={-50}
								color1="var(--slate-a2)"
								color2="var(--indigo-a3)"
							/>
							{[
								660, 780, 900, 1020, 1140, 1260, 1380, 1500, 1620, 1740, 1860,
								1980, 2100,
							].map((size, i) => (
								<Circle
									key={i}
									size={size + i * i * 5}
									angle={-45 + i * 15}
									color1="var(--slate-a2)"
									color2="var(--indigo-a3)"
									opacity={Math.max(0, 1 - i * 0.1)}
								/>
							))}
						</Box>
						<Flex
							align="center"
							justify="center"
							position="relative"
							style={{
								height: "var(--component-highlights-image-height, auto)",
							}}
						>
							<img
								src="/marketing/dropdown-menu.svg"
								alt="A dropdown menu example with a checked item and a submenu"
							/>
						</Flex>
					</Box>

					<HiddenScroll
						position={{ initial: "relative", sm: "static" }}
						m={{ initial: "-8", sm: "0" }}
						p={{ initial: "8", sm: "0" }}
					>
						<Grid
							gap={{ initial: "5", sm: "7" }}
							flow={{ initial: "column", sm: "row" }}
							justify={{ initial: "start", sm: "center" }}
							columns={{ initial: "none", sm: "auto auto" }}
							style={{ gridAutoColumns: "max-content" }}
						>
							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 400,
									top: "-1%",
									left: "27%",
								}}
							>
								<Flex gap="2" align="start" mb="1">
									<Checkmark />
									<Heading as="h3" size="3">
										Full keyboard navigation
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Navigate the menu using arrow keys, Escape, and Enter hotkeys,
									or even via typeahead.
								</Text>
							</Box>

							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 400,
									top: "14%",
									left: "60%",
								}}
							>
								<Flex gap="2" align="start" mb="1">
									<Checkmark />
									<Heading as="h3" size="3">
										Modal and non-modal modes
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Configure whether the dropdown menu allows or blocks outside
									interactions.
								</Text>
							</Box>

							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 400,
									top: "40%",
									left: "74%",
								}}
							>
								<Flex gap="2" align="start" mb="1">
									<Checkmark />
									<Heading as="h3" size="3">
										Supports submenus
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Nest another level of fully functional submenus inside the
									dropdown menu.
								</Text>
							</Box>

							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 420,
									top: "67%",
									left: "69%",
								}}
							>
								<Flex gap="2" align="start" mb="1">
									<Checkmark />
									<Heading as="h3" size="3">
										Supports assistive technology
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Implements correct semantics and behaviors, so it's accessible
									to people using assistive technology.
								</Text>
							</Box>

							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 400,
									top: "94%",
									left: "39%",
								}}
							>
								<Flex gap="2" align="start" mb="1" mr="-1">
									<Checkmark />
									<Heading as="h3" size="3">
										Collision and origin-aware animations
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Create open and close animations that take the dropdown menu’s
									actual position into account.
								</Text>
							</Box>

							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 420,
									top: "76%",
									left: "8%",
								}}
							>
								<Flex gap="2" align="start" mb="1">
									<Checkmark />
									<Heading as="h3" size="3">
										Control alignment and collisions
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Position the menu anywhere relative to the trigger, taking
									collisions with the screen into account.
								</Text>
							</Box>

							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 420,
									top: "49%",
									left: "-1%",
								}}
							>
								<Flex gap="2" align="start" mb="1">
									<Checkmark />
									<Heading as="h3" size="3">
										Fully managed focus
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Granularly control focus behavior when user closes the
									dropdown menu or focuses an outside element.
								</Text>
							</Box>

							<Box
								position={{ lg: "absolute" }}
								style={{
									width: "var(--component-highlights-item-width)",
									maxWidth: 400,
									top: "19%",
									left: "4%",
								}}
							>
								<Flex gap="2" align="start" mb="1">
									<Checkmark />
									<Heading as="h3" size="3">
										Supports checkable items
									</Heading>
								</Flex>
								<Text as="p" color="gray" size="3" ml="6">
									Items can be used to perform actions, as well as act as
									checkbox or radiobutton controls.
								</Text>
							</Box>

							<Box pr="5" display={{ sm: "none" }} />
						</Grid>
					</HiddenScroll>
				</Box>
			</Container>
		</Section>
	);
};

const Checkmark = () => (
	<CheckIcon
		style={{
			color: "var(--teal-11)",
			backgroundColor: "var(--teal-4)",
			padding: "var(--space-1)",
			width: "var(--space-5)",
			height: "var(--space-5)",
			marginTop: -1,
			marginBottom: -1,
			borderRadius: "100%",
			flexGrow: 0,
			flexShrink: 0,
		}}
	/>
);

const Circle = ({
	size,
	color1,
	color2,
	angle = 90,
	opacity = 1,
}: {
	size: number;
	angle?: number;
	color1: string;
	color2: string;
	opacity?: number;
}) => {
	return (
		<Box
			style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				width: size,
				height: size,
				opacity: opacity,
				transform: `translate(-50%, -50%) rotate(${angle}deg)`,
			}}
		>
			<svg
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ width: "100%", height: "100%" }}
			>
				<circle
					cx="50"
					cy="50"
					r="49"
					stroke={`url(#circle-${size})`}
					strokeWidth="1"
					vectorEffect="non-scaling-stroke"
				/>
				<defs>
					<linearGradient
						id={`circle-${size}`}
						gradientUnits="userSpaceOnUse"
						x1="50"
						y1="0"
						x2="50"
						y2="100"
					>
						<stop stopColor={color1} />
						<stop stopColor={color2} offset="1" />
					</linearGradient>
				</defs>
			</svg>
		</Box>
	);
};

const Guides8 = () => (
	<svg
		width="1100"
		height="1100"
		viewBox="0 0 1100 1100"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={{
			position: "absolute",
			pointerEvents: "none",
			top: "50%",
			left: "50%",
			opacity: 0.5,
			transform: "translate(-50%, -50%) rotate(15deg)",
		}}
	>
		<line x1="25" y1="549.5" x2="1075" y2="549.5" stroke="black" />
		<line x1="549.5" y1="1075" x2="549.5" y2="25" stroke="black" />
		<line x1="921.584" y1="179.122" x2="179.122" y2="921.585" stroke="black" />
		<line x1="920.877" y1="921.585" x2="178.415" y2="179.123" stroke="black" />
		<g opacity="0.1">
			<line
				x1="42.7612"
				y1="685.397"
				x2="1056.98"
				y2="413.637"
				stroke="black"
			/>
			<line
				x1="685.398"
				y1="1057.24"
				x2="413.638"
				y2="43.0184"
				stroke="black"
			/>
			<line
				x1="812.933"
				y1="95.5868"
				x2="287.933"
				y2="1004.91"
				stroke="black"
			/>
			<line
				x1="1004.41"
				y1="812.933"
				x2="95.0873"
				y2="287.933"
				stroke="black"
			/>
		</g>
		<g opacity="0.1">
			<line
				x1="43.0181"
				y1="413.637"
				x2="1057.24"
				y2="685.397"
				stroke="black"
			/>
			<line
				x1="413.638"
				y1="1056.98"
				x2="685.398"
				y2="42.7596"
				stroke="black"
			/>
			<line
				x1="1004.91"
				y1="287.933"
				x2="95.5875"
				y2="812.933"
				stroke="black"
			/>
			<line
				x1="812.067"
				y1="1004.91"
				x2="287.067"
				y2="95.5866"
				stroke="black"
			/>
		</g>
		<circle cx="550" cy="549" r="424.5" stroke="black" />
		<circle cx="550" cy="549" r="424.5" stroke="black" />
		<circle cx="550" cy="549" r="474.5" stroke="black" />
		<circle cx="550" cy="549" r="524.5" stroke="black" />
	</svg>
);

const Guides7 = () => (
	<svg
		width="1486"
		height="1486"
		viewBox="0 0 1486 1486"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={{
			position: "absolute",
			pointerEvents: "none",
			top: "50%",
			left: "50%",
			opacity: 0.5,
			transform: "translate(-50%, -50%) rotate(15deg)",
		}}
	>
		<line x1="480.068" y1="288.587" x2="742.568" y2="743.25" stroke="black" />
		<line x1="934.403" y1="254.974" x2="742.884" y2="742.955" stroke="black" />
		<line x1="1243.96" y1="589.232" x2="743.213" y2="743.69" stroke="black" />
		<line x1="1175.63" y1="1039.66" x2="741.852" y2="743.913" stroke="black" />
		<line x1="780.869" y1="1267.07" x2="742.502" y2="743.036" stroke="black" />
		<line x1="356.941" y1="1100.22" x2="741.793" y2="743.133" stroke="black" />
		<line x1="223.073" y1="664.758" x2="742.209" y2="743.006" stroke="black" />
		<g opacity="0.1">
			<line
				x1="371.416"
				y1="372.123"
				x2="742.647"
				y2="743.354"
				stroke="black"
			/>
			<line
				x1="801.571"
				y1="222.065"
				x2="742.877"
				y2="742.987"
				stroke="black"
			/>
			<line
				x1="1187.09"
				y1="464.814"
				x2="743.385"
				y2="743.612"
				stroke="black"
			/>
			<line x1="1237.66" y1="917.575" x2="742.127" y2="744.18" stroke="black" />
			<line
				x1="915.217"
				y1="1239.41"
				x2="742.528"
				y2="743.165"
				stroke="black"
			/>
			<line x1="462.553" y1="1187.97" x2="741.87" y2="743.442" stroke="black" />
			<line
				x1="220.538"
				y1="801.992"
				x2="742.237"
				y2="743.211"
				stroke="black"
			/>
		</g>
		<g opacity="0.1">
			<line x1="606.637" y1="236.019" x2="742.517" y2="743.13" stroke="black" />
			<line x1="1054.19" y1="321.143" x2="742.9" y2="742.928" stroke="black" />
			<line x1="1266.69" y1="724.13" x2="743.028" y2="743.723" stroke="black" />
			<line
				x1="1084.11"
				y1="1141.52"
				x2="741.655"
				y2="743.586"
				stroke="black"
			/>
			<line
				x1="643.939"
				y1="1259.01"
				x2="742.508"
				y2="742.907"
				stroke="black"
			/>
			<line x1="277.639" y1="988.134" x2="741.8" y2="742.817" stroke="black" />
			<line x1="261.04" y1="532.858" x2="742.235" y2="742.801" stroke="black" />
		</g>
		<circle
			cx="743"
			cy="743"
			r="424.5"
			transform="rotate(60 743 743)"
			stroke="black"
		/>
		<circle
			cx="743"
			cy="743"
			r="424.5"
			transform="rotate(60 743 743)"
			stroke="black"
		/>
		<circle
			cx="742.999"
			cy="743"
			r="474.5"
			transform="rotate(60 742.999 743)"
			stroke="black"
		/>
		<circle
			cx="743"
			cy="743"
			r="524.5"
			transform="rotate(45 743 743)"
			stroke="black"
		/>
	</svg>
);
