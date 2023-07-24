import { AccessibleIcon, Box, Code, IconButton, Popover, Table, Text } from '@radix-ui/themes';
import { RegionTable } from './RegionTable';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export function ThemesSpacingTable() {
  return (
    <Box my="5" asChild>
      <Table.Root>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Step</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Base value</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {['4px', '8px', '12px', '16px', '24px', '32px', '40px', '48px', '64px'].map(
              (value, i) => {
                const step = i + 1;
                return (
                  <Table.Row key={value}>
                    <Table.RowHeaderCell>{step}</Table.RowHeaderCell>
                    <Table.Cell>
                      <Code color="gray" size="2">
                        {value}
                      </Code>
                    </Table.Cell>
                  </Table.Row>
                );
              }
            )}
          </Table.Body>
        </Table.Content>
      </Table.Root>
    </Box>
  );
}

export function ThemesFontWeightTable() {
  return (
    <Box my="5" asChild>
      <Table.Root>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Weight</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Default value</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {[
              ['Light', '300'],
              ['Regular', '400'],
              ['Medium', '500'],
              ['Bold', '700'],
            ].map(([key, value]) => (
              <Table.Row key={key}>
                <Table.RowHeaderCell>{key}</Table.RowHeaderCell>
                <Table.Cell>
                  <Code color="gray" size="2">
                    {value}
                  </Code>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.Root>
    </Box>
  );
}

export function ThemesFontFamilyTable() {
  return (
    <Box my="5" asChild>
      <Table.Root>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Default value</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {[
              [
                'Text',
                `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
              'Open Sans', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
              ],
              ['Code', `'Fira Code', 'Menlo', monospace, 'Apple Color Emoji', 'Segoe UI Emoji'`],
              ['Emphasis', `'Source Serif 4', Georgia, 'Times New Roman', serif`],
            ].map(([key, value]) => (
              <Table.Row key={key}>
                <Table.RowHeaderCell>{key}</Table.RowHeaderCell>
                <Table.Cell>
                  <Code color="gray" size="2">
                    {value}
                  </Code>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.Root>
    </Box>
  );
}

export function ThemesFontSizeTable() {
  return (
    <Box my="5" asChild>
      <Table.Root>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Step</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Letter spacing</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Line height</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {[
              { fs: '12px', ls: '0.0025em', lh: '16px' },
              { fs: '14px', ls: '0em', lh: '20px' },
              { fs: '16px', ls: '0em', lh: '24px' },
              { fs: '18px', ls: '-0.0025em', lh: '26px' },
              { fs: '20px', ls: '-0.005em', lh: '28px' },
              { fs: '24px', ls: '-0.00625em', lh: '30px' },
              { fs: '28px', ls: '-0.0075em', lh: '36px' },
              { fs: '35px', ls: '-0.01em', lh: '40px' },
              { fs: '60px', ls: '-0.025em', lh: '60px' },
            ].map(({ fs, ls, lh }, i) => {
              const step = i + 1;
              return (
                <Table.Row key={step}>
                  <Table.RowHeaderCell>{step}</Table.RowHeaderCell>
                  <Table.Cell>
                    <Code color="gray" size="2">
                      {fs}
                    </Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Code color="gray" size="2">
                      {ls}
                    </Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Code color="gray" size="2">
                      {lh}
                    </Code>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Content>
      </Table.Root>
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
                        <Text as="p" size="2">
                          {description}
                        </Text>
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
