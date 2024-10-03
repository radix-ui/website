import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { transposeProgressionStart } from "@components/generateRadixColors";
import { Section, Container, Heading, Box, Flex, Text } from "@radix-ui/themes";
import BezierEasing from "bezier-easing";
import React from "react";

export default function Page() {
	return (
		<MobileMenuProvider>
			<ColorsHeader ghost />
			<ColorsMobileMenu />

			<TitleAndMetaTags
				title="Create your Radix palette – Radix Colors"
				description="An open-source color system for designing beautiful, accessible websites and apps."
				image="colors.png"
			/>

			<Section
				px={{ initial: "5", xs: "6", sm: "7", md: "9" }}
				size={{ initial: "2", md: "3" }}
			>
				<Container position="relative">
					<Heading align="center" mb="5">
						Internal test page
					</Heading>
					<Flex direction="column" align="center" my="8" gap="8">
						<Box>
							<Text size="1" as="div" mb="3">
								Range 10–50
							</Text>
							<NumericalScale numbers={[10, 15, 20, 25, 30, 35, 40, 45, 50]} />
						</Box>

						<Box>
							<Text size="1" as="div" mb="3">
								Start transposed to 0 with linear easing
							</Text>
							<NumericalScale
								numbers={transposeProgressionStart(
									0,
									[10, 15, 20, 25, 30, 35, 40, 45, 50],
									[0, 0, 0, 0],
								)}
							/>
						</Box>

						<Box>
							<Text size="1" as="div" mb="3">
								Start transposed to 0 with cubic ease-in
							</Text>
							<NumericalScale
								numbers={transposeProgressionStart(
									0,
									[10, 15, 20, 25, 30, 35, 40, 45, 50],
									[0.55, 0.055, 0.675, 0.19],
								)}
							/>
						</Box>

						<Box>
							<Text size="1" as="div" mb="3">
								Start transposed to 0 with exponential ease-in
							</Text>
							<NumericalScale
								numbers={transposeProgressionStart(
									0,
									[10, 15, 20, 25, 30, 35, 40, 45, 50],
									[0.95, 0.05, 0.795, 0.035],
								)}
							/>
						</Box>

						<Box>
							<Text size="1" as="div" mb="3">
								Start transposed to 20 with exponential ease-in
							</Text>
							<NumericalScale
								numbers={transposeProgressionStart(
									20,
									[10, 15, 20, 25, 30, 35, 40, 45, 50],
									[0.95, 0.05, 0.795, 0.035],
								)}
							/>
						</Box>

						<Box>
							<Text size="1" as="div" mb="3">
								Start transposed to 20 with quadratic ease-in
							</Text>
							<NumericalScale
								numbers={transposeProgressionStart(
									20,
									[10, 15, 20, 25, 30, 35, 40, 45, 50],
									[0.55, 0.085, 0.68, 0.53],
								)}
							/>
						</Box>
					</Flex>
				</Container>
			</Section>
		</MobileMenuProvider>
	);
}

interface NumericalScaleProps {
	numbers: number[];
}

function NumericalScale({ numbers }: NumericalScaleProps) {
	return (
		<Flex
			position="relative"
			width="1000px"
			height="8px"
			style={{ borderBottom: "1px solid var(--red-9)" }}
		>
			{numbers.map((number, i) => (
				<Box
					key={i}
					data-number={number}
					height="16px"
					position="absolute"
					left={number * 10 + "px"}
					style={{
						borderLeft: `1px solid ${i === 0 ? "var(--yellow-11)" : "var(--red-9)"}`,
					}}
				/>
			))}
		</Flex>
	);
}
