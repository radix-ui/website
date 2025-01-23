import * as React from "react";
import { ArrowLeftIcon, FigmaLogoIcon } from "@radix-ui/react-icons";
import {
	Box,
	Button,
	Code,
	Container,
	Flex,
	Section,
	Text,
} from "@radix-ui/themes";

import styles from "./IconsHero.module.css";
import { SerifHeading } from "@components/SerifHeading";

export const IconsHero = () => {
	return (
		<>
			<Box
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 480,
					opacity: 0.6,
					background: "linear-gradient(to bottom, var(--mint-a2), transparent)",
				}}
			/>

			<Box className={styles.IconsHeroLinesContainer}>
				<Box className={styles.IconsHeroLines}>
					<Line color="var(--pink-a5)" angle="0deg" offset="0, 0.467em" />
					<Line color="var(--pink-a5)" angle="0deg" offset="0, 0.533em" />

					<Line color="var(--pink-a5)" angle="45deg" offset="-0.288em, 0" />
					<Line
						color="var(--pink-a5)"
						angle="45deg"
						offset="-0.288em, 0.090em"
					/>

					<Line color="var(--pink-a5)" angle="-45deg" offset="0.622em, 0" />
					<Line
						color="var(--pink-a5)"
						angle="-45deg"
						offset="0.622em, 0.090em"
					/>

					<Line color="var(--pink-a5)" angle="45deg" offset="0.242em, 0" />
					<Line color="var(--pink-a5)" angle="-45deg" offset="0.242em, 1em" />

					<Line color="var(--mint-a5)" angle="0deg" offset="0, 0" />
					<Line color="var(--mint-a5)" angle="0deg" offset="0, 1em" />

					<Line color="var(--mint-a5)" angle="90deg" offset="0, 0" />
					<Line color="var(--mint-a5)" angle="90deg" offset="1em, 0" />

					<ArrowLeftIcon
						style={{ position: "relative", width: "1em", height: "1em" }}
					/>
				</Box>
			</Box>

			<Box position="relative">
				<Section size={{ initial: "2", md: "4" }}>
					<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
						<Box mb="6">
							<SerifHeading>
								A crisp set
								<br />
								of 15×15 icons
							</SerifHeading>
						</Box>

						<Flex
							align="stretch"
							gap="4"
							direction={{ initial: "column", sm: "row" }}
						>
							<Button
								asChild
								size={{ initial: "3", xs: "4" }}
								color="gray"
								highContrast
							>
								<a
									target="_blank"
									href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons"
								>
									<FigmaLogoIcon
										width="20"
										height="20"
										style={{ marginLeft: -6, marginRight: -2 }}
									/>
									Open in Figma
								</a>
							</Button>
							<input
								readOnly
								onClick={(event) => event.currentTarget.select()}
								value="npm i @radix-ui/react-icons"
								style={{
									textAlign: "center",
									minHeight: 40,
									minWidth: "npm i @radix-ui/react-icons".length + "ch",
									boxSizing: "content-box",
									fontFamily: "var(--code-font-family)",
									fontSize: "var(--font-size-3)",
									backgroundColor: "var(--color-panel-solid)",
									borderRadius: "var(--radius-3)",
									border: 0,
									appearance: "none",
									paddingLeft: "var(--space-4)",
									paddingRight: "var(--space-4)",
									margin: 0,
									outline: 0,
									boxShadow: "0 0 0 1px var(--gray-a6)",
								}}
							/>
						</Flex>
					</Container>
				</Section>
			</Box>
		</>
	);
};

type LineProps = {
	angle?: string;
	offset?: string;
	color?: string;
};

const Line = ({ angle = "0deg", offset = "0px, 0px", color }: LineProps) => {
	return (
		<Box
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "calc(200vw + 200vh)",
				height: "1px",
				transform: `translate(${offset}) rotate(${angle}) translate(-50%, -50%)`,
				transformOrigin: "top left",
				backgroundColor: color,
			}}
		/>
	);
};
