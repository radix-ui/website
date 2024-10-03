import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Flex, Link, type LinkProps } from "@radix-ui/themes";

export function ExternalLink({ href, children, ...props }: LinkProps) {
	return (
		<Flex align="center" display="inline-flex" asChild gap="1" mr="0.15em">
			<Link href={href} target="_blank" rel="noopener noreferrer" {...props}>
				{children}
				<ExternalLinkIcon />
			</Link>
		</Flex>
	);
}
