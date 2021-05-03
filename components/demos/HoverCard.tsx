import React from 'react';
import { styled } from '@modulz/design-system';
import * as HoverCard from '@radix-ui/react-hover-card';

const StyledContent = styled(HoverCard.Content, {
  borderRadius: 3,
  padding: '20px',
  fontSize: 14,
  backgroundColor: 'gainsboro',
  color: 'black',

  dl: { margin: 0 },
  dt: { fontWeight: '500', '&:not(:last-child)': { marginTop: 5 } },
  dd: { marginLeft: 0 },
});

const StyledArrow = styled(HoverCard.Arrow, {
  fill: 'gainsboro',
});

export const HoverCardDemo = (props) => (
  <HoverCard.Root {...props}>
    <HoverCard.Trigger href="http://twitter.com/twitter">@twitter</HoverCard.Trigger>
    <StyledContent side="top" sideOffset={5}>
      <dl>
        <dt>Bio</dt>
        <dd>What's happening?!</dd>
        <dt>Following</dt>
        <dd>35</dd>
        <dt>Followers</dt>
        <dd>59.5M</dd>
      </dl>
      <StyledArrow />
    </StyledContent>
  </HoverCard.Root>
);
