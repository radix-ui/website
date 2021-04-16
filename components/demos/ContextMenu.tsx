import React from 'react';
import { styled, Box, keyframes } from '@modulz/design-system';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { HeroContainer } from '@components/HeroContainer';

const StyledContent = styled(ContextMenu.Content, {
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

const StyledItem = styled(ContextMenu.Item, itemStyles as any);

const StyledIndentedItem = styled(ContextMenu.Item, {
  ...(itemStyles as any),
  padding: '5px 10px 5px 25px',
});

const StyledCheckboxItem = styled(ContextMenu.CheckboxItem, {
  ...(itemStyles as any),
  padding: '5px 10px 5px 25px',
});

const StyledRadioGroup = styled(ContextMenu.RadioGroup, {});

const StyledRadioItem = styled(ContextMenu.RadioItem, {
  ...(itemStyles as any),
  padding: '5px 10px 5px 25px',
});

const StyledItemIndicator = styled(ContextMenu.ItemIndicator, {
  position: 'absolute',
  left: 5,
});

const StyledSeparator = styled(ContextMenu.Separator, {
  height: 1,
  backgroundColor: 'gainsboro',
  margin: 5,
});

const StyledLabel = styled(ContextMenu.Label, {
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

export const ContextMenuDemo = ({ showDisabled, showSeparator, showLabel }) => (
  <ContextMenu.Root>
    <ContextMenu.Trigger>
      <div
        style={{
          backgroundColor: 'gainsboro',
          padding: 50,
          textAlign: 'center',
        }}
      >
        Right click anywhere
      </div>
    </ContextMenu.Trigger>
    <StyledContent>
      {showLabel && <StyledLabel>Actions</StyledLabel>}
      <StyledItem disabled={showDisabled} onSelect={() => console.log('cut')}>
        Cut
      </StyledItem>
      {showSeparator && <StyledSeparator />}
      <StyledItem onSelect={() => console.log('copy')}>Copy</StyledItem>
      {showSeparator && <StyledSeparator />}
      <StyledItem onSelect={() => console.log('paste')}>Paste</StyledItem>
    </StyledContent>
  </ContextMenu.Root>
);

export const ContextMenuCheckboxDemo = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div
          style={{
            backgroundColor: 'gainsboro',
            padding: 50,
            textAlign: 'center',
          }}
        >
          Right click anywhere
        </div>
      </ContextMenu.Trigger>
      <StyledContent>
        <StyledIndentedItem onSelect={() => console.log('radix-ui')}>
          About Radix UI
        </StyledIndentedItem>
        <StyledIndentedItem onSelect={() => console.log('check-for-updates')}>
          Check for updates
        </StyledIndentedItem>
        <StyledSeparator />
        <StyledCheckboxItem checked={checked} onCheckedChange={setChecked}>
          <StyledItemIndicator>
            <CheckIcon />
          </StyledItemIndicator>
          Show hidden files
        </StyledCheckboxItem>
      </StyledContent>
    </ContextMenu.Root>
  );
};

export const ContextMenuRadioDemo = () => {
  const [color, setColor] = React.useState('blue');

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div
          style={{
            backgroundColor: 'gainsboro',
            padding: 50,
            textAlign: 'center',
          }}
        >
          Right click anywhere
        </div>
      </ContextMenu.Trigger>
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
      </StyledContent>
    </ContextMenu.Root>
  );
};

export const ContextMenuComplexDemo = () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger>
      <div
        style={{
          backgroundColor: 'gainsboro',
          padding: 50,
          textAlign: 'center',
        }}
      >
        Right click anywhere
      </div>
    </ContextMenu.Trigger>
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
    </StyledContent>
  </ContextMenu.Root>
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

export const ContextMenuHero = () => {
  return (
    <HeroContainer>
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
        <Box
          css={{
            position: 'absolute',
            top: 0,
            left: -9,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clipPath="url(#clip0)">
              <g filter="url(#filter0_d)">
                <path
                  d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                  fill="black"
                />
                <path
                  d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="-5.68303"
                y="-5.68302"
                width="31.4545"
                height="32.5526"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
              <clipPath id="clip0">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Box>
      </Box>
    </HeroContainer>
  );
};
