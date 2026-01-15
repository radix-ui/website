# Progress

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

# Progress

Displays an indicator showing the completion progress of a task, typically
displayed as a progress bar.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-progress
```

### Anatomy

Import all parts and piece them together.

```jsx
import { Progress } from "radix-ui";

export default () => (
	<Progress.Root>
		<Progress.Indicator />
	</Progress.Root>
);
```

## Accessibility

Adheres to the [`progressbar` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/meter).

## API Reference

### Root

Contains all of the progress parts.

### Indicator

Used to show the progress visually. It also makes progress accessible to assistive technologies.