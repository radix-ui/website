import * as React from "react";
import {
	RouterContext,
	type RouterContextType,
	type RouterParams,
} from "@components/router-context";

export function useRouterContext<Params extends RouterParams = RouterParams>() {
	const context = React.use(RouterContext);
	if (!context) {
		throw new Error(
			"useRouterContext must be used within a RouterContextProvider",
		);
	}

	return context as RouterContextType<Params>;
}
