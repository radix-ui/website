"use client";
import * as React from "react";
import NextLink from "next/link";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { TabNav } from "@radix-ui/themes";

interface TabNavDemoProps extends React.ComponentPropsWithRef<typeof TabNav.Root> {
	items?: string[];
}

interface TabNavDemoImplProps extends TabNavDemoProps {
	params?: ReadonlyURLSearchParams | null;
}

function TabNavDemoImpl({
	items = ["Account", "Documents"],
	params = null,
	...props
}: TabNavDemoImplProps) {
	const tab = params?.get("tab-nav");
	return (
		<TabNav.Root {...props}>
			{items.map((item, i) => (
				<TabNav.Link
					asChild
					key={item}
					active={tab === item.toLowerCase() || (i === 0 && tab === null)}
				>
					<NextLink href={{ query: { "tab-nav": item.toLowerCase() } }} scroll={false} replace>
						{item}
					</NextLink>
				</TabNav.Link>
			))}
		</TabNav.Root>
	);
}

function TabNavDemo(props: TabNavDemoProps) {
	const params = useSearchParams();
	return <TabNavDemoImpl {...props} params={params} />;
}

function TabNavDemoSuspended(props: TabNavDemoProps) {
	return (
		<React.Suspense fallback={<TabNavDemoImpl {...props} />}>
			<TabNavDemo {...props} />
		</React.Suspense>
	);
}

export { TabNavDemoSuspended as TabNavDemo };
