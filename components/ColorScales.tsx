import { Text, Grid, Flex } from "@radix-ui/themes";

const scales = [...Array(12)].map((_, i) => i + 1);

type ColorScaleBaseProps = {
	steps: number[];
};

const ColorScaleBase = ({ steps }: ColorScaleBaseProps) => (
	<Grid
		align="center"
		my="5"
		style={{
			gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
			gap: 2,
		}}
	>
		{scales.map((scale) => {
			const showStep = steps.includes(scale);
			return (
				<Flex
					key={scale}
					align="center"
					justify="center"
					style={{
						height: 35,
						backgroundColor: `var(--accent-a${scale})`,
						filter: !showStep ? "grayscale(1)" : undefined,
					}}
				>
					{showStep && (
						<Text
							as="p"
							size="2"
							style={{ color: scale >= 9 ? "var(--gray-1)" : "var(--gray-12)" }}
						>
							{scale}
						</Text>
					)}
				</Flex>
			);
		})}
	</Grid>
);

export function ColorScale01() {
	return <ColorScaleBase steps={[1, 2]} />;
}

export function ColorScale02() {
	return <ColorScaleBase steps={[3, 4, 5]} />;
}

export function ColorScale03() {
	return <ColorScaleBase steps={[6, 7, 8]} />;
}

export function ColorScale04() {
	return <ColorScaleBase steps={[9, 10]} />;
}

export function ColorScale05() {
	return <ColorScaleBase steps={[11, 12]} />;
}
