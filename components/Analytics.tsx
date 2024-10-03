"use client";
import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { handleUrlChange } from "@utils/analytics";

export function Analytics() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	let url: string | null = null;
	// next router hooks may return null
	if (pathname != null) {
		url = searchParams ? pathname + "?" + searchParams : pathname;
	}
	React.useEffect(() => {
		if (url) {
			handleUrlChange(url);
		}
	}, [url]);

	return null;
}
