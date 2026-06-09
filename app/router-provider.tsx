"use client";
import { RouterContext } from "@components/router-context";
import type { RouterParams } from "@components/router-context";
import { useParams, usePathname } from "next/navigation";

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const params = useParams();

	return (
		<RouterContext
			value={{
				pathname,
				legacyPathname: getLegacyPathname(pathname, params),
				params,
			}}
		>
			{children}
		</RouterContext>
	);
};

/**
 * Reconstructs the file-system route pattern, equivalent to the Pages Router's
 * `useRouter().pathname` (e.g. "/primitives/docs/components/[slug]"). There are
 * some limitations in the app router that make some edge cases impossible to
 * implement, but for our purposes it's good enough.
 */
function getLegacyPathname(
	pathname: string | null,
	params: RouterParams | null,
): string | null {
	if (pathname === null) {
		return null;
	}

	let legacyPathname = pathname;
	for (const [name, value] of Object.entries(params ?? {})) {
		if (Array.isArray(value)) {
			// Catch-all segment, e.g. ["overview", "intro"] -> "[...slug]".
			legacyPathname = legacyPathname.replace(value.join("/"), `[...${name}]`);
		} else if (value !== undefined) {
			// Single dynamic segment, replacing exact segment matches.
			legacyPathname = legacyPathname
				.split("/")
				.map((segment) => (segment === value ? `[${name}]` : segment))
				.join("/");
		}
	}
	return legacyPathname;
}
