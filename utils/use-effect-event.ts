import * as React from "react";

export function useEffectEvent<T extends Function>(fn: T): T {
	const ref = React.useRef<any>(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	React.useInsertionEffect(() => {
		ref.current = fn;
	}, [fn]);
	return React.useCallback(
		(...args: any[]) => ref.current?.(...args),
		[ref],
	) as any;
}
