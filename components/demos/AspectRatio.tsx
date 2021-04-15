import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export const AspectRatioDemo = () => (
  <AspectRatio.Root>
    <img
      src="https://images.unsplash.com/photo-1605030753481-bb38b08c384a"
      alt="mountain view"
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
  </AspectRatio.Root>
);
