import React from 'react';
import { Box, Text, Code } from '@radix-ui/themes';
import { RegionTable } from './RegionTable';

type KeyboardDef = {
  cssVariable: string;
  description: React.ReactNode;
};

export function CssVariablesTable({
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
              width: '45%',
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text size="2" color="gray">
                CSS Variable
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
              <Text size="2" color="gray">
                Description
              </Text>
            </th>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ cssVariable, description }, i) => (
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
                  {cssVariable}
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
                <Text size="2">{description}</Text>
              </td>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}
