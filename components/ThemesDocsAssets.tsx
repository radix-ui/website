import { Box, Code, Flex, Grid, ScrollArea, Text, Theme } from '@radix-ui/themes';
import { RegionTable } from './RegionTable';

export function ThemesBorderRadiusTable() {
  return (
    <>
      <Flex direction="column" gap="1">
        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}></Flex>

          {[...new Array(6)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Flex align="center" justify="center" height="100%" width="100%">
                <Text size="1" color="gray">
                  {i + 1}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --radius-
            </Code>
          </Flex>

          {[...new Array(6)].map((_, i) => (
            <Box
              style={{
                flex: 1,
                border: '1px solid var(--gray-7)',
                borderRadius: `var(--radius-${i + 1})`,
              }}
              height="6"
              key={i}
            ></Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export function ThemesShadowTable() {
  return (
    <>
      <Flex direction="column" gap="1">
        <Flex align="center" gap="1" px="4">
          <Flex style={{ minWidth: 100 }}></Flex>

          {[...new Array(5)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Flex align="center" justify="center" height="100%" width="100%">
                <Text size="1" color="gray">
                  {i + 1}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --shadow-
            </Code>
          </Flex>

          <Flex
            style={{ flex: 1, backgroundColor: 'var(--gray-3)', borderRadius: 'var(--radius-3)' }}
            p="4"
            gap="2"
          >
            {[...new Array(5)].map((_, i) => (
              <Flex style={{ flex: 1 }} align="center" justify="center">
                <Box
                  style={{
                    backgroundColor: 'var(--gray-1)',
                    boxShadow: `var(--shadow-${i + 1})`,
                    borderRadius: 'var(--radius-2)',
                    width: '100%',
                    maxWidth: '90px',
                  }}
                  height="6"
                  key={i}
                ></Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export function ThemesAccentTable() {
  return (
    <>
      <Flex direction="column" gap="1">
        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}></Flex>

          {[...new Array(12)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Flex align="center" justify="center" height="100%" width="100%">
                <Text size="1" color="gray">
                  {i + 1}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --accent-
            </Code>
          </Flex>

          {[...new Array(12)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Box
                style={{
                  backgroundColor: `var(--accent-${i + 1})`,
                  borderRadius: 'var(--radius-2)',
                }}
                height="100%"
                width="100%"
              />
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --accent-a
            </Code>
          </Flex>

          {[...new Array(12)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Box
                style={{
                  backgroundColor: `var(--accent-a${i + 1})`,
                  borderRadius: 'var(--radius-2)',
                }}
                height="100%"
                width="100%"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export function ThemesGrayTable() {
  return (
    <>
      <Flex direction="column" gap="1">
        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}></Flex>

          {[...new Array(12)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Flex align="center" justify="center" height="100%" width="100%">
                <Text size="1" color="gray">
                  {i + 1}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --gray-
            </Code>
          </Flex>

          {[...new Array(12)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Box
                style={{
                  backgroundColor: `var(--gray-${i + 1})`,
                  borderRadius: 'var(--radius-2)',
                }}
                height="100%"
                width="100%"
              />
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --gray-a
            </Code>
          </Flex>

          {[...new Array(12)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Box
                style={{
                  backgroundColor: `var(--gray-a${i + 1})`,
                  borderRadius: 'var(--radius-2)',
                }}
                height="100%"
                width="100%"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export function ThemesThemeAnatomy() {
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

export function ThemesSpacingTable() {
  return (
    <>
      <Flex direction="column" gap="1">
        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}></Flex>

          {[...new Array(9)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Flex align="center" justify="center" height="100%" width="100%">
                <Text size="1" color="gray">
                  {i + 1}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --space-
            </Code>
          </Flex>

          {[...new Array(9)].map((_, i) => (
            <Flex style={{ flex: 1 }} key={i} align="center">
              <DecorativeBox style={{ width: '100%', height: `var(--space-${i + 1})` }} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export function ThemesFontSizeTable() {
  return (
    <>
      <Flex direction="column" gap="1">
        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}></Flex>

          {[...new Array(9)].map((_, i) => (
            <Box style={{ flex: 1 }} height="6" key={i}>
              <Flex align="center" justify="center" height="100%" width="100%">
                <Text size="1" color="gray">
                  {i + 1}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Flex align="center" gap="1">
          <Flex style={{ minWidth: 100 }}>
            <Code color="gray" size="2">
              --font-size-
            </Code>
          </Flex>

          {[...new Array(9)].map((_, i) => (
            <Flex style={{ flex: 1 }} key={i} justify="center">
              <Text weight="bold" style={{ fontSize: `var(--font-size-${i + 1})`, lineHeight: 1 }}>
                Aa
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export function ThemesFontFamilyTable({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  data: {
    token: React.ReactNode;
    value: React.ReactNode;
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
              width: '30%',
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
        {data.map(({ token, value }, i) => (
          <tr key={i}>
            <Box
              asChild
              pr="4"
              py="3"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
                whiteSpace: 'nowrap',
                width: '30%',
              }}
            >
              <td>
                <Code
                  color="gray"
                  size="2"
                  style={{
                    whiteSpace: 'nowrap',
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
              }}
            >
              <td>
                <Code size="2" color="gray">
                  {value}
                </Code>
              </td>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}

export function ThemesTokensTable({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  data: {
    token: React.ReactNode;
    value: React.ReactNode;
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
              width: '20%',
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
              width: '55%',
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text as="p" size="2" color="gray">
                Value
              </Text>
            </th>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ token, value }, i) => (
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
                  {value}
                </Text>
              </td>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}

export function DecorativeBox(props) {
  return (
    <Box
      {...props}
      style={{
        // width: '100%',
        height: '100%',
        backgroundColor: 'var(--gray-a3)',
        border: '1px dashed var(--gray-a7)',
        borderRadius: 'var(--radius-1)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        ...props.style,
      }}
    />
  );
}
