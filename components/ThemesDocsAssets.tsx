import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Code,
  Flex,
  Grid,
  Heading,
  IconButton,
  Inset,
  Link,
  ScrollArea,
  Slider,
  Strong,
  Table,
  Text,
  TextArea,
  TextField,
  TextFieldInput,
  Theme,
} from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import { allPeople } from './people';
import { CheckIcon } from '@radix-ui/react-icons';
import { Marker } from './Marker';
import * as React from 'react';
import { ThemesPanelBackgroundImage } from './ThemesPanelBackgroundImage';

export function ThemesPanelTranslucentExample() {
  return (
    <Card>
      <Inset>
        <Theme panelBackground="translucent" asChild>
          <Flex direction="column">
            <Flex justify="center" position="relative" px="5" py={{ initial: '5', sm: '8' }}>
              <Flex
                align="center"
                justify="center"
                position="absolute"
                inset="0"
                style={{ overflow: 'hidden' }}
              >
                <ThemesPanelBackgroundImage
                  id="1"
                  width="900"
                  height="200%"
                  style={{ opacity: 0.5 }}
                />
              </Flex>

              <Card size="4" style={{ width: 400 }}>
                <Box height="7" mb="4">
                  <Heading as="h3" size="6" mt="-1">
                    Sign up
                  </Heading>
                </Box>

                <Box mb="5">
                  <label>
                    <Text as="div" size="2" weight="bold" mb="2">
                      Email address
                    </Text>
                    <TextFieldInput placeholder="Enter your email" />
                  </label>
                </Box>

                <Box mb="5" position="relative">
                  <Box position="absolute" top="0" right="0" style={{ marginTop: -2 }}>
                    <Link href="#card" size="2">
                      Forgot password?
                    </Link>
                  </Box>

                  <label>
                    <Text as="div" size="2" weight="bold" mb="2">
                      Password
                    </Text>
                    <TextFieldInput placeholder="Enter your password" />
                  </label>
                </Box>

                <Flex mt="6" justify="end" gap="3">
                  <Button variant="soft">Create account</Button>
                  <Button>Sign in</Button>
                </Flex>
              </Card>
            </Flex>
          </Flex>
        </Theme>
      </Inset>
    </Card>
  );
}

export function ThemesPanelSolidExample() {
  return (
    <Card>
      <Inset>
        <Theme panelBackground="solid" asChild>
          <Flex justify="center" position="relative" px="5" py={{ initial: '5', sm: '8' }}>
            <Flex
              align="center"
              justify="center"
              position="absolute"
              inset="0"
              style={{ overflow: 'hidden' }}
            >
              <ThemesPanelBackgroundImage
                id="2"
                width="1700"
                height="300%"
                style={{ opacity: 0.5 }}
              />
            </Flex>

            <Table.Root variant="surface" size="2">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                  <Table.Cell>danilo@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                  <Table.Cell>zahra@example.com</Table.Cell>
                  <Table.Cell>Admin</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                  <Table.Cell>jasper@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Flex>
        </Theme>
      </Inset>
    </Card>
  );
}

