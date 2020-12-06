import React from 'react';
import { Box, Text, Code, Tooltip } from '@modulz/design-system';
import { CheckIcon, InfoCircledIcon } from '@modulz/radix-icons';

type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  description?: string;
};

export function PropsTable({ data }: { data: PropDef[] }) {
  return (
    <Box
      as="table"
      css={{ width: '100%', textAlign: 'left', tableLayout: 'fixed', borderCollapse: 'collapse' }}
    >
      <thead>
        <tr>
          <Box as="th" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
            <Text size="2" css={{ color: '$gray900' }}>
              Prop
            </Text>
          </Box>
          <Box as="th" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
            <Text size="2" css={{ color: '$gray900' }}>
              Type
            </Text>
          </Box>
          <Box as="th" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
            <Text size="2" css={{ color: '$gray900' }}>
              Default
            </Text>
          </Box>
          <Box as="th" css={{ borderBottom: '1px solid $gray500', py: '$3', textAlign: 'right', width: 'auto', whiteSpace: 'nowrap' }}>
            <Text size="2" css={{ color: '$gray900' }}>
              Required
            </Text>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, type, required, default: defaultValue, description }, i) => (
          <tr key={`${name}-${i}`}>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              <Code>{name}</Code>
              {description && (
                <Tooltip content={description}>
                  <Box css={{ display: 'inline-block', color: '$purple800', ml: '$2' }}>
                    <InfoCircledIcon style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  </Box>
                </Tooltip>
              )}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              <Code css={{ bc: '$gray200', color: '$gray900' }}>{type}</Code>
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              <Code css={{ bc: '$gray200', color: '$gray900' }}>{String(defaultValue)}</Code>
            </Box>
            <Box
              as="td"
              css={{ borderBottom: '1px solid $gray500', py: '$3', textAlign: 'right' }}
            >
              {required ? (
                <Box
                  aria-label="Required"
                  css={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '$5',
                    height: '$5',
                    backgroundColor: '$blue200',
                    borderRadius: '50%',
                    color: '$blue900',
                  }}
                >
                  <CheckIcon />
                </Box>
              ) : null}
            </Box>
          </tr>
        ))}
      </tbody>
    </Box>
  );
}
