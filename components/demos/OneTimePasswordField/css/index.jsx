import * as React from "react";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";

const OneTimePasswordFieldDemo = () => (
	<OneTimePasswordField.Root className="OTPRoot">
		<OneTimePasswordField.Input className="OTPInput" />
		<OneTimePasswordField.Input className="OTPInput" />
		<OneTimePasswordField.Input className="OTPInput" />
		<OneTimePasswordField.Input className="OTPInput" />
		<OneTimePasswordField.Input className="OTPInput" />
		<OneTimePasswordField.Input className="OTPInput" />
		<OneTimePasswordField.HiddenInput />
	</OneTimePasswordField.Root>
);

export default OneTimePasswordFieldDemo;
