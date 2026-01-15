# Container

Constrains the maximum width of page content.

```jsx live=true
<Box style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}>
	<Container size="1">
		<DecorativeBox>
			<Box py="9" />
		</DecorativeBox>
	</Container>
</Box>
```

## API Reference

This component is based on the `div` element and supports [common margin props](/themes/docs/overview/layout#margin-props).

Container sizes use the following `max-width` values, which may be customized if needed.

The following props are shared between [Box](./box), [Flex](./flex), [Grid](./grid), [Container](./container) and [Section](./section) components. Read more about layout components in [Layout](/themes/docs/overview/layout).