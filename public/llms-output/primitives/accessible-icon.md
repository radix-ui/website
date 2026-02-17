# Accessible Icon

Makes icons accessible by adding a label.

# Accessible Icon

Makes icons accessible by adding a label.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-accessible-icon
```

## Anatomy

Import the component.

```jsx
import { AccessibleIcon } from "radix-ui";

export default () => <AccessibleIcon.Root />;
```

## API Reference

### Root

Contains the icon to make accessible.

## Accessibility

Most icons or icon systems come with no accessibility built-in. For example, the same visual **cross** icon may in fact mean **"close"** or **"delete"**. This component lets you give meaning to icons used throughout your app.

This is built with [Visually Hidden](../utilities/visually-hidden).