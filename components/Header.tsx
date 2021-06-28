import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Container,
  Grid,
  Text,
  Flex,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  Separator,
  Link,
} from '@modulz/design-system';
import { RadixLogo } from './RadixLogo';
import { PlusIcon } from '@radix-ui/react-icons';

export const Header = () => {
  return (
    <Box as="header" css={{ py: '$3' }}>
      <Container size="4">
        <Flex justify="between">
          <NextLink href="/" passHref>
            <Box
              as="a"
              css={{
                color: '$hiContrast',
                display: 'inline-flex',
                '&:focus': {
                  boxShadow: 'none',
                },
              }}
            >
              <RadixLogo label="Radix Homepage" />
            </Box>
          </NextLink>
          <Flex gap="6" align="center">
            <DropdownMenu>
              <DropdownMenuTrigger
                as={Button}
                size="2"
                ghost
                css={{ gap: '$1', fontWeight: 400, color: '$slate11' }}
              >
                Product
                <PlusIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Primitives</DropdownMenuItem>
                <DropdownMenuItem>Colors</DropdownMenuItem>
                <DropdownMenuItem>Icons</DropdownMenuItem>
                <DropdownMenuItem>Resets</DropdownMenuItem>
                <DropdownMenuItem>Stitches</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation="vertical" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
