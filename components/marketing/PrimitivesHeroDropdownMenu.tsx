import * as React from "react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import {
	CaretDownIcon,
	CaretRightIcon,
	CheckIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import { PrimitivesHeroButton } from "@components/marketing/PrimitivesHeroButton";
import styles from "./PrimitivesHeroDropdownMenu.module.css";
import { styled } from "@utils/css";

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, styles.Arrow);
const DropdownMenuContentWrapper = styled("div", styles.ContentWrapper);
const DropdownMenuContent = styled(
	DropdownMenuPrimitive.Content,
	styles.Content,
);
const DropdownMenuSeparator = styled(
	DropdownMenuPrimitive.Separator,
	styles.Separator,
);
const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, styles.Item);
const DropdownMenuCheckboxItem = styled(
	DropdownMenuPrimitive.CheckboxItem,
	styles.CheckboxItem,
);
const DropdownMenuSubTrigger = styled(
	DropdownMenuPrimitive.SubTrigger,
	styles.SubTrigger,
);
const DropdownMenuSubContent = styled(
	DropdownMenuPrimitive.SubContent,
	styles.SubContent,
);

export function PrimitivesHeroDropdownMenu() {
	// We prevent the initial auto focus because it's a demo rather than a real UI,
	// so the parent page focus is not stolen.
	const initialAutoFocusPrevented = React.useRef(false);
	const [showToolbar, setShowToolbar] = React.useState<
		boolean | "indeterminate"
	>(true);
	const [showUrls, setShowUrls] = React.useState<boolean | "indeterminate">(
		false,
	);
	const triggerRef = React.useRef<HTMLButtonElement>(null);
	const contentRef = React.useRef<HTMLDivElement | null>(null);
	const [open, setOpen] = React.useState(true);

	return (
		<DropdownMenuPrimitive.Root
			modal={false}
			open={open}
			onOpenChange={setOpen}
		>
			<Box style={{ marginBottom: 120 }}>
				<DropdownMenuPrimitive.Trigger asChild>
					<PrimitivesHeroButton ref={triggerRef}>
						Options <CaretDownIcon style={{ marginRight: -3 }} />
					</PrimitivesHeroButton>
				</DropdownMenuPrimitive.Trigger>
			</Box>

			<DropdownMenuContentWrapper>
				<DropdownMenuContent
					ref={contentRef}
					sideOffset={5}
					avoidCollisions={false}
					onEscapeKeyDown={(event) => {
						event.preventDefault();
						if (
							event.target instanceof HTMLElement &&
							contentRef.current?.contains(event.target)
						) {
							setOpen(false);
						}
					}}
					onInteractOutside={(event) => {
						if (event.target !== triggerRef.current) {
							event.preventDefault();
						}
					}}
					// @ts-expect-error
					onOpenAutoFocus={(event: FocusEvent) => {
						// We prevent the initial auto focus because it's a demo rather than a real UI,
						// so the parent page focus is not stolen.
						event.preventDefault();

						if (initialAutoFocusPrevented.current) {
							// Restore default behaviour, but prevent the focus scroll
							// which happens when content wrapper has `position: absolute`
							setTimeout(() => {
								contentRef.current?.focus({ preventScroll: true });
							});
						} else {
							initialAutoFocusPrevented.current = true;
						}
					}}
				>
					<DropdownMenuArrow />
					<DropdownMenuItem>New Tab</DropdownMenuItem>
					<DropdownMenuItem>New Window</DropdownMenuItem>
					<DropdownMenuSeparator />

					<DropdownMenuPrimitive.Sub>
						<DropdownMenuSubTrigger>
							Favorites
							<CaretRightIcon style={{ marginLeft: "auto", marginRight: -5 }} />
						</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuItem>
								<GitHubLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
								GitHub
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Flex
									style={{
										width: 15,
										height: 15,
										alignItems: "center",
										justifyContent: "center",
										marginLeft: -15,
										marginRight: 10,
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 25 25"
										fill="currentcolor"
									>
										<path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
										<path d="M12 0H4V8H12V0Z" />
										<path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
									</svg>
								</Flex>
								Radix
							</DropdownMenuItem>
							<DropdownMenuItem>
								<TwitterLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
								Twitter
							</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuPrimitive.Sub>

					<DropdownMenuItem>Downloads</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuCheckboxItem
						checked={showToolbar}
						onCheckedChange={setShowToolbar}
					>
						<DropdownMenuPrimitive.ItemIndicator>
							<CheckIcon style={{ marginLeft: -18, marginRight: 0 }} />
						</DropdownMenuPrimitive.ItemIndicator>
						Show Toolbar
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={showUrls}
						onCheckedChange={setShowUrls}
					>
						<DropdownMenuPrimitive.ItemIndicator>
							<CheckIcon style={{ marginLeft: -18, marginRight: 0 }} />
						</DropdownMenuPrimitive.ItemIndicator>
						Show Full URLs
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenuContentWrapper>
		</DropdownMenuPrimitive.Root>
	);
}
