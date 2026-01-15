# Segmented Control

Toggle buttons for switching between different values or views.

```jsx live=true
<SegmentedControl.Root defaultValue="inbox">
	<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
	<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
	<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
</SegmentedControl.Root>
```

## API Reference

This component inherits props and functionality from the [Toggle Group primitive](/primitives/docs/components/toggle-group). It supports [common margin props](/themes/docs/overview/layout#margin-props).

### Root

Contains the items of the control.

### Item

Represents individual values of the control.

## Examples

### Size

Use the `size` prop to control the size of the control.

```jsx live="true"
<Flex align="start" direction="column" gap="4">
	<SegmentedControl.Root defaultValue="inbox" size="1">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>

	<SegmentedControl.Root defaultValue="inbox" size="2">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>

	<SegmentedControl.Root defaultValue="inbox" size="3">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>
</Flex>
```

### Variant

Use the `variant` prop to control the visual style of the control.

```jsx live="true"
<Flex align="start" direction="column" gap="4">
	<SegmentedControl.Root defaultValue="inbox" variant="surface">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>

	<SegmentedControl.Root defaultValue="inbox" variant="classic">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>
</Flex>
```

### Radius

Use the `radius` prop to assign a specific radius value.

```jsx live="true"
<Flex align="start" direction="column" gap="4">
	<SegmentedControl.Root defaultValue="inbox" radius="none">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>

	<SegmentedControl.Root defaultValue="inbox" radius="small">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>

	<SegmentedControl.Root defaultValue="inbox" radius="medium">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>

	<SegmentedControl.Root defaultValue="inbox" radius="large">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>

	<SegmentedControl.Root defaultValue="inbox" radius="full">
		<SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
		<SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
		<SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
	</SegmentedControl.Root>
</Flex>
```