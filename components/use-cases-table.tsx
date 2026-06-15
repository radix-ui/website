import { Text, Box } from "@radix-ui/themes";

const steps = [
	"App background",
	"Subtle background",
	"UI element background",
	"Hovered UI element background",
	"Active / Selected UI element background",
	"Subtle borders and separators",
	"UI element border and focus rings",
	"Hovered UI element border",
	"Solid backgrounds",
	"Hovered solid backgrounds",
	"Low-contrast text",
	"High-contrast text",
];

export function UseCasesTable() {
	return (
		<Box asChild my="5">
			<table
				style={{
					display: "table",
					width: "100%",
					textAlign: "left",
					borderCollapse: "collapse",
				}}
			>
				<thead>
					<tr>
						<Box
							asChild
							py="3"
							px="4"
							style={{
								display: "table-cell",
								width: "50%",
								borderBottom: "1px solid var(--gray-a3)",
							}}
						>
							<th>
								<Text as="p" size="2" color="gray" weight="regular">
									Step
								</Text>
							</th>
						</Box>
						<Box
							asChild
							py="3"
							px="4"
							style={{
								display: "table-cell",
								borderBottom: "1px solid var(--gray-a3)",
							}}
						>
							<th>
								<Text as="p" size="2" color="gray" weight="regular">
									Use Case
								</Text>
							</th>
						</Box>
					</tr>
				</thead>
				<tbody>
					{steps.map((step, i) => (
						<tr key={step}>
							<Box
								asChild
								py="2"
								px="4"
								style={{
									display: "table-cell",
									borderBottom: "1px solid var(--gray-a3)",
									backgroundColor:
										i % 2 === 0 ? "var(--gray-a2)" : "transparent",
								}}
							>
								<td>
									<Text size="2" as="p">
										{i + 1}
									</Text>
								</td>
							</Box>
							<Box
								asChild
								py="2"
								px="4"
								style={{
									display: "table-cell",
									borderBottom: "1px solid var(--gray-a3)",
									backgroundColor:
										i % 2 === 0 ? "var(--gray-a2)" : "transparent",
								}}
							>
								<td>
									<Text size="2" as="p">
										{step}
									</Text>
								</td>
							</Box>
						</tr>
					))}
				</tbody>
			</table>
		</Box>
	);
}