export function ThemesVariantsExample() {
  return (
    <>
      <Box my="5">
        <Grid columns={{ initial: '1', sm: '2' }} gap="6" align="stretch">
          <Theme
            appearance="dark"
            radius="large"
            hasBackground={false}
            className="radix-themes-default-fonts"
            asChild
            accentColor="teal"
            panelBackground="solid"
          >
            <Card size="4">
              <Flex align="center" justify="center" height="100%">
                <Box>
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
                    You paid $17,975.30. A receipt copy was sent to <Strong>acc@example.com</Strong>
                  </Text>

                  <Flex direction="column" gap="3" align="stretch">
                    <Button radius="full">Next invoice</Button>

                    <Button radius="full" variant="outline">
                      Done
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Theme>

          <Theme
            appearance="light"
            radius="medium"
            hasBackground={false}
            className="radix-themes-default-fonts"
            accentColor="crimson"
            panelBackground="solid"
          >
            <Card size="3">
              <Box height="4" mb="5">
                <Flex align="center" justify="between">
                  <Heading as="h3" size="4" trim="both">
                    Your profile
                  </Heading>
                </Flex>
              </Box>

              <Flex direction="column" gap="4">
                <Flex asChild direction="column" gap="2">
                  <Label>
                    <Text size="2" weight="bold">
                      Name
                    </Text>
                    <TextField.Input variant="surface" defaultValue="Emily Adams" />
                  </Label>
                </Flex>

                <Flex asChild direction="column" gap="2">
                  <Label>
                    <Text size="2" weight="bold">
                      Username
                    </Text>
                    <TextField.Input variant="surface" defaultValue="@emilyadams" />
                  </Label>
                </Flex>

                <Flex asChild direction="column" gap="2">
                  <Label>
                    <Text size="2" weight="bold">
                      Email
                    </Text>
                    <TextField.Input variant="surface" defaultValue="emily@example.com" />
                  </Label>
                </Flex>

                <Flex direction="column" gap="2">
                  <Text size="2" weight="bold">
                    Privacy
                  </Text>
                  <Flex direction="column" gap="2">
                    <Flex asChild gap="2">
                      <Label>
                        <Checkbox variant="surface" defaultChecked />
                        <Text size="2">Display my listening history</Text>
                      </Label>
                    </Flex>

                    <Flex asChild gap="2">
                      <Label>
                        <Checkbox variant="surface" />
                        <Text size="2">Everyone can follow my activity</Text>
                      </Label>
                    </Flex>

                    <Flex asChild gap="2">
                      <Label>
                        <Checkbox variant="surface" defaultChecked />
                        <Text size="2">Show my playlists in search</Text>
                      </Label>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="2">
                  <Text size="2" weight="bold">
                    Danger zone
                  </Text>
                  <Flex align="start" direction="column" gap="2">
                    <Link size="2">Reset recommendations</Link>
                    <Link size="2">Delete profile</Link>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </Theme>
        </Grid>
      </Box>
    </>
  );
}

export function ThemesScalingExample() {
  const scaleValues = ['90%', '95%', '100%', '105%', '110%'] as const;
  const person = allPeople[6];
  return (
    <PropValueExampleCard>
      {scaleValues.map((scaling, i) => (
        <PropValueExampleCardRow
          value={scaling}
          bordered={i + 1 !== scaleValues.length}
          key={scaling}
        >
          <Theme scaling={scaling} style={{ flex: 1, maxWidth: 240 + 20 * i }}>
            <Card variant="surface" aria-label={`${scaling} scaled UI example`}>
              <Flex gap="3" align="center" aria-hidden>
                <Avatar size="3" src={person.image} fallback={person?.name[0].toUpperCase()} />
                <Box>
                  <Text as="div" size="2" weight="bold">
                    {person.name}
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Approved invoice <Link>#3461</Link>
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Theme>
        </PropValueExampleCardRow>
      ))}
    </PropValueExampleCard>
  );
}

export function ThemesRadiusExample() {
  const radiusValues = ['none', 'medium', 'full'] as const;
  return (
    <PropValueExampleCard>
      {radiusValues.map((radius, i) => (
        <PropValueExampleCardRow
          value={radius}
          bordered={i + 1 !== radiusValues.length}
          key={radius}
        >
          <Theme radius={radius}>
            <Card variant="surface" size="2" style={{ maxWidth: 480 }}>
              <Flex gap="3">
                <Avatar
                  size="3"
                  src={allPeople[4].image}
                  fallback={allPeople[22]?.name[0].toUpperCase()}
                />
                <Box grow="1">
                  <TextArea placeholder="Reply…" />
                  <Flex gap="6" mt="3" justify="between">
                    <Flex asChild align="center" gap="2">
                      <Label>
                        <Checkbox checked />
                        <Text size="2">Send to group</Text>
                      </Label>
                    </Flex>
                    <Button>Send message</Button>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Theme>
        </PropValueExampleCardRow>
      ))}
    </PropValueExampleCard>
  );
}

function PropValueExampleCard({ children }: { children: React.ReactNode }) {
  return (
    <Card size="2">
      <Inset side="all">
        <ScrollArea>{children}</ScrollArea>
      </Inset>
    </Card>
  );
}

