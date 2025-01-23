import * as React from "react";
import {
	VisuallyHidden,
	Popover,
	Box,
	Heading,
	Theme,
	Button,
	Separator,
	Grid,
	Text,
	Tooltip,
	Flex,
	AccessibleIcon,
	IconButton,
	Dialog,
	Reset,
} from "@radix-ui/themes";
import styles from "./Swatch.module.css";
import { classNames } from "@utils/classNames";
import * as Colors from "@radix-ui/colors";
import { useTheme } from "next-themes";
import { Cross2Icon, InfoCircledIcon } from "@radix-ui/react-icons";
import { copy } from "../utils/clipboard";

export type ColorScale =
	| "white"
	| "black"
	| "gray"
	| "mauve"
	| "slate"
	| "sage"
	| "olive"
	| "sand"
	| "tomato"
	| "red"
	| "ruby"
	| "crimson"
	| "pink"
	| "plum"
	| "purple"
	| "violet"
	| "iris"
	| "indigo"
	| "blue"
	| "cyan"
	| "teal"
	| "jade"
	| "green"
	| "grass"
	| "bronze"
	| "gold"
	| "brown"
	| "orange"
	| "amber"
	| "yellow"
	| "lime"
	| "mint"
	| "sky";

type ColorStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const brightColors = ["amber", "yellow", "lime", "mint", "sky"] as const;

interface SwatchProps extends React.ComponentPropsWithoutRef<"button"> {
	scale: ColorScale;
	step: `${ColorStep}`;
}

export const Swatch = ({ scale, step, style, ...props }: SwatchProps) => {
	const cssVariable = ["white", "black"].includes(scale)
		? `var(--${scale}-a${step})`
		: `var(--${scale}-${step})`;
	const contentRef = React.useRef<HTMLDivElement | null>(null);
	const { resolvedTheme } = useTheme();

	const friendlyScaleName = `${scale.charAt(0).toUpperCase() + scale.slice(1)}`;
	const friendlyColorName = `${friendlyScaleName} ${
		["white", "black"].includes(scale) ? "A" + step : step
	}`;

	const otherTheme = resolvedTheme === "light" ? "dark" : "light";

	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Reset>
					<button
						data-color-scale={scale}
						className={classNames(
							styles.SwatchTrigger,
							styles.SwatchTransparencyGrid,
						)}
						{...props}
					>
						<span style={{ backgroundColor: cssVariable, ...style }}>
							<VisuallyHidden>
								{scale} {step}
							</VisuallyHidden>
						</span>
					</button>
				</Reset>
			</Dialog.Trigger>

			<Theme accentColor="gray" className="radix-themes-custom-fonts" asChild>
				<Dialog.Content
					ref={contentRef}
					size="1"
					className={styles.SwatchContent}
					onOpenAutoFocus={(event) => {
						event.preventDefault();
						contentRef.current?.focus();
					}}
				>
					<Box position="relative">
						<Box
							data-color-scale={scale}
							className={styles.SwatchTransparencyGrid}
							height="240px"
						>
							<Box
								style={{
									width: "100%",
									height: "100%",
									backgroundColor: cssVariable,
								}}
							/>
						</Box>

						<Heading as="h3" size="3" trim="both" my="4">
							{friendlyColorName}
						</Heading>

						{!["white", "black"].includes(scale) &&
							(() => {
								const isGray = [
									"gray",
									"mauve",
									"slate",
									"sage",
									"olive",
									"sand",
								].includes(scale);
								const dark = resolvedTheme === "dark";
								const hex = getValue({ scale, step, dark });
								const hexA = getValue({ scale, step, dark, alpha: true });
								const p3 = getValue({ scale, step, dark, p3: true });
								const p3A = getValue({
									scale,
									step,
									dark,
									p3: true,
									alpha: true,
								});
								const themeKey = ["light", "dark"].includes(resolvedTheme!)
									? (resolvedTheme as "light" | "dark")
									: "light";
								const stepContrastInfo = (contrastInfo as any)[themeKey]?.[
									`${scale}-${step}`
								];

								return (
									<Grid
										align="center"
										columns={{ xs: "auto 1fr" }}
										gapY={{ xs: "2" }}
										gapX="5"
									>
										<Text color="gray" size="2">
											Usage
										</Text>
										<Box mb={{ initial: "3", xs: "0" }}>
											<Text size="2">
												{["1", "2"].includes(step) && "Backgrounds"}
												{["3", "4", "5"].includes(step) &&
													"Interactive components"}
												{["6", "7"].includes(step) && "Borders and separators"}
												{["8"].includes(step) &&
													isGray &&
													"Borders, focus rings, disabled text"}
												{["8"].includes(step) &&
													!isGray &&
													"Borders, focus rings"}
												{["9", "10"].includes(step) &&
													isGray &&
													"Solid backgrounds, disabled text"}
												{["9", "10"].includes(step) &&
													!isGray &&
													"Solid backgrounds, buttons"}
												{["11"].includes(step) && "Secondary text, links"}
												{["12"].includes(step) && "High-contrast text"}
											</Text>
										</Box>

										<Text color="gray" size="2">
											Pairs with
										</Text>
										<Box>
											<Text size="2">
												{["1", "2"].includes(step) && "Steps 11, 12 text"}
												{["3"].includes(step) &&
													"Steps 11 labels, Step 12 text"}
												{["4"].includes(step) && "Steps 11, 12 labels"}
												{["5"].includes(step) && "Step 12 labels"}
												{["6", "7", "8"].includes(step) &&
													"Steps 1–5 backgrounds"}
												{["9", "10"].includes(step) &&
													(isBrightColor(scale) ? "Dark text" : "White text")}
												{["11", "12"].includes(step) && "Background colors"}
											</Text>
										</Box>

										<Box
											style={{ gridColumn: "1 / -1 " }}
											my={{ initial: "4", xs: "1" }}
										>
											<Separator size="4" />
										</Box>

										<Text color="gray" size="2">
											Solid color
										</Text>

										<Flex
											mb={{ initial: "3", xs: "0" }}
											height={{ initial: "24px", xs: "16px" }}
											align="center"
										>
											<CopyButton>{hex}</CopyButton>
										</Flex>

										<Flex align="center">
											<Text color="gray" size="2">
												Alpha color
											</Text>

											<Popover.Root modal>
												<Popover.Trigger>
													<IconButton
														size="1"
														variant="ghost"
														style={{ marginLeft: 2 }}
													>
														<AccessibleIcon label="Learn more">
															<InfoCircledIcon />
														</AccessibleIcon>
													</IconButton>
												</Popover.Trigger>
												<Theme asChild className="radix-themes-custom-fonts">
													<Popover.Content
														side="top"
														align="center"
														style={{ width: 380 }}
													>
														<Heading size="2" mb="4" trim="both">
															Alpha colors
														</Heading>
														<Text as="p" size="2" trim="both" mb="4">
															Alpha color is a translucent color that achieves
															the same look against a neutral background. Alpha
															colors are used for elements that need to retain
															contrast when overlayed over different backgrounds
														</Text>
														<Text as="p" size="2" trim="both">
															Radix Colors alphas are designed against white
															background in light mode and Gray 1 in dark mode.
														</Text>
													</Popover.Content>
												</Theme>
											</Popover.Root>
										</Flex>

										<Flex
											mb={{ initial: "3", xs: "0" }}
											height={{ initial: "24px", xs: "16px" }}
											align="center"
										>
											<CopyButton>{hexA}</CopyButton>
										</Flex>

										<Text color="gray" size="2">
											P3 color
										</Text>
										<Flex
											mb={{ initial: "3", xs: "0" }}
											height={{ initial: "24px", xs: "16px" }}
											align="center"
										>
											<CopyButton>{p3}</CopyButton>
										</Flex>

										<Text color="gray" size="2">
											P3 alpha
										</Text>
										<Flex
											height={{ initial: "24px", xs: "16px" }}
											align="center"
										>
											<CopyButton>{p3A}</CopyButton>
										</Flex>

										{+step <= 5 && (
											<>
												<Box
													style={{ gridColumn: "1 / -1 " }}
													my={{ initial: "4", xs: "1" }}
												>
													<Separator size="4" />
												</Box>

												<Text color="gray" size="2">
													Step 11 contrast
												</Text>
												<Box mb={{ initial: "3", xs: "0" }}>
													<Text size="2">
														Lc {stepContrastInfo.step11.toFixed(1)}
													</Text>
												</Box>

												<Text color="gray" size="2">
													Step 12 contrast
												</Text>
												<Text size="2">
													Lc {stepContrastInfo.step12.toFixed(1)}
												</Text>
											</>
										)}

										{(step === "9" || step === "10") && (
											<>
												<Box
													style={{ gridColumn: "1 / -1 " }}
													my={{ initial: "4", xs: "1" }}
												>
													<Separator size="4" />
												</Box>

												<Text color="gray" size="2">
													Contrast with{" "}
													{stepContrastInfo.white > stepContrastInfo.black
														? "white"
														: "black"}
												</Text>
												<Text size="2">
													Lc{" "}
													{Math.max(
														stepContrastInfo.white,
														stepContrastInfo.black,
													).toFixed(1)}
												</Text>
											</>
										)}

										{+step >= 11 && (
											<>
												<Box
													style={{ gridColumn: "1 / -1 " }}
													my={{ initial: "4", xs: "1" }}
												>
													<Separator size="4" />
												</Box>

												<Text color="gray" size="2">
													Step 1 contrast
												</Text>
												<Box mb={{ initial: "3", xs: "0" }}>
													<Text size="2">
														Lc {stepContrastInfo.step1.toFixed(1)}
													</Text>
												</Box>

												<Text color="gray" size="2">
													Step 2 contrast
												</Text>
												<Box mb={{ initial: "3", xs: "0" }}>
													<Text size="2">
														Lc {stepContrastInfo.step2.toFixed(1)}
													</Text>
												</Box>

												<Text color="gray" size="2">
													Step 3 contrast
												</Text>
												<Box mb={{ initial: "3", xs: "0" }}>
													<Text size="2">
														Lc {stepContrastInfo.step3.toFixed(1)}
													</Text>
												</Box>

												<Text color="gray" size="2">
													Step 4 contrast
												</Text>
												<Box mb={{ initial: "3", xs: "0" }}>
													<Text size="2">
														Lc {stepContrastInfo.step4.toFixed(1)}
													</Text>
												</Box>

												<Text color="gray" size="2">
													Step 5 contrast
												</Text>
												<Text size="2">
													Lc {stepContrastInfo.step5.toFixed(1)}
												</Text>
											</>
										)}
									</Grid>
								);
							})()}

						{["white", "black"].includes(scale) &&
							(() => {
								return (
									<Grid columns="auto 1fr" gapX="5" gapY="2" pr="4">
										<Text color="gray" size="2">
											Value
										</Text>
										<Box>
											<CopyButton>
												{String(
													(Colors as any)[scale + "A"][scale + "A" + step],
												)}
											</CopyButton>
										</Box>

										<Text color="gray" size="2">
											Usage
										</Text>
										<Text size="2">
											{scale === "black"
												? "Shadows and overlays"
												: "Highlights and overlays"}
										</Text>
									</Grid>
								);
							})()}

						<Theme
							asChild
							hasBackground={false}
							appearance={(() => {
								if (+step < 9) {
									return "inherit";
								}

								if (+step < 11) {
									return isBrightColor(scale) ? "light" : "dark";
								}

								return otherTheme;
							})()}
						>
							<Box
								position="absolute"
								m="2"
								top="0"
								right="0"
								display={{ sm: "none" }}
							>
								<Dialog.Close>
									<IconButton size="1" highContrast variant="ghost">
										<Cross2Icon width="24" height="24" />
									</IconButton>
								</Dialog.Close>
							</Box>
						</Theme>
					</Box>
				</Dialog.Content>
			</Theme>
		</Dialog.Root>
	);
};

