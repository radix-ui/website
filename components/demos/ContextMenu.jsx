import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import * as colors from '@radix-ui/colors';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

const { violet, mauve } = colors;

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
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:hover, &:focus': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, { ...itemStyles });
const StyledTriggerItem = styled(ContextMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

const StyledLabel = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 13,
  lineHeight: '25px',
  color: violet.violet8,
});

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
export const ContextMenuTriggerItem = StyledTriggerItem;
export const ContextMenuLabel = StyledLabel;
export const ContextMenuSeparator = StyledSeparator;

// Your app...
const Box = styled('div', {});

const Instruction = styled('div', {
  color: 'rgba(255 255 255 / .5)',
  fontSize: 15,
  userSelect: 'none',
  marginBottom: 20,
  textAlign: 'center',
});

const Shape = styled('div', {
  fontSize: 17,
  fontWeight: 500,
  color: 'black',
  borderRadius: 8,
  flexDirection: 'column',
  gap: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
});

const RightSlot = styled('div', {
  width: 15,
  height: 15,
  marginLeft: 'auto',
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
  const [size, setSize] = React.useState(200);
  const [isShowingName, setIsShowingName] = React.useState(true);
  const [isShowingValue, setIsShowingValue] = React.useState(false);

  return (
    <Box>
      <Instruction>Right click the shape below.</Instruction>
      <ContextMenu>
        <ContextMenuTrigger>
          <Shape style={{ backgroundColor: COLORS[color].value, width: size, height: 100 }}>
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
                <RightSlot css={{ borderRadius: 2, backgroundColor: COLORS[colorName].value }} />
              </ContextMenuRadioItem>
            ))}
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuLabel>Size</ContextMenuLabel>
          <ContextMenuItem disabled={size >= 300} onSelect={() => setSize(size + 50)}>
            Increase width
          </ContextMenuItem>
          <ContextMenuItem disabled={size <= 200} onSelect={() => setSize(size - 50)}>
            Decrease width
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenu>
            <ContextMenuTriggerItem>
              Details
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </ContextMenuTriggerItem>
            <ContextMenuContent sideOffset={2} alignOffset={-5}>
              <ContextMenuCheckboxItem checked={isShowingName} onCheckedChange={setIsShowingName}>
                <ContextMenuItemIndicator>
                  <CheckIcon />
                </ContextMenuItemIndicator>
                Show name
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem checked={isShowingValue} onCheckedChange={setIsShowingValue}>
                <ContextMenuItemIndicator>
                  <CheckIcon />
                </ContextMenuItemIndicator>
                Show value
              </ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </ContextMenuContent>
      </ContextMenu>
    </Box>
  );
};

export default ContextMenuDemo;
