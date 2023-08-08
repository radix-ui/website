import React from 'react';
import { styled } from '@modulz/design-system';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { PrimitivesHeroButton } from '@components/marketing/PrimitivesHeroButton';
import { TextField, Text, Box, Flex } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  borderRadius: 'var(--radius-4)',
  boxShadow: 'var(--shadow-4)',
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  $$sideShadow: '0 0',
  $$bottomShadow: 'inset 0 -1px var(--gray-6)',
  all: 'unset',
  padding: '0 20px',
  height: '$7',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  userSelect: 'none',
  backgroundColor: 'var(--gray-2)',
  color: 'var(--gray-11)',
  boxShadow: '$$bottomShadow, $$sideShadow',
  '&:hover': {
    backgroundColor: 'var(--gray-1)',
  },
  '&[data-state="active"]': {
    color: 'var(--gray-12)',
    backgroundColor: 'var(--color-panel-solid)',
    $$bottomShadow: '0 0',
  },
  '&:focus': {
    zIndex: 1,
    boxShadow: `0 0 0 2px var(--accent-8)`,
  },
  '&:focus:not(:focus-visible)': {
    zIndex: 'auto',
    boxShadow: '$$bottomShadow, $$sideShadow',
  },
  '& + &': {
    $$sideShadow: '-1px 0 var(--gray-6)',
  },
  '&:first-child': {
    borderTopLeftRadius: 'var(--radius-4)',
  },
  '&:last-child': {
    borderTopRightRadius: 'var(--radius-4)',
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: 'var(--color-panel-solid)',
  borderBottomLeftRadius: 'var(--radius-4)',
  borderBottomRightRadius: 'var(--radius-4)',
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px $colors$indigo8` },
  '&:focus:not(:focus-visible)': { boxShadow: 'none' },
});

const Tabs = StyledTabs;
const TabsList = StyledList;
const TabsTrigger = StyledTrigger;
const TabsContent = StyledContent;

const Fieldset = styled('fieldset', {
  all: 'unset',
  marginBottom: 'var(--space-3)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

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
          <Label>
            <Box mb="1">
              <Text size="1" color="gray">
                Name
              </Text>
            </Box>
            <TextField.Input size="1" id="name" defaultValue="Pedro Duarte" />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label>
            <Box mb="1">
              <Text size="1" color="gray">
                Username
              </Text>
            </Box>
            <TextField.Input size="1" id="username" defaultValue="@peduarte" />
          </Label>
        </Fieldset>
        <Flex justify="end" mt="4">
          <PrimitivesHeroButton variant="gray">Save</PrimitivesHeroButton>
        </Flex>
      </TabsContent>
      <TabsContent value="tab2">
        <Fieldset>
          <Label>
            <Box mb="1">
              <Text size="1" color="gray">
                Current password
              </Text>
            </Box>
            <TextField.Input size="1" id="currentPassword" type="password" />
          </Label>
        </Fieldset>
        <Fieldset>
          <Label>
            <Box mb="1">
              <Text size="1" color="gray">
                New password
              </Text>
            </Box>
            <TextField.Input size="1" id="newPassword" type="password" />
          </Label>
        </Fieldset>
        <Flex justify="end" mt="4">
          <PrimitivesHeroButton variant="gray">Change password</PrimitivesHeroButton>
        </Flex>
      </TabsContent>
    </Tabs>
  );
}
