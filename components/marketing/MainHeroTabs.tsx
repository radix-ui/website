import React from 'react';
import { Flex, styled, Text, TextField } from '@modulz/design-system';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { DemoButton } from '@components/marketing/DemoButton';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  br: '$3',
  boxShadow: `0 2px 10px $colors$blackA4`,
  '& ::selection': {
    backgroundColor: '$blueA5',
  },
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  $$sideShadow: '0 0',
  $$bottomShadow: 'inset 0 -1px $colors$slate6',
  all: 'unset',
  backgroundColor: '$loContrast',
  padding: '0 20px',
  height: '$7',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  userSelect: 'none',
  bc: '$slate2',
  color: '$slate11',
  boxShadow: '$$bottomShadow, $$sideShadow',
  '&:hover': {
    bc: '$slate1',
  },
  '&[data-state="active"]': {
    fontWeight: 500,
    color: '$slate12',
    bc: '$loContrast',
    $$bottomShadow: '0 0',
  },
  '&:focus': {
    zIndex: 1,
    boxShadow: `0 0 0 2px $colors$indigo8`,
  },
  '&:focus:not(:focus-visible)': {
    zIndex: 'auto',
    boxShadow: '$$bottomShadow, $$sideShadow',
  },
  '& + &': {
    $$sideShadow: '-1px 0 $colors$slate6',
  },
  '&:first-child': {
    borderTopLeftRadius: '$3',
  },
  '&:last-child': {
    borderTopRightRadius: '$3',
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$loContrast',
  borderBottomLeftRadius: '$3',
  borderBottomRightRadius: '$3',
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
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export function MainHeroTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Manage your account">
        <TabsTrigger value="tab1">
          <Text size="2" css={{ color: 'inherit' }}>
            Account
          </Text>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <Text size="2" css={{ color: 'inherit' }}>
            Password
          </Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Fieldset>
          <Text size="1" variant="gray" as="label" htmlFor="name" css={{ mb: '$1' }}>
            Name
          </Text>
          <TextField id="name" defaultValue="Pedro Duarte" />
        </Fieldset>
        <Fieldset>
          <Text size="1" variant="gray" as="label" htmlFor="username" css={{ mb: '$1' }}>
            Username
          </Text>
          <TextField id="username" defaultValue="@peduarte" />
        </Fieldset>
        <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
          <DemoButton variant="gray">Save</DemoButton>
        </Flex>
      </TabsContent>
      <TabsContent value="tab2">
        <Fieldset>
          <Text size="1" variant="gray" as="label" htmlFor="currentPassword" css={{ mb: '$1' }}>
            Current password
          </Text>
          <TextField id="currentPassword" type="password" />
        </Fieldset>
        <Fieldset>
          <Text size="1" variant="gray" as="label" htmlFor="newPassword" css={{ mb: '$1' }}>
            New password
          </Text>
          <TextField id="newPassword" type="password" />
        </Fieldset>
        <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
          <DemoButton variant="gray">Change password</DemoButton>
        </Flex>
      </TabsContent>
    </Tabs>
  );
}
