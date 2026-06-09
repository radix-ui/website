import { usePathname } from "next/navigation";
import { useRouterContext } from "./use-router-context";

export function useCurrentPageSlug() {
	const { pathname } = useRouterContext();
	return pathname?.substring(1) ?? "";
}
