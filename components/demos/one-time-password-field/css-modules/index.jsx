import * as React from "react";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
import styles from "./styles.module.css";

const OneTimePasswordFieldDemo = () => (
	<OneTimePasswordField.Root className={styles.Root}>
		<OneTimePasswordField.Input className={styles.Input} />
		<OneTimePasswordField.Input className={styles.Input} />
		<OneTimePasswordField.Input className={styles.Input} />
		<OneTimePasswordField.Input className={styles.Input} />
		<OneTimePasswordField.Input className={styles.Input} />
		<OneTimePasswordField.Input className={styles.Input} />
		<OneTimePasswordField.HiddenInput />
	</OneTimePasswordField.Root>
);

export default OneTimePasswordFieldDemo;
