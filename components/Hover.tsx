import styles from "./Hover.module.css";

const HoverRoot = (props: React.ComponentPropsWithoutRef<"div">) => (
	<div
		{...props}
		className={
			props.className
				? `${props.className}, ${styles.HoverRoot}`
				: styles.HoverRoot
		}
	/>
);

const HoverShow = (props: React.ComponentPropsWithoutRef<"div">) => (
	<div
		{...props}
		className={
			props.className
				? `${props.className}, ${styles.HoverShow}`
				: styles.HoverShow
		}
	/>
);

export const Hover = {
	Root: HoverRoot,
	Show: HoverShow,
};
