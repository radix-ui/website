import * as React from "react";
import { Slider } from "radix-ui";
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
