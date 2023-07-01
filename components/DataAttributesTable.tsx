import React from 'react';
import { Box, Text, Code } from '@radix-ui/themes';
import { RegionTable } from './RegionTable';

type KeyboardDef = {
  attribute: string;
  values: string;
};

export function DataAttributesTable({
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
                Data Attribute
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
                Values
              </Text>
            </th>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ attribute, values }, i) => (
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
                <Code size="2">{attribute}</Code>
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
                {Array.isArray(values) ? (
                  <Code size="2" color="gray">
                    {values.map(
                      (value, index) => `"${value}" ${values.length !== index + 1 ? ' | ' : ''}`
                    )}
                  </Code>
                ) : (
                  <Text size="2">{values}</Text>
                )}
              </td>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}
