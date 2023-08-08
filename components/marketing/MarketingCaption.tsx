import { Text } from '@radix-ui/themes';

export const MarketingCaption = ({
  asChild: _,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) => (
  <Text as="div" weight="medium" size="2" color="teal" {...props} />
);
