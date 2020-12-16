import React from 'react';
import { Box, IconButton, Text, Code, Popover } from '@modulz/design-system';
import { CheckIcon, InfoCircledIcon, DividerHorizontalIcon } from '@modulz/radix-icons';
import { RegionTable } from './RegionTable';

type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  typeSimple: string;
  description?: string;
};

export function PropsTable({
  data,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  data: PropDef[];
  'aria-label'?: string;
  'aria-labelledby'?: string;
}) {
  const hasAriaLabel = !!(ariaLabel || ariaLabelledBy);
  return (
    <RegionTable
      css={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}
      aria-label={hasAriaLabel ? ariaLabel : 'Component Props'}
      aria-labelledby={ariaLabelledBy}
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
            <Box
              as="td"
              css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4', whiteSpace: 'nowrap' }}
            >
              <Code>{name}</Code>
              {description && (
                <Popover>
                  <Popover.Trigger
                    as={IconButton}
                    variant="ghost"
                    css={{ ml: '$1', verticalAlign: 'middle', color: '$gray900' }}
                    aria-label="Prop description"
                  >
                    <InfoCircledIcon aria-hidden />
                  </Popover.Trigger>
                  <Popover.Content side="top">
                    <Box css={{ py: '$2', px: '$3' }}>
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
                    css={{
                      ml: '$1',
                      verticalAlign: 'middle',
                      color: '$gray900',
                      display: 'none',
                      bp1: { display: 'inline-flex' },
                    }}
                    aria-label="See full type"
                  >
                    <InfoCircledIcon />
                  </Popover.Trigger>
                  <Popover.Content side="top">
                    <Box css={{ py: '$2', px: '$2', height: '38px', whiteSpace: 'nowrap' }}>
                      <Code>{type}</Code>
                    </Box>
                  </Popover.Content>
                </Popover>
              )}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray500', py: '$3', pr: '$4' }}>
              {Boolean(defaultValue) ? (
                <Code css={{ bc: '$gray200', color: '$gray900' }}>{defaultValue}</Code>
              ) : (
                <Box aria-label="No default value" css={{ color: '$gray600' }}>
                  <DividerHorizontalIcon />
                </Box>
              )}
            </Box>

            <Box
              as="td"
              css={{
                borderBottom: '1px solid $gray500',
                py: '$3',
                textAlign: 'right',
                width: '60px',
              }}
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
              ) : (
                <Box aria-label="Not required" css={{ display: 'inline-flex', color: '$gray600' }}>
                  <DividerHorizontalIcon />
                </Box>
              )}
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}
