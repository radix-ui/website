import * as React from "react";
import { Separator } from "radix-ui";

const SeparatorDemo = () => (
	<div className="mx-[15px] w-full max-w-[300px]">
		<div className="text-[15px] font-medium leading-5 text-white">
			Radix Primitives
		</div>
		<div className="text-[15px] leading-5 text-white">
			An open-source UI component library.
		</div>
		<Separator.Root className="my-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
		<div className="flex h-5 items-center">
			<div className="text-[15px] leading-5 text-white">Blog</div>
			<Separator.Root
				className="mx-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
				decorative
				orientation="vertical"
			/>
			<div className="text-[15px] leading-5 text-white">Docs</div>
			<Separator.Root
				className="mx-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
				decorative
				orientation="vertical"
			/>
			<div className="text-[15px] leading-5 text-white">Source</div>
		</div>
	</div>
);

export default SeparatorDemo;
