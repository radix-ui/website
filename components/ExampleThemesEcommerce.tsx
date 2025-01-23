import {
	Badge,
	Box,
	Button,
	Card,
	Flex,
	Grid,
	Heading,
	IconButton,
	Inset,
	Link,
	Select,
	Separator,
	Strong,
	Text,
	TextArea,
	TextField,
	Theme,
} from "@radix-ui/themes";
import {
	BookmarkFilledIcon,
	BookmarkIcon,
	CalendarIcon,
	CrumpledPaperIcon,
	FontBoldIcon,
	FontItalicIcon,
	ImageIcon,
	InstagramLogoIcon,
	MagicWandIcon,
	MagnifyingGlassIcon,
	RulerHorizontalIcon,
	StrikethroughIcon,
	TextAlignCenterIcon,
	TextAlignLeftIcon,
	TextAlignRightIcon,
	VideoIcon,
} from "@radix-ui/react-icons";
import * as React from "react";
import { Label, ToggleGroup } from "radix-ui";

type ExampleLayoutProps = React.ComponentPropsWithoutRef<typeof Flex> & {
	focusable?: boolean;
};

export const ExampleThemesEcommerce = ({
	focusable = true,
	...props
}: ExampleLayoutProps) => {
	// We’ll use a different portal container for homepage demo purposes; this is usually not needed.
	const [portalContainer, setPortalContainer] =
		React.useState<HTMLDivElement | null>(null);

	// Interactive elements may be not focusable for homepage demo purposes
	const tabIndex = focusable ? undefined : -1;

	// Simple state to make the example functional
	const [state, setState] = React.useState({
		sneakersBookmarked: false,
		jeansBookmarked: false,
		delivery: "",
		size: "9",
		material: "",
		color: "",
		productMaterial: "",
		productColor: "",
		productSizes: [] as string[],
	});

	return (
		<Flex align="center" gap="6" ref={setPortalContainer} {...props}>
			<Flex flexShrink="0" gap="6" direction="column" width="304px">
				<Card size="1">
					<Flex mb="2">
						<img
							src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80"
							width="280"
							height="212"
							style={{ borderRadius: "var(--radius-1)" }}
						/>
					</Flex>

					<Flex align="center" justify="between" gap="3">
						<Box>
							<Link
								href="#"
								underline="hover"
								color="gray"
								size="2"
								weight="bold"
								highContrast
								tabIndex={tabIndex}
								onClick={(e) => e.preventDefault()}
							>
								Back to basics
							</Link>
							<Text size="2" color="gray" as="p">
								Simple and versatile
							</Text>
						</Box>
						<Box flexShrink="0">
							<Button
								tabIndex={tabIndex}
								size="2"
								variant="soft"
								color="gray"
								highContrast
							>
								Shop now
							</Button>
						</Box>
					</Flex>
				</Card>

				<Card size="1">
					<Flex mb="2" position="relative">
						<img
							width="280"
							height="270"
							src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80"
							style={{ borderRadius: "var(--radius-1)" }}
						/>

						<Theme appearance="light" asChild>
							<Flex
								align="center"
								justify="center"
								position="absolute"
								bottom="0"
								right="0"
								width="32px"
								height="32px"
								style={{ borderRadius: "var(--radius-3)" }}
								m="2"
							>
								<IconButton
									size="2"
									tabIndex={tabIndex}
									color="gray"
									variant="ghost"
									highContrast={state.sneakersBookmarked}
									onClick={() =>
										setState((currentState) => ({
											...currentState,
											sneakersBookmarked: !currentState.sneakersBookmarked,
										}))
									}
								>
									{state.sneakersBookmarked ? (
										<BookmarkFilledIcon />
									) : (
										<BookmarkIcon />
									)}
								</IconButton>
							</Flex>
						</Theme>
					</Flex>

					<Flex align="end" justify="between" mb="2">
						<Box>
							<Flex mb="1">
								<Link
									href="#"
									underline="hover"
									size="2"
									color="gray"
									highContrast
									tabIndex={tabIndex}
									onClick={(e) => e.preventDefault()}
								>
									Footwear
								</Link>
							</Flex>

							<Heading as="h3" size="3">
								Sneakers #12
							</Heading>
						</Box>

						<Text size="6" weight="bold">
							$149
						</Text>
					</Flex>

					<Text as="p" size="2" color="gray" mb="4">
						Love at the first sight for enthusiasts seeking a fresh and
						whimsical style.
					</Text>

					<Box>
						<Separator size="4" my="4" />
					</Box>

					<Flex gap="2" align="end">
						<Flex direction="column" flexGrow="1">
							<Label.Root asChild>
								<Text size="1" color="gray" mb="1">
									Color
								</Text>
							</Label.Root>

							<Select.Root defaultValue="Pastel" size="2">
								<Select.Trigger tabIndex={tabIndex} variant="soft" />
								<Select.Content
									variant="soft"
									container={portalContainer}
									position="popper"
								>
									<Select.Item value="Pastel">Pastel</Select.Item>
									<Select.Item value="Bright">Bright</Select.Item>
								</Select.Content>
							</Select.Root>
						</Flex>

						<Flex direction="column" minWidth="80px">
							<Label.Root asChild>
								<Text size="1" color="gray" mb="1">
									Size
								</Text>
							</Label.Root>
							<Select.Root defaultValue="8" size="2">
								<Select.Trigger tabIndex={tabIndex} variant="soft" />
								<Select.Content
									variant="soft"
									container={portalContainer}
									position="popper"
								>
									{Array.from({ length: 12 }, (_, i) => (
										<Select.Item key={i} value={String(i * 0.5 + 5)}>
											{i * 0.5 + 5}
										</Select.Item>
									))}
								</Select.Content>
							</Select.Root>
						</Flex>

						<Button
							tabIndex={tabIndex}
							size="2"
							variant="solid"
							color="gray"
							highContrast
						>
							Buy
						</Button>
					</Flex>
				</Card>

				<Card size="1">
					<Flex direction="column" gap="20px">
						<Box>
							<Text as="div" size="2" weight="bold" mb="2">
								Delivery
							</Text>
							<Grid asChild gap="1" columns="2">
								<ToggleButtons
									type="single"
									tabIndex={tabIndex}
									values={["Tomorrow", "Within 3 days"]}
									value={state.delivery}
									onValueChange={(value) =>
										setState({ ...state, delivery: value })
									}
								/>
							</Grid>
						</Box>

						<Box>
							<Text as="div" size="2" weight="bold" mb="2">
								Size
							</Text>
							<Grid asChild gap="1" columns="5">
								<ToggleButtons
									type="single"
									tabIndex={tabIndex}
									values={[
										"5.5",
										"6",
										"6.5",
										"7",
										"7.5",
										"8",
										"8.5",
										"9",
										"9.5",
										"10",
									]}
									value={state.size}
									onValueChange={(value) => setState({ ...state, size: value })}
								/>
							</Grid>
						</Box>

						<Box>
							<Text as="div" size="2" weight="bold" mb="2">
								Material
							</Text>

							<Grid asChild gap="1" columns="4">
								<ToggleButtons
									type="single"
									tabIndex={tabIndex}
									values={["Leather", "Suede", "Mesh", "Canvas"]}
									value={state.material}
									onValueChange={(value) =>
										setState({ ...state, material: value })
									}
								/>
							</Grid>
						</Box>

						<Box>
							<Text as="div" size="2" weight="bold" mb="2">
								Color
							</Text>

							<Grid asChild gap="1" columns="3">
								<ToggleButtons
									type="single"
									tabIndex={tabIndex}
									values={[
										"White",
										"Gray",
										"Black",
										"Red",
										"Pink",
										"Violet",
										"Blue",
										"Green",
										"Beige",
									]}
									value={state.color}
									onValueChange={(value) =>
										setState({ ...state, color: value })
									}
								>
									{(value) => (
										<React.Fragment>
											<Box
												flexShrink="0"
												width="16px"
												height="16px"
												style={{
													background: {
														White: "white",
														Gray: "var(--gray-9)",
														Black: "#1B1B18",
														Red: "var(--red-9)",
														Pink: "var(--pink-8)",
														Violet: "var(--violet-9)",
														Blue: "var(--blue-9)",
														Green: "var(--teal-9)",
														Beige: "#E5DFCF",
													}[value],
													borderRadius: "var(--radius-1)",
													boxShadow: "inset 0 0 0 1px rgba(160, 160, 160, 0.4)",
												}}
											/>
											{value}
										</React.Fragment>
									)}
								</ToggleButtons>
							</Grid>
						</Box>
					</Flex>
				</Card>

				<Card size="1">
					<Heading as="h3" size="3" mb="3">
						Shopping cart
					</Heading>

					<Flex direction="column" gap="3">
						{[
							{
								name: "Poncho #4",
								url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy",
								caption: "Size M",
								count: "1",
								price: "$79",
							},
							{
								name: "Jeans #8",
								url: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy",
								caption: "Size 30",
								count: "2",
								price: "$118",
							},
							{
								name: "Sneakers #14",
								url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=center",
								caption: "Size 8",
								count: "1",
								price: "$116",
							},
						].map((item) => (
							<Flex gap="4" align="center" justify="between" key={item.url}>
								<Flex flexGrow="1" align="center" gap="2" height="32px">
									<img
										src={item.url}
										style={{ borderRadius: "var(--radius-1)" }}
										width="32"
										height="32"
									/>
									<Box>
										<Text as="div" color="gray" trim="start">
											<Link
												href="#"
												underline="hover"
												tabIndex={tabIndex}
												size="2"
												weight="bold"
												onClick={(e) => e.preventDefault()}
											>
												{item.name}
											</Link>
										</Text>
										<Text as="div" color="gray" size="1" trim="end">
											{item.caption}
										</Text>
									</Box>
								</Flex>

								<Flex direction="column" width="48px">
									<Select.Root defaultValue={item.count} size="1">
										<Select.Trigger tabIndex={tabIndex} />
										<Select.Content
											variant="soft"
											container={portalContainer}
											position="popper"
										>
											{Array.from({ length: 9 }, (_, i) => (
												<Select.Item key={i} value={String(i + 1)}>
													{i + 1}
												</Select.Item>
											))}
										</Select.Content>
									</Select.Root>
								</Flex>

								<Flex direction="column" width="40px">
									<Text size="2" weight="bold" align="right">
										{item.price}
									</Text>
								</Flex>
							</Flex>
						))}
					</Flex>

					<Box>
						<Separator size="4" my="4" />
					</Box>

					<Flex align="center" justify="between" mt="4">
						<Text size="2">
							Total <Strong>$313</Strong>
						</Text>

						<Button
							tabIndex={tabIndex}
							size="2"
							variant="solid"
							color="gray"
							highContrast
						>
							Go to checkout
						</Button>
					</Flex>
				</Card>
			</Flex>

			<Flex flexShrink="0" gap="6" direction="column" width="304px">
				<Card size="1">
					<Flex mb="2" position="relative">
						<img
							width="280"
							height="270"
							src="https://images.unsplash.com/photo-1577210897949-1f56f943bf82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80&crop=bottom"
							style={{ borderRadius: "var(--radius-1)" }}
						/>

						<Theme appearance="light" asChild>
							<Flex
								align="center"
								justify="center"
								position="absolute"
								bottom="0"
								right="0"
								width="32px"
								height="32px"
								style={{ borderRadius: "var(--radius-3)" }}
								m="2"
							>
								<IconButton
									size="2"
									tabIndex={tabIndex}
									color="gray"
									variant="ghost"
									highContrast={state.jeansBookmarked}
									onClick={() =>
										setState((currentState) => ({
											...currentState,
											jeansBookmarked: !currentState.jeansBookmarked,
										}))
									}
								>
									{state.jeansBookmarked ? (
										<BookmarkFilledIcon />
									) : (
										<BookmarkIcon />
									)}
								</IconButton>
							</Flex>
						</Theme>
					</Flex>

					<Flex align="end" justify="between" mb="2">
						<Box>
							<Flex mb="1">
								<Link
									href="#"
									underline="hover"
									tabIndex={tabIndex}
									highContrast
									size="2"
									color="gray"
									onClick={(e) => e.preventDefault()}
								>
									Pants and jeans
								</Link>
							</Flex>

							<Heading as="h3" size="3">
								Jeans #7
							</Heading>
						</Box>

						<Text as="div" size="6" weight="bold">
							$149
						</Text>
					</Flex>

					<Text as="p" size="2" color="gray" mb="4">
						Jeans with a sense of nostalgia, as if they carry whispered tales of
						past adventures.
					</Text>

					<Box>
						<Separator size="4" my="4" />
					</Box>

					<Flex gap="2" align="end">
						<Flex direction="column" flexGrow="1">
							<Label.Root asChild>
								<Text size="1" color="gray" mb="1">
									Color
								</Text>
							</Label.Root>

							<Select.Root defaultValue="Lighter" size="2">
								<Select.Trigger tabIndex={tabIndex} variant="soft" />
								<Select.Content
									variant="soft"
									container={portalContainer}
									position="popper"
								>
									<Select.Item value="Lighter">Lighter</Select.Item>
									<Select.Item value="Darker">Darker</Select.Item>
								</Select.Content>
							</Select.Root>
						</Flex>

						<Flex direction="column">
							<Label.Root asChild>
								<Text size="1" color="gray" mb="1">
									Size
								</Text>
							</Label.Root>

							<Select.Root defaultValue="30" size="2">
								<Select.Trigger tabIndex={tabIndex} variant="soft" />
								<Select.Content
									variant="soft"
									container={portalContainer}
									position="popper"
								>
									{Array.from({ length: 17 }, (_, i) => (
										<Select.Item key={i} value={String(i + 24)}>
											{i + 24}
										</Select.Item>
									))}
								</Select.Content>
							</Select.Root>
						</Flex>

						<Button
							tabIndex={tabIndex}
							size="2"
							variant="solid"
							color="gray"
							highContrast
						>
							Add to cart
						</Button>
					</Flex>
				</Card>

				<Card size="1">
					<Flex mb="2">
						<img
							src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80"
							width="280"
							height="212"
							style={{ borderRadius: "var(--radius-1)" }}
						/>
					</Flex>

					<Flex align="center" justify="between" gap="3">
						<Box>
							<Link
								href="#"
								underline="hover"
								tabIndex={tabIndex}
								color="gray"
								size="2"
								weight="bold"
								highContrast
								onClick={(e) => e.preventDefault()}
							>
								Unexpected pairings
							</Link>

							<Text as="p" size="2" color="gray">
								Break the fashion norms
							</Text>
						</Box>
						<Box flexShrink="0">
							<Button
								tabIndex={tabIndex}
								size="2"
								variant="soft"
								color="gray"
								highContrast
							>
								Shop now
							</Button>
						</Box>
					</Flex>
				</Card>

				<Card size="1">
					<Flex mb="3">
						<Heading as="h3" size="3">
							Delivery
						</Heading>
					</Flex>

					<Box position="absolute" right="0" top="0" m="2">
						<Badge size="1" color="amber">
							Guaranteed
						</Badge>
					</Box>

					<Box mb="4">
						<Text as="div" size="2" weight="bold" mb="1">
							Tomorrow
						</Text>
						<Text as="div" size="2">
							12:00 pm – 2:00 pm
						</Text>
					</Box>

					<Box mb="4">
						<Text as="div" size="2" weight="bold" mb="1">
							Luna Rodriguez
						</Text>
						<Text as="div" size="2">
							9876 Maple Avenue
						</Text>
						<Text as="div" size="2">
							Cityville, WA 54321
						</Text>
					</Box>

					<Flex mb="4">
						<img
							width="280"
							height="218"
							src="https://workos.imgix.net/images/bc04b345-f225-488d-8a46-1811096d0c3b.png?auto=format&fit=clip&q=90&w=840&h=654"
							style={{ borderRadius: "var(--radius-1)" }}
						/>
					</Flex>

					<Flex gap="2" justify="end">
						<Button
							tabIndex={tabIndex}
							size="2"
							variant="soft"
							color="gray"
							highContrast
						>
							Edit
						</Button>
						<Button
							tabIndex={tabIndex}
							size="2"
							variant="solid"
							color="gray"
							highContrast
						>
							Confirm
						</Button>
					</Flex>
				</Card>

				<Card size="1">
					<Flex align="center" justify="between" mb="2">
						<Heading as="h3" size="3">
							Bookmarks
						</Heading>
						<Button tabIndex={tabIndex} size="1" variant="ghost">
							Buy all
						</Button>
					</Flex>

					<Grid gapX="2" gapY="4" columns="2">
						{[
							{
								name: "Jeans #8",
								url: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy",
								price: "$118",
							},

							{
								name: "Jacket #3",
								url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=entropy&w=272&h=272&q=80",
								price: "$49",
							},
							{
								name: "Pants #10",
								url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80",
								price: "$32",
							},
							{
								name: "Shirt #11",
								url: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80",
								price: "$39",
							},
						].map((item) => (
							<Box key={item.url}>
								<Flex mb="2">
									<img
										src={item.url}
										style={{ borderRadius: "var(--radius-1)" }}
										width="136"
										height="136"
									/>
								</Flex>

								<Text as="div" size="2" color="gray">
									<Link
										href="#"
										tabIndex={tabIndex}
										underline="hover"
										weight="bold"
										onClick={(e) => e.preventDefault()}
									>
										{item.name}
									</Link>
									, {item.price}
								</Text>
							</Box>
						))}
					</Grid>
				</Card>
			</Flex>

			<Flex flexShrink="0" gap="6" direction="column" width="416px">
				<Card size="2">
					<Flex direction="column" align="center" py="2">
						<Box mb="2">
							<CrumpledPaperIcon width="24" height="24" />
						</Box>
						<Heading as="h3" mb="1" size="4">
							Product discarded
						</Heading>
						<Text size="2" color="gray" mb="4">
							It’s still available in the{" "}
							<Link
								href="#"
								tabIndex={tabIndex}
								underline="hover"
								onClick={(e) => e.preventDefault()}
							>
								archive
							</Link>
							.
						</Text>

						<Flex gap="2">
							<Button tabIndex={tabIndex} variant="soft" highContrast>
								Undo
							</Button>
							<Button tabIndex={tabIndex} variant="solid" highContrast>
								Done
							</Button>
						</Flex>
					</Flex>
				</Card>

				<Card size="2">
					<Heading as="h3" size="4" mb="4">
						Edit product
					</Heading>

					<Grid columns="5" gap="2" mb="4">
						<Box gridColumn="1 / 5">
							<Label.Root>
								<Text size="2" weight="bold" mb="2" asChild>
									<Box display="inline-block">Title</Box>
								</Text>

								<TextField.Root
									tabIndex={tabIndex}
									variant="soft"
									placeholder="Enter product title"
									defaultValue="Skirt #16"
								/>
							</Label.Root>
						</Box>

						<Box>
							<Label.Root>
								<Text size="2" weight="bold" mb="2" asChild>
									<Box display="inline-block">Price</Box>
								</Text>

								<TextField.Root
									tabIndex={tabIndex}
									variant="soft"
									placeholder="Enter price"
									defaultValue="$99"
								/>
							</Label.Root>
						</Box>
					</Grid>

					<Box mb="4">
						<Text size="2" weight="bold" mb="2" asChild>
							<Box display="inline-block">Media</Box>
						</Text>

						<Grid columns="3" gap="2">
							<Flex>
								<img
									src="https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=bottom"
									width="200"
									height="200"
									style={{
										borderRadius: "var(--radius-2)",
										objectFit: "cover",
										width: "100%",
										height: 121,
										cursor: "zoom-in",
									}}
								/>
							</Flex>
							<Flex>
								<img
									src="https://workos.imgix.net/images/c773ee38-9136-49d1-804c-6d166dad9c65.png?auto=format&fit=clip&q=80w=400&h=400"
									width="200"
									height="200"
									style={{
										borderRadius: "var(--radius-2)",
										objectFit: "cover",
										width: "100%",
										height: 121,
										cursor: "zoom-in",
									}}
								/>
							</Flex>
							<Flex
								align="center"
								justify="center"
								style={{
									border: "1px solid var(--gray-5)",
									borderRadius: "var(--radius-2)",
								}}
							>
								<Grid columns="2" gap="2">
									<IconButton
										tabIndex={tabIndex}
										highContrast
										variant="soft"
										size="2"
									>
										<ImageIcon />
									</IconButton>
									<IconButton
										tabIndex={tabIndex}
										highContrast
										variant="soft"
										size="2"
									>
										<VideoIcon />
									</IconButton>
									<IconButton
										tabIndex={tabIndex}
										highContrast
										variant="soft"
										size="2"
									>
										<InstagramLogoIcon />
									</IconButton>
									<IconButton
										tabIndex={tabIndex}
										highContrast
										variant="soft"
										size="2"
									>
										<RulerHorizontalIcon />
									</IconButton>
								</Grid>
							</Flex>
						</Grid>
					</Box>

					<Box mb="4">
						<Label.Root htmlFor="skirt-description">
							<Text size="2" weight="bold" mb="2" asChild>
								<Box display="inline-block">Description</Box>
							</Text>
						</Label.Root>
						<Box position="relative">
							<TextArea
								tabIndex={tabIndex}
								spellCheck={false}
								id="skirt-description"
								variant="soft"
								rows={10}
								defaultValue="Amidst the soft hues and delicate silence, one's gaze is always drawn towards this skirt. The fabric seems to possess a story of its own, woven with threads of history and whispered secrets. Its savory color, reminiscent of lush meadows in spring, holds the promise of new beginnings. Delicate ruffles cascade elegantly, like gentle waves lapping against an untouched shore."
								style={{ paddingTop: 48 }}
							/>
							<Box position="absolute" m="2" top="0" left="0" right="0">
								<Flex gap="4">
									<Flex gap="1">
										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<FontItalicIcon />
										</IconButton>

										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<FontBoldIcon />
										</IconButton>

										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<StrikethroughIcon />
										</IconButton>
									</Flex>

									<Flex gap="1">
										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<TextAlignLeftIcon />
										</IconButton>

										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<TextAlignCenterIcon />
										</IconButton>

										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<TextAlignRightIcon />
										</IconButton>
									</Flex>

									<Flex gap="1">
										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<MagicWandIcon />
										</IconButton>

										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<ImageIcon />
										</IconButton>

										<IconButton tabIndex={tabIndex} variant="soft" highContrast>
											<CrumpledPaperIcon />
										</IconButton>
									</Flex>
								</Flex>
							</Box>
						</Box>
					</Box>

					<Box mb="4">
						<Text size="2" weight="bold" mb="2" asChild>
							<Box display="inline-block">Main material</Box>
						</Text>

						<Grid asChild columns="3" gap="1">
							<ToggleButtons
								type="single"
								tabIndex={tabIndex}
								value={state.productMaterial}
								onValueChange={(value) =>
									setState({ ...state, productMaterial: value })
								}
								values={[
									"Synthetic",
									"Wool",
									"Cotton",
									"Linen",
									"Denim",
									"Leather",
									"Silk",
									"Chiffon",
									"Other",
								]}
							/>
						</Grid>
					</Box>

					<Box mb="4">
						<Text size="2" weight="bold" mb="2" asChild>
							<Box display="inline-block">Main color</Box>
						</Text>

						<Grid asChild gap="1" columns="3">
							<ToggleButtons
								type="single"
								tabIndex={tabIndex}
								values={[
									"White",
									"Gray",
									"Black",
									"Red",
									"Pink",
									"Violet",
									"Blue",
									"Green",
									"Beige",
								]}
								value={state.productColor}
								onValueChange={(value) =>
									setState({ ...state, productColor: value })
								}
							>
								{(value) => (
									<React.Fragment>
										<Box
											flexShrink="0"
											width="16px"
											height="16px"
											style={{
												background: {
													White: "white",
													Gray: "var(--gray-9)",
													Black: "#1B1B18",
													Red: "var(--red-9)",
													Pink: "var(--pink-8)",
													Violet: "var(--violet-9)",
													Blue: "var(--blue-9)",
													Green: "var(--teal-9)",
													Beige: "#E5DFCF",
												}[value],
												borderRadius: "var(--radius-1)",
												boxShadow: "inset 0 0 0 1px rgba(160, 160, 160, 0.4)",
											}}
										/>
										{value}
									</React.Fragment>
								)}
							</ToggleButtons>
						</Grid>
					</Box>

					<Box>
						<Text size="2" weight="bold" mb="2" asChild>
							<Box display="inline-block">Sizes</Box>
						</Text>

						<Grid asChild columns="3" gap="1">
							<ToggleButtons
								type="multiple"
								tabIndex={tabIndex}
								values={["XS", "S", "M", "L", "XL"]}
								value={state.productSizes}
								onValueChange={(value) =>
									setState({ ...state, productSizes: value })
								}
							/>
						</Grid>
					</Box>
				</Card>

				<Card size="2">
					<Flex align="center" justify="between" mb="4">
						<Heading as="h3" size="4">
							Orders
						</Heading>
						<Button tabIndex={tabIndex} variant="ghost" size="1" mr="-2">
							<CalendarIcon width="12" height="12" />
							<Text size="2">May 2023</Text>
						</Button>
					</Flex>

					<Flex direction="column" gap="3" mb="4">
						<Grid columns="4">
							<Text size="2" color="gray">
								Order no.
							</Text>

							<Text size="2" color="gray">
								Payment
							</Text>

							<Text size="2" color="gray">
								Fulfillment
							</Text>

							<Text size="2" color="gray" align="right">
								Amount
							</Text>
						</Grid>

						<Separator size="4" />

						{(
							[
								{
									id: 1005,
									paymentStatus: "Paid",
									paymentStatusColor: "teal",
									fulfillment: "Delivering",
									fulfillmentColor: "amber",
									amount: "$154.60",
								},
								{
									id: 1004,
									paymentStatus: "Paid",
									paymentStatusColor: "teal",
									fulfillment: "Unfulfilled",
									fulfillmentColor: "amber",
									amount: "$93.49",
								},
								{
									id: 1003,
									paymentStatus: "Refunded",
									paymentStatusColor: "gray",
									fulfillment: "Cancelled",
									fulfillmentColor: "red",
									amount: "$39.00",
								},
								{
									id: 1002,
									paymentStatus: "Unpaid",
									paymentStatusColor: "amber",
									fulfillment: "Unfulfilled",
									fulfillmentColor: "amber",
									amount: "$438.90",
								},
								{
									id: 1001,
									paymentStatus: "Paid",
									paymentStatusColor: "teal",
									fulfillment: "Fulfilled",
									fulfillmentColor: "teal",
									amount: "$532.64",
								},
								{
									id: 1000,
									paymentStatus: "Paid",
									paymentStatusColor: "teal",
									fulfillment: "Fulfilled",
									fulfillmentColor: "teal",
									amount: "$625.03",
								},
							] as const
						).map((order) => (
							<Grid columns="4" key={order.id}>
								<Text size="3" color="gray">
									<Link
										href="#"
										tabIndex={tabIndex}
										underline="hover"
										weight="bold"
										onClick={(e) => e.preventDefault()}
									>
										#{order.id}
									</Link>
								</Text>

								<Box>
									<Badge color={order.paymentStatusColor}>
										{order.paymentStatus}
									</Badge>
								</Box>

								<Box>
									<Badge color={order.fulfillmentColor}>
										{order.fulfillment}
									</Badge>
								</Box>

								<Text size="2" align="right">
									{order.amount}
								</Text>
							</Grid>
						))}
					</Flex>

					<Flex justify="end">
						<Button tabIndex={tabIndex} variant="soft" highContrast>
							Show more
						</Button>
					</Flex>
				</Card>
			</Flex>

			<Flex flexShrink="0" gap="6" direction="column" width="640px">
				<Card size="2">
					<Heading as="h3" size="4" mb="4">
						Shipment tracking
					</Heading>

					<TextField.Root
						mb="5"
						variant="soft"
						tabIndex={tabIndex}
						placeholder="Enter package number"
					>
						<TextField.Slot>
							<MagnifyingGlassIcon />
						</TextField.Slot>
					</TextField.Root>

					<Grid columns="2">
						<Flex gap="4" direction="column" pr="6">
							<Box>
								<Text as="div" weight="bold" size="2" mb="1">
									Package number
								</Text>
								<Text as="div" size="3">
									LASC966124786554
								</Text>
							</Box>

							<Box>
								<Text as="div" weight="bold" size="2" mb="1">
									Order number
								</Text>
								<Link
									href="#"
									tabIndex={tabIndex}
									underline="hover"
									highContrast
									size="3"
									onClick={(e) => e.preventDefault()}
								>
									#94356
								</Link>
							</Box>

							<Box>
								<Text as="div" weight="bold" size="2" mb="1">
									Ship to
								</Text>
								<Text as="div" size="3" mb="1">
									Sophia Martinez
								</Text>
								<Text as="div" size="2" color="gray">
									512 Oakwood Avenue, Unit 201, Greenville, SC 67890
								</Text>
							</Box>

							<Grid columns="3">
								<Box>
									<Text as="div" weight="bold" size="2" mb="1">
										Status
									</Text>
									<Flex height="24px" align="center">
										<Badge color="green" ml="-2px">
											On time
										</Badge>
									</Flex>
								</Box>
								<Box>
									<Text as="div" weight="bold" size="2" mb="1">
										Weight
									</Text>
									<Text as="div" size="3">
										3 lb
									</Text>
								</Box>

								<Box>
									<Text as="div" weight="bold" size="2" mb="1">
										Order total
									</Text>
									<Text as="div" size="3">
										$243
									</Text>
								</Box>
							</Grid>
						</Flex>

						<Box position="relative" pt="1">
							<Box
								position="absolute"
								top="0"
								bottom="0"
								width="1px"
								ml="-0.5px"
							>
								<Separator
									size="4"
									orientation="vertical"
									mt="2"
									style={{
										background:
											"linear-gradient(to bottom, var(--teal-6) 90%, transparent)",
									}}
								/>
							</Box>

							<Box pl="6">
								<Flex direction="column" gap="4">
									<Box>
										<GreenDot />
										<Text as="div" size="1" color="gray" mb="1">
											July 1, 2023, 10:28 AM
										</Text>
										<Text as="p" size="2">
											Package picked up from the warehouse in Phoenix, TX
										</Text>
									</Box>
									<Box>
										<GreenDot />
										<Text as="div" size="1" color="gray" mb="1">
											July 1, 2023, 12:43 PM
										</Text>
										<Text as="p" size="2">
											Departed from Phoenix, TX
										</Text>
									</Box>
									<Box>
										<GreenDot />
										<Text as="div" size="1" color="gray" mb="1">
											July 2, 2023, 3:20 PM
										</Text>
										<Text as="p" size="2">
											Arrived at a sorting facility in Seattle, WA
										</Text>
									</Box>
									<Box>
										<GreenDot />
										<Text as="div" size="1" color="gray" mb="1">
											July 2, 2023, 7:31 PM
										</Text>
										<Text as="p" size="2">
											Departed Seattle, WA
										</Text>
									</Box>
									<Box>
										<GreenDot />
										<Text as="div" size="1" color="gray" mb="1">
											July 2, 2023, 11:03 PM
										</Text>
										<Text as="p" size="2">
											Arrived to a facility in Greenville, WA
										</Text>
									</Box>
								</Flex>
							</Box>
						</Box>
					</Grid>
				</Card>

				<Card size="2">
					<Inset clip="padding-box">
						<Grid rows="256px 256px" columns="3">
							<Box p="4">
								<Heading as="h3" size="8" mb="2">
									Dare to stand out
								</Heading>
								<Text as="p" mb="3" size="3">
									Striking patterns, vibrant hues, and unusual designs.
								</Text>
								<Button tabIndex={tabIndex} highContrast variant="solid">
									Shop now
								</Button>
							</Box>

							<Box>
								<img
									src="https://images.unsplash.com/photo-1514866747592-c2d279258a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</Box>

							<Text
								asChild
								size="1"
								mb="2"
								color="gray"
								style={{ lineHeight: "20px" }}
							>
								<Box p="4">
									<Text mr="6px">Men’s</Text>
									{[
										"Polo #11",
										"Shirt #12",
										"Shirt #24",
										"Sneakers #3",
										"Jeans #9",
										"T‑shirt #4",
										"Pants #20",
										"Socks #9",
										"Watch #15",
										"Belt #7",
										"Bag #6",
										"Shirt #16",
										"Suit #17",
										"Shorts #22",
										"Shoes #13",
									].map((product) => (
										<React.Fragment key={product}>
											<Link
												key={product}
												href="#"
												tabIndex={tabIndex}
												underline="hover"
												highContrast
												mr="6px"
												onClick={(e) => e.preventDefault()}
											>
												{product}
											</Link>
											<wbr />
										</React.Fragment>
									))}

									<Text mr="6px">Women’s</Text>
									{[
										"Blouse #16",
										"Dress #3",
										"Skirt #22",
										"Heels #13",
										"Sandals #18",
										"Bag #14",
										"Scarf #19",
										"Earrings #23",
										"Bracelet #21",
										"Necklace #25",
										"Glasses #26",
										"Perfume #27",
									].map((product) => (
										<React.Fragment key={product}>
											<Link
												key={product}
												href="#"
												tabIndex={tabIndex}
												underline="hover"
												highContrast
												mr="6px"
												onClick={(e) => e.preventDefault()}
											>
												{product}
											</Link>
											<wbr />
										</React.Fragment>
									))}
								</Box>
							</Text>

							<Box>
								<img
									src="https://plus.unsplash.com/premium_photo-1668485968648-f29fe5157463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</Box>

							<Flex p="4" direction="column" align="center" justify="between">
								<Text size="1" align="center" color="gray">
									15&thinsp;–&thinsp;30 Mar
								</Text>
								<Text mb="3" mr="4" weight="bold" size="9">
									−25%
								</Text>
								<Text size="1" align="center" color="gray">
									Get our boldest designs.
								</Text>
							</Flex>

							<Box>
								<img
									src="https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=700&q=80"
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</Box>
						</Grid>
					</Inset>
				</Card>

				<Card size="2">
					<Heading as="h3" size="4" mb="4">
						Top customers
					</Heading>

					<Flex gap="2">
						<Box position="relative" mb="5" flexGrow="1">
							<TextField.Root
								tabIndex={tabIndex}
								variant="soft"
								placeholder="Search"
							>
								<TextField.Slot>
									<MagnifyingGlassIcon />
								</TextField.Slot>
							</TextField.Root>
						</Box>
						<Flex direction="column" minWidth="140px">
							<Select.Root defaultValue="All customers">
								<Select.Trigger variant="soft" tabIndex={tabIndex} />
								<Select.Content
									variant="soft"
									container={portalContainer}
									position="popper"
								>
									<Select.Item value="All customers">All customers</Select.Item>
									<Select.Item value={new Date().getFullYear().toString()}>
										{new Date().getFullYear()}
									</Select.Item>
									<Select.Item
										value={(new Date().getFullYear() - 1).toString()}
									>
										{new Date().getFullYear() - 1}
									</Select.Item>
									<Select.Item
										value={(new Date().getFullYear() - 2).toString()}
									>
										{new Date().getFullYear() - 2}
									</Select.Item>
									<Select.Item
										value={(new Date().getFullYear() - 3).toString()}
									>
										{new Date().getFullYear() - 3}
									</Select.Item>
								</Select.Content>
							</Select.Root>
						</Flex>
					</Flex>

					<Flex direction="column" gap="5" mb="2">
						{[
							{
								name: "Elijah Wilson",
								address: "735 Pine Street, Apartment 4C, Portland, OR 34567",
								customerSince: "November 3, 2017",
								sales: "$15,432.56",
								orders: 42,
							},
							{
								name: "Cameron Johnson",
								address: "2465 Main Street, Apt 3B, Springfield, OH 12345",
								customerSince: "June 10, 2020",
								sales: "$13,976.43",
								orders: 12,
							},
							{
								name: "Sophia Martinez",
								address: "512 Oakwood Avenue, Unit 201, Greenville, SC 67890",
								customerSince: "September 27, 2019",
								sales: "$11,653.03",
								orders: 34,
							},
							{
								name: "Nathan Thompson",
								address: "837 Maple Lane, Suite 102, Lexington, KY 45678",
								customerSince: "May 5, 2018",
								sales: "$8,245.92",
								orders: 22,
							},

							{
								name: "Olivia Adams",
								address: "1123 Elmwood Drive, Boulder, CO 23456",
								customerSince: "January 12, 2021",
								sales: "$6,789.21",
								orders: 18,
							},
						].map((customer) => (
							<Flex justify="between" key={customer.name}>
								<Box>
									<Link
										href="#"
										tabIndex={tabIndex}
										size="3"
										weight="bold"
										highContrast
										underline="hover"
										onClick={(e) => e.preventDefault()}
									>
										{customer.name}
									</Link>
									<Text as="div" size="2" mb="2">
										Customer since {customer.customerSince}
									</Text>
									<Text as="div" size="1" mb="1" color="gray">
										<address style={{ all: "unset" }}>
											{customer.address}
										</address>
									</Text>
								</Box>

								<Flex align="center" justify="end" gap="5" flexGrow="1">
									<Box>
										<Text as="div" size="2" color="gray" align="right">
											Sales
										</Text>
										<Text as="div" size="6" weight="bold" align="right">
											{customer.sales}
										</Text>
									</Box>
									<Separator orientation="vertical" size="3" />
									<Box minWidth="70px">
										<Text as="div" size="2" color="gray">
											Orders
										</Text>
										<Text as="div" size="6" weight="bold">
											{customer.orders}
										</Text>
									</Box>
								</Flex>
							</Flex>
						))}
					</Flex>
				</Card>
			</Flex>
		</Flex>
	);
};

