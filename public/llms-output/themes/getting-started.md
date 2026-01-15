# Getting started

Install Radix Themes and start building in minutes

# Getting started

Install Radix Themes and start building in minutes.

Radix Themes is a pre-styled component library that is designed to work out of the box with minimal configuration. If you are looking for the unstyled components, go to [Radix Primitives](/primitives).

## Installation

Getting up and running is quick and easy.

### 1. Install Radix Themes

Install the package from your command line.

### 2. Import the CSS file

Import the global CSS file at the root of your application.

```ts
import "@radix-ui/themes/styles.css";
```

### 3. Add the Theme component

Add `Theme` to your application, wrapping the root component inside of `body`.

```jsx line=7,9
import { Theme } from "@radix-ui/themes";

export default function () {
	return (
		<html>
			<body>
				<Theme>
					<MyApp />
				</Theme>
			</body>
		</html>
	);
}
```

### 4. Start building

You are now ready to use Radix Themes components.

```jsx
import { Flex, Text, Button } from "@radix-ui/themes";

export default function MyApp() {
	return (
		<Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
	);
}
```

## Customizing your theme

Configuration is managed and applied via the [Theme](/themes/docs/components/theme) component.

### Basic configuration

Pass [configuration](/themes/docs/components/theme) to the `Theme` to customize appearance.

```jsx line=1
<Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
	<MyApp />
</Theme>
```

### Using the theme panel

`ThemePanel` is a drop-in component that allows you to preview the theme in real time. Visit the [component playground](/themes/playground) to see it in action.

To add `ThemePanel` to your app, import it from the package and drop it inside your root `Theme`.

```jsx line=7
import { Theme, ThemePanel } from "@radix-ui/themes";

export default function () {
	return (
		<Theme>
			<MyApp />
			<ThemePanel />
		</Theme>
	);
}
```

### Take it further

Get the most out of Radix Themes by exploring more concepts and features.