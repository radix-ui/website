import * as React from "react";
import { HoverCard } from "radix-ui";

const HoverCardDemo = () => (
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			<a
				className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
				href="https://twitter.com/radix_ui"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					className="block size-[45px] rounded-full"
					src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
					alt="Radix UI"
				/>
			</a>
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content
				className="w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
				sideOffset={5}
			>
				<div className="flex flex-col gap-[7px]">
					<img
						className="block size-[60px] rounded-full"
						src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
						alt="Radix UI"
					/>
					<div className="flex flex-col gap-[15px]">
						<div>
							<div className="m-0 text-[15px] font-medium text-mauve12">
								Radix
							</div>
							<div className="m-0 text-[15px] text-mauve10">@radix_ui</div>
						</div>
						<div className="m-0 text-[15px] text-mauve12">
							Components, icons, colors, and templates for building
							high-quality, accessible UI. Free and open-source.
						</div>
						<div className="flex gap-[15px]">
							<div className="flex gap-[5px]">
								<div className="m-0 text-[15px] font-medium text-mauve12">
									0
								</div>{" "}
								<div className="m-0 text-[15px] text-mauve10">Following</div>
							</div>
							<div className="flex gap-[5px]">
								<div className="m-0 text-[15px] font-medium text-mauve12">
									2,900
								</div>{" "}
								<div className="m-0 text-[15px] text-mauve10">Followers</div>
							</div>
						</div>
					</div>
				</div>

				<HoverCard.Arrow className="fill-white" />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);

export default HoverCardDemo;
