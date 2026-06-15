import * as React from "react";
import { Switch } from "radix-ui";
import "./styles.css";

const SwitchDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<label
				id="airplane-mode-label"
				htmlFor="airplane-mode"
				className="Label"
				style={{ paddingRight: 15 }}
			>
				Airplane mode
			</label>
			<Switch.Root
				id="airplane-mode"
				aria-labelledby="airplane-mode-label"
				className="SwitchRoot"
			>
				<Switch.Thumb className="SwitchThumb" />
			</Switch.Root>
		</div>
	</form>
);

export default SwitchDemo;
