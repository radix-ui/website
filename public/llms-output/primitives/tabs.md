# Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

# Tabs

A set of layered sections of content—known as tab panels—that are displayed
one at a time.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-tabs
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Tabs } from "radix-ui";

export default () => (
	<Tabs.Root>
		<Tabs.List>
			<Tabs.Trigger />
		</Tabs.List>
		<Tabs.Content />
	</Tabs.Root>
);
```

## API Reference

### Root

Contains all the tabs component parts.

### List

Contains the triggers that are aligned along the edge of the active content.

### Trigger

The button that activates its associated content.

### Content

Contains the content associated with each trigger.

## Examples

### Vertical

You can create vertical tabs by using the `orientation` prop.

```jsx line=4
import { Tabs } from "radix-ui";

export default () => (
	<Tabs.Root defaultValue="tab1" orientation="vertical">
		<Tabs.List aria-label="tabs example">
			<Tabs.Trigger value="tab1">One</Tabs.Trigger>
			<Tabs.Trigger value="tab2">Two</Tabs.Trigger>
			<Tabs.Trigger value="tab3">Three</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="tab1">Tab one content</Tabs.Content>
		<Tabs.Content value="tab2">Tab two content</Tabs.Content>
		<Tabs.Content value="tab3">Tab three content</Tabs.Content>
	</Tabs.Root>
);
```

## Accessibility

Adheres to the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs).

### Keyboard Interactions