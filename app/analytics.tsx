"use client";
import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { handleUrlChange } from "@utils/analytics";

export function Analytics() {
	const pathname = usePathname();
	const searchParams = useSearchParams()?.toString();
	const routePath =
		(pathname ?? "") + (searchParams ? "?" + searchParams.toString() : "");
	const routePathRef = React.useRef(routePath);
	React.useEffect(() => {
		const prevRoutePath = routePathRef.current;
		routePathRef.current = routePath;
		if (routePath && prevRoutePath !== routePath) {
			handleUrlChange(routePath);
		}
	}, [routePath]);

	return null;
}
