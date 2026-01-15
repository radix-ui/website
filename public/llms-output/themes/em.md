# Em

Marks text to stress emphasis.

```jsx live=true
<Text>
	We <Em>had</Em> to do something about it.
</Text>
```

## API Reference

This component is based on the `em` element and supports [common margin props](/themes/docs/overview/layout#margin-props).

## Examples

### Truncate

Use the `truncate` prop to truncate text with an ellipsis when it overflows its container.

```jsx live=true line=2
<Flex maxWidth="300px">
	<Em truncate>
		The goal of typography is to relate font size, line height, and line width
		in a proportional way that maximizes beauty and makes reading easier and
		more pleasant.
	</Em>
</Flex>
```