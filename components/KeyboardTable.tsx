import React from 'react';
import { Box, Text, Code, Kbd } from '@modulz/design-system';

type KeyboardDef = {
  keys: string[];
  description: React.ReactNode;
};

export function KeyboardTable({ data }: { data: KeyboardDef[] }) {
  return (
    <Box
      as="table"
      css={{ width: '100%', textAlign: 'left', tableLayout: 'fixed', borderCollapse: 'collapse' }}
    >
      <thead>
        <tr>
          <Box as="th" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
            <Text size="2" css={{ color: '$gray900' }}>
              Key
            </Text>
          </Box>
          <Box as="th" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
            <Text size="2" css={{ color: '$gray900' }}>
              Description
            </Text>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ keys, description }, i) => (
          <tr key={i}>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              {keys.map((k) => (
                <Kbd key={k}>{k}</Kbd>
              ))}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              <Text size="3">{description}</Text>
            </Box>
          </tr>
        ))}
      </tbody>
    </Box>
  );
}
