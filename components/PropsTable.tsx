import React from 'react';
import { Box, IconButton, Text, Code, Popover } from '@modulz/design-system';
import { CheckIcon, InfoCircledIcon, DividerHorizontalIcon } from '@modulz/radix-icons';

type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  typeSimple: string;
  description?: string;
};

export function PropsTable({ data }: { data: PropDef[] }) {
  return (
    <Box as="table" css={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
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

          <Box
            as="th"
            css={{
              borderBottom: '1px solid $gray500',
              py: '$3',
              textAlign: 'right',
              width: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            <Text size="2" css={{ color: '$gray900' }}>
              Required
            </Text>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, type, typeSimple, required, default: defaultValue, description }, i) => (
          <tr key={`${name}-${i}`}>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              <Code>{name}</Code>
              {description && (
                <Popover>
                  <Popover.Trigger
                    as={IconButton}
                    variant="ghost"
                    css={{ ml: '$2' }}
                    aria-label="Prop description"
                  >
                    <InfoCircledIcon />
                  </Popover.Trigger>
                  <Popover.Content side="top">
                    <Box css={{ py: '$2', px: '$3', width: '320px' }}>
                      <Text size="2" css={{ lineHeight: '20px' }}>
                        {description}
                      </Text>
                    </Box>
                  </Popover.Content>
                </Popover>
              )}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              <Code css={{ bc: '$gray200', color: '$gray900' }}>
                {Boolean(typeSimple) ? typeSimple : type}
              </Code>
              {Boolean(typeSimple) && (
                <Popover>
                  <Popover.Trigger
                    as={IconButton}
                    variant="ghost"
                    css={{ ml: '$2' }}
                    aria-label="See full type"
                  >
                    <InfoCircledIcon />
                  </Popover.Trigger>
                  <Popover.Content side="top">
                    <Box css={{ py: '$2', px: '$2', height: '39px', whiteSpace: 'nowrap' }}>
                      <Text size="2" css={{ display: 'inline' }}>
                        Type:
                      </Text>{' '}
                      <Code>{type}</Code>
                    </Box>
                  </Popover.Content>
                </Popover>
              )}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              <Code css={{ bc: '$gray200', color: '$gray900' }}>{String(defaultValue)}</Code>
            </Box>

            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', textAlign: 'right' }}>
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
              ) : (
                <Box aria-label="Not required" css={{ display: 'inline-flex', color: '$gray600' }}>
                  <DividerHorizontalIcon />
                </Box>
              )}
            </Box>
          </tr>
        ))}
      </tbody>
    </Box>
  );
}
