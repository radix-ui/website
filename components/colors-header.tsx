"use client";
import { Link } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { Header, HeaderProps } from "./header";
import NextLink from "next/link";

export const ColorsHeader = (props: HeaderProps) => {
	const pathname = usePathname();
	return (
		<Header gitHubLink="https://github.com/radix-ui/colors" {...props}>
			<Link
				size="2"
				color="gray"
				highContrast={pathname?.includes("/colors/docs")}
				asChild
			>
				<NextLink href="/colors/docs/overview/installation">
					Documentation
				</NextLink>
			</Link>
			<Link
				size="2"
				color="gray"
				highContrast={pathname?.includes("/colors/custom")}
				asChild
			>
				<NextLink href="/colors/custom">Custom palette</NextLink>
			</Link>
		</Header>
	);
};
