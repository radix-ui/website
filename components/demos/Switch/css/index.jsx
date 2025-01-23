import * as React from "react";
import { Switch } from "radix-ui";
import "./styles.css";

const SwitchDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<label
				className="Label"
				htmlFor="airplane-mode"
				style={{ paddingRight: 15 }}
			>
				Airplane mode
			</label>
			<Switch.Root className="SwitchRoot" id="airplane-mode">
				<Switch.Thumb className="SwitchThumb" />
			</Switch.Root>
		</div>
	</form>
);

export default SwitchDemo;
