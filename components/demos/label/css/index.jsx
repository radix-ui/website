import * as React from "react";
import { Label } from "radix-ui";
import "./styles.css";

const LabelDemo = () => (
	<div
		style={{
			display: "flex",
			padding: "0 20px",
			flexWrap: "wrap",
			gap: 15,
			alignItems: "center",
		}}
	>
		<Label.Root className="LabelRoot" htmlFor="firstName">
			First name
		</Label.Root>
		<input
			className="Input"
			type="text"
			id="firstName"
			defaultValue="Pedro Duarte"
		/>
	</div>
);

export default LabelDemo;
