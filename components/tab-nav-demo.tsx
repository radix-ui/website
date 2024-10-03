"use client";

import * as React from "react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import { TabNav } from "@radix-ui/themes";

interface TabNavDemoProps
	extends React.ComponentPropsWithoutRef<typeof TabNav.Root> {
	items?: string[];
	baseUrl: string;
}

const TabNavDemo = React.forwardRef<
	React.ElementRef<typeof TabNav.Root>,
	TabNavDemoProps
>(({ baseUrl, items = ["Account", "Documents"], ...props }, forwardedRef) => {
	const params = useSearchParams();
	const tab = params?.get("tab-nav");
	return (
		<TabNav.Root {...props} ref={forwardedRef}>
			{items.map((item, i) => (
				<TabNav.Link
					asChild
					key={item}
					active={tab === item.toLowerCase() || (i === 0 && tab === null)}
				>
					<NextLink
						href={`${baseUrl}/?tab-nav=${item.toLowerCase()}`}
						scroll={false}
					>
						{item}
					</NextLink>
				</TabNav.Link>
			))}
		</TabNav.Root>
	);
});
TabNavDemo.displayName = "TabNavDemo";

export { TabNavDemo };
export default TabNavDemo;
