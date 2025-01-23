import * as React from "react";
import { Switch } from "radix-ui";
import styles from "./styles.module.css";

const SwitchDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<label
				className={styles.Label}
				htmlFor="airplane-mode"
				style={{ paddingRight: 15 }}
			>
				Airplane mode
			</label>
			<Switch.Root className={styles.Root} id="airplane-mode">
				<Switch.Thumb className={styles.Thumb} />
			</Switch.Root>
		</div>
	</form>
);

export default SwitchDemo;
