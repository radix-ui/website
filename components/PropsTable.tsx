import React from 'react';
import {
  Box,
  IconButton,
  Text,
  Code,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@modulz/design-system';
import { InfoCircledIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import { RegionTable } from './RegionTable';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export type PropDef = {
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
          <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4', width: '45%' }}>
            <Text size="2" css={{ color: '$gray11' }}>
              Prop
            </Text>
          </Box>
          <Box
            as="th"
            css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4', width: '27.5%' }}
          >
            <Text size="2" css={{ color: '$gray11' }}>
              Type
            </Text>
          </Box>
          <Box
            as="th"
            css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4', width: '27.5%' }}
          >
            <Text size="2" css={{ color: '$gray11' }}>
              Default
            </Text>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, type, typeSimple, required, default: defaultValue, description }, i) => (
          <tr key={`${name}-${i}`}>
            <Box
              as="td"
              css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4', whiteSpace: 'nowrap' }}
            >
              <Code>
                {name}
                {required ? '*' : null}
              </Code>
              {description && (
                <Popover>
                  <PopoverTrigger asChild>
                    <IconButton
                      variant="ghost"
                      css={{ ml: '$1', verticalAlign: 'middle', color: '$gray11' }}
                    >
                      <AccessibleIcon label="Prop description">
                        <InfoCircledIcon />
                      </AccessibleIcon>
                    </IconButton>
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    css={{ minWidth: 'auto' }}
                    onOpenAutoFocus={(event) => {
                      event.preventDefault();
                      (event.currentTarget as HTMLElement)?.focus();
                    }}
                  >
                    <Box css={{ py: '$2', px: '$3' }}>
                      <Text size="2" css={{ lineHeight: '20px' }}>
                        {description}
                      </Text>
                    </Box>
                  </PopoverContent>
                </Popover>
              )}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}>
              <Code css={{ bc: '$gray4', color: '$gray11' }}>
                {Boolean(typeSimple) ? typeSimple : type}
              </Code>
              {Boolean(typeSimple) && Boolean(type) && (
                <Popover>
                  <PopoverTrigger asChild>
                    <IconButton
                      variant="ghost"
                      css={{
                        ml: '$1',
                        verticalAlign: 'middle',
                        color: '$gray11',
                        display: 'none',
                        '@bp1': { display: 'inline-flex' },
                      }}
                    >
                      <AccessibleIcon label="See full type">
                        <InfoCircledIcon />
                      </AccessibleIcon>
                    </IconButton>
                  </PopoverTrigger>
                  <PopoverContent side="top" css={{ maxWidth: 'max-content', minWidth: 'auto' }}>
                    <Box css={{ py: '$2', px: '$2', whiteSpace: 'nowrap' }}>
                      <Code>{type}</Code>
                    </Box>
                  </PopoverContent>
                </Popover>
              )}
            </Box>
            <Box as="td" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}>
              {Boolean(defaultValue) ? (
                <Code css={{ bc: '$gray4', color: '$gray11' }}>{defaultValue}</Code>
              ) : (
                <Box as={AccessibleIcon} label="No default value" css={{ color: '$gray8' }}>
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
