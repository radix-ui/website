import * as React from "react";
import { Toggle } from "radix-ui";
import { FontItalicIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const ToggleDemo = () => (
	<Toggle.Root className={styles.Toggle} aria-label="Toggle italic">
		<FontItalicIcon />
	</Toggle.Root>
);

export default ToggleDemo;
