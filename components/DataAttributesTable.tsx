import * as React from "react";
import { Box, Text, Code, Table } from "@radix-ui/themes";

type KeyboardDef = {
	attribute: string;
	values: string;
};

export function DataAttributesTable({ data }: { data: KeyboardDef[] }) {
	return (
		<Box my="5" asChild>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell style={{ width: "37%" }}>
							Data attribute
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Values</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{data.map(({ attribute, values }, i) => {
						return (
							<Table.Row key={`${attribute}-${i}`}>
								<Table.RowHeaderCell>
									<Code size="2">{attribute}</Code>
								</Table.RowHeaderCell>

								<Table.Cell>
									{Array.isArray(values) ? (
										<Code size="2" color="gray">
											{values.map(
												(value, index) =>
													`"${value}" ${values.length !== index + 1 ? " | " : ""}`,
											)}
										</Code>
									) : (
										<Text as="p" size="2">
											{values}
										</Text>
									)}
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}
