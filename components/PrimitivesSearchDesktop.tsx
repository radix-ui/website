import * as React from "react";
import styles from "./PrimitivesSearchDesktop.module.css";
import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
	Box,
	Flex,
	IconButton,
	Kbd,
	ScrollArea,
	Theme,
	Tooltip,
} from "@radix-ui/themes";
import { Dialog as DialogPrimitive } from "radix-ui";
import { PrimitivesSearch } from "./PrimitivesSearch";

export const PrimitivesSearchDesktop = () => {
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const triggerRef = React.useRef<HTMLButtonElement>(null);
	const clearButtonRef = React.useRef<HTMLButtonElement>(null);

	React.useEffect(() => {
		const isEditingContent = (event: KeyboardEvent) => {
			const element = event.target as HTMLElement;
			const tagName = element.tagName;
			return (
				element.isContentEditable ||
				["INPUT", "SELECT", "TEXTAREA"].includes(tagName)
			);
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			const isSlashKey = event.key === "/";
			const isMetaKey = event.key === "k" && (event.ctrlKey || event.metaKey);

			if (!isEditingContent(event) && (isSlashKey || isMetaKey)) {
				triggerRef.current?.click();
				event.preventDefault();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<DialogPrimitive.Root open={dialogOpen} onOpenChange={setDialogOpen}>
			<DialogPrimitive.Trigger asChild>
				<button
					ref={triggerRef}
					aria-label="Search. Press Slash key to search quickly."
					className={styles.PrimitivesSearchDesktopButton}
					onKeyDown={(event) => {
						if (
							!event.metaKey &&
							!event.ctrlKey &&
							/^[a-z]$/i.test(event.key)
						) {
							setDialogOpen(true);
						}
					}}
				>
					<MagnifyingGlassIcon />
					Search
					<Tooltip
						className="radix-themes-custom-fonts"
						content="Press Slash key to search"
					>
						<Flex ml="auto" my="-2" aria-hidden>
							<Kbd size="2">/</Kbd>
						</Flex>
					</Tooltip>
				</button>
			</DialogPrimitive.Trigger>

			<DialogPrimitive.Portal>
				<Theme className="radix-themes-custom-fonts">
					<DialogPrimitive.Overlay
						className={styles.PrimitivesSearchDesktopDialogOverlay}
					>
						<DialogPrimitive.Content
							onEscapeKeyDown={() => {
								if (inputRef.current?.value === "") {
									setDialogOpen(false);
								} else {
									clearButtonRef.current?.click();
								}
							}}
							className={styles.PrimitivesSearchDesktopDialogContent}
						>
							<PrimitivesSearch.Root>
								<Box position="relative">
									<PrimitivesSearch.Input>
										<input
											ref={inputRef}
											className={styles.PrimitivesSearchDesktopInput}
										/>
									</PrimitivesSearch.Input>

									<Flex
										position="absolute"
										align="center"
										top="0"
										left="0"
										height="40px"
										ml="3"
										style={{ pointerEvents: "none" }}
									>
										<MagnifyingGlassIcon
											width="18"
											height="18"
											color="var(--gray-a11)"
										/>
									</Flex>

									<Flex
										align="center"
										position="absolute"
										top="0"
										bottom="0"
										right="0"
										mr="3"
										style={{ zIndex: 1 }}
									>
										<PrimitivesSearch.ClearButton>
											<IconButton
												ref={clearButtonRef}
												size="2"
												color="gray"
												variant="ghost"
												radius="full"
											>
												<Cross2Icon width="18" height="18" />
											</IconButton>
										</PrimitivesSearch.ClearButton>
									</Flex>
								</Box>

								<PrimitivesSearch.ResultsPanel>
									<Box className={styles.PrimitivesSearchDesktopPanel}>
										<ScrollArea scrollbars="vertical">
											<Box className={styles.PrimitivesSearchDesktopPanelInner}>
												<PrimitivesSearch.Results />
											</Box>
										</ScrollArea>
									</Box>
								</PrimitivesSearch.ResultsPanel>
							</PrimitivesSearch.Root>
						</DialogPrimitive.Content>
					</DialogPrimitive.Overlay>
				</Theme>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
};
