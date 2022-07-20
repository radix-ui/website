import React from 'react';
import { Box, Text, Kbd, Code } from '@modulz/design-system';
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
      css={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}
      aria-label={hasAriaLabel ? ariaLabel : 'Keyboard Interactions'}
      aria-labelledby={ariaLabelledBy}
    >
      <thead>
        <tr>
          <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4', width: '45%' }}>
            <Text size="2" css={{ color: '$gray11' }}>
              CSS Variable
            </Text>
          </Box>
          <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4', width: '55%' }}>
            <Text size="2" css={{ color: '$gray11' }}>
              Description
            </Text>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ cssVariable, description }, i) => (
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
              <Code
                css={{
                  whiteSpace: 'normal',
                }}
              >
                {cssVariable}
              </Code>
            </Box>

            <Box as="td" css={{ borderBottom: '1px solid $gray6', py: '$3' }}>
              <Text size="3" css={{ lineHeight: '25px' }}>
                {description}
              </Text>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}
