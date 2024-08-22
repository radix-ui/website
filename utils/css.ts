import * as React from 'react';
import { classNames } from './classNames';

export function styled<Comp extends React.ComponentType | keyof JSX.IntrinsicElements, Ref = any>(
  Component: Comp,
  className: string
) {
  const wrapped = React.forwardRef<Ref, React.ComponentProps<Comp>>(
    ({ children, ...props }: any, ref) => {
      return React.createElement(
        Component,
        {
          ...props,
          ref: ref,
          className: classNames(className, props.className),
        },
        children
      );
    }
  );
  if (typeof Component === 'string') {
    wrapped.displayName = `Styled${capitalize(Component)}`;
  } else {
    wrapped.displayName = `Styled${Component.displayName || Component.name || 'Component'}`;
  }
  return wrapped;
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
