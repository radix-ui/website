# Alert Dialog

Modal confirmation dialog that interrupts the user and expects a response.

```jsx live=true
<AlertDialog.Root>
	<AlertDialog.Trigger>
		<Button color="red">Revoke access</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="450px">
		<AlertDialog.Title>Revoke access</AlertDialog.Title>
		<AlertDialog.Description size="2">
			Are you sure? This application will no longer be accessible and any
			existing sessions will be expired.
		</AlertDialog.Description>

		<Flex gap="3" mt="4" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" color="red">
					Revoke access
				</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>
```

## API Reference

This component inherits parts and props from the [Alert Dialog primitive](/primitives/docs/components/alert-dialog) and is visually identical to [Dialog](/themes/docs/components/dialog), though with differing semantics and behavior.

### Root

Contains all the parts of the dialog.

### Trigger

Wraps the control that will open the dialog.

### Content

Contains the content of the dialog. This component is based on the `div` element.

### Title

An accessible title that is announced when the dialog is opened. This part is based on the [Heading](/themes/docs/components/heading) component with a pre-defined font size and leading trim on top.

### Description

An optional accessible description that is announced when the dialog is opened. This part is based on the [Text](/themes/docs/components/text) component with a pre-defined font size.

If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Content`.

### Action

Wraps the control that will close the dialog. This should be distinguished visually from the `Cancel` control.

### Cancel

Wraps the control that will close the dialog. This should be distinguished visually from the `Action` control.

## Examples

### Size

Use the `size` prop to control size of the dialog. It will affect the `padding` and `border-radius` of the Content.
Use it in conjunction with the `width`, `minWidth` and `maxWidth` props to control the width of the dialog.

```jsx live=true line=6,17,28,39
<Flex gap="4" align="center">
	<AlertDialog.Root>
		<AlertDialog.Trigger>
			<Button variant="soft">Size 1</Button>
		</AlertDialog.Trigger>
		<AlertDialog.Content size="1" maxWidth="300px">
			<Text as="p" trim="both" size="1">
				The quick brown fox jumps over the lazy dog.
			</Text>
		</AlertDialog.Content>
	</AlertDialog.Root>

	<AlertDialog.Root>
		<AlertDialog.Trigger>
			<Button variant="soft">Size 2</Button>
		</AlertDialog.Trigger>
		<AlertDialog.Content size="2" maxWidth="400px">
			<Text as="p" trim="both" size="2">
				The quick brown fox jumps over the lazy dog.
			</Text>
		</AlertDialog.Content>
	</AlertDialog.Root>

	<AlertDialog.Root>
		<AlertDialog.Trigger>
			<Button variant="soft">Size 3</Button>
		</AlertDialog.Trigger>
		<AlertDialog.Content size="3" maxWidth="500px">
			<Text as="p" trim="both" size="3">
				The quick brown fox jumps over the lazy dog.
			</Text>
		</AlertDialog.Content>
	</AlertDialog.Root>

	<AlertDialog.Root>
		<AlertDialog.Trigger>
			<Button variant="soft">Size 4</Button>
		</AlertDialog.Trigger>
		<AlertDialog.Content size="4">
			<Text as="p" trim="both" size="4">
				The quick brown fox jumps over the lazy dog.
			</Text>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Flex>
```

### With inset content

Use the [Inset](/themes/docs/components/inset) component to align content flush with the sides of the dialog.

```jsx live=true
<AlertDialog.Root>
	<AlertDialog.Trigger>
		<Button color="red">Delete users</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="500px">
		<AlertDialog.Title>Delete Users</AlertDialog.Title>
		<AlertDialog.Description size="2">
			Are you sure you want to delete these users? This action is permanent and
			cannot be undone.
		</AlertDialog.Description>

		<Inset side="x" my="5">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					<Table.Row>
						<Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
						<Table.Cell>danilo@example.com</Table.Cell>
						<Table.Cell>Developer</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
						<Table.Cell>zahra@example.com</Table.Cell>
						<Table.Cell>Admin</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</Inset>

		<Flex gap="3" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button color="red">Delete users</Button>
			</AlertDialog.Action>
		</Flex>
	</AlertDialog.Content>
</AlertDialog.Root>
```