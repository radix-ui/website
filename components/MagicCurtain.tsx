"use client";
import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./MagicCurtain.module.css";
import { Context } from "radix-ui/internal";
import { NavigationMenu } from "radix-ui";
import debounce from "lodash.debounce";
import { useIsomorphicLayoutEffect } from "@utils/useIsomorphicLayoutEffect";

type Visibility = "hidden" | "animating-out" | "visible";
type ForceReducedMotion = "always" | "if-hi-res" | "never";

interface MagicCurtainItem {
	visibility: Visibility;
	setVisibility: (visibility: Visibility) => void;
	ref: React.RefObject<HTMLDivElement | null>;
}

const [MagicCurtainProvider, useMagicCurtainContext] = Context.createContext<{
	items: MagicCurtainItem[];
	setItems: React.Dispatch<React.SetStateAction<MagicCurtainItem[]>>;

	controlsPosition: { left: number; top: number };
	setControlsPosition: React.Dispatch<
		React.SetStateAction<{ left: number; top: number }>
	>;

	// Which control is highlighted as active
	highlightedControl: string;
	setHighlightedControl: React.Dispatch<React.SetStateAction<string>>;

	// Which control is hovered (hovering the preview also counts)
	hoveredControl: string;
	setHoveredControl: React.Dispatch<React.SetStateAction<string>>;

	// Which control is focused from keyboard
	focusedControl: string;
	setFocusedControl: React.Dispatch<React.SetStateAction<string>>;
}>("MagicCurtain");

const MagicCurtainRoot = ({ children }: React.PropsWithChildren<{}>) => {
	const ref = React.useRef<HTMLDivElement | null>(null);
	const [items, setItems] = React.useState<MagicCurtainItem[]>([]);
	const [hoveredControl, setHoveredControl] = React.useState("");
	const [highlightedControl, setHighlightedControl] = React.useState("0");
	const [focusedControl, setFocusedControl] = React.useState("");
	const [controlsPosition, setControlsPosition] = React.useState({
		left: -9999,
		top: -9999,
	});
	const [isFirefox, setIsFirefox] = React.useState(false);

	React.useEffect(() => {
		setIsFirefox(/firefox/i.test(navigator.userAgent));
	}, []);

	return (
		<MagicCurtainProvider
			items={items}
			setItems={setItems}
			highlightedControl={highlightedControl}
			setHighlightedControl={setHighlightedControl}
			controlsPosition={controlsPosition}
			setControlsPosition={setControlsPosition}
			hoveredControl={hoveredControl}
			setHoveredControl={setHoveredControl}
			focusedControl={focusedControl}
			setFocusedControl={setFocusedControl}
		>
			<div
				ref={ref}
				data-is-firefox={isFirefox}
				className={styles.MagicCurtainRoot}
			>
				{children}
			</div>
		</MagicCurtainProvider>
	);
};

const MagicCurtainItem = ({
	defaultVisibility = "hidden",
	children,
	...props
}: React.ComponentPropsWithoutRef<"div"> & {
	defaultVisibility?: Visibility;
}) => {
	const context = useMagicCurtainContext("MagicCurtain");
	const ref = React.useRef<HTMLDivElement | null>(null);
	const [visibility, setVisibility] =
		React.useState<Visibility>(defaultVisibility);

	useIsomorphicLayoutEffect(() => {
		const item: MagicCurtainItem = { ref, visibility, setVisibility };

		context.setItems((items) =>
			[...items, item].sort((a, b) => {
				// Sort items according to their order in the DOM
				return a.ref.current!.compareDocumentPosition(b.ref.current!) & 4
					? -1
					: 1;
			}),
		);

		return () => {
			context.setItems((items) => {
				return [...items.filter((value) => value.ref !== item.ref)];
			});
		};
	}, [visibility]);

	return (
		<div
			data-visibility={visibility}
			ref={ref}
			className={styles.MagicCurtainItem}
			{...props}
		>
			{visibility === "hidden" ? null : children}
		</div>
	);
};

interface MagicCurtainControlsProps {
	images?: string[];
}

