import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { FontItalicIcon } from '@radix-ui/react-icons';

const ToggleDemo = () => (
  <Toggle.Root
    aria-label="Toggle italic"
    className="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA4 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black"
  >
    <FontItalicIcon />
  </Toggle.Root>
);

export default ToggleDemo;
