import * as React from "react";
import { HoverCard } from "radix-ui";
import "./styles.css";

const HoverCardDemo = () => (
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			<a
				className="ImageTrigger"
				href="https://twitter.com/radix_ui"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					className="Image normal"
					src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
					alt="Radix UI"
				/>
			</a>
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content className="HoverCardContent" sideOffset={5}>
				<div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
					<img
						className="Image large"
						src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
						alt="Radix UI"
					/>
					<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
						<div>
							<div className="Text bold">Radix</div>
							<div className="Text faded">@radix_ui</div>
						</div>
						<div className="Text">
							Components, icons, colors, and templates for building
							high-quality, accessible UI. Free and open-source.
						</div>
						<div style={{ display: "flex", gap: 15 }}>
							<div style={{ display: "flex", gap: 5 }}>
								<div className="Text bold">0</div>{" "}
								<div className="Text faded">Following</div>
							</div>
							<div style={{ display: "flex", gap: 5 }}>
								<div className="Text bold">2,900</div>{" "}
								<div className="Text faded">Followers</div>
							</div>
						</div>
					</div>
				</div>

				<HoverCard.Arrow className="HoverCardArrow" />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);

export default HoverCardDemo;
