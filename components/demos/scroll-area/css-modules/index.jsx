import * as React from "react";
import { ScrollArea } from "radix-ui";
import styles from "./styles.module.css";

const TAGS = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const ScrollAreaDemo = () => (
	<ScrollArea.Root className={styles.Root}>
		<ScrollArea.Viewport className={styles.Viewport}>
			<div style={{ padding: "15px 20px" }}>
				<div className={styles.Text}>Tags</div>
				{TAGS.map((tag) => (
					<div className={styles.Tag} key={tag}>
						{tag}
					</div>
				))}
			</div>
		</ScrollArea.Viewport>
		<ScrollArea.Scrollbar className={styles.Scrollbar} orientation="vertical">
			<ScrollArea.Thumb className={styles.Thumb} />
		</ScrollArea.Scrollbar>
		<ScrollArea.Scrollbar className={styles.Scrollbar} orientation="horizontal">
			<ScrollArea.Thumb className={styles.Thumb} />
		</ScrollArea.Scrollbar>
		<ScrollArea.Corner className={styles.Corner} />
	</ScrollArea.Root>
);

export default ScrollAreaDemo;
