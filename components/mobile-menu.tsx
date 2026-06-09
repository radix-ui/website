"use client";
import * as React from "react";
import { RemoveScroll } from "react-remove-scroll";
import { Slot } from "radix-ui";
import { Box, Portal, Theme } from "@radix-ui/themes";
import { MobileMenuContext, useMobileMenuContext } from "./mobile-menu-context";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import { Memoizer } from "./memoizer";

export const MobileMenuProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [open, setOpen] = React.useState(false);
	const menuRootRef = React.useRef<HTMLDivElement>(null);
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
		<MobileMenuContext value={{ open, setOpen, menuRootRef }}>
			<Memoizer>{children}</Memoizer>
		</MobileMenuContext>
	);
};

export interface MobileMenuProps {
	children: React.ReactNode;
	legacyPagesRouter?: boolean;
}

export const MobileMenu = ({
	children,
	legacyPagesRouter = false,
}: MobileMenuProps) => {
	const { open: mobileMenuOpen, menuRootRef } = useMobileMenuContext();
	if (!mobileMenuOpen) {
		return null;
	}

	return (
		<Portal>
			<Theme className="radix-themes-custom-fonts">
				<RemoveScroll as={Slot.Root} allowPinchZoom enabled>
					<Box
						ref={menuRootRef}
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
			{legacyPagesRouter ? (
				<MobileMenuCloserPages />
			) : (
				<React.Suspense fallback={null}>
					<MobileMenuCloserApp />
				</React.Suspense>
			)}
		</Portal>
	);
};

function MobileMenuCloserApp() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const navKey =
		(pathname ?? "") + (searchParams ? "?" + searchParams.toString() : "");
	return <MobileMenuCloser navKey={navKey} />;
}

function MobileMenuCloserPages() {
	const router = useRouter();
	return <MobileMenuCloser navKey={router.asPath} />;
}

function MobileMenuCloser({ navKey }: { navKey: string }) {
	const { menuRootRef, setOpen } = useMobileMenuContext();
	const navKeyRef = React.useRef(navKey);
	React.useEffect(() => {
		const previousNavKey = navKeyRef.current;
		navKeyRef.current = navKey;

		if (previousNavKey !== navKey && menuRootRef.current) {
			// Dismiss mobile keyboard if focusing an input (e.g. when searching)
			if (document.activeElement instanceof HTMLInputElement) {
				document.activeElement.blur();
			}

			setOpen(false);
		}
	}, [navKey, setOpen, menuRootRef]);

	return null;
}