function PropValueExampleCardRow({
  children,
  value,
  bordered,
}: {
  children: React.ReactNode;
  value: string;
  bordered: boolean;
}) {
  return (
    <Flex
      style={{
        borderBottom: bordered ? '1px dashed var(--gray-6)' : undefined,
      }}
      align="center"
      gap="4"
      px="5"
      py="4"
    >
      <Box style={{ minWidth: 60 }}>
        <Code size="2" color="gray">
          {value}
        </Code>
      </Box>

      <Box grow="1" style={{ minWidth: 'max-content' }}>
        {children}
      </Box>
    </Flex>
  );
}

export function ThemesShadowScale() {
  return (
    <Flex direction="column" gap="3" mt="6" mb="5">
      <Flex
        style={{ flex: 1, backgroundColor: 'var(--gray-4)', borderRadius: 'var(--radius-3)' }}
        p="5"
        gap="4"
      >
        {[...new Array(6)].map((_, i) => (
          <Flex grow="1" align="center" justify="center" key={i}>
            <Box
              grow="1"
              style={{
                backgroundColor: 'var(--gray-1)',
                boxShadow: `var(--shadow-${i + 1})`,
                borderRadius: 'var(--radius-2)',
              }}
              height="8"
              key={i}
            />
          </Flex>
        ))}
      </Flex>

      <Flex align="center" gap="1" px="4">
        {[...new Array(6)].map((_, i) => (
          <Flex align="center" justify="center" height="100%" width="100%" key={i}>
            <Text size="1" color="gray">
              {i + 1}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export function SwatchRow({ name }: { name: string }) {
  return (
    <Grid columns="12" gap="1">
      {[...new Array(12)].map((_, i) => (
        <Box
          height="6"
          style={{
            backgroundColor: `var(--${name}-${i + 1})`,
            borderRadius: 'var(--radius-2)',
          }}
          key={i}
        />
      ))}
    </Grid>
  );
}

export function ThemesColorScale({ type = 'accent' }: { type: 'accent' | 'gray' }) {
  return (
    <Flex direction="column" gap="3" mt="6" mb="5">
      <Flex align="center" gap="1">
        {[...new Array(12)].map((_, i) => (
          <Flex grow="1" direction="column" height="9" gap="1" key={i}>
            <Box
              grow="1"
              style={{
                backgroundColor: `var(--${type}-${i + 1})`,
                borderRadius: 'var(--radius-2)',
              }}
            />

            <Box
              grow="1"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, var(--gray-2) 25%, transparent 25%), linear-gradient(135deg, var(--gray-2) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--gray-2) 75%), linear-gradient(135deg, transparent 75%, var(--gray-2) 75%)',
                backgroundSize: '12px 12px',
                backgroundPosition: '0px 0px, 6px 0px, 6px -6px, 0px 6px',
                borderRadius: 'var(--radius-2)',
                overflow: 'hidden',
              }}
            >
              <Box
                width="100%"
                height="100%"
                style={{ backgroundColor: `var(--${type}-a${i + 1})` }}
              />
            </Box>
          </Flex>
        ))}
      </Flex>

      <Flex align="center" gap="1">
        {[...new Array(12)].map((_, i) => (
          <Flex align="center" justify="center" height="100%" width="100%" key={i}>
            <Text size="1" color="gray">
              {i + 1}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export function ThemesSpacingScale() {
  return (
    <Flex align="end" gap="1">
      {[...new Array(9)].map((_, i) => (
        <Flex direction="column" grow="1" key={i} align="center" gap="4">
          <DecorativeBox style={{ width: '100%', height: `var(--space-${i + 1})` }} />

          <Text size="1" color="gray">
            {i + 1}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export function ThemesFontSizeScale() {
  return (
    <Box pb="6">
      <Flex align="stretch" style={{ borderBottom: '1px dashed var(--gray-a6)' }}>
        {[...new Array(9)].map((_, i) => (
          <Flex
            direction="column"
            grow="1"
            key={i}
            justify="end"
            align="center"
            position="relative"
          >
            <Text weight="bold" style={{ fontSize: `var(--font-size-${i + 1})` }} trim="both">
              Aa
            </Text>

            <Flex position="absolute" style={{ top: 'calc(100% + var(--space-4))' }}>
              <Text size="1" color="gray">
                {i + 1}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export function ThemesAccentSwatches() {
  return (
    <Flex direction="column" gap="5" my="6">
      <Grid columns={{ initial: '3', xs: '4', sm: '6' }} gap="2">
        {([
          'tomato',
          'red',
          'crimson',
          'pink',
          'plum',
          'purple',
          'violet',
          'indigo',
          'blue',
          'cyan',
          'teal',
          'green',
          'grass',
          'brown',
          'orange',
          'gold',
          'bronze',
          'gray',
        ] as const).map((color, i) => (
          <Box grow="1" key={i}>
            <Theme accentColor={color} hasBackground={false} asChild>
              <Flex
                align="center"
                justify="center"
                gap="2"
                style={{ backgroundColor: `var(--accent-9)`, borderRadius: 'var(--radius-2)' }}
                height="6"
              >
                <Text as="div" size="1" weight="bold" style={{ color: 'var(--accent-9-contrast)' }}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Text>
              </Flex>
            </Theme>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export function ThemesBrightAccentSwatches() {
  return (
    <Flex direction="column" gap="5" my="6">
      <Grid columns={{ initial: '3', xs: '4', sm: '6' }} gap="2">
        {(['sky', 'mint', 'lime', 'yellow', 'amber'] as const).map((color, i) => (
          <Box grow="1" key={i}>
            <Theme accentColor={color} hasBackground={false} asChild>
              <Flex
                align="center"
                justify="center"
                gap="2"
                style={{ backgroundColor: `var(--accent-9)`, borderRadius: 'var(--radius-2)' }}
                height="6"
              >
                <Text as="div" size="1" weight="bold" style={{ color: 'var(--accent-9-contrast)' }}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Text>
              </Flex>
            </Theme>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export function ThemeGraySwatches() {
  return (
    <Flex direction="column" gap="5" my="6">
      <Grid columns={{ initial: '3', xs: '4', sm: '6' }} gap="2">
        {(['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const).map((color, i) => (
          <Box grow="1" key={i}>
            <Theme grayColor={color} asChild>
              <Flex
                align="center"
                justify="center"
                gap="2"
                style={{ backgroundColor: `var(--gray-9)`, borderRadius: 'var(--radius-2)' }}
                px="2"
                py="2"
              >
                <Text as="div" size="1" weight="bold" style={{ color: 'var(--accent-9-contrast)' }}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Text>
              </Flex>
            </Theme>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export function ThemesVolumeControlExample() {
  return (
    <Flex
      justify="center"
      style={{
        backgroundColor: 'var(--gray-2)',
        borderRadius: 'var(--radius-1)',
        border: '1px solid var(--gray-4)',
        minWidth: 350,
      }}
      p={{ initial: '5', sm: '6' }}
    >
      <Card size="3" style={{ maxWidth: 460, width: '100%' }} variant="classic">
        <Flex direction="column">
          <Box height="4" mb="6">
            <Flex align="center" justify="between">
              <Heading as="h3" size="4" trim="both">
                Sound
              </Heading>

              <Flex gap="4">
                <Text size="2" color="gray">
                  Yamaha THR
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Flex gap="2" align="center" height="4" mt="2" mb="5">
            <VolumeNoneIcon color="var(--gray-a9)" />
            <Box grow="1">
              <Slider defaultValue={[80]} />
            </Box>
            <VolumeMaxIcon color="var(--gray-a9)" />
          </Flex>

          <Grid columns={{ initial: '2', xs: '4' }} pt="2" pb="1" gapY="5">
            <Flex direction="column" gap="2" align="center" asChild>
              <Label>
                <IconButton variant="soft" color="gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M 21 4 C 20.448 4 20 4.448 20 5 L 20 25 C 20 25.552 20.448 26 21 26 L 25 26 C 25.552 26 26 25.552 26 25 L 26 5 C 26 4.448 25.552 4 25 4 L 21 4 z M 13 10 C 12.448 10 12 10.448 12 11 L 12 25 C 12 25.552 12.448 26 13 26 L 17 26 C 17.552 26 18 25.552 18 25 L 18 11 C 18 10.448 17.552 10 17 10 L 13 10 z M 5 16 C 4.448 16 4 16.448 4 17 L 4 25 C 4 25.552 4.448 26 5 26 L 9 26 C 9.552 26 10 25.552 10 25 L 10 17 C 10 16.448 9.552 16 9 16 L 5 16 z" />
                  </svg>
                </IconButton>
                <Flex direction="column">
                  <Text align="center" weight="bold" size="2">
                    Normalize
                  </Text>
                  <Text align="center" color="gray" size="1">
                    On
                  </Text>
                </Flex>
              </Label>
            </Flex>

            <Flex direction="column" gap="2" align="center" asChild>
              <Label>
                <IconButton variant="solid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M 22 4 A 1.0001 1.0001 0 1 0 22 6 L 28 6 A 1.0001 1.0001 0 1 0 28 4 L 22 4 z M 2 8 A 1.0001 1.0001 0 1 0 2 10 L 8 10 A 1.0001 1.0001 0 1 0 8 8 L 2 8 z M 22 8 A 1.0001 1.0001 0 1 0 22 10 L 28 10 A 1.0001 1.0001 0 1 0 28 8 L 22 8 z M 2 12 A 1.0001 1.0001 0 1 0 2 14 L 8 14 A 1.0001 1.0001 0 1 0 8 12 L 2 12 z M 22 12 A 1.0001 1.0001 0 1 0 22 14 L 28 14 A 1.0001 1.0001 0 1 0 28 12 L 22 12 z M 2 16 A 1.0001 1.0001 0 1 0 2 18 L 8 18 A 1.0001 1.0001 0 1 0 8 16 L 2 16 z M 12 16 A 1.0001 1.0001 0 1 0 12 18 L 18 18 A 1.0001 1.0001 0 1 0 18 16 L 12 16 z M 22 16 A 1.0001 1.0001 0 1 0 22 18 L 28 18 A 1.0001 1.0001 0 1 0 28 16 L 22 16 z M 2 20 A 1.0001 1.0001 0 1 0 2 22 L 8 22 A 1.0001 1.0001 0 1 0 8 20 L 2 20 z M 12 20 A 1.0001 1.0001 0 1 0 12 22 L 18 22 A 1.0001 1.0001 0 1 0 18 20 L 12 20 z M 22 20 A 1.0001 1.0001 0 1 0 22 22 L 28 22 A 1.0001 1.0001 0 1 0 28 20 L 22 20 z M 2 24 A 1.0001 1.0001 0 1 0 2 26 L 8 26 A 1.0001 1.0001 0 1 0 8 24 L 2 24 z M 12 24 A 1.0001 1.0001 0 1 0 12 26 L 18 26 A 1.0001 1.0001 0 1 0 18 24 L 12 24 z M 22 24 A 1.0001 1.0001 0 1 0 22 26 L 28 26 A 1.0001 1.0001 0 1 0 28 24 L 22 24 z" />
                  </svg>
                </IconButton>
                <Flex direction="column">
                  <Text align="center" weight="bold" size="2">
                    Equalizer
                  </Text>
                  <Text align="center" color="gray" size="1">
                    On
                  </Text>
                </Flex>
              </Label>
            </Flex>

            <Flex direction="column" gap="2" align="center" asChild>
              <Label>
                <IconButton variant="soft" color="gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M 15 3 C 14.501862 3 14.004329 3.1237904 13.554688 3.3710938 L 4.7773438 8.1992188 C 4.2990638 8.4622726 4 8.9690345 4 9.5136719 L 4 10.128906 L 4 20.048828 C 4 20.573313 4.2799803 21.064852 4.7265625 21.333984 A 1.0001 1.0001 0 0 0 4.7285156 21.335938 L 13.457031 26.572266 C 14.405619 27.141718 15.594381 27.141718 16.542969 26.572266 L 25.269531 21.337891 L 25.271484 21.335938 C 25.723679 21.065216 26 20.572371 26 20.048828 L 26 9.5136719 C 26 8.9690345 25.700936 8.4622727 25.222656 8.1992188 L 16.445312 3.3710938 C 15.99567 3.1237903 15.498138 3 15 3 z M 15 5 C 15.166032 5 15.332064 5.0423034 15.482422 5.125 L 23.166016 9.3496094 L 19.755859 11.179688 L 20.701172 12.941406 L 24 11.171875 L 24 19.765625 L 16 24.566406 L 16 21 L 14 21 L 14 24.566406 L 6 19.765625 L 6 11.171875 L 9.2988281 12.941406 L 10.244141 11.179688 L 6.8339844 9.3496094 L 14.517578 5.125 C 14.667936 5.0423034 14.833968 5 15 5 z M 15 11 A 4 4 0 0 0 15 19 A 4 4 0 0 0 15 11 z" />
                  </svg>
                </IconButton>
                <Flex direction="column">
                  <Text align="center" weight="bold" size="2">
                    3D Audio
                  </Text>
                  <Text align="center" color="gray" size="1">
                    Off
                  </Text>
                </Flex>
              </Label>
            </Flex>

            <Flex direction="column" gap="2" align="center" asChild>
              <Label>
                <IconButton variant="soft" color="gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="16"
                    height="16"
                    fill="currentcolor"
                  >
                    <path d="M 8.984375 3.9863281 A 1.0001 1.0001 0 0 0 8 5 L 8 16 A 1.0001 1.0001 0 1 0 10 16 L 10 5 A 1.0001 1.0001 0 0 0 8.984375 3.9863281 z M 4.984375 6.9863281 A 1.0001 1.0001 0 0 0 4 8 L 4 16 A 1.0001 1.0001 0 1 0 6 16 L 6 8 A 1.0001 1.0001 0 0 0 4.984375 6.9863281 z M 12.984375 9.9863281 A 1.0001 1.0001 0 0 0 12 11 L 12 16 A 1.0001 1.0001 0 1 0 14 16 L 14 11 A 1.0001 1.0001 0 0 0 12.984375 9.9863281 z M 0.984375 11.986328 A 1.0001 1.0001 0 0 0 0 13 L 0 16 A 1.0001 1.0001 0 1 0 2 16 L 2 13 A 1.0001 1.0001 0 0 0 0.984375 11.986328 z M 16.984375 14.986328 A 1.0001 1.0001 0 0 0 16 16 L 16 21 A 1.0001 1.0001 0 1 0 18 21 L 18 16 A 1.0001 1.0001 0 0 0 16.984375 14.986328 z M 20.984375 14.986328 A 1.0001 1.0001 0 0 0 20 16 L 20 26 A 1.0001 1.0001 0 1 0 22 26 L 22 16 A 1.0001 1.0001 0 0 0 20.984375 14.986328 z M 24.984375 14.986328 A 1.0001 1.0001 0 0 0 24 16 L 24 23 A 1.0001 1.0001 0 1 0 26 23 L 26 16 A 1.0001 1.0001 0 0 0 24.984375 14.986328 z M 28.984375 14.986328 A 1.0001 1.0001 0 0 0 28 16 L 28 19 A 1.0001 1.0001 0 1 0 30 19 L 30 16 A 1.0001 1.0001 0 0 0 28.984375 14.986328 z" />
                  </svg>
                </IconButton>
                <Flex direction="column">
                  <Text align="center" weight="bold" size="2">
                    Cross-Fade
                  </Text>
                  <Text align="center" color="gray" size="1">
                    Off
                  </Text>
                </Flex>
              </Label>
            </Flex>
          </Grid>
        </Flex>
      </Card>
    </Flex>
  );
}

const VolumeNoneIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="currentcolor"
    fillOpacity={0.7}
    {...props}
  >
    <path d="M16.3333 4.66669L13.5286 7.33335H11C9.89533 7.33335 9 8.22869 9 9.33335V10.6667C9 11.7714 9.89533 12.6667 11 12.6667H13.5286L16.3333 15.3334V4.66669Z" />
  </svg>
);

const VolumeMaxIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="20"
    height="20"
    fill="currentcolor"
    fillOpacity={0.7}
    {...props}
  >
    <path d="M 20.037109 5.6464844 A 1.0001 1.0001 0 0 0 19.236328 7.2734375 C 20.963426 9.4832305 22 12.243759 22 15.255859 C 22 18.055119 21.105815 20.636923 19.59375 22.763672 A 1.0001 1.0001 0 1 0 21.222656 23.921875 C 22.962591 21.474623 24 18.4826 24 15.255859 C 24 11.78396 22.799402 8.5851757 20.8125 6.0429688 A 1.0001 1.0001 0 0 0 20.037109 5.6464844 z M 11 7 L 6.7929688 11 L 3 11 C 1.343 11 0 12.343 0 14 L 0 16 C 0 17.657 1.343 19 3 19 L 6.7929688 19 L 11 23 L 11 7 z M 14.738281 8.5917969 A 1.0001 1.0001 0 0 0 14.001953 10.291016 C 15.239451 11.587484 16 13.328154 16 15.255859 C 16 16.979025 15.392559 18.553804 14.380859 19.796875 A 1.0001 1.0001 0 1 0 15.931641 21.058594 C 17.219941 19.475665 18 17.450694 18 15.255859 C 18 12.799565 17.023721 10.559688 15.449219 8.9101562 A 1.0001 1.0001 0 0 0 14.738281 8.5917969 z" />
  </svg>
);

export function DecorativeBox(props) {
  return (
    <Box
      {...props}
      style={{
        height: '100%',
        backgroundColor: 'var(--gray-a3)',
        border: '1px solid var(--gray-a7)',
        borderRadius: 'var(--radius-1)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        ...props.style,
      }}
    />
  );
}

export function ThemesDarkModeExample() {
  return (
    <Card>
      <Inset side="all">
        <Grid columns={{ initial: '1', sm: '2' }}>
          <Theme asChild appearance="light" style={{ backgroundColor: 'var(--gray-1)' }}>
            <Box p={{ initial: '4', sm: '5' }}>
              <AlbumCard />
            </Box>
          </Theme>

          <Theme asChild appearance="dark" style={{ backgroundColor: 'var(--gray-1)' }}>
            <Box p="5">
              <AlbumCard />
            </Box>
          </Theme>
        </Grid>
      </Inset>
    </Card>
  );
}

function AlbumCard() {
  return (
    <Card size={{ initial: '3', sm: '3' }}>
      <Box py="5">
        <Flex mb="4" justify="center" position="relative">
          <img
            width="100"
            height="100"
            src="https://workos.imgix.net/images/e35b46dc-4384-43d1-932c-24fa44e212cd.png?auto=format&fit=clip&q=80"
            style={{
              borderRadius: 'var(--radius-3)',
              boxShadow: '0 8px 80px -24px hsl(205, 100%, 50%)',
            }}
          />
        </Flex>

        <Box mt="5">
          <Theme asChild accentColor="crimson">
            <Flex mb="4" align="center" justify="center">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="20"
                  height="20"
                  fill="currentcolor"
                  color="var(--accent-9)"
                >
                  <path d="M15.765,2.434l2.875,8.512l8.983,0.104c0.773,0.009,1.093,0.994,0.473,1.455l-7.207,5.364l2.677,8.576 c0.23,0.738-0.607,1.346-1.238,0.899L15,22.147l-7.329,5.196c-0.63,0.447-1.468-0.162-1.238-0.899l2.677-8.576l-7.207-5.364 c-0.62-0.461-0.3-1.446,0.473-1.455l8.983-0.104l2.875-8.512C14.482,1.701,15.518,1.701,15.765,2.434z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                width="20"
                height="20"
                fill="currentcolor"
                color="var(--accent-9)"
              >
                <path d="M29.887 3.926A2 2 0 0 0 28.078 5.3l-5.41 16.535-17.395.035a2 2 0 0 0-1.175 3.613l14.054 10.254-5.343 16.559a2 2 0 0 0 3.074 2.234l14.094-10.199 14.097 10.2a2 2 0 0 0 3.075-2.235l-5.344-16.559 14.054-10.254a2 2 0 0 0-1.175-3.613l-17.399-.035L31.88 5.301a2 2 0 0 0-1.992-1.375Zm.09 8.433 3.957 12.098a2 2 0 0 0 1.898 1.379l12.727.023-10.282 7.5a2 2 0 0 0-.722 2.23l3.91 12.118-10.317-7.465a2 2 0 0 0-2.343 0l-10.309 7.461 3.906-12.113a2 2 0 0 0-.722-2.23l-10.281-7.5 12.726-.024a2.001 2.001 0 0 0 1.895-1.379l3.957-12.098Z" />
                <path d="M29.887 3.926A2 2 0 0 0 28.078 5.3l-5.41 16.535-17.395.035a2 2 0 0 0-1.175 3.613l14.054 10.254-5.343 16.559a2 2 0 0 0 3.074 2.234l14.094-10.199 14.097 10.2a2 2 0 0 0 3.075-2.235l-5.344-16.559 14.054-10.254a2 2 0 0 0-1.175-3.613l-17.399-.035L31.88 5.301a2 2 0 0 0-1.992-1.375Zm.09 8.433 3.957 12.098a2 2 0 0 0 1.898 1.379l12.727.023-10.282 7.5a2 2 0 0 0-.722 2.23l3.91 12.118-10.317-7.465a2 2 0 0 0-2.343 0l-10.309 7.461 3.906-12.113a2 2 0 0 0-.722-2.23l-10.281-7.5 12.726-.024a2.001 2.001 0 0 0 1.895-1.379l3.957-12.098Z" />
                <path d="M28.805 40.242a2 2 0 0 1 1.172-.379V12.359L26.02 24.457a2 2 0 0 1-1.895 1.379l-12.726.023 10.28 7.5a2 2 0 0 1 .723 2.23l-3.906 12.114 10.309-7.46Z" />
              </svg>
            </Flex>
          </Theme>

          <Heading align="center" as="h3" size="4" mb="2">
            King Krule – The OOZ
          </Heading>

          <Text align="center" as="p" color="gray" size="2" mb="4">
            A dark and introspective album that showcases a distinctive blend of genres.
          </Text>

          <Flex justify="center" gap="3">
            <Button>Listen Now</Button>
            <IconButton variant="soft">
              <HeartIcon />
            </IconButton>
          </Flex>
        </Box>
      </Box>
    </Card>
  );
}

const HeartIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="20"
    height="20"
    fill="currentcolor"
    {...props}
  >
    <path d="M 9.5449219 3 C 5.3895807 3 2 6.3895806 2 10.544922 C 2 14.283156 4.9005496 18.084723 7.6601562 21.119141 C 10.419763 24.153558 13.171875 26.369141 13.171875 26.369141 A 1.0001 1.0001 0 0 0 13.197266 26.388672 C 13.642797 26.725148 14.201794 26.943857 14.808594 26.984375 A 1.0001 1.0001 0 0 0 15 27 A 1.0001 1.0001 0 0 0 15.189453 26.984375 A 1.0001 1.0001 0 0 0 15.199219 26.982422 C 15.802918 26.940449 16.359155 26.723674 16.802734 26.388672 A 1.0001 1.0001 0 0 0 16.828125 26.369141 C 16.828125 26.369141 19.580237 24.153558 22.339844 21.119141 C 25.099451 18.084722 28 14.283156 28 10.544922 C 28 6.3895806 24.610419 3 20.455078 3 C 17.841043 3 15.989939 4.4385487 15 5.4570312 C 14.010061 4.4385487 12.158957 3 9.5449219 3 z M 9.5449219 5 C 12.276127 5 13.937826 7.2424468 14.103516 7.4746094 A 1.0001 1.0001 0 0 0 14.994141 8.0136719 A 1.0001 1.0001 0 0 0 15.017578 8.0136719 A 1.0001 1.0001 0 0 0 15.041016 8.0117188 A 1.0001 1.0001 0 0 0 15.117188 8.0058594 A 1.0001 1.0001 0 0 0 15.892578 7.4785156 C 16.049938 7.2575052 17.716133 5 20.455078 5 C 23.529737 5 26 7.4702629 26 10.544922 C 26 13.147688 23.499768 16.870104 20.859375 19.773438 C 18.227966 22.666891 15.607768 24.780451 15.589844 24.794922 C 15.414236 24.925626 15.219097 25 15 25 C 14.780903 25 14.585764 24.92563 14.410156 24.794922 C 14.392236 24.780452 11.772034 22.666891 9.140625 19.773438 C 6.5002316 16.870105 4 13.147688 4 10.544922 C 4 7.4702629 6.470263 5 9.5449219 5 z" />
  </svg>
);
