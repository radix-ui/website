# Password Toggle Field

A password input field with an integrated button to toggle the value's visibility

# Password Toggle Field

A password input field with an integrated button to toggle the value's
visibility.

## Anatomy

Import all parts and piece them together.

```jsx
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export default () => (
	<PasswordToggleField.Root>
		<PasswordToggleField.Input />
		<PasswordToggleField.Toggle>
			<PasswordToggleField.Icon
				visible={<EyeOpenIcon />}
				hidden={<EyeClosedIcon />}
			/>
		</PasswordToggleField.Toggle>
	</PasswordToggleField.Root>
);
```

## API Reference

### Root

Contains all the parts of a password toggle field.

### Input

Renders a the input containing the password value.

### Toggle

### Slot

### Icon

## Examples

### Basic usage

```jsx
<PasswordToggleField.Root>
	<PasswordToggleField.Input />
	<PasswordToggleField.Toggle>
		<PasswordToggleField.Icon
			visible={<EyeOpenIcon />}
			hidden={<EyeClosedIcon />}
		/>
	</PasswordToggleField.Toggle>
</PasswordToggleField.Root>
```

### With `Slot`

```jsx
<PasswordToggleField.Root>
	<PasswordToggleField.Input />
	<PasswordToggleField.Toggle>
		<PasswordToggleField.Slot visible="🙊" hidden="🙈" />
	</PasswordToggleField.Toggle>
</PasswordToggleField.Root>
```

### With `Slot` + `render` prop

```jsx
<PasswordToggleField.Root>
	<PasswordToggleField.Input />
	<PasswordToggleField.Toggle>
		<PasswordToggleField.Slot
			render={({ visible }) => (
				<svg aria-hidden viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg">
					<path d={visible ? "M1 1 L2 2" : "M2 1 L1 2"} />
				</svg>
			)}
		/>
	</PasswordToggleField.Toggle>
</PasswordToggleField.Root>
```