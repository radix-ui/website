import * as React from "react";
import styles from "./LogoLink.module.css";

export const LogoLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentProps<"a"> & {
		variant?: "normal" | "box";
	}
>(function LogoLink({ variant = "normal", ...props }, forwardedRef) {
	return (
		<a
			{...props}
			data-variant={variant}
			ref={forwardedRef}
			className={styles.LogoLink}
		/>
	);
});
