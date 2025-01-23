import * as React from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { styled } from "@utils/css";
import { PrimitivesHeroButton } from "@components/marketing/PrimitivesHeroButton";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text, TextField, Grid, Box } from "@radix-ui/themes";
import styles from "./PrimitivesHeroPopover.module.css";

const PopoverContentWrapper = styled("div", styles.ContentWrapper);

export function PrimitivesHeroPopover() {
	// We prevent the initial auto focus because it's a demo rather than a real UI,
	// so the parent page focus is not stolen.
	const initialAutoFocusPrevented = React.useRef(false);
	const contentRef = React.useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = React.useState(true);

	return (
		<PopoverPrimitive.Root modal={false} open={open} onOpenChange={setOpen}>
			<Box style={{ marginBottom: 120 }}>
				<PopoverPrimitive.Trigger asChild>
					<PrimitivesHeroButton>Dimensions</PrimitivesHeroButton>
				</PopoverPrimitive.Trigger>
			</Box>

			<PopoverContentWrapper>
				<PopoverPrimitive.Content
					ref={contentRef}
					side="bottom"
					sideOffset={5}
					avoidCollisions={false}
					style={{
						position: "relative",
						width: 200,
						backgroundColor: "var(--color-panel-solid)",
						borderRadius: "var(--radius-3)",
						padding: 10,
						boxShadow: "0 0 0 1px var(--gray-a3), var(--shadow-4)",
					}}
					onInteractOutside={(event) => event.preventDefault()}
					onEscapeKeyDown={(event) => {
						event.preventDefault();
						if (
							event.target instanceof HTMLElement &&
							contentRef.current?.contains(event.target)
						) {
							setOpen(false);
						}
					}}
					onOpenAutoFocus={(event) => {
						// We prevent the initial auto focus because it's a demo rather than a real UI,
						// so that the parent page focus is not stolen.
						event.preventDefault();

						if (initialAutoFocusPrevented.current) {
							// Restore default behaviour, but prevent the focus scroll
							// which happens when content wrapper has `position: absolute`
							setTimeout(() => {
								const inputToFocus = contentRef.current?.querySelector("input");
								inputToFocus?.focus({ preventScroll: true });
								inputToFocus?.select();
							});
						} else {
							initialAutoFocusPrevented.current = true;
						}
					}}
				>
					<PopoverPrimitive.Arrow fill="var(--color-panel-solid)" />

					<Text as="div" size="3" weight="bold" mb="2">
						Dimensions
					</Text>

					<Grid align="center" columns="auto 100px" gapX="5" gapY="2">
						<Text size="1">Width</Text>
						<TextField.Root size="1" defaultValue="100%" />
						<Text size="1">Height</Text>
						<TextField.Root size="1" defaultValue="20vh" />
						<Text size="1">Margin</Text>
						<TextField.Root size="1" defaultValue="0" />
						<Text size="1">Padding</Text>
						<TextField.Root size="1" defaultValue="10%" />
					</Grid>

					<Flex position="absolute" top="0" right="0" m="2">
						<PopoverPrimitive.Close asChild>
							<IconButton size="1" color="gray" variant="ghost" highContrast>
								<Cross2Icon />
							</IconButton>
						</PopoverPrimitive.Close>
					</Flex>
				</PopoverPrimitive.Content>
			</PopoverContentWrapper>
		</PopoverPrimitive.Root>
	);
}
