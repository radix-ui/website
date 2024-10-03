import React from "react";
import * as Slider from "@radix-ui/react-slider";
import "./styles.css";

const SliderDemo = () => (
	<form>
		<Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
			<Slider.Track className="SliderTrack">
				<Slider.Range className="SliderRange" />
			</Slider.Track>
			<Slider.Thumb className="SliderThumb" aria-label="Volume" />
		</Slider.Root>
	</form>
);

export default SliderDemo;
