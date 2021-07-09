import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: 300,
});

const StyledContent = styled(CollapsiblePrimitive.Content, {
  '&[data-state=open]': { animation: `${fadeIn} 200ms ease-out` },
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = StyledContent;

// Your app...
const Flex = styled('div', { display: 'flex' });
const Text = styled('span', {
  color: violet.violet1,
  fontSize: 15,
  lineHeight: '25px',
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',

  '&[data-state="closed"]': { backgroundColor: blackA.blackA9 },
  '&[data-state="open"]': { backgroundColor: blackA.blackA10 },

  '&:hover': { backgroundColor: blackA.blackA10 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Repository = styled('div', {
  backgroundColor: blackA.blackA7,
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
});

export const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>@peduarte starred 3 repositories</Text>
        <CollapsibleTrigger as={IconButton}>
          {open ? <Cross2Icon /> : <RowSpacingIcon />}
        </CollapsibleTrigger>
      </Flex>

      <Repository>
        <Text>@radix-ui/primitives</Text>
      </Repository>

      <CollapsibleContent>
        <Repository>
          <Text>@radix-ui/colors</Text>
        </Repository>
        <Repository>
          <Text>@stitches/react</Text>
        </Repository>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleDemo;
