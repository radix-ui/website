# Hover Card

For sighted users to preview content available behind a link.

# Hover Card

For sighted users to preview content available behind a link.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-hover-card
```

## Anatomy

Import all parts and piece them together.

```jsx
import { HoverCard } from "radix-ui";

export default () => (
	<HoverCard.Root>
		<HoverCard.Trigger />
		<HoverCard.Portal>
			<HoverCard.Content>
				<HoverCard.Arrow />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);
```

## API Reference

### Root

Contains all the parts of a hover card.

### Trigger

The link that opens the hover card when hovered.

### Portal

When used, portals the content part into the `body`.

### Content

The component that pops out when the hover card is open.

### Arrow

An optional arrow element to render alongside the hover card. This can be used to help visually link the trigger with the `HoverCard.Content`. Must be rendered inside `HoverCard.Content`.

## Examples

### Show instantly

Use the `openDelay` prop to control the time it takes for the hover card to open.

```jsx line=4
import { HoverCard } from "radix-ui";

export default () => (
	<HoverCard.Root openDelay={0}>
		<HoverCard.Trigger>…</HoverCard.Trigger>
		<HoverCard.Content>…</HoverCard.Content>
	</HoverCard.Root>
);
```

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-hover-card-trigger-width` and `--radix-hover-card-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import { HoverCard } from "radix-ui";
import "./styles.css";

export default () => (
	<HoverCard.Root>
		<HoverCard.Trigger>…</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content className="HoverCardContent" sideOffset={5}>
				…
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);
```

```css
/* styles.css */
.HoverCardContent {
	width: var(--radix-hover-card-trigger-width);
	max-height: var(--radix-hover-card-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-hover-card-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=8
// index.jsx
import { HoverCard } from "radix-ui";
import "./styles.css";

export default () => (
	<HoverCard.Root>
		<HoverCard.Trigger>…</HoverCard.Trigger>
		<HoverCard.Content className="HoverCardContent">…</HoverCard.Content>
	</HoverCard.Root>
);
```

```css line=3
/* styles.css */
.HoverCardContent {
	transform-origin: var(--radix-hover-card-content-transform-origin);
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
import { HoverCard } from "radix-ui";
import "./styles.css";

export default () => (
	<HoverCard.Root>
		<HoverCard.Trigger>…</HoverCard.Trigger>
		<HoverCard.Content className="HoverCardContent">…</HoverCard.Content>
	</HoverCard.Root>
);
```

```css line=6-11
/* styles.css */
.HoverCardContent {
	animation-duration: 0.6s;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.HoverCardContent[data-side="top"] {
	animation-name: slideUp;
}
.HoverCardContent[data-side="bottom"] {
	animation-name: slideDown;
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
```

## Accessibility

The hover card is intended for sighted users only, the content will be inaccessible to keyboard users.

### Keyboard Interactions