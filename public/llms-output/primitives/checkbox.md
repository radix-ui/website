# Checkbox

A control that allows the user to toggle between checked and not checked.

# Checkbox

A control that allows the user to toggle between checked and not checked.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-checkbox
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Checkbox } from "radix-ui";

export default () => (
	<Checkbox.Root>
		<Checkbox.Indicator />
	</Checkbox.Root>
);
```

## API Reference

### Root

Contains all the parts of a checkbox. An `input` will also render when used within a `form` to ensure events propagate correctly.

### Indicator

Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

## Examples

### Indeterminate

You can set the checkbox to `indeterminate` by taking control of its state.

```jsx line=5,9-14,16
import { DividerHorizontalIcon, CheckIcon } from "@radix-ui/react-icons";
import { Checkbox } from "radix-ui";

export default () => {
	const [checked, setChecked] = React.useState("indeterminate");

	return (
		<>
			<StyledCheckbox checked={checked} onCheckedChange={setChecked}>
				<Checkbox.Indicator>
					{checked === "indeterminate" && <DividerHorizontalIcon />}
					{checked === true && <CheckIcon />}
				</Checkbox.Indicator>
			</StyledCheckbox>

			<button
				type="button"
				onClick={() =>
					setChecked((prevIsChecked) =>
						prevIsChecked === "indeterminate" ? false : "indeterminate",
					)
				}
			>
				Toggle indeterminate
			</button>
		</>
	);
};
```

## Accessibility

Adheres to the [tri-state Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox).

### Keyboard Interactions