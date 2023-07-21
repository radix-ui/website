import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  CopyIcon,
  Cross2Icon,
  DotsHorizontalIcon,
  DrawingPinFilledIcon,
  DrawingPinIcon,
  OpenInNewWindowIcon,
  PlusIcon,
  Share2Icon,
} from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Separator,
  Strong,
  Switch,
  Text,
  TextField,
  Theme,
} from '@radix-ui/themes';
import { Marker } from './Marker';
import { allPeople, email } from './people';
import * as React from 'react';

export const ExampleThemesDashboard = (props: React.ComponentPropsWithoutRef<typeof Flex>) => {
  const [state, setState] = React.useState({
    todo: [
      { id: 'a', completed: false },
      { id: 'b', completed: false },
      { id: 'c', completed: false },
      { id: 'd', completed: false },
      { id: 'e', completed: true },
      { id: 'f', completed: true },
    ],
    activityPinned: true,
    financePinned: false,
  });

  return (
    <Flex align="center" gap="6" {...props}>
      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          width: 640,
          // Space to align the vertically centered content with the dot grid
          marginBottom: 15,
        }}
      >
        <Card size="4" style={{ height: 464 }}>
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Pricing
            </Heading>
          </Box>

          <Text as="p" size="2" mb="5" color="gray">
            No credit card required. Every plan includes a 30-day trial of all Pro features.
          </Text>

          <Grid columns="3" gap="6">
            <Flex direction="column">
              <Text weight="bold" size="5" mb="1">
                Basic
              </Text>
              <Text color="gray" size="2" mb="4">
                3 team members
              </Text>
              <Text weight="bold" size="5" mb="4">
                $0
                <Text size="5" weight="bold" style={{ color: 'var(--gray-a8)' }}>
                  {' / mo'}
                </Text>
              </Text>

              <Flex direction="column" gap="2">
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Expense tracking</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Invoicing</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Payment tracking</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Transaction recording</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Basic reports</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Email support</Text>
                </Flex>
                <Button tabIndex={-1} mt="3" variant="outline">
                  Downgrade
                </Button>
              </Flex>
            </Flex>

            <Flex direction="column">
              <Text weight="bold" size="5" mb="1">
                Growth
              </Text>
              <Text color="gray" size="2" mb="4">
                10 team members
              </Text>
              <Text weight="bold" size="5" mb="4">
                $49
                <Text size="5" weight="bold" style={{ color: 'var(--gray-a8)' }}>
                  {' / mo'}
                </Text>
              </Text>

              <Flex direction="column" gap="2">
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Online payments</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Recurring invoices</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Bill management</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Inventory tracking</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Detailed reports</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Phone support</Text>
                </Flex>
                <Button tabIndex={-1} mt="3" variant="outline">
                  Go to Billing
                </Button>
              </Flex>
            </Flex>

            <Flex direction="column">
              <Text weight="bold" size="5" mb="1">
                Pro
              </Text>
              <Text color="gray" size="2" mb="4">
                Unlimited team members
              </Text>
              <Text weight="bold" size="5" mb="4">
                $99
                <Text size="5" weight="bold" style={{ color: 'var(--gray-a8)' }}>
                  {' / mo'}
                </Text>
              </Text>

              <Flex direction="column" gap="2">
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Custom invoices</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Multi-business</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Team collaboration</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">App integrations</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Advanced security</Text>
                </Flex>
                <Flex gap="2" align="center">
                  <Marker>
                    <CheckIcon width="14" height="14" />
                  </Marker>
                  <Text size="2">Priority support</Text>
                </Flex>
                <Button tabIndex={-1} mt="3">
                  Upgrade
                </Button>
              </Flex>
            </Flex>
          </Grid>
        </Card>

        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Your team
            </Heading>
          </Box>

          <Text as="p" size="2" mb="5" color="gray">
            Invite and manage your team members.
          </Text>

          <Flex gap="3" mb="5">
            <Box grow="1">
              <TextField.Input tabIndex={-1} size="2" placeholder="Email address" />
            </Box>
            <Button tabIndex={-1} size="2">
              Invite
            </Button>
          </Flex>

          <Flex direction="column">
            {[4, 2, 12, 20, 16].map((number, i) => (
              <Box key={number}>
                <Flex gap="4" align="center">
                  <Flex gap="3" align="center" style={{ width: 200, whiteSpace: 'nowrap' }}>
                    <Avatar
                      src={allPeople[number]?.image}
                      fallback={allPeople[number]?.name[0].toUpperCase()}
                    />
                    <Link tabIndex={-1} size="2">
                      {allPeople[number]?.name}
                    </Link>
                  </Flex>

                  <Text size="2" color="gray">
                    {email(allPeople[number]?.name)}
                  </Text>

                  <Flex grow="1" justify="end">
                    <IconButton tabIndex={-1} variant="ghost" highContrast>
                      <DotsHorizontalIcon width="16" height="16" />
                    </IconButton>
                  </Flex>
                </Flex>

                {i !== 4 && (
                  <Box style={{ marginTop: -1 }}>
                    <Separator size="4" my="3" />
                  </Box>
                )}
              </Box>
            ))}
          </Flex>
        </Card>

        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Notifications
            </Heading>
          </Box>

          <Text as="p" size="2" mb="6" color="gray">
            Manage your notification settings.
          </Text>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" my="5" />
          </Box>

          <Flex direction="column">
            <Flex gap="9" align="start" justify="between">
              <Box>
                <Heading as="h4" size="3" mb="1">
                  Comments
                </Heading>
                <Text as="p" size="2" color="gray">
                  Receive notifications when someone comments on your documents or mentions you.
                </Text>
              </Box>
              <Flex direction="column" gap="4" mt="1">
                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked radius="full" />
                    <Text size="2" weight="bold">
                      Push
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked radius="full" />
                    <Text size="2" weight="bold">
                      Email
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} radius="full" />
                    <Text size="2" weight="bold">
                      Slack
                    </Text>
                  </Flex>
                </Label>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" my="5" />
            </Box>

            <Flex gap="9" align="start" justify="between">
              <Box>
                <Heading as="h4" size="3" mb="1">
                  Favorites
                </Heading>
                <Text as="p" size="2" color="gray">
                  Receive notifications when there is activity related to your favorited items.
                </Text>
              </Box>
              <Flex direction="column" gap="4" mt="1">
                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked radius="full" />
                    <Text size="2" weight="bold">
                      Push
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} radius="full" />
                    <Text size="2" weight="bold">
                      Email
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked radius="full" />
                    <Text size="2" weight="bold">
                      Slack
                    </Text>
                  </Flex>
                </Label>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" my="5" />
            </Box>

            <Flex gap="9" align="start" justify="between">
              <Box>
                <Heading as="h4" size="3" mb="1">
                  New documents
                </Heading>
                <Text as="p" size="2" color="gray">
                  Receive notifications whenever people on your team create new documents.
                </Text>
              </Box>
              <Flex direction="column" gap="4" mt="1">
                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked radius="full" />
                    <Text size="2" weight="bold">
                      Push
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked radius="full" />
                    <Text size="2" weight="bold">
                      Email
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked={false} radius="full" />
                    <Text size="2" weight="bold">
                      Slack
                    </Text>
                  </Flex>
                </Label>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          scrollSnapAlign: 'center',
          width: 416,
          // Space to align the vertically centered content with the dot grid
          marginBottom: 15,
        }}
      >
        <Card size="4" style={{ height: 320 }}>
          <Box height="7" mb="4">
            <Heading as="h3" size="6" mt="-1">
              Sign up
            </Heading>
          </Box>

          <Box mb="5">
            <Label>
              <Text as="div" size="2" weight="bold" mb="2">
                Email address
              </Text>
              <TextField.Input tabIndex={-1} placeholder="Enter your email" />
            </Label>
          </Box>

          <Box mb="5" position="relative">
            <Box position="absolute" top="0" right="0" style={{ marginTop: -2 }}>
              <Link tabIndex={-1} size="2">
                Forgot password?
              </Link>
            </Box>

            <Label>
              <Text as="div" size="2" weight="bold" mb="2">
                Password
              </Text>
              <TextField.Input tabIndex={-1} placeholder="Enter your password" />
            </Label>
          </Box>

          <Flex mt="6" justify="end" gap="3">
            <Button tabIndex={-1} variant="outline">
              Create an account
            </Button>
            <Button tabIndex={-1}>Sign in</Button>
          </Flex>
        </Card>

        <Card size="4">
          <Box position="absolute" top="0" right="0" m="3">
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <Cross2Icon width="20" height="20" />
            </IconButton>
          </Box>

          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Your company card
            </Heading>
          </Box>

          <Text as="p" size="2" mb="6" color="gray">
            View and manage your corporate card.
          </Text>

          <Box
            p="6"
            style={{
              backgroundColor: 'var(--gray-a3)',
              borderRadius: 'var(--radius-4)',
            }}
          >
            <Theme appearance="dark" asChild>
              <Flex
                direction="column"
                justify="between"
                style={{
                  height: 168,
                  background: 'linear-gradient(to top right, var(--accent-9), #E18BFF)',
                  boxShadow: '0 1px 20px -5px #7971E9AA',
                  borderRadius: 'var(--radius-3)',
                }}
              >
                <Text weight="medium" mt="3" mx="3" size="2">
                  Sophie Johnson
                </Text>
                <Box>
                  <Flex align="center" gap="3" mb="1" mx="3">
                    <Text size="2">
                      4929 3849
                      {/* An empty span prevents iOS Safari from thinking it's a telephone number */}
                      <span> </span>
                      5027 1846
                    </Text>
                    <IconButton tabIndex={-1} variant="ghost" color="gray" size="1" highContrast>
                      <CopyIcon />
                    </IconButton>
                  </Flex>
                  <Flex gap="3" mb="2" mx="3">
                    <Text size="2">01 / 27</Text>
                    <Text size="2">999</Text>
                  </Flex>
                </Box>
              </Flex>
            </Theme>
          </Box>

          <Flex mt="6" justify="end" gap="3">
            <Button tabIndex={-1} variant="outline" color="red">
              Freeze
            </Button>
            <Button tabIndex={-1}>Done</Button>
          </Flex>
        </Card>

        <Card size="4">
          <Box position="absolute" top="0" right="0" m="3">
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <Cross2Icon width="20" height="20" />
            </IconButton>
          </Box>

          <Flex gap="3" direction="column" align="center">
            <Marker height="8" width="8">
              <CheckIcon width="32" height="32" />
            </Marker>

            <Box height="8">
              <Heading as="h3" size="6">
                Invoice paid
              </Heading>
            </Box>
          </Flex>

          <Text as="p" size="3" align="center" mb="5">
            You paid $17,975.30. A receipt copy was sent to <Strong>accounting@example.com</Strong>
          </Text>

          <Flex direction="column" gap="3" align="stretch">
            <Button tabIndex={-1}>Next invoice</Button>

            <Button tabIndex={-1} variant="outline">
              Done
            </Button>
          </Flex>
        </Card>

        <Card size="4">
          <Box position="absolute" top="0" right="0" m="3">
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <Cross2Icon width="20" height="20" />
            </IconButton>
          </Box>

          <Box height="7" mb="4">
            <Heading as="h3" size="6" mt="-1">
              Invoice{' '}
              <Link tabIndex={-1} weight="bold">
                #3463
              </Link>
            </Heading>
          </Box>

          <Grid columns="2" gapX="4" gapY="5">
            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                Issued
              </Text>
              <Text as="div" size="3" weight="bold">
                June 21, 2023
              </Text>
            </Box>

            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                Due
              </Text>
              <Text as="div" size="3" weight="bold">
                July 21, 2023
              </Text>
            </Box>

            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                To
              </Text>
              <Text as="div" size="3" mb="1" weight="bold">
                Paradise Ventures
              </Text>
              <Text as="div" size="2">
                742 Evergreen Terrace, Springfield, IL 62704
              </Text>
            </Box>

            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                From
              </Text>
              <Text as="div" size="3" mb="1" weight="bold">
                Rogue Widgets
              </Text>
              <Text as="div" size="2">
                1600 Baker Street NW, Washington, DC 20500
              </Text>
            </Box>

            <Flex direction="column" gap="1" style={{ gridColumn: '1 / -1' }}>
              <Flex justify="between">
                <Text size="2" mb="1" color="gray">
                  Services
                </Text>
                <Text size="2" mb="1" color="gray">
                  Price
                </Text>
              </Flex>
              <Flex justify="between">
                <Text size="3" mb="1" weight="bold">
                  Branding
                </Text>
                <Text size="2">$20,000</Text>
              </Flex>
              <Flex justify="between">
                <Text size="3" mb="1" weight="bold">
                  Marketing website
                </Text>
                <Text size="2">$17,500</Text>
              </Flex>
              <Box style={{ marginTop: -1 }}>
                <Separator size="4" mt="1" mb="2" />
              </Box>
              <Flex justify="between">
                <Text size="2">Total</Text>
                <Text size="2">$38,500</Text>
              </Flex>
            </Flex>
          </Grid>

          <Flex mt="6" justify="end" gap="3">
            <Button tabIndex={-1} variant="outline" color="red">
              Reject
            </Button>
            <Button tabIndex={-1}>Approve</Button>
          </Flex>
        </Card>
      </Flex>

      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          width: 640,
          // Space to align the vertically centered content with the dot grid
          marginBottom: -13,
        }}
      >
        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              To-do
            </Heading>
          </Box>

          <Flex gap="3" position="absolute" top="0" right="0" m="3">
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <Share2Icon width="20" height="20" />
            </IconButton>
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <PlusIcon width="20" height="20" />
            </IconButton>
          </Flex>

          <Text as="p" size="2" mb="5" color="gray">
            Stay on top of your daily tasks.
          </Text>

          <ToDoList
            items={state.todo}
            onItemsChange={(items) => setState({ ...state, todo: items })}
          />
        </Card>

        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Recent activity
            </Heading>
          </Box>

          <Flex position="absolute" top="0" right="0" m="3">
            <IconButton
              tabIndex={-1}
              variant="ghost"
              color="gray"
              highContrast
              style={{ margin: 0 }}
            >
              <OpenInNewWindowIcon width="20" height="20" />
            </IconButton>

            <IconButton
              tabIndex={-1}
              variant={state.activityPinned ? 'soft' : 'ghost'}
              color="gray"
              highContrast
              style={{ margin: 0 }}
              onClick={() =>
                setState((state) => ({ ...state, activityPinned: !state.activityPinned }))
              }
            >
              {state.activityPinned ? (
                <DrawingPinFilledIcon width="20" height="20" />
              ) : (
                <DrawingPinIcon width="20" height="20" />
              )}
            </IconButton>
          </Flex>

          <Text as="p" size="2" mb="7" color="gray">
            Review what has happened over the past days.
          </Text>

          <Flex direction="column">
            <Flex direction="column" gap="3" mb="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[6].image}
                    fallback={allPeople[6]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[6].name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      Approved invoice <Link tabIndex={-1}>#3461</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 21, 11:34 am
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[8].image}
                    fallback={allPeople[8]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[8].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Purchased <Link tabIndex={-1}>15 office chairs</Link> and{' '}
                      <Link tabIndex={-1}>2 drum sets</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 21, 9:43 am
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[8].image}
                    fallback={allPeople[8]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[8].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Responded to your comment <Link tabIndex={-1}>#7514</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 21, 9:41 am
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[28].image}
                    fallback={allPeople[28]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[28].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Created <Link tabIndex={-1}>4 invoices</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 4:55 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[26].image}
                    fallback={allPeople[26]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[26].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Updated client details for <Link tabIndex={-1}>Acme Co.</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 3:30 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[25].image}
                    fallback={allPeople[25]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[25].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Created <Link tabIndex={-1}>a new report</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 3:22 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[25].image}
                    fallback={allPeople[25]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[25].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Deleted report <Link tabIndex={-1}>#34</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 1:00 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" mt="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[20].image}
                    fallback={allPeople[20]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[20].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Joined the team
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 12:47 pm
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>

        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Financial performance
            </Heading>
          </Box>

          <Flex position="absolute" top="0" right="0" m="3">
            <IconButton
              tabIndex={-1}
              variant="ghost"
              color="gray"
              highContrast
              style={{ margin: 0 }}
            >
              <OpenInNewWindowIcon width="20" height="20" />
            </IconButton>

            <IconButton
              tabIndex={-1}
              variant={state.financePinned ? 'soft' : 'ghost'}
              color="gray"
              highContrast
              style={{ margin: 0 }}
              onClick={() =>
                setState((state) => ({ ...state, financePinned: !state.financePinned }))
              }
            >
              {state.financePinned ? (
                <DrawingPinFilledIcon width="20" height="20" />
              ) : (
                <DrawingPinIcon width="20" height="20" />
              )}
            </IconButton>
          </Flex>

          <Text as="p" size="2" mb="6" color="gray">
            Review your company’s KPIs compared to the month before.
          </Text>

          <Grid columns="3" gap="5">
            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  MRR
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  3.2%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $350K
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  OpEx
                </Text>
                <Badge color="red" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  12.8%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $211K
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  CapEx
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  8.8%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $94K
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  GPM
                </Text>
                <Badge color="red" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  1.2%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                44.6%
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  NPM
                </Text>
                <Badge color="gray" variant="surface" radius="full">
                  0.0%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                9.1%
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  EBITDA
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  4.1%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $443K
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  CAC
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  11.0%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $146
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  LTV
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  3%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $1,849
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Churn
                </Text>
                <Badge color="red" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  1.1%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                12.4%
              </Text>
            </Box>
          </Grid>
        </Card>
      </Flex>
    </Flex>
  );
};

