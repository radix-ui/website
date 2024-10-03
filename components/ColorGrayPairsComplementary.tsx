import { Box, Text, Grid, Flex } from "@radix-ui/themes";

const whiteBgColors = [
	"bronze",
	"gold",
	"brown",
	"orange",
	"tomato",
	"red",
	"ruby",
	"crimson",
	"pink",
	"plum",
	"purple",
	"violet",
	"iris",
	"indigo",
	"blue",
	"cyan",
	"teal",
	"jade",
	"green",
	"grass",
];

const darkBgColors = ["sky", "mint", "lime", "yellow", "amber"];

export function ColorGrayPairsComplementary() {
	return (
		<Box>
			<Grid
				align="center"
				my="5"
				style={{
					gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
					gap: 2,
				}}
			>
				{whiteBgColors.map((color) => (
					<Flex
						key={color}
						align="center"
						justify="center"
						style={{ height: 65, backgroundColor: `var(--${color}-10)` }}
					>
						<Text
							as="p"
							size="2"
							style={{ color: "white", textTransform: "capitalize" }}
						>
							{color}
						</Text>
					</Flex>
				))}
			</Grid>

			<Text as="p" mb="3">
				Scales designed for dark foreground text:
			</Text>

			<Grid
				align="center"
				my="5"
				style={{
					gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
					gap: 2,
				}}
			>
				{darkBgColors.map((color) => (
					<Flex
						key={color}
						align="center"
						justify="center"
						style={{ height: 65, backgroundColor: `var(--${color}-10)` }}
					>
						<Text
							as="p"
							size="2"
							style={{
								color: `var(--${color}-9-contrast)`,
								textTransform: "capitalize",
							}}
						>
							{color}
						</Text>
					</Flex>
				))}
			</Grid>
		</Box>
	);
}
