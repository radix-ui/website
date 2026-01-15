# Dropdown Menu

Displays a menu to the user—such as a set of actions or functions—triggered by a button.

# Dropdown Menu

Displays a menu to the user—such as a set of actions or functions—triggered by
a button.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-dropdown-menu
```

## Anatomy

Import all parts and piece them together.

```jsx
import { DropdownMenu } from "radix-ui";

export default () => (
	<DropdownMenu.Root>
		<DropdownMenu.Trigger />

		<DropdownMenu.Portal>
			<DropdownMenu.Content>
				<DropdownMenu.Label />
				<DropdownMenu.Item />

				<DropdownMenu.Group>
					<DropdownMenu.Item />
				</DropdownMenu.Group>

				<DropdownMenu.CheckboxItem>
					<DropdownMenu.ItemIndicator />
				</DropdownMenu.CheckboxItem>

				<DropdownMenu.RadioGroup>
					<DropdownMenu.RadioItem>
						<DropdownMenu.ItemIndicator />
					</DropdownMenu.RadioItem>
				</DropdownMenu.RadioGroup>

				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger />
					<DropdownMenu.Portal>
						<DropdownMenu.SubContent />
					</DropdownMenu.Portal>
				</DropdownMenu.Sub>

				<DropdownMenu.Separator />
				<DropdownMenu.Arrow />
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>
);
```

## API Reference

### Root

Contains all the parts of a dropdown menu.

### Trigger

The button that toggles the dropdown menu. By default, the `DropdownMenu.Content` will position itself against the trigger.

### Portal

When used, portals the content part into the `body`.

### Content

The component that pops out when the dropdown menu is open.

### Arrow

An optional arrow element to render alongside the dropdown menu. This can be used to help visually link the trigger with the `DropdownMenu.Content`. Must be rendered inside `DropdownMenu.Content`.

### Item

The component that contains the dropdown menu items.

### Group

Used to group multiple `DropdownMenu.Item`s.

### Label

Used to render a label. It won't be focusable using arrow keys.

### CheckboxItem

An item that can be controlled and rendered like a checkbox.

### RadioGroup

Used to group multiple `DropdownMenu.RadioItem`s.

### RadioItem

An item that can be controlled and rendered like a radio.

### ItemIndicator

Renders when the parent `DropdownMenu.CheckboxItem` or `DropdownMenu.RadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

### Separator

Used to visually separate items in the dropdown menu.

### Sub

Contains all the parts of a submenu.

### SubTrigger

An item that opens a submenu. Must be rendered inside `DropdownMenu.Sub`.

### SubContent

The component that pops out when a submenu is open. Must be rendered inside `DropdownMenu.Sub`.

## Examples

### With submenus

You can create submenus by using `DropdownMenu.Sub` in combination with its parts.

```jsx line=8-17
<DropdownMenu.Root>
	<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content>
			<DropdownMenu.Item>…</DropdownMenu.Item>
			<DropdownMenu.Item>…</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>Sub menu →</DropdownMenu.SubTrigger>
				<DropdownMenu.Portal>
					<DropdownMenu.SubContent>
						<DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
						<DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
						<DropdownMenu.Arrow />
					</DropdownMenu.SubContent>
				</DropdownMenu.Portal>
			</DropdownMenu.Sub>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>…</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```jsx line=10
// index.jsx
import { DropdownMenu } from "radix-ui";
import "./styles.css";

