import * as React from "react";
import { Slider } from "radix-ui";

const SliderDemo = () => (
	<form>
		<Slider.Root
			className="relative flex h-5 w-[200px] touch-none select-none items-center"
			defaultValue={[50]}
			max={100}
			step={1}
		>
			<Slider.Track className="relative h-[3px] grow rounded-full bg-blackA7">
				<Slider.Range className="absolute h-full rounded-full bg-white" />
			</Slider.Track>
			<Slider.Thumb
				className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
				aria-label="Volume"
			/>
		</Slider.Root>
	</form>
);

export default SliderDemo;
