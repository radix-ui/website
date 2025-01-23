import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./PrimitivesHeroAccordion.module.css";

const Accordion = (props: AccordionPrimitive.AccordionSingleProps) => (
	<AccordionPrimitive.Root {...props} className={styles.Accordion} />
);
const AccordionItem = (props: AccordionPrimitive.AccordionItemProps) => (
	<AccordionPrimitive.Item {...props} className={styles.Item} />
);

const AccordionTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, forwardedRef) => (
	<AccordionPrimitive.Header className={styles.Header}>
		<AccordionPrimitive.Trigger
			{...props}
			className={styles.Trigger}
			ref={forwardedRef}
		>
			{children}
			<ChevronDownIcon className={styles.Chevron} aria-hidden />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
const AccordionContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof AccordionPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
	<AccordionPrimitive.Content
		{...props}
		className={styles.Content}
		ref={forwardedRef}
	>
		<div className={styles.ContentText}>{children}</div>
	</AccordionPrimitive.Content>
));

export function PrimitivesHeroAccordion() {
	return (
		<Accordion type="single" defaultValue="item-1" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. The Accordion adheres to the WAI‑ARIA design pattern.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2">
				<AccordionTrigger>Is it unstyled?</AccordionTrigger>
				<AccordionContent>
					Yes. The Accordion is unstyled by default, giving you freedom over the
					look and feel.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3">
				<AccordionTrigger>Can it be animated?</AccordionTrigger>
				<AccordionContent>
					Yes! You can animate the Accordion with CSS or JavaScript.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
