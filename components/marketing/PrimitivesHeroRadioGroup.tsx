import { Text } from "@radix-ui/themes";
import { styled } from "@utils/css";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import styles from "./PrimitivesHeroRadioGroup.module.css";

export const RadioCards = styled(RadioGroupPrimitive.Root, styles.Cards);
const StyledRadioButton = styled("div", styles.RadioButton);
const StyledRadioIndicator = styled("div", styles.RadioIndicator);
const StyledRadio = styled(RadioGroupPrimitive.Item, styles.Radio);

export function PrimitivesHeroRadioGroup() {
	return (
		<RadioCards defaultValue="1">
			<StyledRadio value="1">
				<StyledRadioButton>
					<StyledRadioIndicator />
				</StyledRadioButton>
				<Text size="2">Indigo Blue</Text>
			</StyledRadio>
			<StyledRadio value="2">
				<StyledRadioButton>
					<StyledRadioIndicator />
				</StyledRadioButton>
				<Text size="2">Taupe Brown</Text>
			</StyledRadio>
			<StyledRadio value="3">
				<StyledRadioButton>
					<StyledRadioIndicator />
				</StyledRadioButton>
				<Text size="2">Slate Gray</Text>
			</StyledRadio>
		</RadioCards>
	);
}
