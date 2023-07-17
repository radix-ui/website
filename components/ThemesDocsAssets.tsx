import { AccessibleIcon, Box, Code, Flex, Grid, IconButton, Popover, Text } from '@radix-ui/themes';
import { RegionTable } from './RegionTable';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export function ThemesBorderRadiusTable() {
  return (
    <Flex gap="4" mt="6" mb="5">
      {[...new Array(6)].map((_, i) => (
        <Flex direction="column" key={i} grow="1" align="center" gap="3">
          <Box height="8" width="100%">
            <DecorativeBox style={{ borderRadius: `var(--radius-${i + 1})` }} />
          </Box>

          <Text size="1" color="gray">
            {i + 1}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export function ThemesShadowTable() {
  return (
    <Flex direction="column" gap="3" mt="6" mb="5">
      <Flex
        style={{ flex: 1, backgroundColor: 'var(--gray-4)', borderRadius: 'var(--radius-3)' }}
        p="5"
        gap="4"
      >
        {[...new Array(5)].map((_, i) => (
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
        {[...new Array(5)].map((_, i) => (
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

export function ThemesColorTable({ type = 'accent' }: { type: 'accent' | 'gray' }) {
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
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Crect width='12' height='12' fill='%23002F75' fill-opacity='0.02'/%3E%3Crect x='12' y='12' width='12' height='12' fill='%23002F75' fill-opacity='0.02'/%3E%3C/svg%3E")`,
                backgroundColor: `var(--${type}-a${i + 1})`,
                borderRadius: 'var(--radius-2)',
              }}
            />
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

export function ThemesSpacingTable() {
  return (
    <Flex align="end" gap="1" mt="7" mb="5">
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

export function ThemesFontSizeTable() {
  return (
    <Box pb="6" mt="6" mb="5">
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

export function ThemesAdditionalColors() {
  return (
    <Flex direction="column" gap="5" mt="6" mb="7">
      <Grid columns={{ initial: '3', xs: '4', sm: '7' }} gap="2">
        {([
          'tomato',
          'red',
          'crimson',
          'pink',
          'plum',
          'purple',
          'violet',
          'blue',
          'cyan',
          'teal',
          'green',
          'grass',
          'brown',
          'orange',
          'sky',
          'mint',
          'lime',
          'yellow',
          'amber',
          'gold',
          'bronze',
        ] as const).map((color, i) => (
          <Box grow="1" key={i}>
            <Flex
              align="center"
              gap="2"
              style={{ backgroundColor: `var(--${color}-3)`, borderRadius: 'var(--radius-2)' }}
              px="2"
              py="1"
            >
              <Box
                width="2"
                height="2"
                style={{ backgroundColor: `var(--${color}-9)`, borderRadius: '100%' }}
              />
              <Text size="1" weight="bold" color={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>

      <Grid columns={{ initial: '3', xs: '4', sm: '7' }} gap="3">
        {['mauve', 'slate', 'sage', 'olive', 'sand'].map((color, i) => (
          <Box grow="1" key={i}>
            <Flex
              align="center"
              gap="2"
              style={{ backgroundColor: `var(--${color}-3)`, borderRadius: 'var(--radius-2)' }}
              px="2"
              py="1"
            >
              <Box
                width="2"
                height="2"
                style={{ backgroundColor: `var(--${color}-9)`, borderRadius: '100%' }}
              />
              <Text size="1" weight="bold" style={{ color: `var(--${color}-11)` }}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export function ThemesFontSizingTable({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  data: {
    step: React.ReactNode;
    fontSize: React.ReactNode;
    lineHeight: React.ReactNode;
    letterSpacing: React.ReactNode;
  }[];
  'aria-label'?: string;
  'aria-labelledby'?: string;
}) {
  const hasAriaLabel = !!(ariaLabel || ariaLabelledBy);
  return (
    <RegionTable
      style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}
      aria-label={hasAriaLabel ? ariaLabel : 'Keyboard Interactions'}
      aria-labelledby={ariaLabelledBy}
    >
      <thead>
        <tr>
          <Box
            asChild
            py="3"
            pr="4"
            style={{
              width: '35%',
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text as="p" size="2" color="gray">
                Step
              </Text>
            </th>
          </Box>
          <Box
            asChild
            py="3"
            pr="4"
            style={{
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text as="p" size="2" color="gray">
                Font size
              </Text>
            </th>
          </Box>

          <Box
            asChild
            py="3"
            pr="4"
            style={{
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text as="p" size="2" color="gray">
                Line height
              </Text>
            </th>
          </Box>

          <Box
            asChild
            py="3"
            pr="4"
            style={{
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text as="p" size="2" color="gray">
                Letter spacing
              </Text>
            </th>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ step, fontSize, lineHeight, letterSpacing }, i) => (
          <tr key={i}>
            <Box
              asChild
              pr="4"
              py="3"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
                whiteSpace: 'nowrap',
              }}
            >
              <td>
                <Text as="p" size="2">
                  {step}
                </Text>
              </td>
            </Box>

            <Box
              asChild
              py="3"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
                whiteSpace: 'nowrap',
              }}
            >
              <td>
                <Code color="gray" size="2">
                  {fontSize}
                </Code>
              </td>
            </Box>

            <Box
              asChild
              py="3"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
                whiteSpace: 'nowrap',
              }}
            >
              <td>
                <Code color="gray" size="2">
                  {lineHeight}
                </Code>
              </td>
            </Box>

            <Box
              asChild
              py="3"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
                whiteSpace: 'nowrap',
              }}
            >
              <td>
                <Code color="gray" size="2">
                  {letterSpacing}
                </Code>
              </td>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}

export function ThemesTokensDescriptionTable({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  data: {
    token: React.ReactNode;
    description: React.ReactNode;
  }[];
  'aria-label'?: string;
  'aria-labelledby'?: string;
}) {
  const hasAriaLabel = !!(ariaLabel || ariaLabelledBy);
  return (
    <Box mb="5">
      <RegionTable
        style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}
        aria-label={hasAriaLabel ? ariaLabel : 'Keyboard Interactions'}
        aria-labelledby={ariaLabelledBy}
      >
        <thead>
          <tr>
            <Box
              asChild
              py="3"
              pr="4"
              style={{
                width: '35%',
                borderBottom: '1px solid var(--gray-a6)',
              }}
            >
              <th>
                <Text as="p" size="2" color="gray">
                  Token
                </Text>
              </th>
            </Box>
            <Box
              asChild
              py="3"
              pr="4"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
              }}
            >
              <th>
                <Text as="p" size="2" color="gray">
                  Description
                </Text>
              </th>
            </Box>
          </tr>
        </thead>
        <tbody>
          {data.map(({ token, description }, i) => (
            <tr key={i}>
              <Box
                asChild
                pr="4"
                py="3"
                style={{
                  borderBottom: '1px solid var(--gray-a6)',
                  whiteSpace: 'nowrap',
                }}
              >
                <td>
                  <Code
                    size="2"
                    style={{
                      whiteSpace: 'normal',
                    }}
                  >
                    {token}
                  </Code>
                </td>
              </Box>

              <Box
                asChild
                py="3"
                style={{
                  borderBottom: '1px solid var(--gray-a6)',
                  whiteSpace: 'nowrap',
                }}
              >
                <td>
                  <Text as="p" size="2">
                    {description}
                  </Text>
                </td>
              </Box>
            </tr>
          ))}
        </tbody>
      </RegionTable>
    </Box>
  );
}

export function ThemesTokenValuesTable({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  data: {
    token: React.ReactNode;
    value: React.ReactNode;
    description?: React.ReactNode;
  }[];
  'aria-label'?: string;
  'aria-labelledby'?: string;
}) {
  const hasAriaLabel = !!(ariaLabel || ariaLabelledBy);
  return (
    <Box mt="2" mb="5">
      <RegionTable
        style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}
        aria-label={hasAriaLabel ? ariaLabel : 'Keyboard Interactions'}
        aria-labelledby={ariaLabelledBy}
      >
        <thead>
          <tr>
            <Box
              asChild
              py="3"
              pr="4"
              style={{
                width: '35%',
                borderBottom: '1px solid var(--gray-a6)',
              }}
            >
              <th>
                <Text as="p" size="2" color="gray">
                  Token
                </Text>
              </th>
            </Box>
            <Box
              asChild
              py="3"
              pr="4"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
              }}
            >
              <th>
                <Text as="p" size="2" color="gray">
                  Base value
                </Text>
              </th>
            </Box>
          </tr>
        </thead>
        <tbody>
          {data.map(({ token, value, description }, i) => (
            <tr key={i}>
              <Box
                asChild
                pr="4"
                py="3"
                style={{
                  borderBottom: '1px solid var(--gray-a6)',
                  whiteSpace: 'nowrap',
                }}
              >
                <td>
                  <Code
                    size="2"
                    style={{
                      whiteSpace: 'normal',
                    }}
                  >
                    {token}
                  </Code>

                  {description && (
                    <Popover.Root>
                      <Popover.Trigger>
                        <IconButton
                          variant="ghost"
                          size="1"
                          ml="2"
                          color="gray"
                          style={{ verticalAlign: 'middle' }}
                        >
                          <AccessibleIcon label="Prop description">
                            <InfoCircledIcon />
                          </AccessibleIcon>
                        </IconButton>
                      </Popover.Trigger>
                      <Popover.Content
                        side="top"
                        align="center"
                        style={{ maxWidth: 350 }}
                        onOpenAutoFocus={(event) => {
                          event.preventDefault();
                          (event.currentTarget as HTMLElement)?.focus();
                        }}
                      >
                        <Box p="3">
                          <Text as="p" size="2">
                            {description}
                          </Text>
                        </Box>
                      </Popover.Content>
                    </Popover.Root>
                  )}
                </td>
              </Box>

              <Box
                asChild
                py="3"
                style={{
                  borderBottom: '1px solid var(--gray-a6)',
                }}
              >
                <td>
                  <Code color="gray" size="2">
                    {value}
                  </Code>
                </td>
              </Box>
            </tr>
          ))}
        </tbody>
      </RegionTable>
    </Box>
  );
}

export function ThemesAnatomy() {
  return (
    <Flex
      style={{
        backgroundColor: 'var(--gray-a6)',
        borderRadius: 'var(--radius-4)',
        position: 'relative',
      }}
      align="center"
      justify="center"
      my="7"
      p="7"
    >
      <Flex
        align="center"
        justify="end"
        style={{
          backgroundColor: 'var(--gray-11)',
          width: 200,
          height: 2,
          position: 'absolute',
          top: '30%',
          left: 100,
        }}
      >
        <Box
          style={{ borderRadius: '100%', backgroundColor: 'var(--gray-11)' }}
          width="2"
          height="2"
        />
      </Flex>

      <Flex
        align="center"
        justify="start"
        style={{
          backgroundColor: 'var(--gray-11)',
          width: 200,
          height: 2,
          position: 'absolute',
          bottom: '30%',
          right: 100,
        }}
      >
        <Box
          style={{ borderRadius: '100%', backgroundColor: 'var(--gray-11)' }}
          width="2"
          height="2"
        />
      </Flex>

      <Flex
        align="center"
        justify="center"
        style={{
          backgroundColor: 'var(--color-panel)',
          borderRadius: 'var(--radius-4)',
          width: '100%',
          maxWidth: 300,
          height: 300,
          boxShadow: 'var(--shadow-3)',
        }}
        p="5"
      >
        <Text color="gray">Annotated theme UI</Text>
      </Flex>
    </Flex>
  );
}

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
