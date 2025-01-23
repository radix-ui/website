import * as React from "react";
import { Tabs } from "radix-ui";
import styles from "./styles.module.css";

const TabsDemo = () => (
	<Tabs.Root className={styles.Root} defaultValue="tab1">
		<Tabs.List className={styles.List} aria-label="Manage your account">
			<Tabs.Trigger className={styles.Trigger} value="tab1">
				Account
			</Tabs.Trigger>
			<Tabs.Trigger className={styles.Trigger} value="tab2">
				Password
			</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content className={styles.Content} value="tab1">
			<p className={styles.Text}>
				Make changes to your account here. Click save when you're done.
			</p>
			<fieldset className={styles.Fieldset}>
				<label className={styles.Label} htmlFor="name">
					Name
				</label>
				<input className={styles.Input} id="name" defaultValue="Pedro Duarte" />
			</fieldset>
			<fieldset className={styles.Fieldset}>
				<label className={styles.Label} htmlFor="username">
					Username
				</label>
				<input
					className={styles.Input}
					id="username"
					defaultValue="@peduarte"
				/>
			</fieldset>
			<div
				style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
			>
				<button className={`${styles.Button} green`}>Save changes</button>
			</div>
		</Tabs.Content>
		<Tabs.Content className={styles.Content} value="tab2">
			<p className={styles.Text}>
				Change your password here. After saving, you'll be logged out.
			</p>
			<fieldset className={styles.Fieldset}>
				<label className={styles.Label} htmlFor="currentPassword">
					Current password
				</label>
				<input className={styles.Input} id="currentPassword" type="password" />
			</fieldset>
			<fieldset className={styles.Fieldset}>
				<label className={styles.Label} htmlFor="newPassword">
					New password
				</label>
				<input className={styles.Input} id="newPassword" type="password" />
			</fieldset>
			<fieldset className={styles.Fieldset}>
				<label className={styles.Label} htmlFor="confirmPassword">
					Confirm password
				</label>
				<input className={styles.Input} id="confirmPassword" type="password" />
			</fieldset>
			<div
				style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
			>
				<button className={`${styles.Button} green`}>Change password</button>
			</div>
		</Tabs.Content>
	</Tabs.Root>
);

export default TabsDemo;
