import React from 'react';
import { Box, IconButton, Text, Popover, Code, Table } from '@radix-ui/themes';
import { InfoCircledIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type?: string;
  typeSimple: string;
  description?: string | React.ReactNode;
};

export function PropsTable({ data }: { data: PropDef[] }) {
  return (
    <Box my="5" asChild>
      <Table.Root>
        <Table.Content>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell style={{ width: '37%' }}>Prop</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map(
              ({ name, type, typeSimple, required, default: defaultValue, description }, i) => {
                return (
                  <Table.Row key={`${name}-${i}`}>
                    <Table.RowHeaderCell>
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
                              ml="2"
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
                            {description}
                          </Popover.Content>
                        </Popover.Root>
                      )}
                    </Table.RowHeaderCell>
                    <Table.Cell>
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
                              ml="2"
                              style={{
                                verticalAlign: 'middle',
                              }}
                            >
                              <AccessibleIcon label="See full type">
                                <InfoCircledIcon />
                              </AccessibleIcon>
                            </IconButton>
                          </Popover.Trigger>
                          <Popover.Content side="top" align="center" style={{ maxWidth: 600 }}>
                            <Code size="2" style={{ whiteSpace: 'pre', display: 'block' }}>
                              {type}
                            </Code>
                          </Popover.Content>
                        </Popover.Root>
                      )}
                    </Table.Cell>

                    <Table.Cell>
                      {Boolean(defaultValue) ? (
                        <Code size="2" color="gray">
                          {defaultValue}
                        </Code>
                      ) : (
                        <AccessibleIcon label="No default value">
                          <DividerHorizontalIcon style={{ color: 'var(--gray-8)' }} />
                        </AccessibleIcon>
                      )}
                    </Table.Cell>
                  </Table.Row>
                );
              }
            )}
          </Table.Body>
        </Table.Content>
      </Table.Root>
    </Box>
  );
}
