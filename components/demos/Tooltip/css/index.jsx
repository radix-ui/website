import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import classnames from 'classnames';
import { PlusIcon } from '@radix-ui/react-icons';
import './styles.css';

const TooltipDemo = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="IconButton">
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <TooltipContent sideOffset={5}>Add to library</TooltipContent>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

const TooltipContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Tooltip.Portal>
      <Tooltip.Content
        className={classnames('TooltipContent', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Tooltip.Arrow className="TooltipArrow" />
      </Tooltip.Content>
    </Tooltip.Portal>
  );
});

export default TooltipDemo;
