import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import * as colors from '@radix-ui/colors';
import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

const { violet, violetA } = colors;

const StyledContent = styled(ContextMenuPrimitive.Content, {
  width: 180,
  backgroundColor: violet.violet1,
  borderRadius: 6,
  overflow: 'hidden',
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  color: violet.violet11,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,

  '&:hover, &:focus': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, { ...itemStyles });

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Exports
export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuContent = StyledContent;
export const ContextMenuItem = StyledItem;
export const ContextMenuItemIndicator = StyledItemIndicator;
export const ContextMenuCheckboxItem = StyledCheckboxItem;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuRadioItem = StyledRadioItem;

// Your app...
const Instruction = styled('div', {
  color: 'rgba(255 255 255 / .5)',
  fontSize: 15,
  userSelect: 'none',
  position: 'absolute',
  top: 20,
});

const Box = styled('div', {
  width: 200,
  height: 200,
  borderRadius: '100%',
});

const COLORS = {
  red: {
    name: 'Red',
    value: colors.red.red9,
  },
  amber: {
    name: 'Amber',
    value: colors.amber.amber9,
  },
  mint: {
    name: 'Mint',
    value: colors.mint.mint9,
  },
  sky: {
    name: 'Sky',
    value: colors.sky.sky9,
  },
};

export const ContextMenuDemo = () => {
  const [color, setColor] = React.useState('mint');

  return (
    <>
      <Instruction>Right click the shape below.</Instruction>
      <ContextMenu>
        <ContextMenuTrigger>
          <Box style={{ backgroundColor: COLORS[color].value }} />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuRadioGroup value={color} onValueChange={setColor}>
            {Object.keys(COLORS).map((colorName) => (
              <ContextMenuRadioItem value={colorName}>
                <ContextMenuItemIndicator>
                  <DotFilledIcon />
                </ContextMenuItemIndicator>
                {COLORS[colorName].name}
                <Box
                  css={{
                    width: 15,
                    height: 15,
                    borderRadius: 2,
                    marginLeft: 'auto',
                    backgroundColor: COLORS[colorName].value,
                  }}
                />
              </ContextMenuRadioItem>
            ))}
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
};

export default ContextMenuDemo;
