import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Flex, Link } from '@radix-ui/themes';

export function ExternalLink({ href, children, ...props }) {
  return (
    <Flex align="center" display="inline-flex" asChild gap="1" mr="0.15em">
      <Link href={href} target="_blank" {...props}>
        {children}
        <ExternalLinkIcon />
      </Link>
    </Flex>
  );
}