interface ToDoItem {
  id: string;
  completed: boolean;
}

interface ToDoList {
  items: ToDoItem[];
  onItemsChange: (items: ToDoItem[]) => void;
}

const itemsContent = {
  a: (
    <span>
      Respond to comment{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        #384
      </Link>{' '}
      from Travis Ross
    </span>
  ),
  b: (
    <span>
      Invite{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        Acme Co.
      </Link>{' '}
      team to Slack
    </span>
  ),
  c: (
    <span>
      Create a report{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        requested
      </Link>{' '}
      by Danilo Sousa
    </span>
  ),
  d: (
    <span>
      Review support request{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        #85
      </Link>
    </span>
  ),
  e: <span>Close Q2 finances</span>,
  f: (
    <span>
      Review invoice{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        #3456
      </Link>
    </span>
  ),
};

const ToDoList = ({ items, onItemsChange }: ToDoList) => {
  return (
    <Flex gap="2" direction="column">
      {items.map((item) => (
        <Label key={item.id}>
          <Flex gap="2" align="center">
            <Checkbox
              tabIndex={-1}
              checked={item.completed}
              onCheckedChange={(checked) => {
                const newItems = items.slice();
                const newItem = newItems.find((candidate) => candidate.id === item.id);
                newItem.completed = Boolean(checked);
                onItemsChange(newItems);
              }}
            />
            <Text
              size="2"
              color={item.completed ? 'gray' : undefined}
              style={
                {
                  textDecoration: item.completed ? 'line-through' : undefined,
                  '--accent-12': 'var(--accent-11)',
                } as React.CSSProperties
              }
            >
              {itemsContent[item.id]}
            </Text>
          </Flex>
        </Label>
      ))}
    </Flex>
  );
};
