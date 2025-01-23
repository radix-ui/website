import * as React from "react";
import { Menubar } from "radix-ui";
import {
	CheckIcon,
	ChevronRightIcon,
	DotFilledIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
	const [checkedSelection, setCheckedSelection] = React.useState([
		CHECK_ITEMS[1],
	]);
	const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

	return (
		<Menubar.Root className={styles.Root}>
			<Menubar.Menu>
				<Menubar.Trigger className={styles.Trigger}>File</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={styles.Content}
						align="start"
						sideOffset={5}
						alignOffset={-3}
					>
						<Menubar.Item className={styles.Item}>
							New Tab <div className={styles.RightSlot}>⌘ T</div>
						</Menubar.Item>
						<Menubar.Item className={styles.Item}>
							New Window <div className={styles.RightSlot}>⌘ N</div>
						</Menubar.Item>
						<Menubar.Item className={styles.Item} disabled>
							New Incognito Window
						</Menubar.Item>
						<Menubar.Separator className={styles.Separator} />
						<Menubar.Sub>
							<Menubar.SubTrigger className={styles.SubTrigger}>
								Share
								<div className={styles.RightSlot}>
									<ChevronRightIcon />
								</div>
							</Menubar.SubTrigger>
							<Menubar.Portal>
								<Menubar.SubContent
									className={styles.SubContent}
									alignOffset={-5}
								>
									<Menubar.Item className={styles.Item}>
										Email Link
									</Menubar.Item>
									<Menubar.Item className={styles.Item}>Messages</Menubar.Item>
									<Menubar.Item className={styles.Item}>Notes</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Portal>
						</Menubar.Sub>
						<Menubar.Separator className={styles.Separator} />
						<Menubar.Item className={styles.Item}>
							Print… <div className={styles.RightSlot}>⌘ P</div>
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className={styles.Trigger}>Edit</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={styles.Content}
						align="start"
						sideOffset={5}
						alignOffset={-3}
					>
						<Menubar.Item className={styles.Item}>
							Undo <div className={styles.RightSlot}>⌘ Z</div>
						</Menubar.Item>
						<Menubar.Item className={styles.Item}>
							Redo <div className={styles.RightSlot}>⇧ ⌘ Z</div>
						</Menubar.Item>
						<Menubar.Separator className={styles.Separator} />
						<Menubar.Sub>
							<Menubar.SubTrigger className={styles.SubTrigger}>
								Find
								<div className={styles.RightSlot}>
									<ChevronRightIcon />
								</div>
							</Menubar.SubTrigger>

							<Menubar.Portal>
								<Menubar.SubContent
									className={styles.SubContent}
									alignOffset={-5}
								>
									<Menubar.Item className={styles.Item}>
										Search the web…
									</Menubar.Item>
									<Menubar.Separator className={styles.Separator} />
									<Menubar.Item className={styles.Item}>Find…</Menubar.Item>
									<Menubar.Item className={styles.Item}>Find Next</Menubar.Item>
									<Menubar.Item className={styles.Item}>
										Find Previous
									</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Portal>
						</Menubar.Sub>
						<Menubar.Separator className={styles.Separator} />
						<Menubar.Item className={styles.Item}>Cut</Menubar.Item>
						<Menubar.Item className={styles.Item}>Copy</Menubar.Item>
						<Menubar.Item className={styles.Item}>Paste</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className={styles.Trigger}>View</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={styles.Content}
						align="start"
						sideOffset={5}
						alignOffset={-14}
					>
						{CHECK_ITEMS.map((item) => (
							<Menubar.CheckboxItem
								className={`${styles.CheckboxItem} inset`}
								key={item}
								checked={checkedSelection.includes(item)}
								onCheckedChange={() =>
									setCheckedSelection((current) =>
										current.includes(item)
											? current.filter((el) => el !== item)
											: current.concat(item),
									)
								}
							>
								<Menubar.ItemIndicator className={styles.ItemIndicator}>
									<CheckIcon />
								</Menubar.ItemIndicator>
								{item}
							</Menubar.CheckboxItem>
						))}
						<Menubar.Separator className={styles.Separator} />
						<Menubar.Item className={`${styles.Item} inset`}>
							Reload <div className={styles.RightSlot}>⌘ R</div>
						</Menubar.Item>
						<Menubar.Item className={`${styles.Item} inset`} disabled>
							Force Reload <div className={styles.RightSlot}>⇧ ⌘ R</div>
						</Menubar.Item>
						<Menubar.Separator className={styles.Separator} />
						<Menubar.Item className={`${styles.Item} inset`}>
							Toggle Fullscreen
						</Menubar.Item>
						<Menubar.Separator className={styles.Separator} />
						<Menubar.Item className={`${styles.Item} inset`}>
							Hide Sidebar
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className={styles.Trigger}>Profiles</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={styles.Content}
						align="start"
						sideOffset={5}
						alignOffset={-14}
					>
						<Menubar.RadioGroup
							value={radioSelection}
							onValueChange={setRadioSelection}
						>
							{RADIO_ITEMS.map((item) => (
								<Menubar.RadioItem
									className={`${styles.RadioItem} inset`}
									key={item}
									value={item}
								>
									<Menubar.ItemIndicator className={styles.ItemIndicator}>
										<DotFilledIcon />
									</Menubar.ItemIndicator>
									{item}
								</Menubar.RadioItem>
							))}
							<Menubar.Separator className={styles.Separator} />
							<Menubar.Item className={`${styles.Item} inset`}>
								Edit…
							</Menubar.Item>
							<Menubar.Separator className={styles.Separator} />
							<Menubar.Item className={`${styles.Item} inset`}>
								Add Profile…
							</Menubar.Item>
						</Menubar.RadioGroup>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>
		</Menubar.Root>
	);
};

export default MenubarDemo;
