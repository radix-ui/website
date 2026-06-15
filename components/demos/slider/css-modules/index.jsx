import * as React from "react";
import { Slider } from "radix-ui";
import styles from "./styles.module.css";

const SliderDemo = () => (
	<form>
		<Slider.Root className={styles.Root} defaultValue={[50]} max={100} step={1}>
			<Slider.Track className={styles.Track}>
				<Slider.Range className={styles.Range} />
			</Slider.Track>
			<Slider.Thumb className={styles.Thumb} aria-label="Volume" />
		</Slider.Root>
	</form>
);

export default SliderDemo;
