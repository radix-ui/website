import * as React from "react";
import { Label } from "radix-ui";
import styles from "./styles.module.css";

const LabelDemo = () => (
	<div
		style={{
			display: "flex",
			padding: "0 20px",
			flexWrap: "wrap",
			gap: 15,
			alignItems: "center",
		}}
	>
		<Label.Root className={styles.Root} htmlFor="firstName">
			First name
		</Label.Root>
		<input
			className={styles.Input}
			type="text"
			id="firstName"
			defaultValue="Pedro Duarte"
		/>
	</div>
);

export default LabelDemo;
