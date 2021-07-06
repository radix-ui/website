import React from 'react';
import { Flex, styled } from '@modulz/design-system';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { HeroContainer } from '@components/HeroContainer';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 48,
  height: 48,
  borderRadius: 24,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$violet2',
  fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

export const AvatarHero = () => (
  <HeroContainer>
    <Flex css={{ gap: '$4' }}>
      <Avatar>
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src="https://picsum.photos/id/1005/400/400" />
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
    </Flex>
  </HeroContainer>
);
