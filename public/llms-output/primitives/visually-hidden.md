# Visually Hidden

Hides content from the screen in an accessible way.

# Visually Hidden

Hides content from the screen in an accessible way.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-visually-hidden
```

## Anatomy

Import the component.

```jsx
import { VisuallyHidden } from "radix-ui";

export default () => <VisuallyHidden.Root />;
```

## Basic example

Use the visually hidden primitive.

```jsx
import { VisuallyHidden } from "radix-ui";
import { GearIcon } from "@radix-ui/react-icons";

export default () => (
	<button>
		<GearIcon />
		<VisuallyHidden.Root>Settings</VisuallyHidden.Root>
	</button>
);
```

## API Reference

### Root

Anything you put inside this component will be hidden from the screen but will be announced by screen readers.

## Accessibility

This is useful in certain scenarios as an alternative to traditional labelling with `aria-label` or `aria-labelledby`.