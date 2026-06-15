import * as React from "react";
import styles from "./colors-marketing-button.module.css";
import { Button } from "@radix-ui/themes";

export const ColorsMarketingButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button>
>(function ColorsMarketingButton(props, forwardedRef) {
	return (
		<Button
			color="gray"
			highContrast
			{...props}
			className={styles.ColorsMarketingButton}
			ref={forwardedRef}
		/>
	);
});
