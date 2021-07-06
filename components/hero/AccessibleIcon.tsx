import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { CrossCircledIcon } from '@radix-ui/react-icons';

export const AccessibleIconDemo = () => (
  <AccessibleIcon.Root label="Close">
    <CrossCircledIcon />
  </AccessibleIcon.Root>
);
