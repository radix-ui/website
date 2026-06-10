import { usePathname } from "next/navigation";

export function useCurrentPageSlug() {
	const pathname = usePathname();
	return pathname?.substring(1) ?? "";
}
