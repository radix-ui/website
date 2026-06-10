"use client";
import { Link } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { Header, HeaderProps } from "./Header";
import NextLink from "next/link";

export const ThemesHeader = (props: HeaderProps) => {
	const pathname = usePathname();
	return (
		<Header gitHubLink="https://github.com/radix-ui/themes" {...props}>
			<Link
				asChild
				size="2"
				color="gray"
				highContrast={pathname?.includes("/themes/docs")}
			>
				<NextLink href="/themes/docs/overview/getting-started">
					Documentation
				</NextLink>
			</Link>
			<Link
				asChild
				size="2"
				color="gray"
				highContrast={pathname?.includes("/themes/playground")}
			>
				<NextLink href="/themes/playground">Playground</NextLink>
			</Link>
		</Header>
	);
};
