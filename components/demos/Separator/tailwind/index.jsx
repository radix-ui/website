import React from 'react';
import * as Separator from '@radix-ui/react-separator';

const SeparatorDemo = () => (
  <div className="w-full max-w-[300px] mx-[15px]">
    <div className="text-white text-[15px] leading-5 font-medium">Radix Primitives</div>
    <div className="text-white text-[15px] leading-5">An open-source UI component library.</div>
    <Separator.Root className="bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
    <div className="flex h-5 items-center">
      <div className="text-white text-[15px] leading-5">Blog</div>
      <Separator.Root
        className="bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <div className="text-white text-[15px] leading-5">Docs</div>
      <Separator.Root
        className="bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <div className="text-white text-[15px] leading-5">Source</div>
    </div>
  </div>
);

export default SeparatorDemo;
