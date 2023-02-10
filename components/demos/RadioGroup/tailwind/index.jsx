import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex flex-col gap-2.5"
      defaultValue="default"
      aria-label="View density"
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value="default"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
        </RadioGroup.Item>
        <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r1">
          Default
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value="comfortable"
          id="r2"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
        </RadioGroup.Item>
        <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value="compact"
          id="r3"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
        </RadioGroup.Item>
        <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

export default RadioGroupDemo;
