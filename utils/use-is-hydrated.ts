import * as React from "react";

const subscribe = () => () => {};
export function useIsHydrated() {
	const isHydrated = React.useSyncExternalStore(
		subscribe,
		() => true,
		() => false,
	);
	return isHydrated;
}
