import * as React from "react";
import styles from "./PrimitivesHeroButton.module.css";
import { classNames } from "@utils/classNames";

export const PrimitivesHeroButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button"> & { variant?: "white" | "gray" }
>(function ({ variant = "white", ...props }, ref) {
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
