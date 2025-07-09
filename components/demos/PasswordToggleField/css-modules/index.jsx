import * as React from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const PasswordToggleFieldDemo = () => (
	<PasswordToggleField.Root>
		<div className={styles.Root}>
			<PasswordToggleField.Input className={styles.Input} />
			<PasswordToggleField.Toggle className={styles.Toggle}>
				<PasswordToggleField.Icon
					visible={<EyeOpenIcon />}
					hidden={<EyeClosedIcon />}
				/>
			</PasswordToggleField.Toggle>
		</div>
	</PasswordToggleField.Root>
);

export default PasswordToggleFieldDemo;
