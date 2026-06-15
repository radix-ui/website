import * as React from "react";
import { Toast } from "radix-ui";
import styles from "./styles.module.css";

const ToastDemo = () => {
	const [open, setOpen] = React.useState(false);
	const eventDateRef = React.useRef(new Date());
	const timerRef = React.useRef(0);

	React.useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<Toast.Provider swipeDirection="right">
			<button
				className={`${styles.Button} large violet`}
				onClick={() => {
					setOpen(false);
					window.clearTimeout(timerRef.current);
					timerRef.current = window.setTimeout(() => {
						eventDateRef.current = oneWeekAway();
						setOpen(true);
					}, 100);
				}}
			>
				Add to calendar
			</button>

			<Toast.Root className={styles.Root} open={open} onOpenChange={setOpen}>
				<Toast.Title className={styles.Title}>Scheduled: Catch up</Toast.Title>
				<Toast.Description asChild>
					<time
						className={styles.Description}
						dateTime={eventDateRef.current.toISOString()}
					>
						{prettyDate(eventDateRef.current)}
					</time>
				</Toast.Description>
				<Toast.Action
					className={styles.Action}
					asChild
					altText="Goto schedule to undo"
				>
					<button className={`${styles.Button} small green`}>Undo</button>
				</Toast.Action>
			</Toast.Root>
			<Toast.Viewport className={styles.Viewport} />
		</Toast.Provider>
	);
};

function oneWeekAway(date) {
	const now = new Date();
	const inOneWeek = now.setDate(now.getDate() + 7);
	return new Date(inOneWeek);
}

function prettyDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "short",
	}).format(date);
}

export default ToastDemo;