const MagicCurtainControls = ({ images = [] }: MagicCurtainControlsProps) => {
	const context = useMagicCurtainContext("MagicCurtain");

	const rootRef = React.useRef<HTMLElement>(null);
	const viewportWrapperRef = React.useRef<HTMLDivElement | null>(null);
	const [menuValue, setMenuValue] = React.useState<string>("");
	const [offsetIndex, setOffsetIndex] = React.useState<string>("");
	const hasAnimatingItem = !!context.items.find(
		(value) => value.visibility === "animating-out",
	);
	const upcomingAnimationCallback = React.useRef<(() => void) | null>(null);

	// Clear offset on viewport removal
	useIsomorphicLayoutEffect(() => {
		const observer = new MutationObserver((mutationList) => {
			for (const mutation of mutationList) {
				if (mutation.type === "childList") {
					const firstRemovedNode = mutation.removedNodes[0] as
						| HTMLElement
						| undefined;

					if (firstRemovedNode?.getAttribute("data-viewport")) {
						setOffsetIndex("");
					}
				}
			}
		});

		if (viewportWrapperRef.current) {
			observer.observe(viewportWrapperRef.current, { childList: true });
		}

		return () => observer.disconnect();
	}, []);

	const startAnimation = React.useCallback(
		(clickedItem: MagicCurtainItem) => {
			// Do nothing if this item is already visible
			if (clickedItem.visibility === "visible") {
				return;
			}

			const itemToHide = context.items.find(
				(value) => value.visibility === "visible",
			);

			const handleAnimationEnd = (event: AnimationEvent) => {
				// Make sure this is the right animation
				const isMagicCurtainAnimation = [
					styles["magic-curtain-fade"],
					styles["magic-curtain-clip"],
					styles["magic-curtain-clip-reverse"],
				].includes(event.animationName);

				if (event.target instanceof HTMLElement && isMagicCurtainAnimation) {
					// With React 18 concurrency, the update is applied a frame after
					// the animation ends, creating a flash of visible content.
					// By manually flushing we ensure they sync within a frame, removing the flash.
					ReactDOM.flushSync(() => {
						itemToHide?.setVisibility("hidden");
						(event.currentTarget as HTMLElement)!.removeEventListener(
							"animationend",
							handleAnimationEnd,
						);

						// Run the rescheduled animation callback if it’s there
						upcomingAnimationCallback.current?.();
					});
				}
			};

			clickedItem.setVisibility("visible");
			itemToHide?.setVisibility("animating-out");
			itemToHide?.ref.current?.addEventListener(
				"animationend",
				handleAnimationEnd,
			);
		},
		[context.items],
	);

	return (
		<NavigationMenu.Root
			delayDuration={40}
			skipDelayDuration={40}
			value={menuValue}
			ref={rootRef}
			className={styles.MagicCurtainControlsRoot}
			style={{ position: "absolute", zIndex: 1, ...context.controlsPosition }}
			onValueChange={(value) => {
				setMenuValue(value);

				// If `value` is falsy, the offset will be cleared on viewport removal
				if (value) {
					setOffsetIndex(value);
				}
			}}
		>
			<NavigationMenu.List
				aria-label="Radix Themes Examples"
				style={{
					display: "flex",
					listStyle: "none",
					margin: 0,
					padding: 0,
					zIndex: 1,
					position: "relative",
				}}
			>
				{context.items.map((item, index) => (
					<NavigationMenu.Item
						key={index}
						className={styles.MagicCurtainControlsItem}
						value={index.toString()}
						onPointerMove={() => context.setHoveredControl(index.toString())}
						onPointerLeave={() => {
							// Wait a tick and reset the control index if it wasn't changed by anything else
							setTimeout(() => {
								context.setHoveredControl((current) =>
									current === index.toString() ? "" : current,
								);
							});
						}}
					>
						<NavigationMenu.Trigger
							data-visually-hidden
							aria-label={`Example ${index + 1}`}
							data-visibility={item.visibility}
							className={styles.MagicCurtainControlsTrigger}
							onFocus={(event) => {
								if (event.currentTarget.matches(":focus-visible")) {
									context.setFocusedControl(index.toString());
								}
							}}
							onBlur={() => {
								// Wait a tick and reset the control index if it wasn't changed by anything else
								setTimeout(() => {
									context.setFocusedControl((current) =>
										current === index.toString() ? "" : current,
									);
								});
							}}
							onClick={() => {
								// Do nothing if this item is already visible
								if (item.visibility === "visible") {
									return;
								}

								// Always set the clicked control as highlighted,
								// even if it's going to be animated a bit later
								context.setHighlightedControl(index.toString());

								if (hasAnimatingItem) {
									// Schedule the animation start after the current animation ends
									upcomingAnimationCallback.current = () => {
										startAnimation(item);
										upcomingAnimationCallback.current = null;
									};
								} else {
									startAnimation(item);
								}
							}}
							onKeyDown={(event) => {
								if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
									return;
								}

								const items = context.items;
								let nextItem =
									event.key === "ArrowLeft"
										? items[index - 1]
										: items[index + 1];

								// This is for when we are focused on the item that isn’t currently active and press an arrow key.
								// We want to activate the item on either arrow key press first before we can continue cycling through
								// the list. We check for `!hasAnimatingItem` so that if there is an animation running and we are
								// rapidly cycling through the list with the arrow keys, it doesn't stutter over the hidden items.
								if (item.visibility === "hidden" && !hasAnimatingItem) {
									// Don’t move the focus to the next/previous item
									event.preventDefault();
									nextItem = item;
								}

								// No looping
								if (items.indexOf(nextItem) === -1) {
									return;
								}

								// Always set the clicked control as highlighted,
								// even if it's going to be animated a bit later
								context.setHighlightedControl(
									items.indexOf(nextItem).toString(),
								);

								if (hasAnimatingItem) {
									upcomingAnimationCallback.current = () => {
										// Schedule the animation start after the current animation ends
										startAnimation(nextItem);
										upcomingAnimationCallback.current = null;
									};
								} else {
									startAnimation(nextItem);
								}
							}}
						/>

						<div style={{ display: "none" }}>
							{images[index] && (
								<NavigationMenu.Content
									forceMount
									data-active={menuValue === index.toString()}
									className={styles.MagicCurtainControlsPreviewContent}
									onPointerMove={() =>
										context.setHoveredControl(index.toString())
									}
									onPointerLeave={() => {
										// Wait a tick and reset the control index if it wasn't changed by anything else
										setTimeout(() => {
											context.setHoveredControl((current) =>
												current === index.toString() ? "" : current,
											);
										});
									}}
									onClick={() => {
										// Force hide the hover card and dispel the hover state
										setMenuValue("");
										context.setHoveredControl("");

										// Do nothing if this item is already visible
										if (item.visibility === "visible") {
											return;
										}

										// Always set the clicked control as highlighted,
										// even if it's going to be animated a bit later
										context.setHighlightedControl(index.toString());

										if (hasAnimatingItem) {
											// Schedule the animation start after the current animation ends
											upcomingAnimationCallback.current = () => {
												startAnimation(item);
												upcomingAnimationCallback.current = null;
											};
										} else {
											startAnimation(item);
										}
									}}
								>
									<img
										className={styles.MagicCurtainControlsPreviewContentImage}
										src={images[index]}
									/>
								</NavigationMenu.Content>
							)}
						</div>
					</NavigationMenu.Item>
				))}
			</NavigationMenu.List>

			<div
				ref={viewportWrapperRef}
				className={styles.MagicCurtainControlsPreviewViewportWrapper}
				style={
					{
						// Avoid transitioning from initial position when first opening
						display: offsetIndex ? undefined : "none",
						"--magic-curtain-controls-offset-index": offsetIndex || undefined,
					} as React.CSSProperties
				}
			>
				<NavigationMenu.Viewport
					data-viewport
					className={styles.MagicCurtainControlsPreviewViewport}
				/>
			</div>
		</NavigationMenu.Root>
	);
};

