"use client";

import * as React from "react";
import { Flex } from "@radix-ui/themes";
import styles from "./HeroCodeBlock.module.css";

export function HeroContainer({
	children,
	style,
	...props
}: {
	style?: React.CSSProperties;
	children?: React.ReactNode;
}) {
	const ref = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		const element = ref.current!;
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				setDataAttributes(mutation.target as HTMLElement);
			});
		});

		observer.observe(element, {
			childList: true,
			subtree: true,
			attributes: true,
		});

		element.querySelectorAll<HTMLElement>("*").forEach(setDataAttributes);

		// if the element is an input, add data attributes to ensure password
		// managers ignore it.
		function setDataAttributes(target: HTMLElement) {
			if (target.tagName === "INPUT") {
				for (const attr of [
					"data-1p-ignore",
					"data-lpignore",
					"data-protonpass-ignore",
					"data-bwignore",
				]) {
					const currentAttr = target.getAttribute(attr);
					if (currentAttr !== "true") {
						target.setAttribute(attr, "true");
					}
				}
			}
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<Flex
			ref={ref}
			data-algolia-exclude
			// In case any semantic content sneaks through in a hero, let's hide it
			// from the a11y tree since this is a presentational component.
			role="presentation"
			position="relative"
			align="start"
			justify="center"
			className={styles.HeroContainer}
			{...props}
		>
			{children}
		</Flex>
	);
}
