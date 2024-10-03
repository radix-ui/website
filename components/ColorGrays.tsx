import { Text, Grid, Flex } from "@radix-ui/themes";

const grayColors = ["gray", "mauve", "slate", "sage", "olive", "sand"];

export function ColorGrays() {
	return (
		<Grid
			my="5"
			align="center"
			style={{
				gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
				gap: 2,
			}}
		>
			{grayColors.map((color) => (
				<Flex
					key={color}
					align="center"
					justify="center"
					style={{ height: 35, backgroundColor: `var(--${color}-10)` }}
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
	);
}
