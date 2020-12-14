import React from 'react';
import { Box, Text, Flex, styled, css } from '@modulz/design-system';

const AvatarSkeleton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '45px',
  width: '45px',
  borderRadius: '50%',
  backgroundColor: 'white',
  mx: '$2',
  // animation: `${anim} 1000ms infinite`,
});

export function AvatarHero() {
  return (
    <Flex>
      <AvatarSkeleton>
        <Text size="5" color="gray" css={{ fontWeight: 500, letterSpacing: '-.5px' }}>CT</Text>
      </AvatarSkeleton>
      <AvatarSkeleton>
        <Text size="5" color="gray" css={{ fontWeight: 500, letterSpacing: '-.5px' }}>AV</Text>
      </AvatarSkeleton>
      <AvatarSkeleton>
        <Text size="5" color="gray" css={{ fontWeight: 500, letterSpacing: '-.5px' }}>PD</Text>
      </AvatarSkeleton>
    </Flex>
  );
}
