import React from 'react';
import { Box, darkTheme, Flex, globalCss, styled, Text, TextField } from '@modulz/design-system';
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
  borderBottom: `1px solid $slate6`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
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
  '&:first-child': { borderTopLeftRadius: '$3' },
  '&:last-child': { borderTopRightRadius: '$3' },
  '& + &': {
    borderLeft: '1px solid $slate6',
  },
  '&:hover': { bc: '$slate2' },
  '&[data-state="active"]': {
    bc: '$slate2',
    [`.${darkTheme} &`]: {
      bc: '$panel',
    },
  },
  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 2px $colors$indigo8`,
    borderColor: '$slate2',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
    borderColor: '$slate6',
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

export default function TabsDemo() {
  // Let upstream document know that we are ready
  React.useEffect(() => {
    requestAnimationFrame(() => window.top.postMessage({ key: 'tabs' }, '*'));
  });

  return (
    <Flex
      css={{
        ai: 'center',
        jc: 'center',
        position: 'relative',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Tabs defaultValue="tab1">
        <TabsList aria-Text="Manage your account">
          <TabsTrigger value="tab1">
            <Text size="2">Account</Text>
          </TabsTrigger>
          <TabsTrigger value="tab2">
            <Text size="2">Password</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text size="2" css={{ lineHeight: 1.5, mb: '$3' }}>
            Make changes to your account here. Click save when you’re done.
          </Text>
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
          <Text size="2" css={{ lineHeight: 1.5, mb: '$3' }}>
            Change your password here. After saving, you’ll be logged out.
          </Text>
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
    </Flex>
  );
}
