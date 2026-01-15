# Slider

An input where the user selects a value from within a given range.

# Slider

An input where the user selects a value from within a given range.

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-slider
```

## Anatomy

Import all parts and piece them together.

```jsx
import { Slider } from "radix-ui";

export default () => (
	<Slider.Root>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb />
	</Slider.Root>
);
```

## API Reference

### Root

Contains all the parts of a slider. It will render an `input` for each thumb when used within a `form` to ensure events propagate correctly.

### Track

The track that contains the `Slider.Range`.

### Range

The range part. Must live inside `Slider.Track`.

### Thumb

A draggable thumb. You can render multiple thumbs.

## Examples

### Vertical orientation

Use the `orientation` prop to create a vertical slider.

```jsx line=6
// index.jsx
import { Slider } from "radix-ui";
import "./styles.css";

export default () => (
	<Slider.Root
		className="SliderRoot"
		defaultValue={[50]}
		orientation="vertical"
	>
		<Slider.Track className="SliderTrack">
			<Slider.Range className="SliderRange" />
		</Slider.Track>
		<Slider.Thumb className="SliderThumb" />
	</Slider.Root>
);
```

```css line=7,18,26
/* styles.css */
.SliderRoot {
	position: relative;
	display: flex;
	align-items: center;
}
.SliderRoot[data-orientation="vertical"] {
	flex-direction: column;
	width: 20px;
	height: 100px;
}

.SliderTrack {
	position: relative;
	flex-grow: 1;
	background-color: grey;
}
.SliderTrack[data-orientation="vertical"] {
	width: 3px;
}

.SliderRange {
	position: absolute;
	background-color: black;
}
.SliderRange[data-orientation="vertical"] {
	width: 100%;
}

.SliderThumb {
	display: block;
	width: 20px;
	height: 20px;
	background-color: black;
}
```

### Create a range

Add multiple thumbs and values to create a range slider.

```jsx line=4,8-9
import { Slider } from "radix-ui";

export default () => (
	<Slider.Root defaultValue={__[25, 75]__}>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb />
		<Slider.Thumb />
	</Slider.Root>
);
```

### Define step size

Use the `step` prop to increase the stepping interval.

```jsx line=4
import { Slider } from "radix-ui";

export default () => (
	<Slider.Root defaultValue={[50]} step={10}>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb />
	</Slider.Root>
);
```

### Prevent thumb overlap

Use `minStepsBetweenThumbs` to avoid thumbs with equal values.

```jsx line=4
import { Slider } from "radix-ui";

export default () => (
	<Slider.Root defaultValue={[25, 75]} step={10} minStepsBetweenThumbs={1}>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb />
		<Slider.Thumb />
	</Slider.Root>
);
```

## Accessibility

Adheres to the [Slider WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb).

### Keyboard Interactions

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract all parts

This example abstracts all of the `Slider` parts so it can be used as a self closing element.

#### Usage

```jsx
import { Slider } from "./your-slider";

export default () => <Slider defaultValue={[25]} />;
```

#### Implementation

```jsx
// your-slider.jsx
import { Slider as SliderPrimitive } from "radix-ui";

export const Slider = React.forwardRef((props, forwardedRef) => {
	const value = props.value || props.defaultValue;

	return (
		<SliderPrimitive.Slider {...props} ref={forwardedRef}>
			<SliderPrimitive.Track>
				<SliderPrimitive.Range />
			</SliderPrimitive.Track>
			{value.map((_, i) => (
				<SliderPrimitive.Thumb key={i} />
			))}
		</SliderPrimitive.Slider>
	);
});
```

## Caveats

### Mouse events are not fired

Because of [a limitation](https://github.com/radix-ui/primitives/blob/83a8c13bf66f3d9f17d77caeb187a69eb146930b/packages/react/slider/src/Slider.tsx#L383-L384) we faced during implementation, the following example won't work as expected and the `onMouseDown` and `onMouseUp` event handlers won't be fired:

```jsx
<Slider.Root
	onMouseDown={() => console.log("onMouseDown")}
	onMouseUp={() => console.log("onMouseUp")}
>
	…
</Slider.Root>
```

We recommend using pointer events instead (eg. `onPointerDown`, `onPointerUp`). Regardless of the above limitation, these events are better suited for cross-platform/device handling as they are fired for all pointer input types (mouse, touch, pen, etc.).