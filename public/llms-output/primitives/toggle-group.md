# Toggle Group

A set of two-state buttons that can be toggled on or off.

# Toggle Group

A set of two-state buttons that can be toggled on or off.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-toggle-group
```

## Anatomy

Import the component.

```jsx
import { ToggleGroup } from "radix-ui";

export default () => (
	<ToggleGroup.Root>
		<ToggleGroup.Item />
	</ToggleGroup.Root>
);
```

## API Reference

### Root

Contains all the parts of a toggle group.

### Item

An item in the group.

## Examples

### Ensuring there is always a value

You can control the component to ensure a value.

```jsx line=5,8
import * as React from "react";
import { ToggleGroup } from "radix-ui";

export default () => {
	const [value, setValue] = React.useState("left");

	return (
		<ToggleGroup.Root
			type="single"
			value={value}
			onValueChange={(value) => {
				if (value) setValue(value);
			}}
		>
			<ToggleGroup.Item value="left">
				<TextAlignLeftIcon />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="center">
				<TextAlignCenterIcon />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="right">
				<TextAlignRightIcon />
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	);
};
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among items.

### Keyboard Interactions