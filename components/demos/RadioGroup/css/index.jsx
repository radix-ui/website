import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import classnames from 'classnames';
import './styles.css';

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem value="default" id="r1" />
        <label className="Label" htmlFor="r1">
          Default
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem value="comfortable" id="r2" />
        <label className="Label" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem value="compact" id="r3" />
        <label className="Label" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

const RadioGroupItem = React.forwardRef(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroup.Item
      className={classnames('RadioGroupItem', className)}
      {...props}
      ref={forwardedRef}
    >
      <RadioGroup.Indicator className="RadioGroupIndicator" />
    </RadioGroup.Item>
  );
});

export default RadioGroupDemo;
