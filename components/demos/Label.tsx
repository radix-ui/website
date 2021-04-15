import React from 'react';
import { styled } from '@modulz/design-system';
import * as Label from '@radix-ui/react-label';

const StyledLabel = styled(Label.Root, {
  fontSize: '16px',
  fontFamily: 'system-ui',
});

export const LabelDemo = () => <StyledLabel>First name</StyledLabel>;