const getValue = ({
	scale,
	step,
	alpha,
	dark,
	p3,
}: {
	scale: string;
	step: string | number;
	alpha?: boolean;
	dark?: boolean;
	p3?: boolean;
}) => {
	const alphaKey = alpha ? "A" : "";
	const p3Key = p3 ? "P3" : "";
	const darkKey = dark ? "Dark" : "";
	const scaleKey = scale + darkKey + p3Key + alphaKey;
	const colorKey = scale + alphaKey + String(step);
	const value = String((Colors as any)[scaleKey][colorKey]);
	return p3 ? value : value.toUpperCase();
};

interface CopyButtonState {
	open: boolean;
	text: "Click to copy" | "Copied";
	timeout: ReturnType<typeof setTimeout> | null;
}

const CopyButton = ({
	onClick,
	...props
}: React.ComponentPropsWithoutRef<typeof Button>) => {
	const ref = React.useRef<HTMLButtonElement>(null);

	const [state, setState] = React.useReducer(
		(
			prevState: CopyButtonState,
			newState: Partial<CopyButtonState>,
		): CopyButtonState => {
			// Start a timeout to change the text when tooltip is closed
			if (newState.open === false) {
				newState.timeout = setTimeout(() => {
					setState({
						text: "Click to copy",
						timeout: null,
					});
				}, 1000);
			}

			// Clear a previous timeout when tooltip state changes
			if (prevState.timeout) {
				clearTimeout(prevState.timeout);
				prevState.timeout = null;
			}

			return { ...prevState, ...newState };
		},
		{
			open: false,
			text: "Click to copy",
			timeout: null,
		},
	);

	return (
		<Tooltip
			disableHoverableContent
			content={state.text}
			onOpenChange={(open) => setState({ open })}
			onPointerDownOutside={(event) => {
				// Prevent tooltip closing on click
				const target = event.target as HTMLElement;
				if (ref.current?.contains(target)) {
					event.preventDefault();
				}
			}}
			open={state.open}
		>
			<Button
				variant="ghost"
				highContrast
				ref={ref}
				size="2"
				style={{ userSelect: "auto" }}
				onClick={(event) => {
					onClick?.(event);
					const originalDefaultPrevented = event.defaultPrevented;

					// Prevent tooltip closing on click
					event.preventDefault();
					const text = ref.current?.textContent;

					if (text) {
						setState({
							open: true,
							text: "Copied",
						});

						if (!originalDefaultPrevented) {
							void copy(text);
						}
					}
				}}
				{...props}
			/>
		</Tooltip>
	);
};

