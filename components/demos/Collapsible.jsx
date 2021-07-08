import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, violetA, mauve } from '@radix-ui/colors';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: 300,
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = CollapsiblePrimitive.Content;

// Your app...
const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });
const Text = styled('span', {
  color: violet.violet1,
  fontSize: 15,
  lineHeight: 1,
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
  color: violet.violet1,

  '&[data-state="closed"]': { backgroundColor: violetA.violetA9 },
  '&[data-state="open"]': { backgroundColor: violetA.violetA10 },

  '&:hover': { backgroundColor: violetA.violetA10 },
  '&:active': { backgroundColor: violetA.violetA11 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Repository = styled('div', {
  backgroundColor: violetA.violetA8,
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
});

export const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex css={{ justifyContent: 'space-between' }}>
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
