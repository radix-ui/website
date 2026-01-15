# Direction Provider

Wraps your app to provide global reading direction.

# Direction Provider

Wraps your app to provide global reading direction.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-direction
```

## Anatomy

Import the component.

```jsx
import { Direction } from "radix-ui";

export default () => <Direction.Provider />;
```

## API Reference

### Provider

When creating localized apps that require right-to-left (RTL) reading direction, you need to wrap your application with the `Direction.Provider` component to ensure all of the primitives adjust their behavior based on the `dir` prop.

## Example

Use the direction provider.

```jsx
import { Direction } from "radix-ui";

export default () => (
	<Direction.Provider dir="rtl">{/* your app */}</Direction.Provider>
);
```