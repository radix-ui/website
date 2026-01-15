# Label

Renders an accessible label associated with controls.

# Label

Renders an accessible label associated with controls.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-label
```

## Anatomy

Import the component.

```jsx
import { Label } from "radix-ui";

export default () => <Label.Root />;
```

## API Reference

### Root

Contains the content for the label.

## Accessibility

This component is based on the native `label` element, it will automatically apply the correct labelling when wrapping controls or using the `htmlFor` attribute. For your own custom controls to work correctly, ensure they use native elements such as `button` or `input` as a base.