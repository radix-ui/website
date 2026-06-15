import * as React from "react";
import { Switch } from "radix-ui";
import styles from "./styles.module.css";

const SwitchDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<label
				id="airplane-mode-label"
				htmlFor="airplane-mode"
				className={styles.Label}
				style={{ paddingRight: 15 }}
			>
				Airplane mode
			</label>
			<Switch.Root id="airplane-mode" aria-labelledby="airplane-mode-label" className={styles.Root}>
				<Switch.Thumb className={styles.Thumb} />
			</Switch.Root>
		</div>
	</form>
);

export default SwitchDemo;
