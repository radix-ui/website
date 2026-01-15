# Scroll Area

Augments native scroll functionality for custom, cross-browser styling.

# Scroll Area

Augments native scroll functionality for custom, cross-browser styling.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-scroll-area
```

## Anatomy

Import all parts and piece them together.

```jsx
import { ScrollArea } from "radix-ui";

export default () => (
	<ScrollArea.Root>
		<ScrollArea.Viewport />
		<ScrollArea.Scrollbar orientation="horizontal">
			<ScrollArea.Thumb />
		</ScrollArea.Scrollbar>
		<ScrollArea.Scrollbar orientation="vertical">
			<ScrollArea.Thumb />
		</ScrollArea.Scrollbar>
		<ScrollArea.Corner />
	</ScrollArea.Root>
);
```

## API Reference

### Root

Contains all the parts of a scroll area.

### Viewport

The viewport area of the scroll area.

### Scrollbar

The vertical scrollbar. Add a second `Scrollbar` with an `orientation` prop to enable horizontal scrolling.

### Thumb

The thumb to be used in `ScrollArea.Scrollbar`.

### Corner

The corner where both vertical and horizontal scrollbars meet.

## Accessibility

In most cases, it's best to rely on native scrolling and work with the customization options available in CSS. When that isn't enough, `ScrollArea` provides additional customizability while maintaining the browser's native scroll behavior (as well as accessibility features, like keyboard scrolling).

### Keyboard Interactions

Scrolling via keyboard is supported by default because the component relies on native scrolling. Specific keyboard interactions may differ between platforms, so we do not specify them here or add specific event listeners to handle scrolling via key events.