import React from 'react';
import { Flex, styled, keyframes } from '@modulz/design-system';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { HeroContainer } from '@components/HeroContainer';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '$7',
  height: '$7',
  borderRadius: '100%',
  backgroundColor: '$violetA8',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  animation: `${fadeIn} 200ms ease-out`,
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$violet2',
  color: '$violet10',
  fontSize: '$3',
  fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

export const AvatarHero = () => (
  <HeroContainer css={{ py: '$9' }}>
    <Flex css={{ gap: '$4' }}>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=128&h=128&dpr=2&q=80" />
        <AvatarFallback delayMs={600}>PD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=128&h=128&dpr=2&q=80" />
        <AvatarFallback delayMs={600}>PD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CT</AvatarFallback>
      </Avatar>
    </Flex>
  </HeroContainer>
);
