import { useRouter } from "next/router";

export function useCurrentPageSlug() {
	const router = useRouter();
	const routerSlug = router.query.slug;
	let currentPageSlug = router.pathname.substring(1);
	if (Array.isArray(routerSlug)) {
		return currentPageSlug.replace("[...slug]", routerSlug[0]);
	}
	return currentPageSlug.replace("[slug]", routerSlug ?? "");
}
