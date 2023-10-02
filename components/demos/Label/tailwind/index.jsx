import React from 'react';
import * as Label from '@radix-ui/react-label';

const LabelDemo = () => (
  <div className="flex flex-wrap items-center gap-[15px] px-5">
    <Label.Root className="text-[15px] font-medium leading-[35px] text-white" htmlFor="firstName">
      First name
    </Label.Root>
    <input
      className="bg-blackA2 shadow-blackA6 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
      type="text"
      id="firstName"
      defaultValue="Pedro Duarte"
    />
  </div>
);

export default LabelDemo;
