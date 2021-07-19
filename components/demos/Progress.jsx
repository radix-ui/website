import React from 'react';
import { styled } from '@modulz/design-system';
import { blackA } from '@radix-ui/colors';
import * as ProgressPrimitive from '@radix-ui/react-progress';

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: blackA.blackA9,
  borderRadius: '99999px',
  width: 300,
  height: 25,
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: 'white',
  height: '100%',
  transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

// Exports
export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;

// Your app...
const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress(66), 500), []);
  return (
    <Progress value={66}>
      <ProgressIndicator style={{ width: `${progress}%` }} />
    </Progress>
  );
};

export default ProgressDemo;
