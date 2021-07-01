import React from 'react';
import { styled } from '@modulz/design-system';
import * as HoverCard from '@radix-ui/react-hover-card';

const StyledContent = styled(HoverCard.Content, {
  borderRadius: 8,
  padding: 15,
  fontSize: 14,
  backgroundColor: '$panel',
  color: '$hiContrast',
  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,.2))',
  width: 300,
});

const StyledArrow = styled(HoverCard.Arrow, {
  fill: '$panel',
});

export const HoverCardDemo = (props) => (
  <HoverCard.Root {...props}>
    <HoverCard.Trigger href="https://twitter.com">@twitter</HoverCard.Trigger>
    <StyledContent>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
          width="45"
          height="45"
          style={{ borderRadius: '50%' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontWeight: 500 }}>Colm Tuite</span>
          <span style={{ color: '$gray11' }}>@colmtuite</span>
        </div>
      </div>
      <div>
        <p style={{ lineHeight: '20px' }}>
          Founder @Modulz. Previously founded @plexiapp (acquired).
        </p>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flexGrow: 1 }}>
            <span style={{ fontWeight: 500 }}>Following</span>
            <span style={{ color: '$gray11' }}>35</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flexGrow: 1 }}>
            <span style={{ fontWeight: 500 }}>Followers</span>
            <span style={{ color: '$gray11' }}>59M</span>
          </div>
        </div>
      </div>
      <StyledArrow />
    </StyledContent>
  </HoverCard.Root>
);