export default () => (
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.Content>
				<DropdownMenu.Item className="DropdownMenuItem" disabled>
					…
				</DropdownMenu.Item>
				<DropdownMenu.Item className="DropdownMenuItem">…</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>
);
```

```css line=2
/* styles.css */
.DropdownMenuItem[data-disabled] {
	color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```jsx line=6,8
<DropdownMenu.Root>
	<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content>
			<DropdownMenu.Item>…</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>…</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>…</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
```

### With labels

Use the `Label` part to help label a section.

```jsx line=5
<DropdownMenu.Root>
	<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content>
			<DropdownMenu.Label>Label</DropdownMenu.Label>
			<DropdownMenu.Item>…</DropdownMenu.Item>
			<DropdownMenu.Item>…</DropdownMenu.Item>
			<DropdownMenu.Item>…</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```jsx line=6,16-21
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "radix-ui";

export default () => {
	const [checked, setChecked] = React.useState(true);

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.Item>…</DropdownMenu.Item>
					<DropdownMenu.Item>…</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.CheckboxItem
						checked={checked}
						onCheckedChange={setChecked}
					>
						<DropdownMenu.ItemIndicator>
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Checkbox item
					</DropdownMenu.CheckboxItem>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```jsx line=6,13-32
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "radix-ui";

export default () => {
	const [color, setColor] = React.useState("blue");

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content>
					<DropdownMenu.RadioGroup value={color} onValueChange={setColor}>
						<DropdownMenu.RadioItem value="red">
							<DropdownMenu.ItemIndicator>
								<CheckIcon />
							</DropdownMenu.ItemIndicator>
							Red
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="blue">
							<DropdownMenu.ItemIndicator>
								<CheckIcon />
							</DropdownMenu.ItemIndicator>
							Blue
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="green">
							<DropdownMenu.ItemIndicator>
								<CheckIcon />
							</DropdownMenu.ItemIndicator>
							Green
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```jsx line=9,13
import { DropdownMenu } from "radix-ui";

export default () => (
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.Content>
				<DropdownMenu.Item>
					<img src="…" />
					Adolfo Hess
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<img src="…" />
					Miyah Myles
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>
);
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-dropdown-menu-trigger-width` and `--radix-dropdown-menu-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import { DropdownMenu } from "radix-ui";
import "./styles.css";

export default () => (
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
				…
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>
);
```

```css
/* styles.css */
.DropdownMenuContent {
	width: var(--radix-dropdown-menu-trigger-width);
	max-height: var(--radix-dropdown-menu-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-dropdown-menu-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=9
// index.jsx
import { DropdownMenu } from "radix-ui";
import "./styles.css";

export default () => (
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.Content className="DropdownMenuContent">
				…
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>
);
```

```css line=3
/* styles.css */
.DropdownMenuContent {
	transform-origin: var(--radix-dropdown-menu-content-transform-origin);
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
import { DropdownMenu } from "radix-ui";
import "./styles.css";

export default () => (
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>…</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.Content className="DropdownMenuContent">
				…
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>
);
```

```css line=6-11
/* styles.css */
.DropdownMenuContent {
	animation-duration: 0.6s;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.DropdownMenuContent[data-side="top"] {
	animation-name: slideUp;
}
.DropdownMenuContent[data-side="bottom"] {
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

Adheres to the [Menu Button WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) and uses [roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex) to manage focus movement among menu items.

### Keyboard Interactions

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the arrow and item indicators

This example abstracts the `DropdownMenu.Arrow` and `DropdownMenu.ItemIndicator` parts. It also wraps implementation details for `CheckboxItem` and `RadioItem`.

#### Usage

```jsx
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuGroup,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
} from "./your-dropdown-menu";

export default () => (
	<DropdownMenu>
		<DropdownMenuTrigger>DropdownMenu trigger</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuItem>Item</DropdownMenuItem>
			<DropdownMenuLabel>Label</DropdownMenuLabel>
			<DropdownMenuGroup>Group</DropdownMenuGroup>
			<DropdownMenuCheckboxItem>CheckboxItem</DropdownMenuCheckboxItem>
			<DropdownMenuSeparator>Separator</DropdownMenuSeparator>
			<DropdownMenuRadioGroup>
				<DropdownMenuRadioItem>RadioItem</DropdownMenuRadioItem>
				<DropdownMenuRadioItem>RadioItem</DropdownMenuRadioItem>
			</DropdownMenuRadioGroup>
		</DropdownMenuContent>
	</DropdownMenu>
);
```

#### Implementation

```jsx
// your-dropdown-menu.jsx
import * as React from "react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = React.forwardRef(
	({ children, ...props }, forwardedRef) => {
		return (
			<DropdownMenuPrimitive.Portal>
				<DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
					{children}
					<DropdownMenuPrimitive.Arrow />
				</DropdownMenuPrimitive.Content>
			</DropdownMenuPrimitive.Portal>
		);
	},
);

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuCheckboxItem = React.forwardRef(
	({ children, ...props }, forwardedRef) => {
		return (
			<DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
				{children}
				<DropdownMenuPrimitive.ItemIndicator>
					{props.checked === "indeterminate" && <DividerHorizontalIcon />}
					{props.checked === true && <CheckIcon />}
				</DropdownMenuPrimitive.ItemIndicator>
			</DropdownMenuPrimitive.CheckboxItem>
		);
	},
);

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = React.forwardRef(
	({ children, ...props }, forwardedRef) => {
		return (
			<DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
				{children}
				<DropdownMenuPrimitive.ItemIndicator>
					<CheckIcon />
				</DropdownMenuPrimitive.ItemIndicator>
			</DropdownMenuPrimitive.RadioItem>
		);
	},
);

export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
```