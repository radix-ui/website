import * as React from "react";
import { AspectRatio } from "radix-ui";
import styles from "./styles.module.css";

const AspectRatioDemo = () => (
	<div className={styles.Container}>
		<AspectRatio.Root ratio={16 / 9}>
			<img
				className={styles.Image}
				src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
				alt="Landscape photograph by Tobias Tullius"
			/>
		</AspectRatio.Root>
	</div>
);

export default AspectRatioDemo;
