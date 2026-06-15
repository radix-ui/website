import * as React from "react";
import { Toolbar } from "radix-ui";
import {
	StrikethroughIcon,
	TextAlignLeftIcon,
	TextAlignCenterIcon,
	TextAlignRightIcon,
	FontBoldIcon,
	FontItalicIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const ToolbarDemo = () => (
	<Toolbar.Root className={styles.Root} aria-label="Formatting options">
		<Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
			<Toolbar.ToggleItem
				className={styles.ToggleItem}
				value="bold"
				aria-label="Bold"
			>
				<FontBoldIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={styles.ToggleItem}
				value="italic"
				aria-label="Italic"
			>
				<FontItalicIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={styles.ToggleItem}
				value="strikethrough"
				aria-label="Strike through"
			>
				<StrikethroughIcon />
			</Toolbar.ToggleItem>
		</Toolbar.ToggleGroup>
		<Toolbar.Separator className={styles.Separator} />
		<Toolbar.ToggleGroup
			type="single"
			defaultValue="center"
			aria-label="Text alignment"
		>
			<Toolbar.ToggleItem
				className={styles.ToggleItem}
				value="left"
				aria-label="Left aligned"
			>
				<TextAlignLeftIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={styles.ToggleItem}
				value="center"
				aria-label="Center aligned"
			>
				<TextAlignCenterIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={styles.ToggleItem}
				value="right"
				aria-label="Right aligned"
			>
				<TextAlignRightIcon />
			</Toolbar.ToggleItem>
		</Toolbar.ToggleGroup>
		<Toolbar.Separator className={styles.Separator} />
		<Toolbar.Link
			className={styles.Link}
			href="#"
			target="_blank"
			style={{ marginRight: 10 }}
		>
			Edited 2 hours ago
		</Toolbar.Link>
		<Toolbar.Button className={styles.Button} style={{ marginLeft: "auto" }}>
			Share
		</Toolbar.Button>
	</Toolbar.Root>
);

export default ToolbarDemo;
