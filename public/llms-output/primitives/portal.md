# Portal

Renders a React subtree in a different part of the DOM.

# Portal

Renders a React subtree in a different part of the DOM.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-portal
```

## Anatomy

Import the component.

```jsx
import { Portal } from "radix-ui";

export default () => <Portal.Root />;
```

## Basic example

Use the portal primitive.

```jsx
import { Portal } from "radix-ui";

export default () => <Portal.Root>Content</Portal.Root>;
```

## API Reference

### Root

Anything you put inside this component will be rendered in a separate `<div>` element. By default, this element will be appended to `document.body` but you can choose a different container by using the `container` prop.