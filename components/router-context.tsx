"use client";
import type { ReadonlyURLSearchParams } from "next/navigation";
import * as React from "react";

type ParamValue = string | string[] | undefined;
type RouterParams = Record<string, ParamValue>;

interface RouterContextType<Params extends RouterParams = RouterParams> {
	pathname: string | null;
	params: Params | null;
	legacyPathname: string | null;
}

const RouterContext = React.createContext<RouterContextType | null>(null);
RouterContext.displayName = "RouterContext";

export { RouterContext };
export type { RouterContextType, RouterParams };
