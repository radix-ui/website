import { Heading } from '@radix-ui/themes';

export const SerifHeading = (props: React.ComponentPropsWithRef<typeof Heading>) => {
  return (
    <Heading
      weight="regular"
      size="9"
      {...props}
      style={
        {
          '--heading-font-family': "'Adobe Text Pro', serif",
          ...props.style,
        } as React.CSSProperties
      }
    />
  );
};
