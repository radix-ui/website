import * as React from "react";
import { styled } from "@utils/css";
import { Label, Tabs as TabsPrimitive } from "radix-ui";
import { PrimitivesHeroButton } from "@components/marketing/PrimitivesHeroButton";
import { TextField, Text, Box, Flex } from "@radix-ui/themes";
import styles from "./PrimitivesHeroTabs.module.css";

const Tabs = styled(TabsPrimitive.Root, styles.Tabs);
const TabsList = styled(TabsPrimitive.List, styles.List);
const TabsTrigger = styled(TabsPrimitive.Trigger, styles.Trigger);
const TabsContent = styled(TabsPrimitive.Content, styles.Content);
const Fieldset = styled("fieldset", styles.Fieldset);

export function PrimitivesHeroTabs() {
	return (
		<Tabs defaultValue="tab1">
			<TabsList aria-label="Manage your account">
				<TabsTrigger value="tab1">
					<Text size="2">Account</Text>
				</TabsTrigger>
				<TabsTrigger value="tab2">
					<Text size="2">Password</Text>
				</TabsTrigger>
			</TabsList>
			<TabsContent value="tab1">
				<Fieldset>
					<Label.Root>
						<Box mb="1">
							<Text size="1" color="gray">
								Name
							</Text>
						</Box>
						<TextField.Root size="1" id="name" defaultValue="Pedro Duarte" />
					</Label.Root>
				</Fieldset>
				<Fieldset>
					<Label.Root>
						<Box mb="1">
							<Text size="1" color="gray">
								Username
							</Text>
						</Box>
						<TextField.Root size="1" id="username" defaultValue="@peduarte" />
					</Label.Root>
				</Fieldset>
				<Flex justify="end" mt="4">
					<PrimitivesHeroButton variant="gray">Save</PrimitivesHeroButton>
				</Flex>
			</TabsContent>
			<TabsContent value="tab2">
				<Fieldset>
					<Label.Root>
						<Box mb="1">
							<Text size="1" color="gray">
								Current password
							</Text>
						</Box>
						<TextField.Root size="1" id="currentPassword" type="password" />
					</Label.Root>
				</Fieldset>
				<Fieldset>
					<Label.Root>
						<Box mb="1">
							<Text size="1" color="gray">
								New password
							</Text>
						</Box>
						<TextField.Root size="1" id="newPassword" type="password" />
					</Label.Root>
				</Fieldset>
				<Flex justify="end" mt="4">
					<PrimitivesHeroButton variant="gray">
						Change password
					</PrimitivesHeroButton>
				</Flex>
			</TabsContent>
		</Tabs>
	);
}
