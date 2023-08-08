import { Text } from '@radix-ui/themes';

export const MarketingCaption = ({
  asChild: _,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) => (
  <Text as="div" size="2" weight="medium" {...props} />
);
