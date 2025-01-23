import * as React from "react";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import "./styles.css";

const CheckboxDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
				<Checkbox.Indicator className="CheckboxIndicator">
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className="Label" htmlFor="c1">
				Accept terms and conditions.
			</label>
		</div>
	</form>
);

export default CheckboxDemo;
