import { Box } from "@radix-ui/themes";
import styles from "./HiddenScroll.module.css";
import type * as React from "react";

export const HiddenScroll = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof Box>) => (
	<Box
		className={`${className ? `${className} ` : ""}${styles.HiddenScroll}`}
		{...props}
	/>
);
