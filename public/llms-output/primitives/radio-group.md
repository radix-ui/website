# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of
the buttons can be checked at a time.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-radio-group
```

## Anatomy

Import all parts and piece them together.

```jsx
import { RadioGroup } from "radix-ui";

export default () => (
	<RadioGroup.Root>
		<RadioGroup.Item>
			<RadioGroup.Indicator />
		</RadioGroup.Item>
	</RadioGroup.Root>
);
```

## API Reference

### Root

Contains all the parts of a radio group.

### Item

An item in the group that can be checked. An `input` will also render when used within a `form` to ensure events propagate correctly.

### Indicator

Renders when the radio item is in a checked state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

## Accessibility

Adheres to the [Radio Group WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio) and uses [roving tabindex](https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio) to manage focus movement among radio items.

### Keyboard Interactions