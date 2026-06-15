import * as React from "react";
import { Separator } from "radix-ui";
import styles from "./styles.module.css";

const SeparatorDemo = () => (
	<div style={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
		<div className={styles.Text} style={{ fontWeight: 500 }}>
			Radix Primitives
		</div>
		<div className={styles.Text}>An open-source UI component library.</div>
		<Separator.Root className={styles.Root} style={{ margin: "15px 0" }} />
		<div style={{ display: "flex", height: 20, alignItems: "center" }}>
			<div className={styles.Text}>Blog</div>
			<Separator.Root
				className={styles.Root}
				decorative
				orientation="vertical"
				style={{ margin: "0 15px" }}
			/>
			<div className={styles.Text}>Docs</div>
			<Separator.Root
				className={styles.Root}
				decorative
				orientation="vertical"
				style={{ margin: "0 15px" }}
			/>
			<div className={styles.Text}>Source</div>
		</div>
	</div>
);

export default SeparatorDemo;
