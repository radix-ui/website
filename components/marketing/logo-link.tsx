"use client";
import { Slot } from "radix-ui";
import * as React from "react";
import styles from "./logo-link.module.css";

export const LogoLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentProps<"a"> & {
		variant?: "normal" | "box";
		asChild?: boolean;
	}
>(function LogoLink({ variant = "normal", asChild, ...props }, forwardedRef) {
	const Comp = asChild ? Slot.Root : "a";
	return (
		<Comp
			{...props}
			data-variant={variant}
			ref={forwardedRef}
			className={styles.LogoLink}
		/>
	);
});
