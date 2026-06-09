import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouterContext } from "@utils/use-router-context";

export const PrimitivesHeader = (props: HeaderProps) => {
	const { pathname } = useRouterContext();
	return (
		<Header gitHubLink="https://github.com/radix-ui/primitives" {...props}>
			<Link
				size="2"
				color="gray"
				href="/primitives/docs"
				highContrast={pathname?.includes("/primitives/docs")}
			>
				Documentation
			</Link>
			<Link
				size="2"
				color="gray"
				href="/primitives/case-studies"
				highContrast={pathname?.includes("/primitives/case-studies")}
			>
				Case studies
			</Link>
		</Header>
	);
};
