"use client";
import * as React from "react";
import { Slot } from "radix-ui";
import styles from "./box-link.module.css";
import { classNames } from "@utils/classNames";

interface BoxLinkProps extends React.ComponentPropsWithoutRef<"a"> {
	asChild?: boolean;
}

export const BoxLink = React.forwardRef<HTMLAnchorElement, BoxLinkProps>(function BoxLink(
	{ className, asChild, ...props },
	forwardedRef,
) {
	const Comp = asChild ? Slot.Root : "a";
	return <Comp ref={forwardedRef} className={classNames(styles.BoxLink, className)} {...props} />;
});
