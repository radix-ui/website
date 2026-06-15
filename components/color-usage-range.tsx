import * as React from "react";
import { Flex, Text, Box } from "@radix-ui/themes";

export const ColorUsageRange = ({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Flex>) => (
	<Flex direction="column" mb="2" {...props}>
		<Text align="center" size="1" mb="3" color="gray">
			{children}
		</Text>
		<Box
			style={{
				height: 1,
				backgroundImage:
					"linear-gradient(to right, transparent, var(--gray-a8) 30%, var(--gray-a8) 70%, transparent)",
			}}
		/>
	</Flex>
);
