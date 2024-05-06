import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const AspectRatioDemo = () => (
  <div className="shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]">
    <AspectRatio.Root ratio={16 / 9}>
      <img
        className="size-full object-cover"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </AspectRatio.Root>
  </div>
);

export default AspectRatioDemo;
