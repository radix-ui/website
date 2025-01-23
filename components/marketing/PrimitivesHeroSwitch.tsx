import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";
import { styled } from "@utils/css";
import styles from "./PrimitivesHeroSwitch.module.css";

const Switch = styled(SwitchPrimitive.Root, styles.Switch);
const SwitchThumb = styled(SwitchPrimitive.Thumb, styles.Thumb);

export function PrimitivesHeroSwitch() {
	return (
		<Switch defaultChecked aria-label="Demo switch">
			<SwitchThumb />
		</Switch>
	);
}
