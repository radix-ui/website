# Avatar

An image element with a fallback for representing the user.

# Avatar

An image element with a fallback for representing the user.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-avatar
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Avatar } from "radix-ui";

export default () => (
	<Avatar.Root>
		<Avatar.Image />
		<Avatar.Fallback />
	</Avatar.Root>
);
```

## API Reference

### Root

Contains all the parts of an avatar.

### Image

The image to render. By default it will only render when it has loaded. You can use the `onLoadingStatusChange` handler if you need more control.

### Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `onLoadingStatusChange` handler on `Avatar.Image`.

## Examples

### Clickable Avatar with tooltip

You can compose the Avatar with a [Tooltip](/primitives/docs/components/tooltip) to display extra information.

```jsx line=1,4,5,7,9-13
import { Avatar, Tooltip } from "radix-ui";

export default () => (
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Avatar.Root>…</Avatar.Root>
		</Tooltip.Trigger>

		<Tooltip.Content side="top">
			Tooltip content
			<Tooltip.Arrow />
		</Tooltip.Content>
	</Tooltip.Root>
);
```