import React from "react";
import { DropdownMenu } from "radix-ui";
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const DropdownMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className={styles.IconButton} aria-label="Customise options">
					<HamburgerMenuIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className={styles.Content} sideOffset={5}>
					<DropdownMenu.Item className={styles.Item}>
						New Tab <div className={styles.RightSlot}>⌘+T</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item className={styles.Item}>
						New Window <div className={styles.RightSlot}>⌘+N</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item className={styles.Item} disabled>
						New Private Window <div className={styles.RightSlot}>⇧+⌘+N</div>
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger className={styles.SubTrigger}>
							More Tools
							<div className={styles.RightSlot}>
								<ChevronRightIcon />
							</div>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent
								className={styles.SubContent}
								sideOffset={2}
								alignOffset={-5}
							>
								<DropdownMenu.Item className={styles.Item}>
									Save Page As… <div className={styles.RightSlot}>⌘+S</div>
								</DropdownMenu.Item>
								<DropdownMenu.Item className={styles.Item}>
									Create Shortcut…
								</DropdownMenu.Item>
								<DropdownMenu.Item className={styles.Item}>
									Name Window…
								</DropdownMenu.Item>
								<DropdownMenu.Separator className={styles.Separator} />
								<DropdownMenu.Item className={styles.Item}>
									Developer Tools
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>

					<DropdownMenu.Separator className={styles.Separator} />

					<DropdownMenu.CheckboxItem
						className={styles.CheckboxItem}
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<DropdownMenu.ItemIndicator className={styles.ItemIndicator}>
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Bookmarks <div className={styles.RightSlot}>⌘+B</div>
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem
						className={styles.CheckboxItem}
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<DropdownMenu.ItemIndicator className={styles.ItemIndicator}>
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Full URLs
					</DropdownMenu.CheckboxItem>

					<DropdownMenu.Separator className={styles.Separator} />

					<DropdownMenu.Label className={styles.Label}>
						People
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
						<DropdownMenu.RadioItem className={styles.RadioItem} value="pedro">
							<DropdownMenu.ItemIndicator className={styles.ItemIndicator}>
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Pedro Duarte
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem className={styles.RadioItem} value="colm">
							<DropdownMenu.ItemIndicator className={styles.ItemIndicator}>
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Colm Tuite
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>

					<DropdownMenu.Arrow className={styles.Arrow} />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default DropdownMenuDemo;
