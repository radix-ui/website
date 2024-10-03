import * as React from "react";
import { Flex, Grid, Text } from "@radix-ui/themes";

type RightClickZoneProps = React.ComponentPropsWithoutRef<typeof Grid> & {
	title: string;
};

export const RightClickZone = ({
	title,
	style,
	...props
}: RightClickZoneProps) => (
	<Grid
		{...props}
		style={{
			height: 100,
			placeItems: "center",
			border: "1px dashed var(--accent-a6)",
			backgroundColor: "var(--accent-a2)",
			borderRadius: "var(--radius-3)",
			cursor: "default",
			...style,
		}}
	>
		<Flex direction="column" align="center">
			{title && (
				<Text weight="bold" size="2">
					{title}
				</Text>
			)}
			<Text color="gray" size={title ? "2" : undefined}>
				Right-click here
			</Text>
		</Flex>
	</Grid>
);
