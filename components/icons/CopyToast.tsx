import * as React from "react";
import { Text, Theme, Flex } from "@radix-ui/themes";
import { Toast } from "radix-ui";

import styles from "./CopyToast.module.css";

type CopyToastContextValue = {
	showCopyToast: (icon: string) => void;
};

const CopyToastContext = React.createContext<CopyToastContextValue | null>(
	null,
);

export const CopyToastProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [open, setOpen] = React.useState(false);
	const [icon, setIcon] = React.useState("");
	const timeoutRef = React.useRef<number | null>(null);

	return (
		<CopyToastContext.Provider
			value={{
				showCopyToast: React.useCallback((icon) => {
					setIcon(icon);
					setOpen(true);
					window.clearTimeout(timeoutRef.current!);
					timeoutRef.current = window.setTimeout(() => setOpen(false), 3000);
				}, []),
			}}
		>
			<Toast.Provider>
				{children}

				<Theme className="radix-themes-custom-fonts" asChild>
					<Toast.Root
						className={styles.Toast}
						open={open}
						onOpenChange={setOpen}
						duration={Infinity}
					>
						<Toast.Title asChild>
							<Text
								size="2"
								style={{
									color: "var(--gray-1)",
									display: "flex",
									alignItems: "center",
								}}
							>
								SVG copied to clipboard
								<span
									dangerouslySetInnerHTML={{ __html: icon }}
									style={{
										display: "inline-flex",
										marginLeft: "0.75em",
										verticalAlign: "top",
										justifyContent: "center",
									}}
								/>
							</Text>
						</Toast.Title>
					</Toast.Root>
				</Theme>

				<Flex className={styles.ToastViewport} m="5" justify="center" asChild>
					<Toast.Viewport />
				</Flex>
			</Toast.Provider>
		</CopyToastContext.Provider>
	);
};

export const useCopyToast = () => {
	const copyToastContext = React.useContext(CopyToastContext);
	if (!copyToastContext) {
		throw new TypeError(
			"`useCopyToast` must be called from within an `CopyToastProvider`",
		);
	}

	return copyToastContext;
};
