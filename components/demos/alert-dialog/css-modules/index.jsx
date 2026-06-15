import * as React from "react";
import { AlertDialog } from "radix-ui";
import styles from "./styles.module.css";

const AlertDialogDemo = () => (
	<AlertDialog.Root className={styles.Root}>
		<AlertDialog.Trigger asChild>
			<button className={`${styles.Button} violet`}>Delete account</button>
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className={styles.Overlay} />
			<AlertDialog.Content className={styles.Content}>
				<AlertDialog.Title className={styles.Title}>
					Are you absolutely sure?
				</AlertDialog.Title>
				<AlertDialog.Description className={styles.Description}>
					This action cannot be undone. This will permanently delete your
					account and remove your data from our servers.
				</AlertDialog.Description>
				<div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
					<AlertDialog.Cancel asChild>
						<button className={`${styles.Button} muave`}>Cancel</button>
					</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<button className={`${styles.Button} red`}>
							Yes, delete account
						</button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
);

export default AlertDialogDemo;
