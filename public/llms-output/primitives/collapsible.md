# Collapsible

An interactive component which expands/collapses a panel.

# Collapsible

An interactive component which expands/collapses a panel.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-collapsible
```

## Anatomy

Import the components and piece the parts together.

```jsx
import { Collapsible } from "radix-ui";

export default () => (
	<Collapsible.Root>
		<Collapsible.Trigger />
		<Collapsible.Content />
	</Collapsible.Root>
);
```

## API Reference

### Root

Contains all the parts of a collapsible.

### Trigger

The button that toggles the collapsible.

### Content

The component that contains the collapsible content.

## Examples

### Animating content size

Use the `--radix-collapsible-content-width` and/or `--radix-collapsible-content-height` CSS variables to animate the size of the content when it opens/closes. Here's a demo:

```jsx line=8
// index.jsx
import { Collapsible } from "radix-ui";
import "./styles.css";

export default () => (
	<Collapsible.Root>
		<Collapsible.Trigger>…</Collapsible.Trigger>
		<Collapsible.Content className="CollapsibleContent">
			…
		</Collapsible.Content>
	</Collapsible.Root>
);
```

```css line=17,23
/* styles.css */
.CollapsibleContent {
	overflow: hidden;
}
.CollapsibleContent[data-state="open"] {
	animation: slideDown 300ms ease-out;
}
.CollapsibleContent[data-state="closed"] {
	animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
	from {
		height: 0;
	}
	to {
		height: var(--radix-collapsible-content-height);
	}
}

@keyframes slideUp {
	from {
		height: var(--radix-collapsible-content-height);
	}
	to {
		height: 0;
	}
}
```

## Accessibility

Adheres to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure).

### Keyboard Interactions