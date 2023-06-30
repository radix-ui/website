import React from 'react';
import { Box, Text, Kbd, Flex } from '@radix-ui/themes';
import { RegionTable } from './RegionTable';

type KeyboardDef = {
  keys: string[];
  description: React.ReactNode;
};

export function KeyboardTable({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  data: KeyboardDef[];
  'aria-label'?: string;
  'aria-labelledby'?: string;
}) {
  const hasAriaLabel = !!(ariaLabel || ariaLabelledBy);
  return (
    <RegionTable
      css={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', mt: '$2' }}
      aria-label={hasAriaLabel ? ariaLabel : 'Keyboard Interactions'}
      aria-labelledby={ariaLabelledBy}
    >
      <thead>
        <tr>
          <Box asChild height="8" pr="4" style={{ borderBottom: '1px solid var(--gray-6)' }}>
            <th>
              <Text size="2" color="gray">
                Key
              </Text>
            </th>
          </Box>
          <Box asChild height="8" pr="4" style={{ borderBottom: '1px solid var(--gray-6)' }}>
            <th>
              <Text size="2" color="gray">
                Description
              </Text>
            </th>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ keys, description }, i) => (
          <tr key={i}>
            <Box
              asChild
              height="8"
              pr="4"
              style={{ borderBottom: '1px solid var(--gray-6)', whiteSpace: 'nowrap' }}
            >
              <td>
                <Flex gap="2">
                  {keys.map((k) => (
                    <Kbd key={k}>{k}</Kbd>
                  ))}
                </Flex>
              </td>
            </Box>
            <Box asChild height="8" pr="4" style={{ borderBottom: '1px solid var(--gray-6)' }}>
              <td>
                <Text size="2">{description}</Text>
              </td>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}