const GreenDot = () => (
	<Box
		width="8px"
		height="8px"
		position="absolute"
		mt="1"
		ml="-1"
		left="0"
		style={{
			backgroundColor: "var(--teal-9)",
			borderRadius: "100%",
		}}
	/>
);

interface ToggleButtonsSingleProps {
	type: "single";
	value: string;
	onValueChange: (value: string) => void;
}

interface ToggleButtonsMultipleProps {
	type: "multiple";
	value: string[];
	onValueChange: (value: string[]) => void;
}

interface ToggleButtonsCommonProps {
	tabIndex?: number;
	values: string[];
	children?: (value: string) => React.ReactNode;
}

type ToggleGroupRootElement = React.ElementRef<typeof ToggleGroup.Root>;

type ToggleButtonsProps = (
	| ToggleButtonsSingleProps
	| ToggleButtonsMultipleProps
) &
	ToggleButtonsCommonProps;

const ToggleButtons = React.forwardRef<
	ToggleGroupRootElement,
	ToggleButtonsProps
>(({ children, tabIndex, values, ...props }, forwardedRef) => {
	const isActive = (value: string) =>
		props.type === "single"
			? props.value === value
			: props.value.includes(value);

	return (
		<ToggleGroup.Root
			ref={forwardedRef}
			{...props}
			{...(tabIndex !== undefined && { tabIndex })}
			onValueChange={(value: any) => {
				if (value) {
					props.onValueChange(value);
				}
			}}
		>
			{values.map((value) => (
				<ToggleGroup.Item asChild key={value} value={value}>
					<Button
						highContrast
						variant={isActive(value) ? "solid" : "soft"}
						style={{ fontWeight: 400 }}
						{...(tabIndex !== undefined && { tabIndex })}
					>
						{children ? children(value) : value}
					</Button>
				</ToggleGroup.Item>
			))}
		</ToggleGroup.Root>
	);
});
