import React from 'react';
import { Text, Flex, styled } from '@modulz/design-system';
import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { HeroContainer } from '@components/HeroContainer';

const StyledAvatar = styled(Avatar.Root, {
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

const StyledImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'dodgerblue',
});

export const AvararDemo = ({ initialsOnly }) => (
  <StyledAvatar>
    {!initialsOnly && <StyledImage src="https://picsum.photos/id/1005/400/400" />}
    <StyledFallback>UI</StyledFallback>
  </StyledAvatar>
);

const StyledTooltipTrigger = styled(Tooltip.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
});

const StyledTooltipContent = styled(Tooltip.Content, {
  borderRadius: 3,
  padding: '5px 10px',
  fontSize: 14,
  backgroundColor: 'gainsboro',
  color: 'black',
});

export const AvatarTooltipDemo = () => (
  <Tooltip.Root>
    <StyledTooltipTrigger>
      <StyledAvatar onClick={() => alert('Clicked!')}>
        <StyledImage src="https://picsum.photos/id/1006/400/400" />
        <StyledFallback>AB</StyledFallback>
      </StyledAvatar>
    </StyledTooltipTrigger>

    <StyledTooltipContent side="top">
      Tooltip content
      <Tooltip.Arrow style={{ fill: 'gainsboro' }} />
    </StyledTooltipContent>
  </Tooltip.Root>
);

const AvatarSkeleton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '45px',
  width: '45px',
  borderRadius: '50%',
  backgroundColor: 'white',
  mx: '$2',
});

export function AvatarHero() {
  return (
    <HeroContainer>
      <Flex>
        <AvatarSkeleton>
          <Text size="5" color="gray" css={{ fontWeight: 500, letterSpacing: '-.5px' }}>
            CT
          </Text>
        </AvatarSkeleton>
        <AvatarSkeleton>
          <Text size="5" color="gray" css={{ fontWeight: 500, letterSpacing: '-.5px' }}>
            AV
          </Text>
        </AvatarSkeleton>
        <AvatarSkeleton>
          <Text size="5" color="gray" css={{ fontWeight: 500, letterSpacing: '-.5px' }}>
            PD
          </Text>
        </AvatarSkeleton>
      </Flex>
    </HeroContainer>
  );
}
