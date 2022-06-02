import React from 'react';
import { Box, Text, Kbd, Code } from '@modulz/design-system';
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
      css={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', mt: '$2' }}
      aria-label={hasAriaLabel ? ariaLabel : 'Keyboard Interactions'}
      aria-labelledby={ariaLabelledBy}
    >
      <thead>
        <tr>
          <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}>
            <Text size="2" css={{ color: '$gray11' }}>
              Data Attribute
            </Text>
          </Box>
          <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}>
            <Text size="2" css={{ color: '$gray11' }}>
              Values
            </Text>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ attribute, values }, i) => (
          <tr key={i}>
            <Box
              as="td"
              css={{
                borderBottom: '1px solid $gray6',
                py: '$3',
                pr: '$4',
                whiteSpace: 'nowrap',
              }}
            >
              <Code>{attribute}</Code>
            </Box>

            <Box as="td" css={{ borderBottom: '1px solid $gray6', py: '$3' }}>
              <Code css={{ bc: '$gray4', color: '$gray11' }}>{values}</Code>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}
