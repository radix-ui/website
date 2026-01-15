# Toolbar

A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.

# Toolbar

A container for grouping a set of controls, such as buttons, toggle groups or
dropdown menus.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-toolbar
```

## Anatomy

Import the component.

```jsx
import { Toolbar } from "radix-ui";

export default () => (
	<Toolbar.Root>
		<Toolbar.Button />
		<Toolbar.Separator />
		<Toolbar.Link />
		<Toolbar.ToggleGroup>
			<Toolbar.ToggleItem />
		</Toolbar.ToggleGroup>
	</Toolbar.Root>
);
```

## API Reference

### Root

Contains all the toolbar component parts.

### Button

A button item.

### Link

A link item.

### ToggleGroup

A set of two-state buttons that can be toggled on or off.

### ToggleItem

An item in the group.

### Separator

Used to visually separate items in the toolbar.

## Examples

### Use with other primitives

All our primitives which expose a `Trigger` part, such as `Dialog`, `AlertDialog`, `Popover`, `DropdownMenu` can be composed within a toolbar by using the [`asChild` prop](/primitives/docs/guides/composition).

Here is an example using our `DropdownMenu` primitive.

```jsx line=8-10
import { Toolbar, DropdownMenu } from "radix-ui";

export default () => (
	<Toolbar.Root>
		<Toolbar.Button>Action 1</Toolbar.Button>
		<Toolbar.Separator />
		<DropdownMenu.Root>
			<Toolbar.Button asChild>
				<DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
			</Toolbar.Button>
			<DropdownMenu.Content>…</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Toolbar.Root>
);
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among items.

### Keyboard Interactions