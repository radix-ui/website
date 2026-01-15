# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

# Menu Bar

A visually persistent menu common in desktop applications that provides quick
access to a consistent set of commands.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-menubar
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Menubar } from "radix-ui";

export default () => (
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger />
			<Menubar.Portal>
				<Menubar.Content>
					<Menubar.Label />
					<Menubar.Item />

					<Menubar.Group>
						<Menubar.Item />
					</Menubar.Group>

					<Menubar.CheckboxItem>
						<Menubar.ItemIndicator />
					</Menubar.CheckboxItem>

					<Menubar.RadioGroup>
						<Menubar.RadioItem>
							<Menubar.ItemIndicator />
						</Menubar.RadioItem>
					</Menubar.RadioGroup>

					<Menubar.Sub>
						<Menubar.SubTrigger />
						<Menubar.Portal>
							<Menubar.SubContent />
						</Menubar.Portal>
					</Menubar.Sub>

					<Menubar.Separator />
					<Menubar.Arrow />
				</Menubar.Content>
			</Menubar.Portal>
		</Menubar.Menu>
	</Menubar.Root>
);
```

## API Reference

### Root

Contains all the parts of a menubar.

### Menu

A top level menu item, contains a trigger with content combination.

### Trigger

The button that toggles the content. By default, the `Menubar.Content` will position itself against the trigger.

### Portal

When used, portals the content part into the `body`.

### Content

The component that pops out when a menu is open.

### Arrow

An optional arrow element to render alongside a menubar menu. This can be used to help visually link the trigger with the `Menubar.Content`. Must be rendered inside `Menubar.Content`.

### Item

The component that contains the menubar items.

### Group

Used to group multiple `Menubar.Item`s.

### Label

Used to render a label. It won't be focusable using arrow keys.

### CheckboxItem

An item that can be controlled and rendered like a checkbox.

### RadioGroup

Used to group multiple `Menubar.RadioItem`s.

### RadioItem

An item that can be controlled and rendered like a radio.

### ItemIndicator

Renders when the parent `Menubar.CheckboxItem` or `Menubar.RadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

### Separator

Used to visually separate items in a menubar menu.

### Sub

Contains all the parts of a submenu.

### SubTrigger

An item that opens a submenu. Must be rendered inside `Menubar.Sub`.

### SubContent

The component that pops out when a submenu is open. Must be rendered inside `Menubar.Sub`.

## Examples

### With submenus

You can create submenus by using `Menubar.Sub` in combination with its parts.

```jsx line=9-18
<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>…</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>…</Menubar.Item>
				<Menubar.Item>…</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Sub>
					<Menubar.SubTrigger>Sub menu →</Menubar.SubTrigger>
					<Menubar.Portal>
						<Menubar.SubContent>
							<Menubar.Item>Sub menu item</Menubar.Item>
							<Menubar.Item>Sub menu item</Menubar.Item>
							<Menubar.Arrow />
						</Menubar.SubContent>
					</Menubar.Portal>
				</Menubar.Sub>
				<Menubar.Separator />
				<Menubar.Item>…</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
</Menubar.Root>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```jsx line=11
// index.jsx
import { Menubar } from "radix-ui";
import "./styles.css";

export default () => (
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>…</Menubar.Trigger>
			<Menubar.Portal>
				<Menubar.Content>
					<Menubar.Item className="MenubarItem" disabled>
						…
					</Menubar.Item>
					<Menubar.Item className="MenubarItem">…</Menubar.Item>
				</Menubar.Content>
			</Menubar.Portal>
		</Menubar.Menu>
	</Menubar.Root>
);
```

```css line=2
/* styles.css */
.MenubarItem[data-disabled] {
	color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```jsx line=7,9
<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>…</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>…</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>…</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>…</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
</Menubar.Root>
```

### With labels

Use the `Label` part to help label a section.

```jsx line=6
<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>…</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Label>Label</Menubar.Label>
				<Menubar.Item>…</Menubar.Item>
				<Menubar.Item>…</Menubar.Item>
				<Menubar.Item>…</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
</Menubar.Root>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```jsx line=6,17-22
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Menubar } from "radix-ui";

export default () => {
	const [checked, setChecked] = React.useState(true);

	return (
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>…</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content>
						<Menubar.Item>…</Menubar.Item>
						<Menubar.Item>…</Menubar.Item>
						<Menubar.Separator />
						<Menubar.CheckboxItem
							checked={checked}
							onCheckedChange={setChecked}
						>
							<Menubar.ItemIndicator>
								<CheckIcon />
							</Menubar.ItemIndicator>
							Checkbox item
						</Menubar.CheckboxItem>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>
		</Menubar.Root>
	);
};
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```jsx line=6,14-27
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Menubar } from "radix-ui";

export default () => {
	const [color, setColor] = React.useState("blue");

	return (
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>…</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content>
						<Menubar.RadioGroup value={color} onValueChange={setColor}>
							<Menubar.RadioItem value="red">
								<Menubar.ItemIndicator>
									<CheckIcon />
								</Menubar.ItemIndicator>
								Red
							</Menubar.RadioItem>
							<Menubar.RadioItem value="blue">
								<Menubar.ItemIndicator>
									<CheckIcon />
								</Menubar.ItemIndicator>
								Blue
							</Menubar.RadioItem>
						</Menubar.RadioGroup>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>
		</Menubar.Root>
	);
};
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```jsx line=10,14
import { Menubar } from "radix-ui";

export default () => (
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>…</Menubar.Trigger>
			<Menubar.Portal>
				<Menubar.Content>
					<Menubar.Item>
						<img src="…" />
						Adolfo Hess
					</Menubar.Item>
					<Menubar.Item>
						<img src="…" />
						Miyah Myles
					</Menubar.Item>
				</Menubar.Content>
			</Menubar.Portal>
		</Menubar.Menu>
	</Menubar.Root>
);
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-menubar-trigger-width` and `--radix-menubar-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import { Menubar } from "radix-ui";
import "./styles.css";

export default () => (
	<Menubar.Root>
		<Menubar.Trigger>…</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content className="MenubarContent" sideOffset={5}>
				…
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Root>
);
```

```css
/* styles.css */
.MenubarContent {
	width: var(--radix-menubar-trigger-width);
	max-height: var(--radix-menubar-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-menubar-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=10
// index.jsx
import { Menubar } from "radix-ui";
import "./styles.css";

export default () => (
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>…</Menubar.Trigger>
			<Menubar.Portal>
				<Menubar.Content className="MenubarContent">…</Menubar.Content>
			</Menubar.Portal>
		</Menubar.Menu>
	</Menubar.Root>
);
```

```css line=3
/* styles.css */
.MenubarContent {
	transform-origin: var(--radix-menubar-content-transform-origin);
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

```jsx line=10
// index.jsx
import { Menubar } from "radix-ui";
import "./styles.css";

export default () => (
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>…</Menubar.Trigger>
			<Menubar.Portal>
				<Menubar.Content className="MenubarContent">…</Menubar.Content>
			</Menubar.Portal>
		</Menubar.Menu>
	</Menubar.Root>
);
```

```css line=6-11
/* styles.css */
.MenubarContent {
	animation-duration: 0.6s;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.MenubarContent[data-side="top"] {
	animation-name: slideUp;
}
.MenubarContent[data-side="bottom"] {
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