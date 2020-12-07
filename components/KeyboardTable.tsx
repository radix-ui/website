import React from 'react';
import { Box, Text, Kbd } from '@modulz/design-system';

type KeyboardDef = {
  keys: string[];
  description: React.ReactNode;
};

export function KeyboardTable({ data }: { data: KeyboardDef[] }) {
  return (
    <Box as="table" css={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
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
            <Box
              as="td"
              css={{
                borderBottom: '1px solid $gray500',
                py: '$3',
                pr: '$4',
                whiteSpace: 'nowrap',
              }}
            >
              {keys.map((k) => (
                <Kbd key={k} css={{ '& + &': { ml: '4px' } }}>
                  {k}
                </Kbd>
              ))}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3' }}>
              <Text size="3" css={{ lineHeight: '25px' }}>
                {description}
              </Text>
            </Box>
          </tr>
        ))}
      </tbody>
    </Box>
  );
}
