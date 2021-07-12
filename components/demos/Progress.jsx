import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';
import * as ProgressPrimitive from '@radix-ui/react-progress';

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: blackA.blackA8,
  borderRadius: 12.5,
  height: 25,
  width: 300,
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  backgroundColor: 'white',
  height: '100%',
  transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

// Exports
export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;

// Your app...
const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => setTimeout(() => setProgress(66), 500), []);
  return (
    <Progress value={66}>
      <ProgressIndicator style={{ width: `${progress}%` }} />
    </Progress>
  );
};

export default ProgressDemo;
