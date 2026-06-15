import * as React from "react";
import { HoverCard } from "radix-ui";
import styles from "./styles.module.css";

const HoverCardDemo = () => (
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			<a
				className={styles.ImageTrigger}
				href="https://twitter.com/radix_ui"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					className={`${styles.Image} normal`}
					src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
					alt="Radix UI"
				/>
			</a>
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content className={styles.Content} sideOffset={5}>
				<div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
					<img
						className={`${styles.Image} large`}
						src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
						alt="Radix UI"
					/>
					<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
						<div>
							<div className={`${styles.Text} bold`}>Radix</div>
							<div className={`${styles.Text} faded`}>@radix_ui</div>
						</div>
						<div className={styles.Text}>
							Components, icons, colors, and templates for building
							high-quality, accessible UI. Free and open-source.
						</div>
						<div style={{ display: "flex", gap: 15 }}>
							<div style={{ display: "flex", gap: 5 }}>
								<div className={`${styles.Text} bold`}>0</div>{" "}
								<div className={`${styles.Text} faded`}>Following</div>
							</div>
							<div style={{ display: "flex", gap: 5 }}>
								<div className={`${styles.Text} bold`}>2,900</div>{" "}
								<div className={`${styles.Text} faded`}>Followers</div>
							</div>
						</div>
					</div>
				</div>

				<HoverCard.Arrow className={styles.Arrow} />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);

export default HoverCardDemo;
