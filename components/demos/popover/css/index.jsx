import * as React from "react";
import { Popover } from "radix-ui";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

const PopoverDemo = () => (
	<Popover.Root>
		<Popover.Trigger asChild>
			<button className="IconButton" aria-label="Update dimensions">
				<MixerHorizontalIcon />
			</button>
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="PopoverContent" sideOffset={5}>
				<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
					<p className="Text" style={{ marginBottom: 10 }}>
						Dimensions
					</p>
					<fieldset className="Fieldset">
						<label className="Label" htmlFor="width">
							Width
						</label>
						<input className="Input" id="width" defaultValue="100%" />
					</fieldset>
					<fieldset className="Fieldset">
						<label className="Label" htmlFor="maxWidth">
							Max. width
						</label>
						<input className="Input" id="maxWidth" defaultValue="300px" />
					</fieldset>
					<fieldset className="Fieldset">
						<label className="Label" htmlFor="height">
							Height
						</label>
						<input className="Input" id="height" defaultValue="25px" />
					</fieldset>
					<fieldset className="Fieldset">
						<label className="Label" htmlFor="maxHeight">
							Max. height
						</label>
						<input className="Input" id="maxHeight" defaultValue="none" />
					</fieldset>
				</div>
				<Popover.Close className="PopoverClose" aria-label="Close">
					<Cross2Icon />
				</Popover.Close>
				<Popover.Arrow className="PopoverArrow" />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);

export default PopoverDemo;
