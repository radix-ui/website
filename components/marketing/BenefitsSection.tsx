import { MarketingCaption } from "./MarketingCaption";
import {
	Box,
	Section,
	Grid,
	Container,
	Heading,
	Em,
	Text,
} from "@radix-ui/themes";

export const BenefitsSection = () => {
	return (
		<Section
			size={{ initial: "2", md: "4" }}
			position="relative"
			overflow="hidden"
		>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Box mb="7">
					<MarketingCaption mb="1">Why Radix Primitives</MarketingCaption>
					<Heading as="h2" size="7">
						Spend less time on
						<br />
						undifferentiated work
					</Heading>
				</Box>

				<Grid
					columns={{ initial: "1", sm: "2" }}
					gap={{ initial: "7", sm: "5" }}
				>
					<Box>
						<Heading as="h3" size="4" mb="2">
							Save time. Ship faster.
						</Heading>
						<Text as="p" size="3" mr={{ sm: "5", md: "7", lg: "9" }}>
							It takes <Em>a lot</Em> of time to develop and maintain a robust
							set of UI components, and it's mostly undifferentiated work.
							Building on top of Radix components will save you time and money,
							so you can ship a better product faster.
						</Text>
					</Box>

					<Box>
						<Heading as="h3" size="4" mb="2">
							Focus on your product
						</Heading>
						<Text as="p" size="3" mr={{ sm: "5", md: "7", lg: "9" }}>
							It’s no secret that robust UI components are tricky to build.
							Nailing accessibility details and complex logic sucks time away
							from product feature development. With Radix, you can focus on
							your unique engineering challenges instead.
						</Text>
					</Box>
				</Grid>
			</Container>
		</Section>
	);
};
