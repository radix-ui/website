import * as React from "react";
import { Separator } from "radix-ui";
import "./styles.css";

const SeparatorDemo = () => (
	<div style={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
		<div className="Text" style={{ fontWeight: 500 }}>
			Radix Primitives
		</div>
		<div className="Text">An open-source UI component library.</div>
		<Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
		<div style={{ display: "flex", height: 20, alignItems: "center" }}>
			<div className="Text">Blog</div>
			<Separator.Root
				className="SeparatorRoot"
				decorative
				orientation="vertical"
				style={{ margin: "0 15px" }}
			/>
			<div className="Text">Docs</div>
			<Separator.Root
				className="SeparatorRoot"
				decorative
				orientation="vertical"
				style={{ margin: "0 15px" }}
			/>
			<div className="Text">Source</div>
		</div>
	</div>
);

export default SeparatorDemo;
