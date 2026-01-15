# Slider

Provides user selection from a range of values.

```jsx live=true
<Slider defaultValue={[50]} />
```

## API Reference

This component inherits props from the [Slider primitive](/primitives/docs/components/slider) and supports [common margin props](/themes/docs/overview/layout#margin-props).

## Examples

### Size

Use the `size` prop to control the size.

```jsx live=true
<Flex direction="column" gap="4" maxWidth="300px">
	<Slider defaultValue={[25]} size="1" />
	<Slider defaultValue={[50]} size="2" />
	<Slider defaultValue={[75]} size="3" />
</Flex>
```

### Variant

Use the `variant` prop to control the visual style.

```jsx live=true
<Flex direction="column" gap="4" maxWidth="300px">
	<Slider defaultValue={[25]} variant="surface" />
	<Slider defaultValue={[50]} variant="classic" />
	<Slider defaultValue={[75]} variant="soft" />
</Flex>
```

### Color

Use the `color` prop to assign a specific [color](/themes/docs/theme/color).

```jsx live=true
<Flex direction="column" gap="4" maxWidth="300px">
	<Slider defaultValue={[20]} color="indigo" />
	<Slider defaultValue={[40]} color="cyan" />
	<Slider defaultValue={[60]} color="orange" />
	<Slider defaultValue={[80]} color="crimson" />
</Flex>
```

### High-contrast

Use the `highContrast` prop to increase color contrast in light mode.

```jsx live=true
<Grid columns="2" gap="4">
	<Slider defaultValue={[10]} color="indigo" />
	<Slider defaultValue={[10]} color="indigo" highContrast />
	<Slider defaultValue={[30]} color="cyan" />
	<Slider defaultValue={[30]} color="cyan" highContrast />
	<Slider defaultValue={[50]} color="orange" />
	<Slider defaultValue={[50]} color="orange" highContrast />
	<Slider defaultValue={[70]} color="crimson" />
	<Slider defaultValue={[70]} color="crimson" highContrast />
	<Slider defaultValue={[90]} color="gray" />
	<Slider defaultValue={[90]} color="gray" highContrast />
</Grid>
```

### Radius

Use the `radius` prop to assign a specific radius value.

```jsx live=true
<Flex direction="column" gap="4" maxWidth="300px">
	<Slider defaultValue={[25]} radius="none" />
	<Slider defaultValue={[50]} radius="small" />
	<Slider defaultValue={[75]} radius="full" />
</Flex>
```

### Range

Provide multiple values to create a range slider.

```jsx live=true
<Slider defaultValue={[25, 75]} />
```