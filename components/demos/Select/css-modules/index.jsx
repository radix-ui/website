import * as React from "react";
import { Select } from "radix-ui";
import classnames from "classnames";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const SelectDemo = () => (
	<Select.Root>
		<Select.Trigger className={styles.Trigger} aria-label="Food">
			<Select.Value placeholder="Select a fruit…" />
			<Select.Icon className={styles.Icon}>
				<ChevronDownIcon />
			</Select.Icon>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content className={styles.Content}>
				<Select.ScrollUpButton className={styles.ScrollButton}>
					<ChevronUpIcon />
				</Select.ScrollUpButton>
				<Select.Viewport className={styles.Viewport}>
					<Select.Group>
						<Select.Label className={styles.Label}>Fruits</Select.Label>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</Select.Group>

					<Select.Separator className={styles.Separator} />

					<Select.Group>
						<Select.Label className={styles.Label}>Vegetables</Select.Label>
						<SelectItem value="aubergine">Aubergine</SelectItem>
						<SelectItem value="broccoli">Broccoli</SelectItem>
						<SelectItem value="carrot" disabled>
							Carrot
						</SelectItem>
						<SelectItem value="courgette">Courgette</SelectItem>
						<SelectItem value="leek">Leek</SelectItem>
					</Select.Group>

					<Select.Separator className={styles.Separator} />

					<Select.Group>
						<Select.Label className={styles.Label}>Meat</Select.Label>
						<SelectItem value="beef">Beef</SelectItem>
						<SelectItem value="chicken">Chicken</SelectItem>
						<SelectItem value="lamb">Lamb</SelectItem>
						<SelectItem value="pork">Pork</SelectItem>
					</Select.Group>
				</Select.Viewport>
				<Select.ScrollDownButton className={styles.ScrollButton}>
					<ChevronDownIcon />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
);

const SelectItem = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => {
		return (
			<Select.Item
				className={classnames(styles.Item, className)}
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className={styles.ItemIndicator}>
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
		);
	},
);

export default SelectDemo;
