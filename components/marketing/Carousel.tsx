import * as React from "react";
import { useComposedRefs, useCallbackRef, Context } from "radix-ui/internal";
import { composeEventHandlers } from "@radix-ui/primitive";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";

const [CarouselProvider, useCarouselContext] = Context.createContext<{
	_: any;
	slideListRef: React.RefObject<HTMLDivElement | null>;
	onNextClick(): void;
	onPrevClick(): void;
	nextDisabled: boolean;
	prevDisabled: boolean;
}>("Carousel");

export const Carousel = (props: {
	children: React.ReactNode;
	[key: string]: any;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { children, ...carouselProps } = props;
	const slideListRef = useRef<HTMLDivElement>(null);
	const [_, force] = useState({});
	const [nextDisabled, setNextDisabled] = useState(false);
	const [prevDisabled, setPrevDisabled] = useState(true);
	const timeoutRef = useRef<number | null>(null);
	const navigationUpdateDelay = useRef(100);
	useEffect(() => smoothscroll.polyfill(), []);

	const getSlideInDirection = useCallbackRef((direction: 1 | -1) => {
		const slides = ref.current?.querySelectorAll<HTMLElement>(
			"[data-slide-intersection-ratio]",
		);
		if (slides) {
			const slidesArray = Array.from(slides.values());

			if (direction === 1) {
				slidesArray.reverse();
			}

			return slidesArray.find(
				(slide) => slide.dataset.slideIntersectionRatio !== "0",
			);
		}
	});

	const handleNextClick = useCallback(() => {
		const nextSlide = getSlideInDirection(1);
		const slideList = slideListRef.current;

		if (slideList && nextSlide) {
			const { scrollLeft, scrollWidth, clientWidth } = slideList;
			const itemWidth = nextSlide.clientWidth;
			const itemsToScroll =
				itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1;
			const nextPos =
				Math.floor(scrollLeft / itemWidth) * itemWidth +
				itemWidth * itemsToScroll;
			slideList.scrollTo({ left: nextPos, behavior: "smooth" });

			// Disable previous & next buttons immediately
			setPrevDisabled(nextPos <= 0);
			setNextDisabled(scrollWidth - nextPos - clientWidth <= 0);
			// Wait for scroll animation to finish before the buttons *might* show up again
			navigationUpdateDelay.current = 500;
		}
	}, [getSlideInDirection, setPrevDisabled]);

	const handlePrevClick = useCallback(() => {
		const prevSlide = getSlideInDirection(-1);
		const slideList = slideListRef.current;
		if (slideList && prevSlide) {
			const { scrollLeft, scrollWidth, clientWidth } = slideList;
			const itemWidth = prevSlide.clientWidth;
			const itemsToScroll =
				itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1;
			const nextPos =
				Math.ceil(scrollLeft / itemWidth) * itemWidth -
				itemWidth * itemsToScroll;
			slideList.scrollTo({ left: nextPos, behavior: "smooth" });

			// Disable previous & next buttons immediately
			setPrevDisabled(nextPos <= 0);
			setNextDisabled(scrollWidth - nextPos - clientWidth <= 0);
			// Wait for scroll animation to finish before the buttons *might* show up again
			navigationUpdateDelay.current = 500;
		}
	}, [getSlideInDirection, setPrevDisabled]);

	useEffect(() => {
		// Keep checking for whether we need to disable the navigation buttons, debounced
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = window.setTimeout(() => {
			requestAnimationFrame(() => {
				if (slideListRef.current) {
					const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current;
					setPrevDisabled(scrollLeft <= 0);
					setNextDisabled(scrollWidth - scrollLeft - clientWidth <= 0);
					navigationUpdateDelay.current = 100;
				}
			});
		}, navigationUpdateDelay.current);
	});

	useEffect(() => {
		const slidesList = slideListRef.current;
		if (slidesList) {
			const handleScrollStartAndEnd = debounce(() => force({}), 100, {
				leading: true,
				trailing: true,
			});
			slidesList.addEventListener("scroll", handleScrollStartAndEnd);
			window.addEventListener("resize", handleScrollStartAndEnd);
			force({});
			return () => {
				slidesList.removeEventListener("scroll", handleScrollStartAndEnd);
				window.removeEventListener("resize", handleScrollStartAndEnd);
			};
		}
	}, [slideListRef]);

	return (
		<CarouselProvider
			_={_}
			nextDisabled={nextDisabled}
			prevDisabled={prevDisabled}
			slideListRef={slideListRef}
			onNextClick={handleNextClick}
			onPrevClick={handlePrevClick}
		>
			<div {...carouselProps} ref={ref}>
				{children}
			</div>
		</CarouselProvider>
	);
};

export const CarouselSlideList = (props: React.ComponentProps<"div">) => {
	const context = useCarouselContext("CarouselSlideList");
	const ref = React.useRef<React.ElementRef<"div">>(null);
	const composedRefs = useComposedRefs(ref, context.slideListRef);
	const [dragStart, setDragStart] = React.useState<null | {
		scrollX: number;
		pointerX: number;
	}>(null);

	const handleMouseMove = useCallbackRef((event) => {
		if (dragStart && ref.current) {
			const distanceX = event.clientX - dragStart.pointerX;
			ref.current.scrollLeft = dragStart.scrollX - distanceX;
		}
	});

	const handleMouseUp = useCallbackRef(() => {
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
		setDragStart(null);
	});

	return (
		<div
			{...props}
			ref={composedRefs}
			data-state={dragStart ? "dragging" : undefined}
			onMouseDownCapture={composeEventHandlers(
				props.onMouseDownCapture,
				(event) => {
					if (event.target instanceof HTMLInputElement) {
						return;
					}

					// Drag only if main mouse button was clicked
					if (event.button === 0) {
						document.addEventListener("mousemove", handleMouseMove);
						document.addEventListener("mouseup", handleMouseUp);
						setDragStart({
							scrollX: (event.currentTarget as HTMLElement).scrollLeft,
							pointerX: event.clientX,
						});
					}
				},
			)}
			onPointerDown={composeEventHandlers(props.onPointerDown, (event) => {
				if (event.target instanceof HTMLInputElement) {
					return;
				}

				const element = event.target as HTMLElement;
				element.style.userSelect = "none";
				element.setPointerCapture(event.pointerId);
			})}
			onPointerUp={composeEventHandlers(props.onPointerUp, (event) => {
				if (event.target instanceof HTMLInputElement) {
					return;
				}

				const element = event.target as HTMLElement;
				element.style.userSelect = "";
				element.releasePointerCapture(event.pointerId);
			})}
		/>
	);
};

export const CarouselSlide = (
	props: React.ComponentProps<"div"> & {
		as?: any;
	},
) => {
	const { as: Comp = "div", ...slideProps } = props;
	const context = useCarouselContext("CarouselSlide");
	const ref = useRef<HTMLDivElement | null>(null);
	const [intersectionRatio, setIntersectionRatio] = useState(0);
	const isDraggingRef = useRef(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIntersectionRatio(entry.intersectionRatio),
			{ root: context.slideListRef.current, threshold: [0, 0.5, 1] },
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => observer.disconnect();
	}, [context.slideListRef]);

	return (
		<Comp
			{...slideProps}
			ref={ref}
			data-slide-intersection-ratio={intersectionRatio}
			onDragStart={(event: React.DragEvent<HTMLDivElement>) => {
				event.preventDefault();
				isDraggingRef.current = true;
			}}
			onClick={(event: React.MouseEvent<HTMLDivElement>) => {
				if (isDraggingRef.current) {
					event.preventDefault();
				}
			}}
		/>
	);
};

export const CarouselNext = (
	props: React.ComponentProps<"button"> & {
		as?: any;
	},
) => {
	const { as: Comp = "button", ...nextProps } = props;
	const context = useCarouselContext("CarouselNext");
	return (
		<Comp
			{...nextProps}
			onClick={() => context.onNextClick()}
			disabled={context.nextDisabled}
		/>
	);
};

export const CarouselPrevious = (
	props: React.ComponentProps<"button"> & {
		as?: any;
	},
) => {
	const { as: Comp = "button", ...prevProps } = props;
	const context = useCarouselContext("CarouselPrevious");
	return (
		<Comp
			{...prevProps}
			onClick={() => context.onPrevClick()}
			disabled={context.prevDisabled}
		/>
	);
};
