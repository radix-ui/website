import * as React from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const PasswordToggleFieldDemo = () => (
	<PasswordToggleField.Root>
		<div className="Root">
			<PasswordToggleField.Input className="Input" />
			<PasswordToggleField.Toggle className="Toggle">
				<PasswordToggleField.Icon
					visible={<EyeOpenIcon />}
					hidden={<EyeClosedIcon />}
				/>
			</PasswordToggleField.Toggle>
		</div>
	</PasswordToggleField.Root>
);

export default PasswordToggleFieldDemo;
