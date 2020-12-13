import React from 'react';
import { Box, styled, css } from '@modulz/design-system';

const menuitem = css.keyframes({
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

const DropdownMenuContainer = () => {
  return (
    <Box>
      <Box
      css={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '5px',
        height: 20,
        width: 60,
        px: '$2',
        mb: 2,
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
    </Box>

    <Box
      css={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '5px',
        width: 120,
        py: '$1'
      }}
    >
      <Box css={{ position: 'relative', zIndex: '1', backgroundColor: '$gray800', height: 4, width: '25%', mt: 8, mb: 16, mx: '$2' }}></Box>
      <Box css={{ position: 'relative', zIndex: '1', backgroundColor: '$gray800', height: 4, width: '50%', mb: 16, mx: '$2' }}></Box>
      <Box css={{ position: 'relative', zIndex: '1', backgroundColor: '$gray800', height: 4, width: '25%', mb: 16, mx: '$2' }}></Box>
      <Box css={{ position: 'relative', zIndex: '1', backgroundColor: '$gray800', height: 4, width: '50%', mb: 16, mx: '$2' }}></Box>
      <Box css={{ position: 'relative', zIndex: '1', backgroundColor: '$gray800', height: 4, width: '25%', mb: 8, mx: '$2' }}></Box>
      <Box
        css={{
          position: 'absolute',
          top: 5,
          left: 0,
          right: 0,
          zIndex: '0',
          height: 20,
          backgroundColor: '$gray500',
          display: 'flex',
          alignItems: 'center',
          px: '$3',
          animation: `${menuitem} 5000ms infinite`,
          animationDelay: '1000ms',
        }}
      >
      </Box>
    </Box>
    </Box>
  );
};

export const DropdownMenuHero = () => {
  return <DropdownMenuContainer />;
};

