import * as React from "react";
import { RadioGroup } from "radix-ui";
import styles from "./styles.module.css";

const RadioGroupDemo = () => (
	<form>
		<RadioGroup.Root
			className={styles.Root}
			defaultValue="default"
			aria-label="View density"
		>
			<div style={{ display: "flex", alignItems: "center" }}>
				<RadioGroup.Item className={styles.Item} value="default" id="r1">
					<RadioGroup.Indicator className={styles.Indicator} />
				</RadioGroup.Item>
				<label className={styles.Label} htmlFor="r1">
					Default
				</label>
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<RadioGroup.Item className={styles.Item} value="comfortable" id="r2">
					<RadioGroup.Indicator className={styles.Indicator} />
				</RadioGroup.Item>
				<label className={styles.Label} htmlFor="r2">
					Comfortable
				</label>
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<RadioGroup.Item className={styles.Item} value="compact" id="r3">
					<RadioGroup.Indicator className={styles.Indicator} />
				</RadioGroup.Item>
				<label className={styles.Label} htmlFor="r3">
					Compact
				</label>
			</div>
		</RadioGroup.Root>
	</form>
);

export default RadioGroupDemo;
