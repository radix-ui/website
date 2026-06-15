import * as React from "react";

export const Memoizer = React.memo<{ children: React.ReactNode }>(function Memoizer({
	children,
}: {
	children: React.ReactNode;
}) {
	return <React.Fragment>{children}</React.Fragment>;
});
