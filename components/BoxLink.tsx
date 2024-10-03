import * as React from "react";
import styles from "./BoxLink.module.css";
import { classNames } from "@utils/classNames";

interface BoxLinkProps extends React.ComponentPropsWithoutRef<"a"> {}

export const BoxLink = React.forwardRef<HTMLAnchorElement, BoxLinkProps>(
	function BoxLink({ className, ...props }, forwardedRef) {
		return (
			<a
				ref={forwardedRef}
				className={classNames(styles.BoxLink, className)}
				{...props}
			/>
		);
	},
);
