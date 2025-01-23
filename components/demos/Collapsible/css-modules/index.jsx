import * as React from "react";
import { Collapsible } from "radix-ui";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const CollapsibleDemo = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<Collapsible.Root
			className={styles.Root}
			open={open}
			onOpenChange={setOpen}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<span className={styles.Text} style={{ color: "white" }}>
					@peduarte starred 3 repositories
				</span>
				<Collapsible.Trigger asChild>
					<button className={styles.IconButton}>
						{open ? <Cross2Icon /> : <RowSpacingIcon />}
					</button>
				</Collapsible.Trigger>
			</div>

			<div className={styles.Repository}>
				<span className={styles.Text}>@radix-ui/primitives</span>
			</div>

			<Collapsible.Content>
				<div className={styles.Repository}>
					<span className={styles.Text}>@radix-ui/colors</span>
				</div>
				<div className={styles.Repository}>
					<span className={styles.Text}>@radix-ui/themes</span>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
};

export default CollapsibleDemo;
