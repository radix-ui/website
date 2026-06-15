import * as React from "react";
import styles from "./primitives-hero-button.module.css";
import { classNames } from "@utils/classNames";

export const PrimitivesHeroButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button"> & { variant?: "white" | "gray" }
>(function PrimitivesHeroButton({ variant = "white", ...props }, ref) {
	return (
		<button
			type="button"
			data-variant={variant}
			ref={ref}
			{...props}
			className={classNames(props.className, styles.PrimitivesHeroButton)}
		/>
	);
});