const contrastInfo = {
	light: {
		"gray-1": {
			step11: 77.8,
			step12: 101.5,
		},
		"gray-2": {
			step11: 76,
			step12: 99.7,
		},
		"gray-3": {
			step11: 70.7,
			step12: 94.3,
		},
		"gray-4": {
			step11: 66,
			step12: 89.7,
		},
		"gray-5": {
			step11: 61.4,
			step12: 85,
		},
		"gray-9": {
			black: 43.5,
			white: 66.1,
		},
		"gray-10": {
			black: 38.6,
			white: 71,
		},
		"gray-11": {
			step1: 77.8,
			step2: 76,
			step3: 70.7,
			step4: 66,
			step5: 61.4,
		},
		"gray-12": {
			step1: 101.5,
			step2: 99.7,
			step3: 94.3,
			step4: 89.7,
			step5: 85,
		},
		"mauve-1": {
			step11: 77.9,
			step12: 101.6,
		},
		"mauve-2": {
			step11: 76.2,
			step12: 99.9,
		},
		"mauve-3": {
			step11: 70.6,
			step12: 94.3,
		},
		"mauve-4": {
			step11: 65.9,
			step12: 89.7,
		},
		"mauve-5": {
			step11: 61.5,
			step12: 85.2,
		},
		"mauve-9": {
			black: 43.7,
			white: 65.9,
		},
		"mauve-10": {
			black: 38.8,
			white: 70.8,
		},
		"mauve-11": {
			step1: 77.9,
			step2: 76.2,
			step3: 70.6,
			step4: 65.9,
			step5: 61.5,
		},
		"mauve-12": {
			step1: 101.6,
			step2: 99.9,
			step3: 94.3,
			step4: 89.7,
			step5: 85.2,
		},
		"slate-1": {
			step11: 78,
			step12: 101.6,
		},
		"slate-2": {
			step11: 76.2,
			step12: 99.8,
		},
		"slate-3": {
			step11: 70.9,
			step12: 94.6,
		},
		"slate-4": {
			step11: 66.3,
			step12: 89.9,
		},
		"slate-5": {
			step11: 62.2,
			step12: 85.8,
		},
		"slate-9": {
			black: 43.7,
			white: 65.9,
		},
		"slate-10": {
			black: 38.7,
			white: 70.9,
		},
		"slate-11": {
			step1: 78,
			step2: 76.2,
			step3: 70.9,
			step4: 66.3,
			step5: 62.2,
		},
		"slate-12": {
			step1: 101.6,
			step2: 99.8,
			step3: 94.6,
			step4: 89.9,
			step5: 85.8,
		},
		"sage-1": {
			step11: 78.3,
			step12: 101.9,
		},
		"sage-2": {
			step11: 75.9,
			step12: 99.5,
		},
		"sage-3": {
			step11: 71,
			step12: 94.6,
		},
		"sage-4": {
			step11: 66.4,
			step12: 89.9,
		},
		"sage-5": {
			step11: 62.3,
			step12: 85.8,
		},
		"sage-9": {
			black: 43,
			white: 66.5,
		},
		"sage-10": {
			black: 38.2,
			white: 71.4,
		},
		"sage-11": {
			step1: 78.3,
			step2: 75.9,
			step3: 71,
			step4: 66.4,
			step5: 62.3,
		},
		"sage-12": {
			step1: 101.9,
			step2: 99.5,
			step3: 94.6,
			step4: 89.9,
			step5: 85.8,
		},
		"olive-1": {
			step11: 78.4,
			step12: 101.9,
		},
		"olive-2": {
			step11: 76.5,
			step12: 100,
		},
		"olive-3": {
			step11: 71.2,
			step12: 94.6,
		},
		"olive-4": {
			step11: 66.5,
			step12: 89.9,
		},
		"olive-5": {
			step11: 62.3,
			step12: 85.7,
		},
		"olive-9": {
			black: 43.2,
			white: 66.3,
		},
		"olive-10": {
			black: 38.4,
			white: 71.2,
		},
		"olive-11": {
			step1: 78.4,
			step2: 76.5,
			step3: 71.2,
			step4: 66.5,
			step5: 62.3,
		},
		"olive-12": {
			step1: 101.9,
			step2: 100,
			step3: 94.6,
			step4: 89.9,
			step5: 85.7,
		},
		"sand-1": {
			step11: 79,
			step12: 102,
		},
		"sand-2": {
			step11: 76.6,
			step12: 99.6,
		},
		"sand-3": {
			step11: 71.4,
			step12: 94.4,
		},
		"sand-4": {
			step11: 66.6,
			step12: 89.7,
		},
		"sand-5": {
			step11: 62.6,
			step12: 85.6,
		},
		"sand-9": {
			black: 43.2,
			white: 66.3,
		},
		"sand-10": {
			black: 37.9,
			white: 71.6,
		},
		"sand-11": {
			step1: 79,
			step2: 76.6,
			step3: 71.4,
			step4: 66.6,
			step5: 62.6,
		},
		"sand-12": {
			step1: 102,
			step2: 99.6,
			step3: 94.4,
			step4: 89.7,
			step5: 85.6,
		},
		"tomato-1": {
			step11: 71.5,
			step12: 95.4,
		},
		"tomato-2": {
			step11: 69.6,
			step12: 93.5,
		},
		"tomato-3": {
			step11: 63.4,
			step12: 87.3,
		},
		"tomato-4": {
			step11: 56.7,
			step12: 80.6,
		},
		"tomato-5": {
			step11: 50.3,
			step12: 74.2,
		},
		"tomato-9": {
			black: 39.1,
			white: 70.5,
		},
		"tomato-10": {
			black: 35.9,
			white: 73.7,
		},
		"tomato-11": {
			step1: 71.5,
			step2: 69.6,
			step3: 63.4,
			step4: 56.7,
			step5: 50.3,
		},
		"tomato-12": {
			step1: 95.4,
			step2: 93.5,
			step3: 87.3,
			step4: 80.6,
			step5: 74.2,
		},
		"red-1": {
			step11: 72.8,
			step12: 95.9,
		},
		"red-2": {
			step11: 70.5,
			step12: 93.5,
		},
		"red-3": {
			step11: 64.9,
			step12: 87.9,
		},
		"red-4": {
			step11: 58,
			step12: 81,
		},
		"red-5": {
			step11: 52,
			step12: 75.1,
		},
		"red-9": {
			black: 38.7,
			white: 70.9,
		},
		"red-10": {
			black: 35.1,
			white: 74.4,
		},
		"red-11": {
			step1: 72.8,
			step2: 70.5,
			step3: 64.9,
			step4: 58,
			step5: 52,
		},
		"red-12": {
			step1: 95.9,
			step2: 93.5,
			step3: 87.9,
			step4: 81,
			step5: 75.1,
		},
		"ruby-1": {
			step11: 74,
			step12: 95.8,
		},
		"ruby-2": {
			step11: 71.6,
			step12: 93.4,
		},
		"ruby-3": {
			step11: 65.6,
			step12: 87.4,
		},
		"ruby-4": {
			step11: 59.7,
			step12: 81.5,
		},
		"ruby-5": {
			step11: 53.8,
			step12: 75.7,
		},
		"ruby-9": {
			black: 38.9,
			white: 70.7,
		},
		"ruby-10": {
			black: 35.3,
			white: 74.3,
		},
		"ruby-11": {
			step1: 74,
			step2: 71.6,
			step3: 65.6,
			step4: 59.7,
			step5: 53.8,
		},
		"ruby-12": {
			step1: 95.8,
			step2: 93.4,
			step3: 87.4,
			step4: 81.5,
			step5: 75.7,
		},
		"crimson-1": {
			step11: 73.6,
			step12: 95.9,
		},
		"crimson-2": {
			step11: 71.2,
			step12: 93.5,
		},
		"crimson-3": {
			step11: 65.1,
			step12: 87.4,
		},
		"crimson-4": {
			step11: 59.4,
			step12: 81.7,
		},
		"crimson-5": {
			step11: 53,
			step12: 75.3,
		},
		"crimson-9": {
			black: 39.4,
			white: 70.1,
		},
		"crimson-10": {
			black: 35.9,
			white: 73.7,
		},
		"crimson-11": {
			step1: 73.6,
			step2: 71.2,
			step3: 65.1,
			step4: 59.4,
			step5: 53,
		},
		"crimson-12": {
			step1: 95.9,
			step2: 93.5,
			step3: 87.4,
			step4: 81.7,
			step5: 75.3,
		},
		"pink-1": {
			step11: 73.4,
			step12: 95.2,
		},
		"pink-2": {
			step11: 71.1,
			step12: 92.8,
		},
		"pink-3": {
			step11: 65,
			step12: 86.7,
		},
		"pink-4": {
			step11: 59.1,
			step12: 80.8,
		},
		"pink-5": {
			step11: 52.7,
			step12: 74.4,
		},
		"pink-9": {
			black: 36.9,
			white: 72.7,
		},
		"pink-10": {
			black: 34.1,
			white: 75.5,
		},
		"pink-11": {
			step1: 73.4,
			step2: 71.1,
			step3: 65,
			step4: 59.1,
			step5: 52.7,
		},
		"pink-12": {
			step1: 95.2,
			step2: 92.8,
			step3: 86.7,
			step4: 80.8,
			step5: 74.4,
		},
		"plum-1": {
			step11: 78,
			step12: 96.4,
		},
		"plum-2": {
			step11: 75.6,
			step12: 94.1,
		},
		"plum-3": {
			step11: 70.3,
			step12: 88.8,
		},
		"plum-4": {
			step11: 64.4,
			step12: 82.9,
		},
		"plum-5": {
			step11: 58.4,
			step12: 76.9,
		},
		"plum-9": {
			black: 31.7,
			white: 77.8,
		},
		"plum-10": {
			black: 28.4,
			white: 81.1,
		},
		"plum-11": {
			step1: 78,
			step2: 75.6,
			step3: 70.3,
			step4: 64.4,
			step5: 58.4,
		},
		"plum-12": {
			step1: 96.4,
			step2: 94.1,
			step3: 88.8,
			step4: 82.9,
			step5: 76.9,
		},
		"purple-1": {
			step11: 78.4,
			step12: 97.7,
		},
		"purple-2": {
			step11: 75.9,
			step12: 95.2,
		},
		"purple-3": {
			step11: 71.2,
			step12: 90.5,
		},
		"purple-4": {
			step11: 66,
			step12: 85.2,
		},
		"purple-5": {
			step11: 59.7,
			step12: 78.9,
		},
		"purple-9": {
			black: 28.9,
			white: 80.6,
		},
		"purple-10": {
			black: 25.1,
			white: 84.2,
		},
		"purple-11": {
			step1: 78.4,
			step2: 75.9,
			step3: 71.2,
			step4: 66,
			step5: 59.7,
		},
		"purple-12": {
			step1: 97.7,
			step2: 95.2,
			step3: 90.5,
			step4: 85.2,
			step5: 78.9,
		},
		"violet-1": {
			step11: 78.9,
			step12: 98.1,
		},
		"violet-2": {
			step11: 76.9,
			step12: 96,
		},
		"violet-3": {
			step11: 72.7,
			step12: 91.9,
		},
		"violet-4": {
			step11: 66.7,
			step12: 85.8,
		},
		"violet-5": {
			step11: 61,
			step12: 80.1,
		},
		"violet-9": {
			black: 27.6,
			white: 81.8,
		},
		"violet-10": {
			black: 23.8,
			white: 85.5,
		},
		"violet-11": {
			step1: 78.9,
			step2: 76.9,
			step3: 72.7,
			step4: 66.7,
			step5: 61,
		},
		"violet-12": {
			step1: 98.1,
			step2: 96,
			step3: 91.9,
			step4: 85.8,
			step5: 80.1,
		},
		"iris-1": {
			step11: 78.8,
			step12: 98.3,
		},
		"iris-2": {
			step11: 76.1,
			step12: 95.6,
		},
		"iris-3": {
			step11: 72.1,
			step12: 91.6,
		},
		"iris-4": {
			step11: 66.7,
			step12: 86.2,
		},
		"iris-5": {
			step11: 60.8,
			step12: 80.3,
		},
		"iris-9": {
			black: 27.7,
			white: 81.7,
		},
		"iris-10": {
			black: 23.8,
			white: 85.5,
		},
		"iris-11": {
			step1: 78.8,
			step2: 76.1,
			step3: 72.1,
			step4: 66.7,
			step5: 60.8,
		},
		"iris-12": {
			step1: 98.3,
			step2: 95.6,
			step3: 91.6,
			step4: 86.2,
			step5: 80.3,
		},
		"indigo-1": {
			step11: 78.4,
			step12: 98.2,
		},
		"indigo-2": {
			step11: 76,
			step12: 95.8,
		},
		"indigo-3": {
			step11: 71.7,
			step12: 91.5,
		},
		"indigo-4": {
			step11: 66.5,
			step12: 86.4,
		},
		"indigo-5": {
			step11: 60.3,
			step12: 80.1,
		},
		"indigo-9": {
			black: 28.7,
			white: 80.7,
		},
		"indigo-10": {
			black: 24.6,
			white: 84.7,
		},
		"indigo-11": {
			step1: 78.4,
			step2: 76,
			step3: 71.7,
			step4: 66.5,
			step5: 60.3,
		},
		"indigo-12": {
			step1: 98.2,
			step2: 95.8,
			step3: 91.5,
			step4: 86.4,
			step5: 80.1,
		},
		"blue-1": {
			step11: 71.1,
			step12: 96.9,
		},
		"blue-2": {
			step11: 68.9,
			step12: 94.7,
		},
		"blue-3": {
			step11: 64.6,
			step12: 90.4,
		},
		"blue-4": {
			step11: 60.6,
			step12: 86.4,
		},
		"blue-5": {
			step11: 54.4,
			step12: 80.2,
		},
		"blue-9": {
			black: 44.9,
			white: 64.6,
		},
		"blue-10": {
			black: 40.9,
			white: 68.6,
		},
		"blue-11": {
			step1: 71.1,
			step2: 68.9,
			step3: 64.6,
			step4: 60.6,
			step5: 54.4,
		},
		"blue-12": {
			step1: 96.9,
			step2: 94.7,
			step3: 90.4,
			step4: 86.4,
			step5: 80.2,
		},
		"cyan-1": {
			step11: 71.1,
			step12: 95.6,
		},
		"cyan-2": {
			step11: 68.6,
			step12: 93.2,
		},
		"cyan-3": {
			step11: 64.9,
			step12: 89.5,
		},
		"cyan-4": {
			step11: 60.1,
			step12: 84.6,
		},
		"cyan-5": {
			step11: 54.3,
			step12: 78.8,
		},
		"cyan-9": {
			black: 48,
			white: 61.4,
		},
		"cyan-10": {
			black: 42.9,
			white: 66.6,
		},
		"cyan-11": {
			step1: 71.1,
			step2: 68.6,
			step3: 64.9,
			step4: 60.1,
			step5: 54.3,
		},
		"cyan-12": {
			step1: 95.6,
			step2: 93.2,
			step3: 89.5,
			step4: 84.6,
			step5: 78.8,
		},
		"teal-1": {
			step11: 70,
			step12: 96.2,
		},
		"teal-2": {
			step11: 67.6,
			step12: 93.8,
		},
		"teal-3": {
			step11: 63.8,
			step12: 90.1,
		},
		"teal-4": {
			step11: 59.1,
			step12: 85.4,
		},
		"teal-5": {
			step11: 52.8,
			step12: 79,
		},
		"teal-9": {
			black: 47,
			white: 62.5,
		},
		"teal-10": {
			black: 42.5,
			white: 67,
		},
		"teal-11": {
			step1: 70,
			step2: 67.6,
			step3: 63.8,
			step4: 59.1,
			step5: 52.8,
		},
		"teal-12": {
			step1: 96.2,
			step2: 93.8,
			step3: 90.1,
			step4: 85.4,
			step5: 79,
		},
		"jade-1": {
			step11: 71,
			step12: 96.7,
		},
		"jade-2": {
			step11: 68.5,
			step12: 94.3,
		},
		"jade-3": {
			step11: 64.7,
			step12: 90.5,
		},
		"jade-4": {
			step11: 59.9,
			step12: 85.7,
		},
		"jade-5": {
			step11: 54,
			step12: 79.7,
		},
		"jade-9": {
			black: 45.8,
			white: 63.6,
		},
		"jade-10": {
			black: 41.4,
			white: 68.1,
		},
		"jade-11": {
			step1: 71,
			step2: 68.5,
			step3: 64.7,
			step4: 59.9,
			step5: 54,
		},
		"jade-12": {
			step1: 96.7,
			step2: 94.3,
			step3: 90.5,
			step4: 85.7,
			step5: 79.7,
		},
		"green-1": {
			step11: 71.3,
			step12: 96.9,
		},
		"green-2": {
			step11: 68.9,
			step12: 94.5,
		},
		"green-3": {
			step11: 64.6,
			step12: 90.2,
		},
		"green-4": {
			step11: 60.1,
			step12: 85.7,
		},
		"green-5": {
			step11: 53.8,
			step12: 79.4,
		},
		"green-9": {
			black: 45.8,
			white: 63.7,
		},
		"green-10": {
			black: 41.4,
			white: 68.2,
		},
		"green-11": {
			step1: 71.3,
			step2: 68.9,
			step3: 64.6,
			step4: 60.1,
			step5: 53.8,
		},
		"green-12": {
			step1: 96.9,
			step2: 94.5,
			step3: 90.2,
			step4: 85.7,
			step5: 79.4,
		},
		"grass-1": {
			step11: 73.5,
			step12: 96.5,
		},
		"grass-2": {
			step11: 71.2,
			step12: 94.2,
		},
		"grass-3": {
			step11: 67.1,
			step12: 90.1,
		},
		"grass-4": {
			step11: 62.7,
			step12: 85.6,
		},
		"grass-5": {
			step11: 56.3,
			step12: 79.3,
		},
		"grass-9": {
			black: 47.3,
			white: 62.1,
		},
		"grass-10": {
			black: 41.9,
			white: 67.7,
		},
		"grass-11": {
			step1: 73.5,
			step2: 71.2,
			step3: 67.1,
			step4: 62.7,
			step5: 56.3,
		},
		"grass-12": {
			step1: 96.5,
			step2: 94.2,
			step3: 90.1,
			step4: 85.6,
			step5: 79.3,
		},
		"brown-1": {
			step11: 77.8,
			step12: 96.8,
		},
		"brown-2": {
			step11: 75.6,
			step12: 94.6,
		},
		"brown-3": {
			step11: 69.6,
			step12: 88.5,
		},
		"brown-4": {
			step11: 64.1,
			step12: 83.1,
		},
		"brown-5": {
			step11: 58.8,
			step12: 77.8,
		},
		"brown-9": {
			black: 41.3,
			white: 68.2,
		},
		"brown-10": {
			black: 36.3,
			white: 73.3,
		},
		"brown-11": {
			step1: 77.8,
			step2: 75.6,
			step3: 69.6,
			step4: 64.1,
			step5: 58.8,
		},
		"brown-12": {
			step1: 96.8,
			step2: 94.6,
			step3: 88.5,
			step4: 83.1,
			step5: 77.8,
		},
		"bronze-1": {
			step11: 77.5,
			step12: 96.5,
		},
		"bronze-2": {
			step11: 75,
			step12: 94.1,
		},
		"bronze-3": {
			step11: 69.5,
			step12: 88.5,
		},
		"bronze-4": {
			step11: 64.4,
			step12: 83.4,
		},
		"bronze-5": {
			step11: 58.4,
			step12: 77.4,
		},
		"bronze-9": {
			black: 40.6,
			white: 69,
		},
		"bronze-10": {
			black: 35,
			white: 74.6,
		},
		"bronze-11": {
			step1: 77.5,
			step2: 75,
			step3: 69.5,
			step4: 64.4,
			step5: 58.4,
		},
		"bronze-12": {
			step1: 96.5,
			step2: 94.1,
			step3: 88.5,
			step4: 83.4,
			step5: 77.4,
		},
		"gold-1": {
			step11: 78.3,
			step12: 96.5,
		},
		"gold-2": {
			step11: 75.8,
			step12: 94,
		},
		"gold-3": {
			step11: 70.5,
			step12: 88.7,
		},
		"gold-4": {
			step11: 64.9,
			step12: 83,
		},
		"gold-5": {
			step11: 59.2,
			step12: 77.3,
		},
		"gold-9": {
			black: 40,
			white: 69.6,
		},
		"gold-10": {
			black: 35.5,
			white: 74.1,
		},
		"gold-11": {
			step1: 78.3,
			step2: 75.8,
			step3: 70.5,
			step4: 64.9,
			step5: 59.2,
		},
		"gold-12": {
			step1: 96.5,
			step2: 94,
			step3: 88.7,
			step4: 83,
			step5: 77.3,
		},
		"sky-1": {
			step11: 74.3,
			step12: 94.5,
		},
		"sky-2": {
			step11: 71.5,
			step12: 91.7,
		},
		"sky-3": {
			step11: 68,
			step12: 88.1,
		},
		"sky-4": {
			step11: 63.5,
			step12: 83.7,
		},
		"sky-5": {
			step11: 57.5,
			step12: 77.6,
		},
		"sky-9": {
			black: 81.2,
			white: 25.6,
		},
		"sky-10": {
			black: 76.9,
			white: 30.4,
		},
		"sky-11": {
			step1: 74.3,
			step2: 71.5,
			step3: 68,
			step4: 63.5,
			step5: 57.5,
		},
		"sky-12": {
			step1: 94.5,
			step2: 91.7,
			step3: 88.1,
			step4: 83.7,
			step5: 77.6,
		},
		"mint-1": {
			step11: 75.2,
			step12: 94.1,
		},
		"mint-2": {
			step11: 72.9,
			step12: 91.7,
		},
		"mint-3": {
			step11: 69.3,
			step12: 88.1,
		},
		"mint-4": {
			step11: 64.5,
			step12: 83.4,
		},
		"mint-5": {
			step11: 58.6,
			step12: 77.4,
		},
		"mint-9": {
			black: 83.4,
			white: 23.1,
		},
		"mint-10": {
			black: 78,
			white: 29.1,
		},
		"mint-11": {
			step1: 75.2,
			step2: 72.9,
			step3: 69.3,
			step4: 64.5,
			step5: 58.6,
		},
		"mint-12": {
			step1: 94.1,
			step2: 91.7,
			step3: 88.1,
			step4: 83.4,
			step5: 77.4,
		},
		"lime-1": {
			step11: 71.7,
			step12: 93.9,
		},
		"lime-2": {
			step11: 69.6,
			step12: 91.8,
		},
		"lime-3": {
			step11: 65.5,
			step12: 87.8,
		},
		"lime-4": {
			step11: 60.7,
			step12: 82.9,
		},
		"lime-5": {
			step11: 54.4,
			step12: 76.6,
		},
		"lime-9": {
			black: 86.7,
			white: 19.5,
		},
		"lime-10": {
			black: 81.6,
			white: 25.2,
		},
		"lime-11": {
			step1: 71.7,
			step2: 69.6,
			step3: 65.5,
			step4: 60.7,
			step5: 54.4,
		},
		"lime-12": {
			step1: 93.9,
			step2: 91.8,
			step3: 87.8,
			step4: 82.9,
			step5: 76.6,
		},
		"yellow-1": {
			step11: 70,
			step12: 94,
		},
		"yellow-2": {
			step11: 69.1,
			step12: 93,
		},
		"yellow-3": {
			step11: 66.7,
			step12: 90.7,
		},
		"yellow-4": {
			step11: 62.8,
			step12: 86.8,
		},
		"yellow-5": {
			step11: 57.1,
			step12: 81,
		},
		"yellow-9": {
			black: 90.7,
			white: 15,
		},
		"yellow-10": {
			black: 86.5,
			white: 19.7,
		},
		"yellow-11": {
			step1: 70,
			step2: 69.1,
			step3: 66.7,
			step4: 62.8,
			step5: 57.1,
		},
		"yellow-12": {
			step1: 94,
			step2: 93,
			step3: 90.7,
			step4: 86.8,
			step5: 81,
		},
		"amber-1": {
			step11: 70.4,
			step12: 95,
		},
		"amber-2": {
			step11: 68.8,
			step12: 93.4,
		},
		"amber-3": {
			step11: 65.9,
			step12: 90.4,
		},
		"amber-4": {
			step11: 61.1,
			step12: 85.6,
		},
		"amber-5": {
			step11: 56,
			step12: 80.5,
		},
		"amber-9": {
			black: 77.7,
			white: 29.5,
		},
		"amber-10": {
			black: 73.5,
			white: 34.2,
		},
		"amber-11": {
			step1: 70.4,
			step2: 68.8,
			step3: 65.9,
			step4: 61.1,
			step5: 56,
		},
		"amber-12": {
			step1: 95,
			step2: 93.4,
			step3: 90.4,
			step4: 85.6,
			step5: 80.5,
		},
		"orange-1": {
			step11: 68.7,
			step12: 94.8,
		},
		"orange-2": {
			step11: 66.2,
			step12: 92.3,
		},
		"orange-3": {
			step11: 61.9,
			step12: 88,
		},
		"orange-4": {
			step11: 54.3,
			step12: 80.4,
		},
		"orange-5": {
			step11: 48,
			step12: 74.1,
		},
		"orange-9": {
			black: 48.6,
			white: 60.8,
		},
		"orange-10": {
			black: 44.4,
			white: 65.1,
		},
		"orange-11": {
			step1: 68.7,
			step2: 66.2,
			step3: 61.9,
			step4: 54.3,
			step5: 48,
		},
		"orange-12": {
			step1: 94.8,
			step2: 92.3,
			step3: 88,
			step4: 80.4,
			step5: 74.1,
		},
	},
	dark: {
		"gray-1": {
			step11: 61.3,
			step12: 96.3,
		},
		"gray-2": {
			step11: 60.6,
			step12: 95.5,
		},
		"gray-3": {
			step11: 59.4,
			step12: 94.3,
		},
		"gray-4": {
			step11: 57.9,
			step12: 92.9,
		},
		"gray-5": {
			step11: 56.4,
			step12: 91.4,
		},
		"gray-9": {
			black: 28.9,
			white: 80.6,
		},
		"gray-10": {
			black: 34.8,
			white: 74.7,
		},
		"gray-11": {
			step1: 61.3,
			step2: 60.6,
			step3: 59.4,
			step4: 57.9,
			step5: 56.4,
		},
		"gray-12": {
			step1: 96.3,
			step2: 95.5,
			step3: 94.3,
			step4: 92.9,
			step5: 91.4,
		},
		"mauve-1": {
			step11: 60.9,
			step12: 96.3,
		},
		"mauve-2": {
			step11: 60.2,
			step12: 95.6,
		},
		"mauve-3": {
			step11: 58.9,
			step12: 94.4,
		},
		"mauve-4": {
			step11: 57.6,
			step12: 93.1,
		},
		"mauve-5": {
			step11: 56.1,
			step12: 91.5,
		},
		"mauve-9": {
			black: 29,
			white: 80.5,
		},
		"mauve-10": {
			black: 35,
			white: 74.6,
		},
		"mauve-11": {
			step1: 60.9,
			step2: 60.2,
			step3: 58.9,
			step4: 57.6,
			step5: 56.1,
		},
		"mauve-12": {
			step1: 96.3,
			step2: 95.6,
			step3: 94.4,
			step4: 93.1,
			step5: 91.5,
		},
		"slate-1": {
			step11: 61,
			step12: 96.2,
		},
		"slate-2": {
			step11: 60.3,
			step12: 95.5,
		},
		"slate-3": {
			step11: 59.1,
			step12: 94.3,
		},
		"slate-4": {
			step11: 57.8,
			step12: 93,
		},
		"slate-5": {
			step11: 56.3,
			step12: 91.4,
		},
		"slate-9": {
			black: 28.7,
			white: 80.7,
		},
		"slate-10": {
			black: 34.8,
			white: 74.8,
		},
		"slate-11": {
			step1: 61,
			step2: 60.3,
			step3: 59.1,
			step4: 57.8,
			step5: 56.3,
		},
		"slate-12": {
			step1: 96.2,
			step2: 95.5,
			step3: 94.3,
			step4: 93,
			step5: 91.4,
		},
		"sage-1": {
			step11: 60.7,
			step12: 95.9,
		},
		"sage-2": {
			step11: 60.1,
			step12: 95.3,
		},
		"sage-3": {
			step11: 58.9,
			step12: 94.1,
		},
		"sage-4": {
			step11: 57.6,
			step12: 92.7,
		},
		"sage-5": {
			step11: 56.1,
			step12: 91.2,
		},
		"sage-9": {
			black: 28.4,
			white: 81,
		},
		"sage-10": {
			black: 34.5,
			white: 75.1,
		},
		"sage-11": {
			step1: 60.7,
			step2: 60.1,
			step3: 58.9,
			step4: 57.6,
			step5: 56.1,
		},
		"sage-12": {
			step1: 95.9,
			step2: 95.3,
			step3: 94.1,
			step4: 92.7,
			step5: 91.2,
		},
		"olive-1": {
			step11: 60.8,
			step12: 95.8,
		},
		"olive-2": {
			step11: 60.1,
			step12: 95.2,
		},
		"olive-3": {
			step11: 58.9,
			step12: 94,
		},
		"olive-4": {
			step11: 57.6,
			step12: 92.7,
		},
		"olive-5": {
			step11: 56.1,
			step12: 91.2,
		},
		"olive-9": {
			black: 28.7,
			white: 80.7,
		},
		"olive-10": {
			black: 34.8,
			white: 74.8,
		},
		"olive-11": {
			step1: 60.8,
			step2: 60.1,
			step3: 58.9,
			step4: 57.6,
			step5: 56.1,
		},
		"olive-12": {
			step1: 95.8,
			step2: 95.2,
			step3: 94,
			step4: 92.7,
			step5: 91.2,
		},
		"sand-1": {
			step11: 60.7,
			step12: 96.2,
		},
		"sand-2": {
			step11: 60,
			step12: 95.5,
		},
		"sand-3": {
			step11: 58.8,
			step12: 94.3,
		},
		"sand-4": {
			step11: 57.4,
			step12: 92.9,
		},
		"sand-5": {
			step11: 55.9,
			step12: 91.4,
		},
		"sand-9": {
			black: 28.4,
			white: 81,
		},
		"sand-10": {
			black: 34.7,
			white: 74.9,
		},
		"sand-11": {
			step1: 60.7,
			step2: 60,
			step3: 58.8,
			step4: 57.4,
			step5: 55.9,
		},
		"sand-12": {
			step1: 96.2,
			step2: 95.5,
			step3: 94.3,
			step4: 92.9,
			step5: 91.4,
		},
		"tomato-1": {
			step11: 60.7,
			step12: 84.7,
		},
		"tomato-2": {
			step11: 60.3,
			step12: 84.2,
		},
		"tomato-3": {
			step11: 58.8,
			step12: 82.8,
		},
		"tomato-4": {
			step11: 57.2,
			step12: 81.2,
		},
		"tomato-5": {
			step11: 54.9,
			step12: 78.9,
		},
		"tomato-9": {
			black: 39.1,
			white: 70.5,
		},
		"tomato-10": {
			black: 44.5,
			white: 65,
		},
		"tomato-11": {
			step1: 60.7,
			step2: 60.3,
			step3: 58.8,
			step4: 57.2,
			step5: 54.9,
		},
		"tomato-12": {
			step1: 84.7,
			step2: 84.2,
			step3: 82.8,
			step4: 81.2,
			step5: 78.9,
		},
		"red-1": {
			step11: 60.6,
			step12: 85,
		},
		"red-2": {
			step11: 60.3,
			step12: 84.7,
		},
		"red-3": {
			step11: 58.9,
			step12: 83.3,
		},
		"red-4": {
			step11: 57.2,
			step12: 81.6,
		},
		"red-5": {
			step11: 54.8,
			step12: 79.2,
		},
		"red-9": {
			black: 38.7,
			white: 70.9,
		},
		"red-10": {
			black: 44.1,
			white: 65.4,
		},
		"red-11": {
			step1: 60.6,
			step2: 60.3,
			step3: 58.9,
			step4: 57.2,
			step5: 54.8,
		},
		"red-12": {
			step1: 85,
			step2: 84.7,
			step3: 83.3,
			step4: 81.6,
			step5: 79.2,
		},
		"ruby-1": {
			step11: 60.7,
			step12: 85.6,
		},
		"ruby-2": {
			step11: 60.3,
			step12: 85.2,
		},
		"ruby-3": {
			step11: 58.9,
			step12: 83.8,
		},
		"ruby-4": {
			step11: 57.2,
			step12: 82.1,
		},
		"ruby-5": {
			step11: 54.8,
			step12: 79.8,
		},
		"ruby-9": {
			black: 38.9,
			white: 70.7,
		},
		"ruby-10": {
			black: 44,
			white: 65.5,
		},
		"ruby-11": {
			step1: 60.7,
			step2: 60.3,
			step3: 58.9,
			step4: 57.2,
			step5: 54.8,
		},
		"ruby-12": {
			step1: 85.6,
			step2: 85.2,
			step3: 83.8,
			step4: 82.1,
			step5: 79.8,
		},
		"crimson-1": {
			step11: 60.6,
			step12: 86.2,
		},
		"crimson-2": {
			step11: 60.3,
			step12: 85.9,
		},
		"crimson-3": {
			step11: 58.8,
			step12: 84.4,
		},
		"crimson-4": {
			step11: 57.1,
			step12: 82.7,
		},
		"crimson-5": {
			step11: 54.9,
			step12: 80.5,
		},
		"crimson-9": {
			black: 39.4,
			white: 70.1,
		},
		"crimson-10": {
			black: 43.6,
			white: 65.9,
		},
		"crimson-11": {
			step1: 60.6,
			step2: 60.3,
			step3: 58.8,
			step4: 57.1,
			step5: 54.9,
		},
		"crimson-12": {
			step1: 86.2,
			step2: 85.9,
			step3: 84.4,
			step4: 82.7,
			step5: 80.5,
		},
		"pink-1": {
			step11: 60.5,
			step12: 85.5,
		},
		"pink-2": {
			step11: 60.1,
			step12: 85.1,
		},
		"pink-3": {
			step11: 58.5,
			step12: 83.5,
		},
		"pink-4": {
			step11: 56.8,
			step12: 81.8,
		},
		"pink-5": {
			step11: 54.5,
			step12: 79.5,
		},
		"pink-9": {
			black: 36.9,
			white: 72.7,
		},
		"pink-10": {
			black: 41.4,
			white: 68.1,
		},
		"pink-11": {
			step1: 60.5,
			step2: 60.1,
			step3: 58.5,
			step4: 56.8,
			step5: 54.5,
		},
		"pink-12": {
			step1: 85.5,
			step2: 85.1,
			step3: 83.5,
			step4: 81.8,
			step5: 79.5,
		},
		"plum-1": {
			step11: 61,
			step12: 85.8,
		},
		"plum-2": {
			step11: 60.6,
			step12: 85.4,
		},
		"plum-3": {
			step11: 58.8,
			step12: 83.6,
		},
		"plum-4": {
			step11: 57,
			step12: 81.8,
		},
		"plum-5": {
			step11: 54.7,
			step12: 79.5,
		},
		"plum-9": {
			black: 31.7,
			white: 77.8,
		},
		"plum-10": {
			black: 36.8,
			white: 72.7,
		},
		"plum-11": {
			step1: 61,
			step2: 60.6,
			step3: 58.8,
			step4: 57,
			step5: 54.7,
		},
		"plum-12": {
			step1: 85.8,
			step2: 85.4,
			step3: 83.6,
			step4: 81.8,
			step5: 79.5,
		},
		"purple-1": {
			step11: 60.5,
			step12: 87,
		},
		"purple-2": {
			step11: 60,
			step12: 86.6,
		},
		"purple-3": {
			step11: 58.3,
			step12: 84.9,
		},
		"purple-4": {
			step11: 56.4,
			step12: 83,
		},
		"purple-5": {
			step11: 54.1,
			step12: 80.7,
		},
		"purple-9": {
			black: 28.9,
			white: 80.6,
		},
		"purple-10": {
			black: 34.2,
			white: 75.3,
		},
		"purple-11": {
			step1: 60.5,
			step2: 60,
			step3: 58.3,
			step4: 56.4,
			step5: 54.1,
		},
		"purple-12": {
			step1: 87,
			step2: 86.6,
			step3: 84.9,
			step4: 83,
			step5: 80.7,
		},
		"violet-1": {
			step11: 60.8,
			step12: 87.6,
		},
		"violet-2": {
			step11: 60.4,
			step12: 87.2,
		},
		"violet-3": {
			step11: 58.5,
			step12: 85.3,
		},
		"violet-4": {
			step11: 56.6,
			step12: 83.4,
		},
		"violet-5": {
			step11: 54.1,
			step12: 80.9,
		},
		"violet-9": {
			black: 27.6,
			white: 81.8,
		},
		"violet-10": {
			black: 33.8,
			white: 75.7,
		},
		"violet-11": {
			step1: 60.8,
			step2: 60.4,
			step3: 58.5,
			step4: 56.6,
			step5: 54.1,
		},
		"violet-12": {
			step1: 87.6,
			step2: 87.2,
			step3: 85.3,
			step4: 83.4,
			step5: 80.9,
		},
		"iris-1": {
			step11: 60.4,
			step12: 88.2,
		},
		"iris-2": {
			step11: 60.1,
			step12: 87.8,
		},
		"iris-3": {
			step11: 58,
			step12: 85.8,
		},
		"iris-4": {
			step11: 55.7,
			step12: 83.5,
		},
		"iris-5": {
			step11: 53,
			step12: 80.7,
		},
		"iris-9": {
			black: 27.7,
			white: 81.7,
		},
		"iris-10": {
			black: 33.9,
			white: 75.7,
		},
		"iris-11": {
			step1: 60.4,
			step2: 60.1,
			step3: 58,
			step4: 55.7,
			step5: 53,
		},
		"iris-12": {
			step1: 88.2,
			step2: 87.8,
			step3: 85.8,
			step4: 83.5,
			step5: 80.7,
		},
		"indigo-1": {
			step11: 61.4,
			step12: 87.9,
		},
		"indigo-2": {
			step11: 61,
			step12: 87.5,
		},
		"indigo-3": {
			step11: 58.9,
			step12: 85.4,
		},
		"indigo-4": {
			step11: 56.5,
			step12: 82.9,
		},
		"indigo-5": {
			step11: 53.3,
			step12: 79.7,
		},
		"indigo-9": {
			black: 28.7,
			white: 80.7,
		},
		"indigo-10": {
			black: 34.8,
			white: 74.8,
		},
		"indigo-11": {
			step1: 61.4,
			step2: 61,
			step3: 58.9,
			step4: 56.5,
			step5: 53.3,
		},
		"indigo-12": {
			step1: 87.9,
			step2: 87.5,
			step3: 85.4,
			step4: 82.9,
			step5: 79.7,
		},
		"blue-1": {
			step11: 60.5,
			step12: 87.7,
		},
		"blue-2": {
			step11: 60.1,
			step12: 87.3,
		},
		"blue-3": {
			step11: 57.8,
			step12: 85,
		},
		"blue-4": {
			step11: 55.1,
			step12: 82.3,
		},
		"blue-5": {
			step11: 51.4,
			step12: 78.6,
		},
		"blue-9": {
			black: 44.9,
			white: 64.6,
		},
		"blue-10": {
			black: 50.7,
			white: 58.6,
		},
		"blue-11": {
			step1: 60.5,
			step2: 60.1,
			step3: 57.8,
			step4: 55.1,
			step5: 51.4,
		},
		"blue-12": {
			step1: 87.7,
			step2: 87.3,
			step3: 85,
			step4: 82.3,
			step5: 78.6,
		},
		"cyan-1": {
			step11: 66,
			step12: 88.9,
		},
		"cyan-2": {
			step11: 65.5,
			step12: 88.4,
		},
		"cyan-3": {
			step11: 63.2,
			step12: 86.1,
		},
		"cyan-4": {
			step11: 60.6,
			step12: 83.5,
		},
		"cyan-5": {
			step11: 56.9,
			step12: 79.8,
		},
		"cyan-9": {
			black: 48,
			white: 61.4,
		},
		"cyan-10": {
			black: 53.9,
			white: 55.2,
		},
		"cyan-11": {
			step1: 66,
			step2: 65.5,
			step3: 63.2,
			step4: 60.6,
			step5: 56.9,
		},
		"cyan-12": {
			step1: 88.9,
			step2: 88.4,
			step3: 86.1,
			step4: 83.5,
			step5: 79.8,
		},
		"teal-1": {
			step11: 68.5,
			step12: 88.8,
		},
		"teal-2": {
			step11: 67.8,
			step12: 88.2,
		},
		"teal-3": {
			step11: 65.6,
			step12: 85.9,
		},
		"teal-4": {
			step11: 62.8,
			step12: 83.1,
		},
		"teal-5": {
			step11: 59.2,
			step12: 79.5,
		},
		"teal-9": {
			black: 47,
			white: 62.5,
		},
		"teal-10": {
			black: 53.2,
			white: 56,
		},
		"teal-11": {
			step1: 68.5,
			step2: 67.8,
			step3: 65.6,
			step4: 62.8,
			step5: 59.2,
		},
		"teal-12": {
			step1: 88.8,
			step2: 88.2,
			step3: 85.9,
			step4: 83.1,
			step5: 79.5,
		},
		"jade-1": {
			step11: 68,
			step12: 88.4,
		},
		"jade-2": {
			step11: 67.3,
			step12: 87.8,
		},
		"jade-3": {
			step11: 65,
			step12: 85.5,
		},
		"jade-4": {
			step11: 62.4,
			step12: 82.9,
		},
		"jade-5": {
			step11: 58.8,
			step12: 79.3,
		},
		"jade-9": {
			black: 45.8,
			white: 63.6,
		},
		"jade-10": {
			black: 51.5,
			white: 57.7,
		},
		"jade-11": {
			step1: 68,
			step2: 67.3,
			step3: 65,
			step4: 62.4,
			step5: 58.8,
		},
		"jade-12": {
			step1: 88.4,
			step2: 87.8,
			step3: 85.5,
			step4: 82.9,
			step5: 79.3,
		},
		"green-1": {
			step11: 66.8,
			step12: 88.9,
		},
		"green-2": {
			step11: 66.2,
			step12: 88.4,
		},
		"green-3": {
			step11: 63.9,
			step12: 86.1,
		},
		"green-4": {
			step11: 61.2,
			step12: 83.4,
		},
		"green-5": {
			step11: 57.3,
			step12: 79.5,
		},
		"green-9": {
			black: 45.8,
			white: 63.7,
		},
		"green-10": {
			black: 51.1,
			white: 58.2,
		},
		"green-11": {
			step1: 66.8,
			step2: 66.2,
			step3: 63.9,
			step4: 61.2,
			step5: 57.3,
		},
		"green-12": {
			step1: 88.9,
			step2: 88.4,
			step3: 86.1,
			step4: 83.4,
			step5: 79.5,
		},
		"grass-1": {
			step11: 65.8,
			step12: 89.8,
		},
		"grass-2": {
			step11: 65.3,
			step12: 89.3,
		},
		"grass-3": {
			step11: 63.3,
			step12: 87.3,
		},
		"grass-4": {
			step11: 60.3,
			step12: 84.3,
		},
		"grass-5": {
			step11: 56.4,
			step12: 80.4,
		},
		"grass-9": {
			black: 47.3,
			white: 62.1,
		},
		"grass-10": {
			black: 53.1,
			white: 56.1,
		},
		"grass-11": {
			step1: 65.8,
			step2: 65.3,
			step3: 63.3,
			step4: 60.3,
			step5: 56.4,
		},
		"grass-12": {
			step1: 89.8,
			step2: 89.3,
			step3: 87.3,
			step4: 84.3,
			step5: 80.4,
		},
		"brown-1": {
			step11: 65.8,
			step12: 89.4,
		},
		"brown-2": {
			step11: 65.1,
			step12: 88.7,
		},
		"brown-3": {
			step11: 63.8,
			step12: 87.4,
		},
		"brown-4": {
			step11: 62.3,
			step12: 85.9,
		},
		"brown-5": {
			step11: 60.3,
			step12: 83.9,
		},
		"brown-9": {
			black: 41.3,
			white: 68.2,
		},
		"brown-10": {
			black: 47.4,
			white: 62,
		},
		"brown-11": {
			step1: 65.8,
			step2: 65.1,
			step3: 63.8,
			step4: 62.3,
			step5: 60.3,
		},
		"brown-12": {
			step1: 89.4,
			step2: 88.7,
			step3: 87.4,
			step4: 85.9,
			step5: 83.9,
		},
		"bronze-1": {
			step11: 64.5,
			step12: 88.8,
		},
		"bronze-2": {
			step11: 63.8,
			step12: 88.1,
		},
		"bronze-3": {
			step11: 62.5,
			step12: 86.8,
		},
		"bronze-4": {
			step11: 61,
			step12: 85.3,
		},
		"bronze-5": {
			step11: 58.7,
			step12: 83.1,
		},
		"bronze-9": {
			black: 40.6,
			white: 69,
		},
		"bronze-10": {
			black: 46.6,
			white: 62.9,
		},
		"bronze-11": {
			step1: 64.5,
			step2: 63.8,
			step3: 62.5,
			step4: 61,
			step5: 58.7,
		},
		"bronze-12": {
			step1: 88.8,
			step2: 88.1,
			step3: 86.8,
			step4: 85.3,
			step5: 83.1,
		},
		"gold-1": {
			step11: 65.4,
			step12: 89,
		},
		"gold-2": {
			step11: 64.6,
			step12: 88.2,
		},
		"gold-3": {
			step11: 63.4,
			step12: 87,
		},
		"gold-4": {
			step11: 61.9,
			step12: 85.5,
		},
		"gold-5": {
			step11: 59.5,
			step12: 83.1,
		},
		"gold-9": {
			black: 40,
			white: 69.6,
		},
		"gold-10": {
			black: 46.2,
			white: 63.2,
		},
		"gold-11": {
			step1: 65.4,
			step2: 64.6,
			step3: 63.4,
			step4: 61.9,
			step5: 59.5,
		},
		"gold-12": {
			step1: 89,
			step2: 88.2,
			step3: 87,
			step4: 85.5,
			step5: 83.1,
		},
		"sky-1": {
			step11: 66.4,
			step12: 93.9,
		},
		"sky-2": {
			step11: 65.8,
			step12: 93.3,
		},
		"sky-3": {
			step11: 63.8,
			step12: 91.3,
		},
		"sky-4": {
			step11: 61,
			step12: 88.5,
		},
		"sky-5": {
			step11: 56.7,
			step12: 84.3,
		},
		"sky-9": {
			black: 81.2,
			white: 25.6,
		},
		"sky-10": {
			black: 89.5,
			white: 16.2,
		},
		"sky-11": {
			step1: 66.4,
			step2: 65.8,
			step3: 63.8,
			step4: 61,
			step5: 56.7,
		},
		"sky-12": {
			step1: 93.9,
			step2: 93.3,
			step3: 91.3,
			step4: 88.5,
			step5: 84.3,
		},
		"mint-1": {
			step11: 68.7,
			step12: 93.7,
		},
		"mint-2": {
			step11: 68.2,
			step12: 93.2,
		},
		"mint-3": {
			step11: 66,
			step12: 91,
		},
		"mint-4": {
			step11: 63.2,
			step12: 88.2,
		},
		"mint-5": {
			step11: 59.6,
			step12: 84.6,
		},
		"mint-9": {
			black: 83.4,
			white: 23.1,
		},
		"mint-10": {
			black: 91.5,
			white: 14,
		},
		"mint-11": {
			step1: 68.7,
			step2: 68.2,
			step3: 66,
			step4: 63.2,
			step5: 59.6,
		},
		"mint-12": {
			step1: 93.7,
			step2: 93.2,
			step3: 91,
			step4: 88.2,
			step5: 84.6,
		},
		"lime-1": {
			step11: 81.8,
			step12: 96.9,
		},
		"lime-2": {
			step11: 81.3,
			step12: 96.3,
		},
		"lime-3": {
			step11: 79.3,
			step12: 94.4,
		},
		"lime-4": {
			step11: 76.6,
			step12: 91.6,
		},
		"lime-5": {
			step11: 72.9,
			step12: 88,
		},
		"lime-9": {
			black: 86.7,
			white: 19.5,
		},
		"lime-10": {
			black: 96.9,
			white: 7.8,
		},
		"lime-11": {
			step1: 81.8,
			step2: 81.3,
			step3: 79.3,
			step4: 76.6,
			step5: 72.9,
		},
		"lime-12": {
			step1: 96.9,
			step2: 96.3,
			step3: 94.4,
			step4: 91.6,
			step5: 88,
		},
		"yellow-1": {
			step11: 86.8,
			step12: 95,
		},
		"yellow-2": {
			step11: 86.2,
			step12: 94.5,
		},
		"yellow-3": {
			step11: 84.5,
			step12: 92.8,
		},
		"yellow-4": {
			step11: 83,
			step12: 91.3,
		},
		"yellow-5": {
			step11: 80.4,
			step12: 88.7,
		},
		"yellow-9": {
			black: 90.7,
			white: 15,
		},
		"yellow-10": {
			black: 101.7,
			white: 0,
		},
		"yellow-11": {
			step1: 86.8,
			step2: 86.2,
			step3: 84.5,
			step4: 83,
			step5: 80.4,
		},
		"yellow-12": {
			step1: 95,
			step2: 94.5,
			step3: 92.8,
			step4: 91.3,
			step5: 88.7,
		},
		"amber-1": {
			step11: 78.2,
			step12: 93.1,
		},
		"amber-2": {
			step11: 77.6,
			step12: 92.5,
		},
		"amber-3": {
			step11: 76.1,
			step12: 91.1,
		},
		"amber-4": {
			step11: 74.4,
			step12: 89.4,
		},
		"amber-5": {
			step11: 71.8,
			step12: 86.8,
		},
		"amber-9": {
			black: 77.7,
			white: 29.5,
		},
		"amber-10": {
			black: 84.1,
			white: 22.4,
		},
		"amber-11": {
			step1: 78.2,
			step2: 77.6,
			step3: 76.1,
			step4: 74.4,
			step5: 71.8,
		},
		"amber-12": {
			step1: 93.1,
			step2: 92.5,
			step3: 91.1,
			step4: 89.4,
			step5: 86.8,
		},
		"orange-1": {
			step11: 62.9,
			step12: 90.5,
		},
		"orange-2": {
			step11: 62.5,
			step12: 90.1,
		},
		"orange-3": {
			step11: 60.9,
			step12: 88.5,
		},
		"orange-4": {
			step11: 59.3,
			step12: 86.9,
		},
		"orange-5": {
			step11: 56.9,
			step12: 84.5,
		},
		"orange-9": {
			black: 48.6,
			white: 60.8,
		},
		"orange-10": {
			black: 55.4,
			white: 53.7,
		},
		"orange-11": {
			step1: 62.9,
			step2: 62.5,
			step3: 60.9,
			step4: 59.3,
			step5: 56.9,
		},
		"orange-12": {
			step1: 90.5,
			step2: 90.1,
			step3: 88.5,
			step4: 86.9,
			step5: 84.5,
		},
	},
};

function isBrightColor(
	color: ColorScale,
): color is (typeof brightColors)[number] {
	return brightColors.includes(color as any);
}
