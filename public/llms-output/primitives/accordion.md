# Accordion

A vertically stacked set of interactive headings that each reveal an associated section of content.

# Accordion

A vertically stacked set of interactive headings that each reveal an
associated section of content.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-accordion
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Accordion } from "radix-ui";

export default () => (
	<Accordion.Root>
		<Accordion.Item>
			<Accordion.Header>
				<Accordion.Trigger />
			</Accordion.Header>
			<Accordion.Content />
		</Accordion.Item>
	</Accordion.Root>
);
```

## API Reference

### Root

Contains all the parts of an accordion.

### Item

Contains all the parts of a collapsible section.

### Header

Wraps an `Accordion.Trigger`. Use the `asChild` prop to update it to the appropriate heading level for your page.

### Trigger

Toggles the collapsed state of its associated item. It should be nested inside of an `Accordion.Header`.

### Content

Contains the collapsible content for an item.

## Examples

### Expanded by default

Use the `defaultValue` prop to define the open item by default.

```jsx line=1
<Accordion.Root type="single" defaultValue="item-2">
	<Accordion.Item value="item-1">…</Accordion.Item>
	<Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Allow collapsing all items

Use the `collapsible` prop to allow all items to close.

```jsx line=1
<Accordion.Root type="single" collapsible>
	<Accordion.Item value="item-1">…</Accordion.Item>
	<Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Multiple items open at the same time

Set the `type` prop to `multiple` to enable opening multiple items at once.

```jsx line=1
<Accordion.Root type="multiple">
	<Accordion.Item value="item-1">…</Accordion.Item>
	<Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Rotated icon when open

You can add extra decorative elements, such as chevrons, and rotate it when the item is open.

```jsx line=12
// index.jsx
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

export default () => (
	<Accordion.Root type="single">
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger className="AccordionTrigger">
					<span>Trigger text</span>
					<ChevronDownIcon className="AccordionChevron" aria-hidden />
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>…</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);
```

```css line=5-7
/* styles.css */
.AccordionChevron {
	transition: transform 300ms;
}
.AccordionTrigger[data-state="open"] > .AccordionChevron {
	transform: rotate(180deg);
}
```

### Horizontal orientation

Use the `orientation` prop to create a horizontal accordion.

```jsx line=1
<Accordion.Root orientation="horizontal">
	<Accordion.Item value="item-1">…</Accordion.Item>
	<Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Animating content size

Use the `--radix-accordion-content-width` and/or `--radix-accordion-content-height` CSS variables to animate the size of the content when it opens/closes:

```jsx line=9
// index.jsx
import { Accordion } from "radix-ui";
import "./styles.css";

export default () => (
	<Accordion.Root type="single">
		<Accordion.Item value="item-1">
			<Accordion.Header>…</Accordion.Header>
			<Accordion.Content className="AccordionContent">…</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);
```

```css line=21,27
/* styles.css */
.AccordionContent {
	overflow: hidden;
}
.AccordionContent[data-state="open"] {
	animation: slideDown 300ms ease-out;
}
.AccordionContent[data-state="closed"] {
	animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
	from {
		height: 0;
	}
	to {
		height: var(--radix-accordion-content-height);
	}
}

@keyframes slideUp {
	from {
		height: var(--radix-accordion-content-height);
	}
	to {
		height: 0;
	}
}
```

## Accessibility

Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion).

### Keyboard Interactions