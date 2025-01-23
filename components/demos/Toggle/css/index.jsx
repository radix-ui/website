import * as React from "react";
import { Toggle } from "radix-ui";
import { FontItalicIcon } from "@radix-ui/react-icons";
import "./styles.css";

const ToggleDemo = () => (
	<Toggle.Root className="Toggle" aria-label="Toggle italic">
		<FontItalicIcon />
	</Toggle.Root>
);

export default ToggleDemo;
