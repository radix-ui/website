import React from 'react';
import { Box, IconButton, Text, Popover, Code } from '@radix-ui/themes';
import { InfoCircledIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import { RegionTable } from './RegionTable';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type?: string;
  typeSimple: string;
  description?: string | React.ReactNode;
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
      style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}
      aria-label={hasAriaLabel ? ariaLabel : 'Component Props'}
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
                Prop
              </Text>
            </th>
          </Box>
          <Box
            asChild
            py="3"
            pr="4"
            style={{
              width: '27.5%',
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text size="2" color="gray">
                Type
              </Text>
            </th>
          </Box>
          <Box
            asChild
            py="3"
            pr="4"
            style={{
              width: '27.5%',
              borderBottom: '1px solid var(--gray-a6)',
            }}
          >
            <th>
              <Text size="2" color="gray">
                Default
              </Text>
            </th>
          </Box>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, type, typeSimple, required, default: defaultValue, description }, i) => (
          <tr key={`${name}-${i}`}>
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
                <Code size="2">
                  {name}
                  {required ? '*' : null}
                </Code>
                {description && (
                  <Popover.Root>
                    <Popover.Trigger>
                      <IconButton
                        variant="ghost"
                        size="1"
                        ml="1"
                        color="gray"
                        style={{ verticalAlign: 'middle' }}
                      >
                        <AccessibleIcon label="Prop description">
                          <InfoCircledIcon />
                        </AccessibleIcon>
                      </IconButton>
                    </Popover.Trigger>
                    <Popover.Content
                      side="top"
                      align="center"
                      style={{ maxWidth: 350 }}
                      onOpenAutoFocus={(event) => {
                        event.preventDefault();
                        (event.currentTarget as HTMLElement)?.focus();
                      }}
                    >
                      <Box p="3">
                        <Text size="2">{description}</Text>
                      </Box>
                    </Popover.Content>
                  </Popover.Root>
                )}
              </td>
            </Box>
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
                <Code color="gray" size="2">
                  {Boolean(typeSimple) ? typeSimple : type}
                </Code>
                {Boolean(typeSimple) && Boolean(type) && (
                  <Popover.Root>
                    <Popover.Trigger>
                      <IconButton
                        variant="ghost"
                        color="gray"
                        size="1"
                        ml="1"
                        style={{
                          verticalAlign: 'middle',
                        }}
                      >
                        <AccessibleIcon label="See full type">
                          <InfoCircledIcon />
                        </AccessibleIcon>
                      </IconButton>
                    </Popover.Trigger>
                    <Popover.Content side="top" align="center" style={{ maxWidth: 350 }}>
                      <Box p="3">
                        <Code size="2" style={{ whiteSpace: 'pre', display: 'block' }}>
                          {type}
                        </Code>
                      </Box>
                    </Popover.Content>
                  </Popover.Root>
                )}
              </td>
            </Box>
            <Box
              asChild
              pr="4"
              py="3"
              style={{
                borderBottom: '1px solid var(--gray-a6)',
              }}
            >
              <td>
                {Boolean(defaultValue) ? (
                  <Code size="2" color="gray">
                    {defaultValue}
                  </Code>
                ) : (
                  <AccessibleIcon label="No default value">
                    <DividerHorizontalIcon style={{ color: 'var(--gray-8)' }} />
                  </AccessibleIcon>
                )}
              </td>
            </Box>
          </tr>
        ))}
      </tbody>
    </RegionTable>
  );
}
