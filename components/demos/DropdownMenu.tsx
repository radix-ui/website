import React from 'react';
import { styled, Box, keyframes } from '@modulz/design-system';
import { CheckIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const StyledContent = styled(DropdownMenu.Content, {
  minWidth: 130,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow: '0px 5px 15px -5px hsla(206,22%,7%,.15)',
});

const itemStyles = {
  fontSize: 13,
  padding: '5px 10px',
  borderRadius: 3,
  cursor: 'default',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: 'black',

  '&[data-disabled]': {
    color: 'gainsboro',
  },

  '&:focus': {
    outline: 'none',
    backgroundColor: 'dodgerblue',
    color: 'white',
  },
};

const StyledItem = styled(DropdownMenu.Item, itemStyles as any);

const StyledCheckboxItem = styled(DropdownMenu.CheckboxItem, {
  ...(itemStyles as any),
  padding: '5px 10px 5px 25px',
});

const StyledRadioGroup = styled(DropdownMenu.RadioGroup, {});

const StyledRadioItem = styled(DropdownMenu.RadioItem, {
  ...(itemStyles as any),
  padding: '5px 10px 5px 25px',
});

const StyledItemIndicator = styled(DropdownMenu.ItemIndicator, {
  position: 'absolute',
  left: 5,
});

const StyledArrow = styled(DropdownMenu.Arrow, {
  fill: 'white',
});

const StyledSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: 'gainsboro',
  margin: 5,
});

const StyledLabel = styled(DropdownMenu.Label, {
  color: 'slategray',
  fontSize: 13,
  padding: '5px 10px',
  cursor: 'default',
});

const Image = styled('img', {
  width: 24,
  height: 24,
  borderRadius: 9999,
  marginRight: 10,
});

export const DropdownMenuDemo = ({ showDisabled, showSeparator, showLabel }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
    <StyledContent>
      {showLabel && <StyledLabel>Actions</StyledLabel>}
      <StyledItem disabled={showDisabled} onSelect={() => console.log('cut')}>
        Cut
      </StyledItem>
      {showSeparator && <StyledSeparator />}
      <StyledItem onSelect={() => console.log('copy')}>Copy</StyledItem>
      {showSeparator && <StyledSeparator />}
      <StyledItem onSelect={() => console.log('paste')}>Paste</StyledItem>
      <StyledArrow />
    </StyledContent>
  </DropdownMenu.Root>
);

export const DropdownMenuCheckboxDemo = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
      <StyledContent>
        <StyledItem onSelect={() => console.log('radix-ui')}>About Radix UI</StyledItem>
        <StyledItem onSelect={() => console.log('check-for-updates')}>Check for updates</StyledItem>
        <StyledSeparator />
        <StyledCheckboxItem checked={checked} onCheckedChange={setChecked}>
          <StyledItemIndicator>
            <CheckIcon />
          </StyledItemIndicator>
          Show hidden files
        </StyledCheckboxItem>
        <StyledArrow />
      </StyledContent>
    </DropdownMenu.Root>
  );
};

export const DropdownMenuRadioDemo = () => {
  const [color, setColor] = React.useState('blue');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
      <StyledContent>
        <StyledRadioGroup value={color} onValueChange={setColor}>
          <StyledRadioItem value="red">
            <StyledItemIndicator>
              <CheckIcon />
            </StyledItemIndicator>
            Red
          </StyledRadioItem>
          <StyledRadioItem value="blue">
            <StyledItemIndicator>
              <CheckIcon />
            </StyledItemIndicator>
            Blue
          </StyledRadioItem>
          <StyledRadioItem value="green">
            <StyledItemIndicator>
              <CheckIcon />
            </StyledItemIndicator>
            Green
          </StyledRadioItem>
        </StyledRadioGroup>
        <StyledArrow />
      </StyledContent>
    </DropdownMenu.Root>
  );
};

export const DropdownMenuComplexDemo = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
    <StyledContent>
      <StyledItem onSelect={() => console.log('adolfo-hess')}>
        <Image src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&facepad=3&w=24&h=24&dpr=2&q=80" />
        Adolfo Hess
      </StyledItem>
      <StyledItem onSelect={() => console.log('miyah-myles')}>
        <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=24&h=24&dpr=2&q=80" />
        Miyah Myles
      </StyledItem>
      <StyledItem onSelect={() => console.log('sylvia-reynolds')}>
        <Image src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?auto=format&fit=facearea&facepad=3&w=24&h=24&dpr=2&q=80" />
        Sylvia Reynolds
      </StyledItem>
      <StyledArrow />
    </StyledContent>
  </DropdownMenu.Root>
);

const menuitem = keyframes({
  '0%': { transform: 'translateY(0)' },
  '4.9999%': { transform: 'translateY(0)' },
  '5%': { transform: 'translateY(20px)' },
  '9.9999%': { transform: 'translateY(20px)' },
  '10%': { transform: 'translateY(40px)' },
  '14.9999%': { transform: 'translateY(40px)' },
  '15%': { transform: 'translateY(60px)' },
  '19.9999%': { transform: 'translateY(60px)' },

  '49.9999%': { transform: 'translateY(60px)' },

  '50%': { transform: 'translateY(40px)' },
  '54.9999%': { transform: 'translateY(40px)' },
  '55%': { transform: 'translateY(20px)' },
  '59.9999%': { transform: 'translateY(20px)' },
  '60%': { transform: 'translateY(0)' },
  '99.9999%': { transform: 'translateY(0)' },
});

export const DropdownMenuHero = () => {
  return (
    <Box>
      <Box
        css={{
          backgroundColor: 'white',
          borderRadius: '5px',
          height: 20,
          width: 60,
          px: '$2',
          mb: 2,
          display: 'inline-flex',
          alignItems: 'center',
        }}
      ></Box>

      <Box
        css={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '5px',
          width: 120,
          py: '$1',
          boxShadow:
            'hsla(252, 4%, 9%, 0.35) 0px 10px 38px -10px, hsla(252, 4%, 9%, 0.2) 0px 10px 20px -15px',
        }}
      >
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'hsl(206,10%,70%)',
            height: 4,
            width: '25%',
            mt: 8,
            mb: 16,
            mx: '$4',
          }}
        ></Box>
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'hsl(206,10%,70%)',
            height: 4,
            width: '50%',
            mb: 16,
            mx: '$4',
          }}
        ></Box>
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'hsl(206,10%,70%)',
            height: 4,
            width: '25%',
            mb: 16,
            mx: '$4',
          }}
        ></Box>
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'hsl(206,10%,70%)',
            height: 4,
            width: '50%',
            mb: 16,
            mx: '$4',
          }}
        ></Box>
        <Box
          css={{
            position: 'relative',
            zIndex: '1',
            backgroundColor: 'hsl(206,10%,70%)',
            height: 4,
            width: '25%',
            mb: 8,
            mx: '$4',
          }}
        ></Box>
        <Box
          css={{
            position: 'absolute',
            top: 5,
            left: 0,
            right: 0,
            zIndex: '0',
            height: 20,
            backgroundColor: 'hsl(206,10%,92%)',
            display: 'flex',
            alignItems: 'center',
            px: '$3',
            animation: `${menuitem} 5000ms infinite`,
            animationDelay: '1000ms',
          }}
        ></Box>
      </Box>
    </Box>
  );
};
