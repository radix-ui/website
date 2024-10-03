"use client";
import * as React from "react";
import styles from "./ThemesHeroLayout.module.css";

const ThemesHeroLayoutRoot = ({
	children,
	...props
}: React.ComponentPropsWithoutRef<"div">) => (
	<div className={styles.ThemesHeroLayoutRoot} {...props}>
		<div className={styles.ThemesHeroLayoutContent}>{children}</div>
	</div>
);

const ThemesHeroLayoutBackground = (
	props: React.ComponentPropsWithoutRef<"div">,
) => <div className={styles.ThemesHeroLayoutBackground} {...props} />;

const ThemesHeroLayoutMain = (props: React.ComponentPropsWithoutRef<"div">) => (
	<div className={styles.ThemesHeroLayoutMain} {...props} />
);

const ThemesHeroLayoutControls = (
	props: React.ComponentPropsWithoutRef<"div">,
) => {
	const [rendered, setRendered] = React.useState(false);

	React.useEffect(() => {
		setRendered(true);
	}, []);

	if (!rendered) {
		return null;
	}

	return <div className={styles.ThemesHeroLayoutControls} {...props} />;
};

const ThemesHeroLayoutShowcase = ({
	children,
}: React.ComponentPropsWithoutRef<"div">) => {
	return (
		<div className={styles.ThemesHeroLayoutShowcase} aria-hidden>
			<div className={styles.ThemesHeroLayoutShowcaseInner}>
				{/* An extra div is needed to have padding working as expected within the scroll container */}
				<div>
					<div className={styles.ThemesHeroLayoutShowcaseInnerScaled}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export const ThemesHeroLayout = {
	Root: ThemesHeroLayoutRoot,
	Background: ThemesHeroLayoutBackground,
	Main: ThemesHeroLayoutMain,
	Controls: ThemesHeroLayoutControls,
	Showcase: ThemesHeroLayoutShowcase,
};
