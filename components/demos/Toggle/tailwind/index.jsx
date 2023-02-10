import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { FontItalicIcon } from '@radix-ui/react-icons';

const ToggleDemo = () => (
  <Toggle.Root
    aria-label="Toggle italic"
    className="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-9 w-9 items-center justify-center rounded bg-white text-base leading-4 shadow-md focus:shadow-none focus:outline focus:outline-2 focus:outline-black"
  >
    <FontItalicIcon />
  </Toggle.Root>
);

export default ToggleDemo;
