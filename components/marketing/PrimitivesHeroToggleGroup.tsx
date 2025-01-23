import * as React from "react";
import { styled } from "@utils/css";
import {
	TextAlignCenterIcon,
	TextAlignLeftIcon,
	TextAlignRightIcon,
} from "@radix-ui/react-icons";
import styles from "./PrimitivesHeroToggleGroup.module.css";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";

const ToggleGroup = styled(ToggleGroupPrimitive.Root, styles.ToggleGroup);
const ToggleGroupItem = styled(ToggleGroupPrimitive.Item, styles.Item);

export function PrimitivesHeroToggleGroup() {
	return (
		<ToggleGroup
			type="single"
			defaultValue="center"
			aria-label="Text alignment"
		>
			<ToggleGroupItem value="left" aria-label="Left aligned">
				<TextAlignLeftIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Center aligned">
				<TextAlignCenterIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Right aligned">
				<TextAlignRightIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
