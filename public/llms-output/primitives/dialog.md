# Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

# Dialog

A window overlaid on either the primary window or another dialog window,
rendering the content underneath inert.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-dialog
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Dialog } from "radix-ui";

export default () => (
	<Dialog.Root>
		<Dialog.Trigger />
		<Dialog.Portal>
			<Dialog.Overlay />
			<Dialog.Content>
				<Dialog.Title />
				<Dialog.Description />
				<Dialog.Close />
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);
```

## API Reference

### Root

Contains all the parts of a dialog.

### Trigger

The button that opens the dialog.

### Portal

When used, portals your overlay and content parts into the `body`.

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

### Content

Contains content to be rendered in the open dialog.

### Close

The button that closes the dialog.

### Title

An accessible title to be announced when the dialog is opened.

If you want to hide the title, wrap it inside our [Visually Hidden](../utilities/visually-hidden) utility like this `<VisuallyHidden asChild>`.

### Description

An optional accessible description to be announced when the dialog is opened.

If you want to hide the description, wrap it inside our [Visually Hidden](../utilities/visually-hidden) utility like this `<VisuallyHidden asChild>`. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Dialog.Content`.

## Examples

### Close after asynchronous form submission

Use the controlled props to programmatically close the Dialog after an async operation has completed.

```jsx line=4,7,10,15,17
import * as React from "react";
import { Dialog } from "radix-ui";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default () => {
	const [open, setOpen] = React.useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger>Open</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content>
					<form
						onSubmit={(event) => {
							wait().then(() => setOpen(false));
							event.preventDefault();
						}}
					>
						{/** some inputs */}
						<button type="submit">Submit</button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
```

### Scrollable overlay

Move the content inside the overlay to render a dialog with overflow.

```jsx
// index.jsx
import { Dialog } from "radix-ui";
import "./styles.css";

export default () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger />
			<Dialog.Portal>
				<Dialog.Overlay className="DialogOverlay">
					<Dialog.Content className="DialogContent">...</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
```

```css
/* styles.css */
.DialogOverlay {
	background: rgba(0 0 0 / 0.5);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: grid;
	place-items: center;
	overflow-y: auto;
}

.DialogContent {
	min-width: 300px;
	background: white;
	padding: 30px;
	border-radius: 4px;
}
```

### Custom portal container

Customise the element that your dialog portals into.

```jsx line=5,10,16
import * as React from "react";
import { Dialog } from "radix-ui";

export default () => {
	const [container, setContainer] = React.useState(null);
	return (
		<div>
			<Dialog.Root>
				<Dialog.Trigger />
				<Dialog.Portal container={container}>
					<Dialog.Overlay />
					<Dialog.Content>...</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>

			<div ref={setContainer} />
		</div>
	);
};
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal).

### Keyboard Interactions

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the overlay and the close button

This example abstracts the `Dialog.Overlay` and `Dialog.Close` parts.

#### Usage

```jsx
import { Dialog, DialogTrigger, DialogContent } from "./your-dialog";

export default () => (
	<Dialog>
		<DialogTrigger>Dialog trigger</DialogTrigger>
		<DialogContent>Dialog Content</DialogContent>
	</Dialog>
);
```

#### Implementation

```jsx
// your-dialog.jsx
import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { Cross1Icon } from "@radix-ui/react-icons";

export const DialogContent = React.forwardRef(
	({ children, ...props }, forwardedRef) => (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay />
			<DialogPrimitive.Content {...props} ref={forwardedRef}>
				{children}
				<DialogPrimitive.Close aria-label="Close">
					<Cross1Icon />
				</DialogPrimitive.Close>
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	),
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
```