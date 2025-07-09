import * as React from "react";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";

const OneTimePasswordFieldDemo = () => (
	<OneTimePasswordField.Root className="flex gap-2 flex-nowrap">
		{Array.from({ length: 6 }).map((_, i) => (
			<OneTimePasswordField.Input
				key={i}
				className="box-border inline-flex h-[35px] w-6 appearance-none items-center justify-center rounded bg-blackA2 p-0 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
			/>
		))}
		<OneTimePasswordField.HiddenInput />
	</OneTimePasswordField.Root>
);

export default OneTimePasswordFieldDemo;
