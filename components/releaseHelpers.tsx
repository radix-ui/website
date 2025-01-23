import * as React from "react";
import { Flex, Heading, Badge, Link, Text } from "@radix-ui/themes";

export function PackageRelease({
	major,
	name,
	version,
	preview,
}: {
	id: string;
	major?: boolean;
	name: string;
	version?: string;
	preview?: boolean;
}) {
	return (
		<Flex align="center" gap="1" mt="5" mb="-2">
			<Heading size="4" mr="1">
				{name}
			</Heading>
			{version && (
				<Badge
					size="1"
					color={major ? "yellow" : "gray"}
					style={{ fontWeight: "normal" }}
				>
					{version}
				</Badge>
			)}
			{major && (
				<Text size="1" color="gray">
					Major
				</Text>
			)}
			{preview && (
				<Text size="1" color="gray">
					Preview
				</Text>
			)}
		</Flex>
	);
}

export function PRLink({ id }: { id: number | number[] }) {
	const ids = Array.isArray(id) ? id : [id];
	return (
		<Text color="gray" size="2">
			–{" "}
			{ids.map((id, i, arr) => (
				<React.Fragment key={id}>
					<Link
						color="gray"
						href={`https://github.com/radix-ui/primitives/pull/${id}`}
						target="_blank"
						rel="noopener"
					>
						#{id}
					</Link>
					{i < arr.length - 1 ? " " : null}
				</React.Fragment>
			))}
		</Text>
	);
}
