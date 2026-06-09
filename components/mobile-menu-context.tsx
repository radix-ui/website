"use client";
import * as React from "react";

const MobileMenuContext = React.createContext<{
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	menuRootRef: React.RefObject<HTMLDivElement | null>;
}>({ open: false, setOpen: () => void 0, menuRootRef: { current: null } });
MobileMenuContext.displayName = "MobileMenuContext";

const useMobileMenuContext = () => React.use(MobileMenuContext);

export { MobileMenuContext, useMobileMenuContext };
