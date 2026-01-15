# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

# Alert Dialog

A modal dialog that interrupts the user with important content and expects a
response.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-alert-dialog
```

## Anatomy

Import all parts and piece them together.

```jsx
import { AlertDialog } from "radix-ui";

export default () => (
	<AlertDialog.Root>
		<AlertDialog.Trigger />
		<AlertDialog.Portal>
			<AlertDialog.Overlay />
			<AlertDialog.Content>
				<AlertDialog.Title />
				<AlertDialog.Description />
				<AlertDialog.Cancel />
				<AlertDialog.Action />
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
);
```

## API Reference

### Root

Contains all the parts of an alert dialog.

### Trigger

A button that opens the dialog.

### Portal

When used, portals your overlay and content parts into the `body`.

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

### Content

Contains content to be rendered when the dialog is open.

### Cancel

A button that closes the dialog. This button should be distinguished visually from `AlertDialog.Action` buttons.

### Action

A button that closes the dialog. These buttons should be distinguished visually from the `AlertDialog.Cancel` button.

### Title

An accessible name to be announced when the dialog is opened. Alternatively, you can provide `aria-label` or `aria-labelledby` to `AlertDialog.Content` and exclude this component.

### Description

An accessible description to be announced when the dialog is opened. Alternatively, you can provide `aria-describedby` to `AlertDialog.Content` and exclude this component.

## Examples

### Close after asynchronous form submission

Use the controlled props to programmatically close the Alert Dialog after an async operation has completed.

```jsx line=4,7,10,15,17
import * as React from "react";
import { AlertDialog } from "radix-ui";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default () => {
	const [open, setOpen] = React.useState(false);

	return (
		<AlertDialog.Root open={open} onOpenChange={setOpen}>
			<AlertDialog.Trigger>Open</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay />
				<AlertDialog.Content>
					<form
						onSubmit={(event) => {
							wait().then(() => setOpen(false));
							event.preventDefault();
						}}
					>
						{/** some inputs */}
						<button type="submit">Submit</button>
					</form>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
};
```

### Custom portal container

Customise the element that your alert dialog portals into.

```jsx line=2,13
export default () => {
	const [container, setContainer] = React.useState(null);
	return (
		<div>
			<AlertDialog.Root>
				<AlertDialog.Trigger />
				<AlertDialog.Portal container={container}>
					<AlertDialog.Overlay />
					<AlertDialog.Content>...</AlertDialog.Content>
				</AlertDialog.Portal>
			</AlertDialog.Root>

			<div ref={setContainer} />
		</div>
	);
};
```

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog).

### Keyboard Interactions