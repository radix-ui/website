# Text Area

Captures multi-line user input.

```jsx live=true
<TextArea placeholder="Reply to comment…" />
```

## API Reference

This component is based on the `textarea` element and supports [common margin props](/themes/docs/overview/layout#margin-props).

## Examples

### Size

Use the `size` prop to control the size.

```jsx live=true
<Flex direction="column" gap="3">
	<Box maxWidth="200px">
		<TextArea size="1" placeholder="Reply to comment…" />
	</Box>
	<Box maxWidth="250px">
		<TextArea size="2" placeholder="Reply to comment…" />
	</Box>
	<Box maxWidth="300px">
		<TextArea size="3" placeholder="Reply to comment…" />
	</Box>
</Flex>
```

### Variant

Use the `variant` prop to control the visual style.

```jsx live=true
<Flex direction="column" gap="3" maxWidth="250px">
	<TextArea variant="surface" placeholder="Reply to comment…" />
	<TextArea variant="classic" placeholder="Reply to comment…" />
	<TextArea variant="soft" placeholder="Reply to comment…" />
</Flex>
```

### Color

Use the `color` prop to assign a specific [color](/themes/docs/theme/color).

```jsx live=true
<Flex direction="column" gap="3" maxWidth="250px">
	<TextArea color="blue" variant="soft" placeholder="Reply to comment…" />
	<TextArea color="green" variant="soft" placeholder="Reply to comment…" />
	<TextArea color="red" variant="soft" placeholder="Reply to comment…" />
</Flex>
```

### Radius

Use the `radius` prop to assign a specific radius value.

```jsx live=true
<Flex direction="column" gap="3" maxWidth="250px">
	<TextArea radius="none" placeholder="Search the docs…" />
	<TextArea radius="large" placeholder="Search the docs…" />
	<TextArea radius="full" placeholder="Search the docs…" />
</Flex>
```

### Resize

Use the `resize` prop to enable resizing on one or both axis.

```jsx live=true
<Flex direction="column" gap="3" maxWidth="250px">
	<TextArea resize="none" placeholder="Search the docs…" />
	<TextArea resize="vertical" placeholder="Search the docs…" />
	<TextArea resize="horizontal" placeholder="Search the docs…" />
	<TextArea resize="both" placeholder="Search the docs…" />
</Flex>
```