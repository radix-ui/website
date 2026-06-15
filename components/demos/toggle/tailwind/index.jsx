import * as React from "react";
import { Toggle } from "radix-ui";
import { FontItalicIcon } from "@radix-ui/react-icons";

const ToggleDemo = () => (
	<Toggle.Root
		aria-label="Toggle italic"
		className="flex size-[35px] items-center justify-center rounded bg-white leading-4 text-mauve11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=on]:bg-violet6 data-[state=on]:text-violet12"
	>
		<FontItalicIcon />
	</Toggle.Root>
);

export default ToggleDemo;
