import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const ColorsHeader = (props: HeaderProps) => {
	const router = useRouter();

	return (
		<Header gitHubLink="https://github.com/radix-ui/colors" {...props}>
			<Link
				size="2"
				color="gray"
				highContrast={router.pathname.includes("/colors/docs")}
				asChild
			>
				<NextLink href="/colors/docs/overview/installation">
					Documentation
				</NextLink>
			</Link>
			<Link
				size="2"
				color="gray"
				highContrast={router.pathname.includes("/colors/custom")}
				asChild
			>
				<NextLink href="/colors/custom">Custom palette</NextLink>
			</Link>
		</Header>
	);
};
