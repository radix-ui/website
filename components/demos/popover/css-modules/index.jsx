import * as React from "react";
import { Popover } from "radix-ui";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const PopoverDemo = () => (
	<Popover.Root>
		<Popover.Trigger asChild>
			<button className={styles.IconButton} aria-label="Update dimensions">
				<MixerHorizontalIcon />
			</button>
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className={styles.Content} sideOffset={5}>
				<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
					<p className={styles.Text} style={{ marginBottom: 10 }}>
						Dimensions
					</p>
					<fieldset className={styles.Fieldset}>
						<label className={styles.Label} htmlFor="width">
							Width
						</label>
						<input className={styles.Input} id="width" defaultValue="100%" />
					</fieldset>
					<fieldset className={styles.Fieldset}>
						<label className={styles.Label} htmlFor="maxWidth">
							Max. width
						</label>
						<input
							className={styles.Input}
							id="maxWidth"
							defaultValue="300px"
						/>
					</fieldset>
					<fieldset className={styles.Fieldset}>
						<label className={styles.Label} htmlFor="height">
							Height
						</label>
						<input className={styles.Input} id="height" defaultValue="25px" />
					</fieldset>
					<fieldset className={styles.Fieldset}>
						<label className={styles.Label} htmlFor="maxHeight">
							Max. height
						</label>
						<input
							className={styles.Input}
							id="maxHeight"
							defaultValue="none"
						/>
					</fieldset>
				</div>
				<Popover.Close className={styles.Close} aria-label="Close">
					<Cross2Icon />
				</Popover.Close>
				<Popover.Arrow className={styles.Arrow} />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);

export default PopoverDemo;
