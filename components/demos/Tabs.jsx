import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, mauve, blackA, green } from '@radix-ui/colors';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid ${mauve.mauve6}`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: mauve.mauve11,
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: violet.violet11 },
  '&[data-state="active"]': {
    color: violet.violet11,
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: 'white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;

// Your app...
const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });

const Text = styled('div', {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});
const Fieldset = styled('fieldset', {
  all: 'unset',
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const Label = styled('label', {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: violet.violet12,
  display: 'block',
});

const Input = styled('input', {
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const TabsDemo = () => (
  <Box css={{}}>
    <Tabs defaultValue="tab1">
      <TabsList aria-label="tabs example">
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Text>Make changes to your account here. Click save when you're done.</Text>
        <Fieldset>
          <Label>Name</Label>
          <Input value="Pedro Duarte" />
        </Fieldset>
        <Fieldset>
          <Label>Username</Label>
          <Input value="@peduarte" />
        </Fieldset>
        <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
          <Button variant="green">Save changes</Button>
        </Flex>
      </TabsContent>
      <TabsContent value="tab2">
        <Text>Change your password here. After saving, you'll be logged you out.</Text>
        <Fieldset>
          <Label>Current password</Label>
          <Input type="password" />
        </Fieldset>
        <Fieldset>
          <Label>New password</Label>
          <Input type="password" />
        </Fieldset>
        <Fieldset>
          <Label>Confirm password</Label>
          <Input type="password" />
        </Fieldset>
        <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
          <Button variant="green">Change password</Button>
        </Flex>
      </TabsContent>
    </Tabs>
  </Box>
);

export default TabsDemo;
