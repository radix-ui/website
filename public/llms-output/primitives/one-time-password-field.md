# One-Time Password Field

A group of single-character text inputs to handle one-time password verification

# One-Time Password Field

A group of single-character text inputs to handle one-time password
verification.

## Anatomy

Import all parts and piece them together.

```jsx
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";

export default () => (
	<OneTimePasswordField.Root>
		{/* one Input for each character of the value */}
		<OneTimePasswordField.Input />
		{/* single HiddenInput to store the full value */}
		<OneTimePasswordField.HiddenInput />
	</OneTimePasswordField.Root>
);
```

## API Reference

### Root

Contains all the parts of a one-time password field.

### Input

Renders a text input representing a single character in the value.

### HiddenInput

## Examples

### Basic usage

```jsx
// This will render a field with 6 inputs, for use with
// 6-character passwords. Render an Input component for
// each character of accepted password's length.
<OneTimePasswordField.Root>
	<OneTimePasswordField.Input />
	<OneTimePasswordField.Input />
	<OneTimePasswordField.Input />
	<OneTimePasswordField.Input />
	<OneTimePasswordField.Input />
	<OneTimePasswordField.Input />
	<OneTimePasswordField.HiddenInput />
</OneTimePasswordField.Root>
```

### Segmented controls

The `Root` component accepts arbitrary children, so rendering a visually segmented list is as simple as rendering separators between inputs. We recommend hiding decorative elements from assistive tech with `aria-hidden` and avoid rendering other meaningful content within `Root` since each child element is expected to belong to the parent with the `group` role.

```jsx line=3,5,7
<OneTimePasswordField.Root>
	<OneTimePasswordField.Input />
	<Separator.Root aria-hidden />
	<OneTimePasswordField.Input />
	<Separator.Root aria-hidden />
	<OneTimePasswordField.Input />
	<Separator.Root aria-hidden />
	<OneTimePasswordField.Input />
	<OneTimePasswordField.HiddenInput />
</OneTimePasswordField.Root>
```

### Auto-submit form when password is entered

Use the `autoSubmit` prop to submit an associated form when all inputs are filled.

```jsx
function Verify({ validCode }) {
	const PASSWORD_LENGTH = 6;
	function handleSubmit(event) {
		event.preventDefault();
		const formData = event.formData;
		if (formData.get("otp") === validCode) {
			redirect("/authenticated");
		} else {
			window.alert("Invalid code");
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<OneTimePasswordField.Root name="otp" autoSubmit>
				{PASSWORD_LENGTH.map((_, i) => (
					<OneTimePasswordField.Input key={i} />
				))}
				{/* HiddenInput is required for the form to have data associated with the field */}
				<OneTimePasswordField.HiddenInput />
			</OneTimePasswordField.Root>
			<button>Submit</button>
		</form>
	);
}
```

### Controlled value

```jsx
function Verify({ validCode }) {
	const [value, setValue] = React.useState("");
	const PASSWORD_LENGTH = 6;
	function handleSubmit() {
		if (value === validCode) {
			redirect("/authenticated");
		} else {
			window.alert("Invalid code");
		}
	}
	return (
		<OneTimePasswordField.Root
			autoSubmit
			value={value}
			onAutoSubmit={handleSubmit}
			onValueChange={setValue}
		>
			{PASSWORD_LENGTH.map((_, i) => (
				<OneTimePasswordField.Input key={i} />
			))}
		</OneTimePasswordField.Root>
	);
}
```

## Accessibility

At the time of writing, there is no singular established pattern in WCAG guidelines for implementing one-time password fields as separate inputs. The behavior aims to get as close as possible to having the field act as a single input, with a few exceptions to match user expectations based on our initial research, testing, and gathering feedback.

This component is implemented as `input` elements within a container with a role of `group` to indicate that child inputs are related. Inputs can be navigated and focused using direction keys, and typing input will move focus to the next input until the last input is reached.

Pasting a value into the field will replace the contents of all inputs, regardless of the currently focused input. Based on our research this seems to align with most user expectations, where values are often pasted from password-managers or an email.

### Keyboard Interactions