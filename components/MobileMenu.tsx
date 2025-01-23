"use client";
import * as React from "react";
import { Context } from "radix-ui/internal";
import { RemoveScroll } from "react-remove-scroll";
import { Slot } from "radix-ui";
import { Box, Portal, Theme } from "@radix-ui/themes";
import { useRouter } from "next/router";

const [MenuProvider, useMenuContext] = Context.createContext<{
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>("MobileMenu");

export const MobileMenuProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [open, setOpen] = React.useState(false);

	const router = useRouter();

	React.useEffect(() => {
		const handleRouteChangeComplete = () => {
			// Dismiss mobile keyboard if focusing an input (e.g. when searching)
			if (document.activeElement instanceof HTMLInputElement) {
				document.activeElement.blur();
			}

			setOpen(false);
		};

		router.events.on("routeChangeComplete", handleRouteChangeComplete);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChangeComplete);
		};
	}, []);

	React.useEffect(() => {
		// Match @media (--md)
		const mediaQueryList = window.matchMedia("(min-width: 1024px)");

		const handleChange = () => {
			setOpen((open) => (open ? !mediaQueryList.matches : false));
		};

		handleChange();
		mediaQueryList.addEventListener("change", handleChange);
		return () => mediaQueryList.removeEventListener("change", handleChange);
	}, []);

	return (
		<MenuProvider open={open} setOpen={setOpen}>
			{children}
		</MenuProvider>
	);
};

export const useMobileMenuContext = () => useMenuContext("MobileMenu");

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
	const mobileMenu = useMobileMenuContext();

	if (!mobileMenu.open) {
		return null;
	}

	return (
		<Portal>
			<Theme className="radix-themes-custom-fonts">
				<RemoveScroll as={Slot.Root} allowPinchZoom enabled>
					<Box
						position="fixed"
						inset="0"
						style={{
							zIndex: 1,
							display: "grid",
							gridTemplateRows: "auto minmax(0, 1fr)",
							backgroundColor: "var(--color-background)",
						}}
					>
						{children}
					</Box>
				</RemoveScroll>
			</Theme>
		</Portal>
	);
};
