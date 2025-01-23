import * as React from "react";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const CheckboxDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<Checkbox.Root className={styles.Root} defaultChecked id="c1">
				<Checkbox.Indicator className={styles.Indicator}>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className={styles.Label} htmlFor="c1">
				Accept terms and conditions.
			</label>
		</div>
	</form>
);

export default CheckboxDemo;
