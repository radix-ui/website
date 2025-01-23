import * as React from "react";
import { Dialog as DialogPrimitive, Label } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Flex, TextField, Grid, Text, IconButton, Box } from "@radix-ui/themes";
import { PrimitivesHeroButton } from "./PrimitivesHeroButton";

export function PrimitivesHeroDialog() {
	// We prevent the initial auto focus because it's a demo rather than a real UI,
	// so the parent page focus is not stolen.
	const initialAutoFocusPrevented = React.useRef(false);

	return (
		<DialogPrimitive.Root modal={false} defaultOpen>
			<DialogPrimitive.Trigger asChild>
				<PrimitivesHeroButton>Edit Profile</PrimitivesHeroButton>
			</DialogPrimitive.Trigger>

			<DialogPrimitive.Content
				style={{
					outline: 0,
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "70%",
					backgroundColor: "var(--color-panel-solid)",
					borderRadius: "var(--radius-3)",
					padding: "var(--space-3)",
					marginTop: "calc(var(--space-4) * -1)",
					boxShadow: "0 0 0 1px var(--gray-a3), var(--shadow-4)",
				}}
				onInteractOutside={(event) => event.preventDefault()}
				onOpenAutoFocus={(event) => {
					// We prevent the initial auto focus because it's a demo rather than a real UI,
					// so the parent page focus is not stolen.
					if (initialAutoFocusPrevented.current === false) {
						event.preventDefault();
						initialAutoFocusPrevented.current = true;
					}
				}}
			>
				<DialogPrimitive.Title asChild>
					<Text as="div" size="3" weight="bold" mb="2">
						Edit Profile
					</Text>
				</DialogPrimitive.Title>

				<Flex mb="2" direction="column">
					<Label.Root>
						<Box mb="1">
							<Text size="1" color="gray">
								Name
							</Text>
						</Box>
						<TextField.Root size="1" id="name" defaultValue="Pedro Duarte" />
					</Label.Root>
				</Flex>

				<Flex mb="4" direction="column">
					<Label.Root>
						<Box mb="1">
							<Text size="1" color="gray">
								Username
							</Text>
						</Box>
						<TextField.Root size="1" id="username" defaultValue="@peduarte" />
					</Label.Root>
				</Flex>

				<Flex justify="end" gap="2">
					<DialogPrimitive.Close asChild>
						<PrimitivesHeroButton variant="gray">Save</PrimitivesHeroButton>
					</DialogPrimitive.Close>
				</Flex>

				<Flex position="absolute" top="0" right="0" m="2">
					<DialogPrimitive.Close asChild>
						<IconButton size="1" color="gray" variant="ghost" highContrast>
							<Cross2Icon />
						</IconButton>
					</DialogPrimitive.Close>
				</Flex>
			</DialogPrimitive.Content>
		</DialogPrimitive.Root>
	);
}
