import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root className="w-[300px]" open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between">
        <span className=" text-[15px] leading-[25px] text-white">
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
          <button className="rounded-full size-[25px] inline-flex items-center justify-center text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <div className="bg-white rounded my-2.5 p-2.5 shadow-[0_2px_10px] shadow-blackA4">
        <span className="text-violet11 text-[15px] leading-[25px]">@radix-ui/primitives</span>
      </div>

      <Collapsible.Content>
        <div className="bg-white rounded my-2.5 p-2.5 shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-violet11 text-[15px] leading-[25px]">@radix-ui/colors</span>
        </div>
        <div className="bg-white rounded my-2.5 p-2.5 shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-violet11 text-[15px] leading-[25px]">@radix-ui/themes</span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleDemo;
