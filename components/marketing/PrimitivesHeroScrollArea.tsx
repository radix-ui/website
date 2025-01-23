import { Box, Text } from "@radix-ui/themes";
import { styled } from "@utils/css";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import styles from "./PrimitivesHeroScrollArea.module.css";

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, styles.ScrollArea);
const StyledViewport = styled(ScrollAreaPrimitive.Viewport, styles.Viewport);
const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, styles.Scrollbar);
const StyledThumb = styled(ScrollAreaPrimitive.Thumb, styles.Thumb);
const StyledCorner = styled(ScrollAreaPrimitive.Corner, styles.Corner);

const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

const TAGS = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function PrimitivesHeroScrollArea() {
	return (
		<ScrollArea>
			<ScrollAreaViewport>
				<Box p="4">
					<Text as="div" size="2" weight="bold" trim="start">
						Tags
					</Text>
					{TAGS.map((tag) => (
						<Text
							as="div"
							size="1"
							style={{
								lineHeight: 1.5,
								marginTop: 10,
								paddingTop: 10,
								borderTop: `1px solid var(--gray-a6)`,
							}}
							key={tag}
						>
							{tag}
						</Text>
					))}
				</Box>
			</ScrollAreaViewport>
			<ScrollAreaScrollbar forceMount orientation="vertical">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>
			<ScrollAreaScrollbar orientation="horizontal">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>
			<ScrollAreaCorner />
		</ScrollArea>
	);
}
