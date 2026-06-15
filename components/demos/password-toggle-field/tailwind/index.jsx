import * as React from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const PasswordToggleFieldDemo = () => (
	<PasswordToggleField.Root>
		<div className="flex flex-nowrap items-center justify-center rounded-[4px] text-white bg-black-a2 shadow-[0_0_0_1px_var(--black-a6)] px-[0.75em] pr-[9px] h-[36px] gap-2 hover:shadow-[0_0_0_1px_black] focus-within:shadow-[0_0_0_2px_black]">
			<PasswordToggleField.Input className="all-[unset] box-border h-[18px] text-[15px] text-inherit leading-[1] selection:bg-blackA6 selection:text-white" />
			<PasswordToggleField.Toggle className="all-[unset] box-border h-[18px] text-[15px] text-inherit leading-[1] flex items-center justify-center aspect-[1/1] rounded-[0.5px] focus-visible:outline-[2px] focus-visible:outline-accent-9 focus-visible:outline-offset-[2px]">
				<PasswordToggleField.Icon
					visible={<EyeOpenIcon />}
					hidden={<EyeClosedIcon />}
				/>
			</PasswordToggleField.Toggle>
		</div>
	</PasswordToggleField.Root>
);

export default PasswordToggleFieldDemo;
