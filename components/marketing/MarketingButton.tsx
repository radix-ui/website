import { Box, darkTheme, styled } from '@modulz/design-system';
import React from 'react';

export const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$7',
  px: '$4',
  fontFamily: '$untitled',
  fontWeight: 500,
  borderRadius: '$2',
  fontSize: '$3',
  lineHeight: '$sizes$7',

  '&:disabled': {
    bc: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  '&[href]': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      gray: {
        bc: '$slateA3',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            bc: '$slateA4',
          },
        },
        '&:active': {
          bc: '$slateA5',
        },
        '&:focus-visible': {
          bc: '$tealA3',
          boxShadow: '0 0 0 2px $colors$blue8',
        },
      },
      contrast: {
        bc: '$hiContrast',
        color: '$loContrast',
        '@hover': {
          '&:hover': {
            bc: '$teal12',
          },
        },
        '&:active': {
          bc: '$teal4',
          color: '$teal12',
        },
        '&:focus-visible': {
          boxShadow: '0 0 0 2px $colors$blue8',
        },
        [`.${darkTheme} &`]: {
          color: '$hiContrast',
          bc: 'hsl(0 0% 6%)',
          boxShadow: `
            0 0 0 2px $colors$plumA3,
            -15px 0 30px -15px $colors$orangeA8,
            0 0 30px -15px $colors$pinkA8,
            15px 0 30px -15px $colors$violetA8
          `,
          '&:focus-visible': {
            boxShadow: `
              0 0 0 2px $colors$plumA3,
              -15px 0 30px -15px $colors$orangeA8,
              0 0 30px -15px $colors$pinkA8,
              15px 0 30px -15px $colors$violetA8,
              0 0 0 2px $colors$blueA8
            `,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
});

type MarketingButtonProps = {
  as: any;
  icon?: React.ComponentType<any>;
} & React.ComponentProps<typeof StyledButton>;

export const MarketingButton = React.forwardRef<HTMLButtonElement, MarketingButtonProps>(
  ({ children, icon: Icon, ...props }, forwardedRef) => {
    return (
      <StyledButton ref={forwardedRef} {...props}>
        {children}
        {Icon && (
          <Box as="span" css={{ ml: 8, mr: -3 }}>
            <Icon />
          </Box>
        )}
      </StyledButton>
    );
  }
);