const MagicCurtainMirrorControls = () => {
	const context = useMagicCurtainContext("MagicCurtain");
	const ref = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const positionControls = debounce(() => {
			requestAnimationFrame(() => {
				if (ref.current) {
					const rect = ref.current.getBoundingClientRect();
					const top = rect.top + window.scrollY;
					const left = rect.left + window.scrollX;

					context.setControlsPosition((current) => {
						if (current.top === top && current.left === left) {
							return current;
						}

						return { top, left };
					});
				}
			});
		}, 200);

		positionControls();
		addEventListener("resize", positionControls);
		return () => removeEventListener("resize", positionControls);
	}, [context.setControlsPosition]);

	return (
		<div ref={ref} className={styles.MagicCurtainControlsRoot}>
			{context.items.map((item, index) => (
				<div key={index} className={styles.MagicCurtainControlsItem}>
					<div
						data-focused={context.focusedControl === index.toString()}
						data-highlighted={
							context.hoveredControl === index.toString() ||
							context.highlightedControl === index.toString()
						}
						className={styles.MagicCurtainControlsTrigger}
					/>
				</div>
			))}
		</div>
	);
};

export { MagicCurtainRoot as Root };
export { MagicCurtainItem as Item };
export { MagicCurtainControls as Controls };
export { MagicCurtainMirrorControls as MirrorControls };
