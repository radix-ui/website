import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';

const AvatarDemo = () => (
  <Flex css={{ gap: 20 }}>
    <AvatarRoot>
      <AvatarImage
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <AvatarFallback delayMs={600}>CT</AvatarFallback>
    </AvatarRoot>
    <AvatarRoot>
      <AvatarImage
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <AvatarFallback delayMs={600}>JD</AvatarFallback>
    </AvatarRoot>
    <AvatarRoot>
      <AvatarFallback>PD</AvatarFallback>
    </AvatarRoot>
  </Flex>
);

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const Flex = styled('div', { display: 'flex' });

export default AvatarDemo;
