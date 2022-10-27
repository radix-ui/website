import React from 'react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import './styles.css';

const AccordionDemo = () => (
  <AccordionPrimitive.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionPrimitive.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionPrimitive.Item>

    <AccordionPrimitive.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionPrimitive.Item>

    <AccordionPrimitive.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionPrimitive.Content className="AccordionContent">
        <div className="AccordionContentText">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  </AccordionPrimitive.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className="AccordionHeader">
    <AccordionPrimitive.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </AccordionPrimitive.Content>
));

export default AccordionDemo;
