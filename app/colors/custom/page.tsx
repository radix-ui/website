import { cookies } from "next/headers";
import NextLink from "next/link";
import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
	Section,
	Text,
	Theme,
} from "@radix-ui/themes";
import { ColorUsageRange } from "@components/ColorUsageRange";
import { ColorStepLabel } from "@components/ColorStepLabel";
import { Favicon } from "@components/Favicon";
import { ColorThemeProvider } from "./color-theme-provider";
import {
	AccentColorField,
	BackgroundColorField,
	ColorStyles,
	CopyButton,
	GrayColorField,
	Preview,
	RootTheme,
	Swatch,
	ThemeSwitcher,
} from "./page.client";
import {
	APPEARANCE_COOKIE,
	PALETTE_COOKIE,
	parseAppearanceCookie,
	parsePaletteCookie,
} from "./palette-cookie";

export default async function CustomColorsPage() {
	const cookieStore = await cookies();
	const initialPalette = parsePaletteCookie(
		cookieStore.get(PALETTE_COOKIE)?.value,
	);
	const initialAppearance = parseAppearanceCookie(
		cookieStore.get(APPEARANCE_COOKIE)?.value,
	);
	return (
		<ColorThemeProvider
			initialPalette={initialPalette}
			initialAppearance={initialAppearance}
		>
			<ColorStyles />
			<RootTheme className="radix-themes-custom-fonts">
				<Favicon />
				<Box
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						height: 480,
						opacity: 0.6,
						background:
							"linear-gradient(to bottom, var(--accent-4), transparent)",
					}}
				/>

				<ColorsHeader ghost />
				<ColorsMobileMenu />

				<Section
					px={{ initial: "5", xs: "6", sm: "7", md: "9" }}
					size={{ initial: "2", md: "3" }}
				>
					<Container position="relative">
						<Flex direction="column" align="center" mb="7">
							<Flex asChild align="center" gap="1" mb="3">
								<Link asChild size="2" color="gray" ml="-2">
									<NextLink href="/colors">
										<ArrowLeftIcon />
										Radix Colors
									</NextLink>
								</Link>
							</Flex>
							<Heading as="h1" align="center" size="8">
								Create a custom palette
							</Heading>

							<ThemeSwitcher
								initialAppearance={initialAppearance}
								style={{ backgroundColor: "transparent" }}
								mt="5"
							/>
						</Flex>

						<Box mb="9">
							<Grid
								columns={{ initial: "1fr", sm: "180px 180px 180px auto" }}
								maxWidth={{ initial: "400px", sm: "none" }}
								mx="auto"
								gap="4"
								justify="center"
								align="end"
							>
								<Flex direction="column">
									<Flex mb="1">
										<Text as="label" htmlFor="accent" size="1" color="gray">
											Accent
										</Text>
									</Flex>
									<AccentColorField id="accent" />
								</Flex>

								<Flex direction="column">
									<Flex justify="between" mb="1">
										<Text as="label" htmlFor="gray" size="1" color="gray">
											Gray
										</Text>
									</Flex>
									<GrayColorField id="gray" />
								</Flex>

								<Flex direction="column">
									<Flex mb="1">
										<Text as="label" htmlFor="bg" size="1" color="gray">
											Background
										</Text>
									</Flex>
									<BackgroundColorField id="bg" />
								</Flex>

								<Flex
									gap="3"
									align={{ sm: "center" }}
									direction={{ initial: "column", sm: "row" }}
									mt={{ initial: "2", sm: "0" }}
								>
									<CopyButton />
								</Flex>
							</Grid>
						</Box>

						<Grid
							mb="9"
							flow={{ initial: "column", sm: "row" }}
							columns={{ initial: "2", sm: "12" }}
							rows={{ initial: "12", sm: "auto" }}
							gap={{ initial: "2px", md: "1" }}
							mx={{ initial: "-5", xs: "-6", sm: "0" }}
							px={{ initial: "2px", sm: "0" }}
						>
							<ColorUsageRange
								display={{ initial: "none", sm: "flex" }}
								gridColumn="1 / 3"
							>
								Backgrounds
							</ColorUsageRange>
							<ColorUsageRange
								display={{ initial: "none", sm: "flex" }}
								gridColumn="3 / 6"
							>
								Interactive components
							</ColorUsageRange>
							<ColorUsageRange
								display={{ initial: "none", sm: "flex" }}
								gridColumn="6 / 9"
							>
								Borders and separators
							</ColorUsageRange>
							<ColorUsageRange
								display={{ initial: "none", sm: "flex" }}
								gridColumn="9 / 11"
							>
								Solid colors
							</ColorUsageRange>
							<ColorUsageRange
								display={{ initial: "none", sm: "flex" }}
								gridColumn="11 / 13"
							>
								Accessible text
							</ColorUsageRange>

							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								1
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								2
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								3
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								4
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								5
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								6
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								7
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								8
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								9
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								10
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								11
							</ColorStepLabel>
							<ColorStepLabel display={{ initial: "none", sm: "flex" }}>
								12
							</ColorStepLabel>

							{Array.from({ length: 12 }, (_, i) => i + 1).map((step, i) => (
								<Swatch key={step} scale={i} step={step} type="accent" />
							))}
							{Array.from({ length: 12 }, (_, i) => i + 1).map((step, i) => (
								<Swatch key={step} scale={i} step={step} type="gray" />
							))}
						</Grid>
						<Theme className="radix-themes-default-fonts">
							<Preview />
						</Theme>
					</Container>
				</Section>
			</RootTheme>
		</ColorThemeProvider>
	);
}
