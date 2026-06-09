import { Link } from "@radix-ui/themes";
import { useRouterContext } from "@utils/use-router-context";
import { Header, HeaderProps } from "./Header";
import NextLink from "next/link";

export const ColorsHeader = (props: HeaderProps) => {
	const { pathname } = useRouterContext();
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
