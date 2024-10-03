import React from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import {
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";

const ContextMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");

	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger className="block w-[300px] select-none rounded border-2 border-dashed border-white py-[45px] text-center text-[15px] text-white">
				Right-click here.
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content
					className="min-w-[220px] overflow-hidden rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
					sideOffset={5}
					align="end"
				>
					<ContextMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
						Back{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⌘+[
						</div>
					</ContextMenu.Item>
					<ContextMenu.Item
						className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
						disabled
					>
						Forward{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⌘+]
						</div>
					</ContextMenu.Item>
					<ContextMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
						Reload{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⌘+R
						</div>
					</ContextMenu.Item>
					<ContextMenu.Sub>
						<ContextMenu.SubTrigger className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:data-[state=open]:bg-violet9 data-[state=open]:bg-violet4 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
							More Tools
							<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
								<ChevronRightIcon />
							</div>
						</ContextMenu.SubTrigger>
						<ContextMenu.Portal>
							<ContextMenu.SubContent
								className="min-w-[220px] overflow-hidden rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
								sideOffset={2}
								alignOffset={-5}
							>
								<ContextMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Save Page As…{" "}
									<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
										⌘+S
									</div>
								</ContextMenu.Item>
								<ContextMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Create Shortcut…
								</ContextMenu.Item>
								<ContextMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Name Window…
								</ContextMenu.Item>
								<ContextMenu.Separator className="m-[5px] h-px bg-violet6" />
								<ContextMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Developer Tools
								</ContextMenu.Item>
							</ContextMenu.SubContent>
						</ContextMenu.Portal>
					</ContextMenu.Sub>

					<ContextMenu.Separator className="m-[5px] h-px bg-violet6" />

					<ContextMenu.CheckboxItem
						className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<ContextMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
							<CheckIcon />
						</ContextMenu.ItemIndicator>
						Show Bookmarks{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⌘+B
						</div>
					</ContextMenu.CheckboxItem>
					<ContextMenu.CheckboxItem
						className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<ContextMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
							<CheckIcon />
						</ContextMenu.ItemIndicator>
						Show Full URLs
					</ContextMenu.CheckboxItem>

					<ContextMenu.Separator className="m-[5px] h-px bg-violet6" />

					<ContextMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
						People
					</ContextMenu.Label>
					<ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
						<ContextMenu.RadioItem
							className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
							value="pedro"
						>
							<ContextMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
								<DotFilledIcon />
							</ContextMenu.ItemIndicator>
							Pedro Duarte
						</ContextMenu.RadioItem>
						<ContextMenu.RadioItem
							className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
							value="colm"
						>
							<ContextMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
								<DotFilledIcon />
							</ContextMenu.ItemIndicator>
							Colm Tuite
						</ContextMenu.RadioItem>
					</ContextMenu.RadioGroup>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	);
};

export default ContextMenuDemo;
