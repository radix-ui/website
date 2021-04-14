import { styled } from '@modulz/design-system';
import * as Separator from '@radix-ui/react-separator';

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: 'gainsboro',
  height: 1,
  margin: '20px 0',
});

export const SeparatorDemo = () => <StyledSeparator />;
