import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  DropdownMenu,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Provider,
  Separator,
  Strong,
  Switch,
  Text,
  TextField,
  ThemeConfig,
} from '@radix-ui/themes';
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
import { Card } from '@components/themes/card';
import { allPeople, email } from '@components/themes/people';
import styles from './index.module.css';
import '@radix-ui/themes/dist/index.css';
import { Label } from '@radix-ui/react-label';
import * as React from 'react';
import Head from 'next/head';
import { ThemesHeader } from '@components/ThemesHeader';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function ThemesHome() {
  const pageShowcaseScrollRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let currentWidth = 0;

    const centerDemoScroll = () => {
      const newWidth = window.innerWidth;
      const container = pageShowcaseScrollRef.current;

      if (getComputedStyle(container).overflowX !== 'scroll') {
        container.scrollLeft = 0;
        currentWidth = 0;
        return;
      }

      if (newWidth !== currentWidth && container) {
        container.scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
        currentWidth = newWidth;
      }
    };

    centerDemoScroll();
    addEventListener('resize', centerDemoScroll);

    return () => {
      removeEventListener('resize', centerDemoScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#FDFCFD" />
      </Head>

      <ThemesHeader />

      <div className={styles.PageRoot}>
        <div className={styles.PageContent}>
          <div className={styles.PageHero}>
            <div className={styles.PageHeroInner}>
              <h1 className={styles.PageHeroTitle}>Build faster</h1>

              <p className={styles.PageHeroText}>
                Configurable component library from the Radix team. Move quickly with a suite of
                beautiful, high-quality components and smooth DX.
              </p>
              <a href="/docs/themes" className={styles.PageHeroButton}>
                Get started <span className={styles.PageHeroButtonArrow} />
              </a>
            </div>
          </div>

          <div className={styles.PageShowcase}>
            <div className={styles.PageShowcaseInner} ref={pageShowcaseScrollRef}>
              {/* An extra div is needed to have padding working as expected within the scroll container */}
              <div>
                <div className={styles.PageShowcaseInnerScaled}>
                  <div aria-hidden className="rui-reset-root">
                    <Provider>
                      <DemoAppDashboard />
                    </Provider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const DemoAppDashboard = () => (
  <Flex align="center" gap="6">
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
          <Heading size="6" mt="-1">
            Pricing
          </Heading>
        </Box>

        <Text size="2" mb="5" color="gray">
          No credit card required. Every plan includes a 30-day trial of all Pro features.
        </Text>

        <Grid columns="3" gap="6">
          <Flex direction="column">
            <Heading size="5" mb="1">
              Basic
            </Heading>
            <Text color="gray" size="2" mb="4">
              3 team members
            </Text>
            <Heading size="5" mb="4">
              $0
              <Text size="5" weight="bold" asChild style={{ color: 'var(--gray-a8)' }}>
                <span> / mo</span>
              </Text>
            </Heading>

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
              <Button tabIndex={-1} mt="3" variant="surface">
                Downgrade
              </Button>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Heading size="5" mb="1">
              Growth
            </Heading>
            <Text color="gray" size="2" mb="4">
              10 team members
            </Text>
            <Heading size="5" mb="4">
              $49
              <Text size="5" weight="bold" asChild style={{ color: 'var(--gray-8)' }}>
                <span> / mo</span>
              </Text>
            </Heading>

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
              <Button tabIndex={-1} mt="3" variant="surface">
                Go to Billing
              </Button>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Heading size="5" mb="1">
              Pro
            </Heading>
            <Text color="gray" size="2" mb="4">
              Unlimited team members
            </Text>
            <Heading size="5" mb="4">
              $99
              <Text size="5" weight="bold" asChild style={{ color: 'var(--gray-a8)' }}>
                <span> / mo</span>
              </Text>
            </Heading>

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
          <Heading size="6" mt="-1">
            Your team
          </Heading>
        </Box>

        <Text size="2" mb="5" color="gray">
          Invite and manage your team members.
        </Text>

        <Flex gap="3" mb="5">
          <TextField tabIndex={-1} size="2" placeholder="Email address" style={{ flexShrink: 1 }} />
          <Button tabIndex={-1} size="2" color="indigo">
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
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <IconButton tabIndex={-1} variant="ghost" highContrast>
                        <DotsHorizontalIcon width="16" height="16" />
                      </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content align="end">
                      <DropdownMenu.Item>Direct message</DropdownMenu.Item>
                      <DropdownMenu.Item>View profile</DropdownMenu.Item>
                      <DropdownMenu.Item data-color-scale="red">Remove</DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
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
          <Heading size="6" mt="-1">
            Notifications
          </Heading>
        </Box>

        <Text size="2" mb="6" color="gray">
          Manage your notification settings.
        </Text>

        <Box style={{ marginTop: -1 }}>
          <Separator size="4" my="5" />
        </Box>

        <ThemeConfig radius="full">
          <Flex direction="column">
            <Flex gap="9" align="start" justify="between">
              <Box>
                <Text size="3" weight="bold" mb="1">
                  Comments
                </Text>
                <Text size="2" color="gray">
                  Receive notifications when someone comments on your documents or mentions you.
                </Text>
              </Box>
              <Flex direction="column" gap="4" mt="1">
                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked />
                    <Text size="2" weight="bold">
                      Push
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} defaultChecked />
                    <Text size="2" weight="bold">
                      Email
                    </Text>
                  </Flex>
                </Label>

                <Label>
                  <Flex align="center" gap="2">
                    <Switch tabIndex={-1} />
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
                <Text size="3" weight="bold" mb="1">
                  Favorites
                </Text>
                <Text size="2" color="gray">
                  Receive notifications when there is activity related to your favorited items.
                </Text>
              </Box>
              <Flex direction="column" gap="4" mt="1">
                <Flex align="center" gap="2">
                  <Switch tabIndex={-1} defaultChecked />
                  <Text size="2" weight="bold">
                    Push
                  </Text>
                </Flex>

                <Flex align="center" gap="2">
                  <Switch tabIndex={-1} />
                  <Text size="2" weight="bold">
                    Email
                  </Text>
                </Flex>

                <Flex align="center" gap="2">
                  <Switch tabIndex={-1} defaultChecked />
                  <Text size="2" weight="bold">
                    Slack
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" my="5" />
            </Box>

            <Flex gap="9" align="start" justify="between">
              <Box>
                <Text size="3" weight="bold" mb="1">
                  New documents
                </Text>
                <Text size="2" color="gray">
                  Receive notifications whenever people on your team create new documents.
                </Text>
              </Box>
              <Flex direction="column" gap="4" mt="1">
                <Flex align="center" gap="2">
                  <Switch tabIndex={-1} defaultChecked />
                  <Text size="2" weight="bold">
                    Push
                  </Text>
                </Flex>

                <Flex align="center" gap="2">
                  <Switch tabIndex={-1} defaultChecked />
                  <Text size="2" weight="bold">
                    Email
                  </Text>
                </Flex>

                <Flex align="center" gap="2">
                  <Switch tabIndex={-1} defaultChecked={false} />
                  <Text size="2" weight="bold">
                    Slack
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ThemeConfig>
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
          <Heading size="6" mt="-1">
            Sign up
          </Heading>
        </Box>

        <Box mb="5">
          <Text size="2" weight="bold" mb="2">
            Email address
          </Text>
          <TextField tabIndex={-1} placeholder="Enter your email" />
        </Box>

        <Box mb="5">
          <Flex justify="between" mb="2">
            <Text size="2" weight="bold">
              Password
            </Text>
            <Link tabIndex={-1} size="2">
              Forgot password?
            </Link>
          </Flex>
          <TextField tabIndex={-1} placeholder="Enter your password" />
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Button tabIndex={-1} variant="surface">
            Create an account
          </Button>
          <Button tabIndex={-1}>Sign in</Button>
        </Flex>
      </Card>

      <Card size="4">
        <Box position="absolute" top="0" right="0" m="2">
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <Cross2Icon width="20" height="20" />
          </IconButton>
        </Box>

        <Box height="7">
          <Heading size="6" mt="-1">
            Your company card
          </Heading>
        </Box>

        <Text size="2" mb="6" color="gray">
          View and manage your corporate card.
        </Text>

        <Box
          p="6"
          style={{
            backgroundColor: 'var(--gray-3)',
            borderRadius: 'var(--br-4)',
          }}
        >
          <Flex
            className="dark-theme"
            direction="column"
            justify="between"
            style={{
              height: 168,
              background: 'linear-gradient(to top right, var(--accent-9), #E18BFF)',
              boxShadow: '0 1px 20px -5px #7971E9AA',
              borderRadius: 'var(--br-3)',
            }}
          >
            <Text mt="3" mx="3" size="2">
              Sophie Johnson
            </Text>
            <Box>
              <Flex align="center" gap="2" mb="1" mx="3">
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
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Button tabIndex={-1} variant="outline" color="red">
            Freeze
          </Button>
          <Button tabIndex={-1}>Done</Button>
        </Flex>
      </Card>

      <Card size="4">
        <Box position="absolute" top="0" right="0" m="2">
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <Cross2Icon width="20" height="20" />
          </IconButton>
        </Box>

        <Flex gap="3" direction="column" align="center">
          <Marker height="8" width="8">
            <CheckIcon width="32" height="32" />
          </Marker>

          <Box height="8">
            <Heading size="6">Invoice paid</Heading>
          </Box>
        </Flex>

        <Text size="3" align="center" mb="5">
          You paid $17,975.30. We sent a receipt to <Strong>joe.wilson@example.com</Strong>
        </Text>

        <Button tabIndex={-1} mb="3" variant="surface" style={{ width: '100%' }}>
          Done
        </Button>

        <Button tabIndex={-1} style={{ width: '100%' }}>
          Next invoice
        </Button>
      </Card>

      <Card size="4">
        <Box position="absolute" top="0" right="0" m="2">
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <Cross2Icon width="20" height="20" />
          </IconButton>
        </Box>

        <Box height="7" mb="4">
          <Heading size="6" mt="-1">
            Invoice{' '}
            <Link tabIndex={-1} weight="bold">
              #3463
            </Link>
          </Heading>
        </Box>

        <Grid columns="2" gapX="4" gapY="5">
          <Box>
            <Text size="2" mb="1" color="gray">
              Issued
            </Text>
            <Text size="3" weight="bold">
              June 21, 2023
            </Text>
          </Box>

          <Box>
            <Text size="2" mb="1" color="gray">
              Due
            </Text>
            <Text size="3" weight="bold">
              July 21, 2023
            </Text>
          </Box>

          <Box>
            <Text size="2" mb="1" color="gray">
              To
            </Text>
            <Text size="3" mb="1" weight="bold">
              Paradise Ventures
            </Text>
            <Text size="2">742 Evergreen Terrace, Springfield, IL 62704</Text>
          </Box>

          <Box>
            <Text size="2" mb="1" color="gray">
              From
            </Text>
            <Text size="3" mb="1" weight="bold">
              Rogue Widgets
            </Text>
            <Text size="2">1600 Baker Street NW, Washington, DC 20500</Text>
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
          <Heading size="6" mt="-1">
            To-do
          </Heading>
        </Box>

        <Flex gap="1" position="absolute" top="0" right="0" m="2">
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <Share2Icon width="20" height="20" />
          </IconButton>
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <PlusIcon width="20" height="20" />
          </IconButton>
        </Flex>

        <Text size="2" mb="5" color="gray">
          Stay on top of your daily tasks.
        </Text>

        <Flex gap="2" direction="column">
          <Label>
            <Flex gap="2" align="center">
              <Checkbox tabIndex={-1} />
              <Text size="2">
                Respond to comment{' '}
                <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
                  #384
                </Link>{' '}
                from Travis Ross
              </Text>
            </Flex>
          </Label>

          <Label>
            <Flex gap="2" align="center">
              <Checkbox tabIndex={-1} />
              <Text size="2">
                Invite{' '}
                <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
                  Acme Co.
                </Link>{' '}
                team to Slack
              </Text>
            </Flex>
          </Label>

          <Label>
            <Flex gap="2" align="center">
              <Checkbox tabIndex={-1} />
              <Text size="2">
                Create a report{' '}
                <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
                  requested
                </Link>{' '}
                by Danilo Sousa
              </Text>
            </Flex>
          </Label>

          <Label>
            <Flex gap="2" align="center">
              <Checkbox tabIndex={-1} />
              <Text size="2">
                Review support request{' '}
                <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
                  #85
                </Link>
              </Text>
            </Flex>
          </Label>

          <Label>
            <Flex gap="2" align="center">
              <Checkbox tabIndex={-1} defaultChecked />
              <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
                Close Q2 finances
              </Text>
            </Flex>
          </Label>

          <Label>
            <Flex gap="2" align="center">
              <Checkbox tabIndex={-1} defaultChecked />
              <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
                Review invoice #3456
              </Text>
            </Flex>
          </Label>
        </Flex>
      </Card>

      <Card size="4">
        <Box height="7">
          <Heading size="6" mt="-1">
            Recent activity
          </Heading>
        </Box>

        <Flex gap="1" position="absolute" top="0" right="0" m="2">
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <OpenInNewWindowIcon width="20" height="20" />
          </IconButton>
          <IconButton tabIndex={-1} variant="subtle" color="gray" highContrast>
            <DrawingPinFilledIcon width="20" height="20" />
          </IconButton>
        </Flex>

        <Text size="2" mb="7" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[6].name}
                  </Text>
                  <Text size="2" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[8].name}
                  </Text>
                  <Text size="2" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[8].name}
                  </Text>
                  <Text size="2" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[28].name}
                  </Text>
                  <Text size="2" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[26].name}
                  </Text>
                  <Text size="2" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[25].name}
                  </Text>
                  <Text size="2" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[25].name}
                  </Text>
                  <Text size="2" color="gray">
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
                  <Text size="2" weight="bold">
                    {allPeople[20].name}
                  </Text>
                  <Text size="2" color="gray">
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
          <Heading size="6" mt="-1">
            Financial performance
          </Heading>
        </Box>

        <Flex gap="1" position="absolute" top="0" right="0" m="2">
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <OpenInNewWindowIcon width="20" height="20" />
          </IconButton>
          <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
            <DrawingPinIcon width="20" height="20" />
          </IconButton>
        </Flex>

        <Text size="2" mb="6" color="gray">
          Review your company’s KPIs compared to the month before.
        </Text>

        <Grid columns="3" gap="5">
          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                MRR
              </Text>
              <Badge color="teal">
                <ArrowUpIcon width="12" height="12" />
                3.2%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $350K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                OpEx
              </Text>
              <Badge color="red">
                <ArrowUpIcon width="12" height="12" />
                12.8%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $211K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                CapEx
              </Text>
              <Badge color="teal">
                <ArrowDownIcon width="12" height="12" />
                8.8%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $94K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                GPM
              </Text>
              <Badge color="red">
                <ArrowDownIcon width="12" height="12" />
                1.2%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              44.6%
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                NPM
              </Text>
              <Badge color="gray" variant="outline">
                0.0%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              9.1%
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                EBITDA
              </Text>
              <Badge color="teal">
                <ArrowUpIcon width="12" height="12" />
                4.1%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $443K
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                CAC
              </Text>
              <Badge color="teal">
                <ArrowDownIcon width="12" height="12" />
                11.0%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $146
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                LTV
              </Text>
              <Badge color="teal">
                <ArrowUpIcon width="12" height="12" />
                3%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              $1,849
            </Text>
          </Box>

          <Box>
            <Flex gap="2" mb="2" align="center">
              <Text size="2" color="gray">
                Churn
              </Text>
              <Badge color="red">
                <ArrowUpIcon width="12" height="12" />
                1.1%
              </Badge>
            </Flex>
            <Text mb="2" size="8" weight="bold">
              12.4%
            </Text>
          </Box>
        </Grid>
      </Card>
    </Flex>
  </Flex>
);

const Marker = (props: React.ComponentPropsWithoutRef<typeof Flex>) => (
  <Flex
    align="center"
    justify="center"
    width="4"
    height="4"
    {...props}
    style={{
      color: 'var(--teal-11)',
      backgroundColor: 'var(--teal-4)',
      borderRadius: '100%',
      ...props.style,
    }}
  />
);
