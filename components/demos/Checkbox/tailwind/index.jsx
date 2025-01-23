import * as React from "react";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckboxDemo = () => (
	<form>
		<div className="flex items-center">
			<Checkbox.Root
				className="flex size-[25px] appearance-none items-center justify-center rounded bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
				defaultChecked
				id="c1"
			>
				<Checkbox.Indicator className="text-violet11">
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label
				className="pl-[15px] text-[15px] leading-none text-white"
				htmlFor="c1"
			>
				Accept terms and conditions.
			</label>
		</div>
	</form>
);

export default CheckboxDemo;
