import * as React from "react";
import { Collapsible } from "radix-ui";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

const CollapsibleDemo = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<Collapsible.Root className="w-[300px]" open={open} onOpenChange={setOpen}>
			<div className="flex items-center justify-between">
				<span className=" text-[15px] leading-[25px] text-white">
					@peduarte starred 3 repositories
				</span>
				<Collapsible.Trigger asChild>
					<button className="inline-flex size-[25px] items-center justify-center rounded-full text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white data-[state=open]:bg-violet3">
						{open ? <Cross2Icon /> : <RowSpacingIcon />}
					</button>
				</Collapsible.Trigger>
			</div>

			<div className="my-2.5 rounded bg-white p-2.5 shadow-[0_2px_10px] shadow-blackA4">
				<span className="text-[15px] leading-[25px] text-violet11">
					@radix-ui/primitives
				</span>
			</div>

			<Collapsible.Content>
				<div className="my-2.5 rounded bg-white p-2.5 shadow-[0_2px_10px] shadow-blackA4">
					<span className="text-[15px] leading-[25px] text-violet11">
						@radix-ui/colors
					</span>
				</div>
				<div className="my-2.5 rounded bg-white p-2.5 shadow-[0_2px_10px] shadow-blackA4">
					<span className="text-[15px] leading-[25px] text-violet11">
						@radix-ui/themes
					</span>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
};

export default CollapsibleDemo;
