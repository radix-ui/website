# Tab Nav

Navigation menu with links styled as tabs.

```jsx live=true
<TabNav.Root>
	<TabNav.Link href="#" active>
		Account
	</TabNav.Link>
	<TabNav.Link href="#">Documents</TabNav.Link>
	<TabNav.Link href="#">Settings</TabNav.Link>
</TabNav.Root>
```

## API Reference

This component is based on the [Navigation Menu primitive](/primitives/docs/components/navigation-menu) and supports [common margin props](/themes/docs/overview/layout#margin-props).

### Root

Contains the navigation menu links.

### Link

An individual navigation menu link.

## Examples

### Size

Use the `size` prop to control the size of the tabs.

```jsx live=true line="2,10"
<Flex direction="column" gap="4" pb="2">
	<TabNav.Root size="1">
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>

	<TabNav.Root size="2">
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>
</Flex>
```

### Color

Use the `color` prop to assign a specific [color](/themes/docs/theme/color) to the tab list.

```jsx live=true line="2,10,18,26"
<Flex direction="column" gap="4" pb="2">
	<TabNav.Root color="indigo">
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>

	<TabNav.Root color="cyan">
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>

	<TabNav.Root color="orange">
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>

	<TabNav.Root color="crimson">
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>
</Flex>
```

### High-contrast

Use the `highContrast` prop to increase color contrast with the background.

```jsx live=true line="10"
<Flex direction="column" gap="4" pb="2">
	<TabNav.Root color="gray">
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>

	<TabNav.Root color="gray" highContrast>
		<TabNav.Link href="#" active>
			Account
		</TabNav.Link>
		<TabNav.Link href="#">Documents</TabNav.Link>
		<TabNav.Link href="#">Settings</TabNav.Link>
	</TabNav.Root>
</Flex>
```

### With router links

Use the `asChild` prop to compose `TabNav.Link` with your app’s router link component.

```jsx
<TabNav.Root>
	<TabNav.Link asChild active={pathname === "/account"}>
		<NextLink href="/account">Account</NextLink>
	</TabNav.Link>
	<TabNav.Link asChild active={pathname === "/documents"}>
		<NextLink href="/documents">Documents</NextLink>
	</TabNav.Link>
	<TabNav.Link asChild active={pathname === "/settings"}>
		<NextLink href="/settings">Settings</NextLink>
	</TabNav.Link>
</TabNav.Root>
```