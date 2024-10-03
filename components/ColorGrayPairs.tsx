import { Box, Text, Flex } from "@radix-ui/themes";

const pairings = [
	{
		color: "mauve",
		pairs: [
			"tomato",
			"red",
			"ruby",
			"crimson",
			"pink",
			"plum",
			"purple",
			"violet",
		],
	},
	{ color: "slate", pairs: ["iris", "indigo", "blue", "sky", "cyan"] },
	{ color: "sage", pairs: ["mint", "teal", "jade", "green"] },
	{ color: "olive", pairs: ["grass", "lime"] },
	{ color: "sand", pairs: ["yellow", "amber", "orange", "brown"] },
];

const darkTextPair = ["sky", "mint", "lime", "amber", "yellow"];

export function ColorGrayPairs() {
	return (
		<Box>
			{pairings.map(({ color, pairs }) => (
				<Box my="5" key={color}>
					<Flex
						flexGrow="1"
						align="center"
						justify="center"
						style={{
							height: "var(--space-6)",
							marginBottom: 2,
							backgroundColor: `var(--${color}-4)`,
						}}
					>
						<Text
							as="p"
							size="2"
							style={{
								color: `var(--${color}-11)`,
								textTransform: "capitalize",
							}}
						>
							{color}
						</Text>
					</Flex>
					<Flex style={{ gap: 2 }}>
						{pairs.map((pair) => (
							<Flex
								key={pair}
								flexGrow="1"
								width="100%"
								align="center"
								justify="center"
								style={{
									height: "var(--space-6)",
									backgroundColor: `var(--${pair}-9)`,
								}}
							>
								<Text
									as="p"
									size="2"
									style={{
										color: darkTextPair.includes(pair)
											? `var(--${color}-12)`
											: "white",
										textTransform: "capitalize",
									}}
								>
									{pair}
								</Text>
							</Flex>
						))}
					</Flex>
				</Box>
			))}
		</Box>
	);
}
