import { Box, Code, Text, Table } from "@radix-ui/themes";

export function ThemesBreakpointsTable() {
	return (
		<Box my="5" asChild>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Width</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{[
						{ name: "initial", description: "Phones (portrait)", size: "0px" },
						{ name: "xs", description: "Phones (landscape)", size: "520px" },
						{ name: "sm", description: "Tablets (portrait)", size: "768px" },
						{ name: "md", description: "Tablets (landscape)", size: "1024px" },
						{ name: "lg", description: "Laptops", size: "1280px" },
						{ name: "xl", description: "Desktops", size: "1640px" },
					].map(({ name, description, size }) => (
						<Table.Row key={name} align="center">
							<Table.RowHeaderCell>
								<Text weight="bold" as="div">
									{name}
								</Text>
								<Text as="div" color="gray">
									{description}
								</Text>
							</Table.RowHeaderCell>
							<Table.Cell>
								<Code color="gray" size="2">
									{size}
								</Code>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}

export function ThemesSpacingTable() {
	return (
		<Box my="5" asChild>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Step</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Base value</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{[
						"4px",
						"8px",
						"12px",
						"16px",
						"24px",
						"32px",
						"40px",
						"48px",
						"64px",
					].map((value, i) => {
						const step = i + 1;
						return (
							<Table.Row key={value}>
								<Table.RowHeaderCell>{step}</Table.RowHeaderCell>
								<Table.Cell>
									<Code color="gray" size="2">
										{value}
									</Code>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}

export function ThemesFontWeightTable() {
	return (
		<Box my="5" asChild>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Weight</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Default value</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{[
						["Light", "300"],
						["Regular", "400"],
						["Medium", "500"],
						["Bold", "700"],
					].map(([key, value]) => (
						<Table.Row key={key}>
							<Table.RowHeaderCell>{key}</Table.RowHeaderCell>
							<Table.Cell>
								<Code color="gray" size="2">
									{value}
								</Code>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}

export function ThemesFontFamilyTable() {
	return (
		<Box my="5" asChild>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Default value</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{[
						[
							"Text",
							`-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto,
              'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji'`,
						],
						[
							"Code",
							`'Menlo', 'Consolas (Custom)', 'Bitstream Vera Sans Mono', monospace,
            'Apple Color Emoji', 'Segoe UI Emoji'`,
						],
						["Emphasis", `'Times New Roman', 'Times', serif`],
						["Quote", `'Times New Roman', 'Times', serif`],
					].map(([key, value]) => (
						<Table.Row key={key}>
							<Table.RowHeaderCell>{key}</Table.RowHeaderCell>
							<Table.Cell>
								<Code color="gray" size="2">
									{value}
								</Code>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}

export function ThemesFontSizeTable() {
	return (
		<Box my="5" asChild>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Step</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Letter spacing</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Line height</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{[
						{ fs: "12px", ls: "0.0025em", lh: "16px" },
						{ fs: "14px", ls: "0em", lh: "20px" },
						{ fs: "16px", ls: "0em", lh: "24px" },
						{ fs: "18px", ls: "-0.0025em", lh: "26px" },
						{ fs: "20px", ls: "-0.005em", lh: "28px" },
						{ fs: "24px", ls: "-0.00625em", lh: "30px" },
						{ fs: "28px", ls: "-0.0075em", lh: "36px" },
						{ fs: "35px", ls: "-0.01em", lh: "40px" },
						{ fs: "60px", ls: "-0.025em", lh: "60px" },
					].map(({ fs, ls, lh }, i) => {
						const step = i + 1;
						return (
							<Table.Row key={step}>
								<Table.RowHeaderCell>{step}</Table.RowHeaderCell>
								<Table.Cell>
									<Code color="gray" size="2">
										{fs}
									</Code>
								</Table.Cell>
								<Table.Cell>
									<Code color="gray" size="2">
										{ls}
									</Code>
								</Table.Cell>
								<Table.Cell>
									<Code color="gray" size="2">
										{lh}
									</Code>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}
