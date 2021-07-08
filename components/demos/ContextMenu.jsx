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
  lineHeight: 1,
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

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

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
export const ContextMenuCheckboxItem = StyledCheckboxItem;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuRadioItem = StyledRadioItem;
export const ContextMenuItemIndicator = StyledItemIndicator;
export const ContextMenuSeparator = StyledSeparator;

// Your app...
const Box = styled('div', {});

const Instruction = styled('div', {
  color: 'rgba(255 255 255 / .5)',
  fontSize: 15,
  userSelect: 'none',
  position: 'absolute',
  top: 20,
});

const Shape = styled('div', {
  width: 200,
  height: 200,
  fontSize: 17,
  fontWeight: 500,
  color: 'black',
  borderRadius: '100%',
  flexDirection: 'column',
  gap: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  lime: {
    name: 'Lime',
    value: colors.lime.lime9,
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
  const [isShowingName, setIsShowingName] = React.useState(false);
  const [isShowingValue, setIsShowingValue] = React.useState(false);

  return (
    <Box>
      <Instruction>Right click the shape below.</Instruction>
      <ContextMenu>
        <ContextMenuTrigger>
          <Shape style={{ backgroundColor: COLORS[color].value }}>
            {isShowingName && <Box>{COLORS[color].name}</Box>}
            {isShowingValue && (
              <Box css={{ fontSize: 15, fontVariantNumeric: 'tabular-nums' }}>
                {COLORS[color].value}
              </Box>
            )}
          </Shape>
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
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={isShowingName} onCheckedChange={setIsShowingName}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Display color name
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={isShowingValue} onCheckedChange={setIsShowingValue}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Display color value
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    </Box>
  );
};

export default ContextMenuDemo;
