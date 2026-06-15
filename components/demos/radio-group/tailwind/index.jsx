import * as React from "react";
import { RadioGroup } from "radix-ui";

const RadioGroupDemo = () => (
	<form>
		<RadioGroup.Root
			className="flex flex-col gap-2.5"
			defaultValue="default"
			aria-label="View density"
		>
			<div className="flex items-center">
				<RadioGroup.Item
					className="size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
					value="default"
					id="r1"
				>
					<RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
				</RadioGroup.Item>
				<label
					className="pl-[15px] text-[15px] leading-none text-white"
					htmlFor="r1"
				>
					Default
				</label>
			</div>
			<div className="flex items-center">
				<RadioGroup.Item
					className="size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
					value="comfortable"
					id="r2"
				>
					<RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
				</RadioGroup.Item>
				<label
					className="pl-[15px] text-[15px] leading-none text-white"
					htmlFor="r2"
				>
					Comfortable
				</label>
			</div>
			<div className="flex items-center">
				<RadioGroup.Item
					className="size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
					value="compact"
					id="r3"
				>
					<RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
				</RadioGroup.Item>
				<label
					className="pl-[15px] text-[15px] leading-none text-white"
					htmlFor="r3"
				>
					Compact
				</label>
			</div>
		</RadioGroup.Root>
	</form>
);

export default RadioGroupDemo;
