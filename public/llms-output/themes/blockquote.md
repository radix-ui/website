# Blockquote

Block-level quotation from another source.

```jsx live=true
<Blockquote>
	Perfect typography is certainly the most elusive of all arts. Sculpture in
	stone alone comes near it in obstinacy.
</Blockquote>
```

## API Reference

This component is based on the `blockquote` element and supports [common margin props](/themes/docs/overview/layout#margin-props).

## Examples

### Size

Use the `size` prop to control the size.

```jsx live=true scroll=true
<Flex direction="column" gap="5">
	<Box maxWidth="300px">
		<Blockquote size="1">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="350px">
		<Blockquote size="2">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="400px">
		<Blockquote size="3">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="450px">
		<Blockquote size="4">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="500px">
		<Blockquote size="5">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="550px">
		<Blockquote size="6">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="600px">
		<Blockquote size="7">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="650px">
		<Blockquote size="8">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="1000px">
		<Blockquote size="9">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
</Flex>
```

### Weight

Use the `weight` prop to set the text weight.

```jsx live=true
<Flex direction="column" gap="3" maxWidth="500px">
	<Blockquote weight="regular">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>

	<Blockquote weight="medium">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>

	<Blockquote weight="bold">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
</Flex>
```

### Color

Use the `color` prop to assign a specific [color](/themes/docs/theme/color).

```jsx live=true scroll=true
<Flex direction="column" gap="3" maxWidth="500px">
	<Blockquote color="indigo">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
	<Blockquote color="cyan">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
	<Blockquote color="orange">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
	<Blockquote color="crimson">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
</Flex>
```

### High-contrast

Use the `highContrast` prop to increase color contrast with the background.

```jsx live="true"
<Flex direction="column" gap="3" maxWidth="500px">
	<Blockquote color="gray">
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
	<Blockquote color="gray" highContrast>
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
</Flex>
```

### Truncate

Use the `truncate` prop to truncate text with an ellipsis when it overflows its container.

```jsx live=true line=2
<Flex maxWidth="500px">
	<Blockquote truncate>
		Perfect typography is certainly the most elusive of all arts. Sculpture in
		stone alone comes near it in obstinacy.
	</Blockquote>
</Flex>
```