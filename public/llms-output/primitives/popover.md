# Popover

Displays rich content in a portal, triggered by a button.

# Popover

Displays rich content in a portal, triggered by a button.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-popover
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Popover } from "radix-ui";

export default () => (
	<Popover.Root>
		<Popover.Trigger />
		<Popover.Anchor />
		<Popover.Portal>
			<Popover.Content>
				<Popover.Close />
				<Popover.Arrow />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);
```

## API Reference

### Root

Contains all the parts of a popover.

### Trigger

The button that toggles the popover. By default, the `Popover.Content` will position itself against the trigger.

### Anchor

An optional element to position the `Popover.Content` against. If this part is not used, the content will position alongside the .

### Portal

When used, portals the content part into the `body`.

### Content

The component that pops out when the popover is open.

### Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `Popover.Content`. Must be rendered inside `Popover.Content`.

### Close

The button that closes an open popover.

## Examples

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-popover-trigger-width` and `--radix-popover-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import { Popover } from "radix-ui";
import "./styles.css";

export default () => (
	<Popover.Root>
		<Popover.Trigger>…</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="PopoverContent" sideOffset={5}>
				…
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);
```

```css
/* styles.css */
.PopoverContent {
	width: var(--radix-popover-trigger-width);
	max-height: var(--radix-popover-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-popover-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=9
// index.jsx
import { Popover } from "radix-ui";
import "./styles.css";

export default () => (
	<Popover.Root>
		<Popover.Trigger>…</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="PopoverContent">…</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);
```

```css line=3
/* styles.css */
.PopoverContent {
	transform-origin: var(--radix-popover-content-transform-origin);
	animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
	from {
		opacity: 0;
		transform: scale(0);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
```

### Collision-aware animations

We expose `data-side` and `data-align` attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.

```jsx line=9
// index.jsx
import { Popover } from "radix-ui";
import "./styles.css";

export default () => (
	<Popover.Root>
		<Popover.Trigger>…</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="PopoverContent">…</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);
```

```css line=6-11
/* styles.css */
.PopoverContent {
	animation-duration: 0.6s;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.PopoverContent[data-side="top"] {
	animation-name: slideUp;
}
.PopoverContent[data-side="bottom"] {
	animation-name: slideDown;
}

@keyframes slideDown {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slideUp {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
```

### With custom anchor

You can anchor the content to another element if you do not want to use the trigger as the anchor.

```jsx line=7-11
// index.jsx
import { Popover } from "radix-ui";
import "./styles.css";

export default () => (
	<Popover.Root>
		<Popover.Anchor asChild>
			<div className="Row">
				Row as anchor <Popover.Trigger>Trigger</Popover.Trigger>
			</div>
		</Popover.Anchor>

		<Popover.Portal>
			<Popover.Content>…</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);
```

```css
/* styles.css */
.Row {
	background-color: gainsboro;
	padding: 20px;
}
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal).

### Keyboard Interactions

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

#### Abstract the arrow and set default configuration

This example abstracts the `Popover.Arrow` part and sets a default `sideOffset` configuration.

#### Usage

```jsx
import { Popover, PopoverTrigger, PopoverContent } from "./your-popover";

export default () => (
	<Popover>
		<PopoverTrigger>Popover trigger</PopoverTrigger>
		<PopoverContent>Popover content</PopoverContent>
	</Popover>
);
```

#### Implementation

```jsx
// your-popover.jsx
import * as React from "react";
import { Popover as PopoverPrimitive } from "radix-ui";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef(
	({ children, ...props }, forwardedRef) => (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content sideOffset={5} {...props} ref={forwardedRef}>
				{children}
				<PopoverPrimitive.Arrow />
			</PopoverPrimitive.Content>
		</PopoverPrimitive.Portal>
	),
);
```