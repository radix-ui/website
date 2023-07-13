import { Flex } from '@radix-ui/themes';

export const Marker = (props: React.ComponentPropsWithoutRef<typeof Flex>) => (
  <Flex
    align="center"
    justify="center"
    width="4"
    height="4"
    {...props}
    style={{
      color: 'var(--teal-11)',
      backgroundColor: 'var(--teal-a4)',
      borderRadius: '100%',
      ...props.style,
    }}
  />
);
