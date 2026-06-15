import * as React from "react";
import { Box, Code, Table } from "@radix-ui/themes";

type KeyboardDef = {
	cssVariable: string;
	description: React.ReactNode;
};

export function CssVariablesTable({ data }: { data: KeyboardDef[] }) {
	return (
		<Box my="5" asChild>
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell style={{ width: "37%" }}>
							CSS Variable
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{data.map(({ cssVariable, description }, i) => {
						return (
							<Table.Row key={`${cssVariable}-${i}`}>
								<Table.RowHeaderCell>
									<Code
										size="2"
										style={{
											whiteSpace: "normal",
										}}
									>
										{cssVariable}
									</Code>
								</Table.RowHeaderCell>
								<Table.Cell>{description}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table.Root>
		</Box>
	);
}
