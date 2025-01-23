import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";
import { styled } from "@utils/css";
import styles from "./PrimitivesHeroSlider.module.css";

const StyledSlider = styled(SliderPrimitive.Root, styles.Slider);
const StyledTrack = styled(SliderPrimitive.Track, styles.Track);
const StyledRange = styled(SliderPrimitive.Range, styles.Range);
const StyledThumb = styled(SliderPrimitive.Thumb, styles.Thumb);

export function PrimitivesHeroSlider() {
	return (
		<StyledSlider defaultValue={[50]} max={100} step={1} aria-label="Volume">
			<StyledTrack>
				<StyledRange />
			</StyledTrack>
			<StyledThumb />
		</StyledSlider>
	);
}
