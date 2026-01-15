# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

# Tooltip

A popup that displays information related to an element when the element
receives keyboard focus or the mouse hovers over it.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-tooltip
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Tooltip } from "radix-ui";

export default () => (
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger />
			<Tooltip.Portal>
				<Tooltip.Content>
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	</Tooltip.Provider>
);
```

## API Reference

### Provider

Wraps your app to provide global functionality to your tooltips.

### Root

Contains all the parts of a tooltip.

### Trigger

The button that toggles the tooltip. By default, the `Tooltip.Content` will position itself against the trigger.

### Portal

When used, portals the content part into the `body`.

### Content

The component that pops out when the tooltip is open.

### Arrow

An optional arrow element to render alongside the tooltip. This can be used to help visually link the trigger with the `Tooltip.Content`. Must be rendered inside `Tooltip.Content`.

## Examples

### Configure globally

Use the `Provider` to control `delayDuration` and `skipDelayDuration` globally.

```jsx line=4
import { Tooltip } from "radix-ui";

export default () => (
	<Tooltip.Provider delayDuration={800} skipDelayDuration={500}>
		<Tooltip.Root>
			<Tooltip.Trigger>…</Tooltip.Trigger>
			<Tooltip.Content>…</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger>…</Tooltip.Trigger>
			<Tooltip.Content>…</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
);
```

### Show instantly

Use the `delayDuration` prop to control the time it takes for the tooltip to open.

```jsx line=4
import { Tooltip } from "radix-ui";

export default () => (
	<Tooltip.Root delayDuration={0}>
		<Tooltip.Trigger>…</Tooltip.Trigger>
		<Tooltip.Content>…</Tooltip.Content>
	</Tooltip.Root>
);
```

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-tooltip-trigger-width` and `--radix-tooltip-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import { Tooltip } from "radix-ui";
import "./styles.css";

export default () => (
	<Tooltip.Root>
		<Tooltip.Trigger>…</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content className="TooltipContent" sideOffset={5}>
				…
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
);
```

```css
/* styles.css */
.TooltipContent {
	width: var(--radix-tooltip-trigger-width);
	max-height: var(--radix-tooltip-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-tooltip-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=8
// index.jsx
import { Tooltip } from "radix-ui";
import "./styles.css";

export default () => (
	<Tooltip.Root>
		<Tooltip.Trigger>…</Tooltip.Trigger>
		<Tooltip.Content className="TooltipContent">…</Tooltip.Content>
	</Tooltip.Root>
);
```

```css line=3-4
/* styles.css */
.TooltipContent {
	transform-origin: var(--radix-tooltip-content-transform-origin);
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

```jsx line=8
// index.jsx
import { Tooltip } from "radix-ui";
import "./styles.css";

export default () => (
	<Tooltip.Root>
		<Tooltip.Trigger>…</Tooltip.Trigger>
		<Tooltip.Content className="TooltipContent">…</Tooltip.Content>
	</Tooltip.Root>
);
```

```css line=6,9
/* styles.css */
.TooltipContent {
	animation-duration: 0.6s;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.TooltipContent[data-side="top"] {
	animation-name: slideUp;
}
.TooltipContent[data-side="bottom"] {
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

## Accessibility

### Keyboard Interactions

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract parts and introduce a content prop

This example abstracts all of the `Tooltip` parts and introduces a new `content` prop.

#### Usage

```jsx
import { Tooltip } from "./your-tooltip";

export default () => (
	<Tooltip content="Tooltip content">
		<button>Tooltip trigger</button>
	</Tooltip>
);
```

#### Implementation

Use the [`asChild` prop](/primitives/docs/guides/composition) to convert the trigger part into a slottable area. It will replace the trigger with the child that gets passed to it.

```jsx line=8-10
// your-tooltip.jsx
import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

export function Tooltip({
	children,
	content,
	open,
	defaultOpen,
	onOpenChange,
	...props
}) {
	return (
		<TooltipPrimitive.Root
			open={open}
			defaultOpen={defaultOpen}
			onOpenChange={onOpenChange}
		>
			<TooltipPrimitive.Trigger asChild>
				{children}
			</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Content side="top" align="center" {...props}>
				{content}
				<TooltipPrimitive.Arrow width={11} height={5} />
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Root>
	);
}
```