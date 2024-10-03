import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";

const DropdownMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					className="inline-flex size-[35px] items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
					aria-label="Customise options"
				>
					<HamburgerMenuIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
					sideOffset={5}
				>
					<DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
						New Tab{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⌘+T
						</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
						New Window{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⌘+N
						</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item
						className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
						disabled
					>
						New Private Window{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⇧+⌘+N
						</div>
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:data-[state=open]:bg-violet9 data-[state=open]:bg-violet4 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
							More Tools
							<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
								<ChevronRightIcon />
							</div>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent
								className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
								sideOffset={2}
								alignOffset={-5}
							>
								<DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Save Page As…{" "}
									<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
										⌘+S
									</div>
								</DropdownMenu.Item>
								<DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Create Shortcut…
								</DropdownMenu.Item>
								<DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Name Window…
								</DropdownMenu.Item>
								<DropdownMenu.Separator className="m-[5px] h-px bg-violet6" />
								<DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
									Developer Tools
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>

					<DropdownMenu.Separator className="m-[5px] h-px bg-violet6" />

					<DropdownMenu.CheckboxItem
						className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Bookmarks{" "}
						<div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
							⌘+B
						</div>
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem
						className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Full URLs
					</DropdownMenu.CheckboxItem>

					<DropdownMenu.Separator className="m-[5px] h-px bg-violet6" />

					<DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
						People
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
						<DropdownMenu.RadioItem
							className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
							value="pedro"
						>
							<DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Pedro Duarte
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem
							className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
							value="colm"
						>
							<DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Colm Tuite
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>

					<DropdownMenu.Arrow className="fill-white" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default DropdownMenuDemo;
