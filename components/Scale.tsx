import * as React from 'react';
import {
  Box,
  Grid,
  Code,
  Flex,
  Text,
  IconButton,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  Tooltip,
} from '@modulz/design-system';
import { CopyIcon } from '@radix-ui/react-icons';
import * as Colors from '@radix-ui/colors';
import tinycolor from 'tinycolor2';
type Scale = Record<string, string>;

const scaleToHSLObject = (name: string, scale: Scale) => {
  const values = Object.entries(scale)
    .map(([key, val]) => `  ${key}: '${val}',`)
    .join('\n');
  return `const ${name} = {\n${values}\n}`;
};

const scaleToHexObject = (name: string, scale: Scale) => {
  const values = Object.entries(scale)
    .map(([key, val]) => `  ${key}: '${tinycolor(val).toHexString()}',`)
    .join('\n');
  return `const ${name} = {\n${values}\n}`;
};

const scaleToCSS = (name, scale: Scale) => {
  const values = Object.entries(scale)
    .map(([key, val]) => `  --${key}: ${val};`)
    .join('\n');
  return `.${name} {\n${values}\n}`;
};

const scaleToSASS = (scale: Scale) => {
  return Object.entries(scale)
    .map(([key, val]) => `$${key}: ${val};`)
    .join('\n');
};

const scaleToLESS = (scale: Scale) => {
  return Object.entries(scale)
    .map(([key, val]) => `@${key}: ${val};`)
    .join('\n');
};

const scaleToSvg = (
  scale: Record<string, string>,
  valueWidth: number = 50,
  valueHeight: number = 35
) => {
  const values = Object.values(scale);
  return `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${
    values.length * valueWidth
  } ${valueHeight}">${values
    .map(
      (value, i) =>
        `<rect x="${
          i * valueWidth
        }" width="${valueWidth}" height="${valueHeight}" fill="${value}"/>`
    )
    .join('')}</svg>`;
};

// pulling  the first scale and getting the keys from it
const colorKeys = Object.keys(Object.values(Colors)[0]);

const getBgColorForDarkCell = (name) => {
  const baseScale = name.replace('DarkA', 'Dark');
  const scale = Colors[baseScale];
  return Object.values(scale)[0];
};

export const ColorScaleGroup = ({ children }: { children: any }) => {
  return (
    <>
      <Flex css={{ width: '100%' }}>
        <Box css={{ height: '$5', width: 105 }} />
        {colorKeys.map((key, i) => (
          <Box key={key} css={{ flex: 1 }}>
            <Text variant="gray" css={{ bc: 'transparent', fontSize: '$2', ta: 'center' }}>
              {i + 1}
            </Text>
          </Box>
        ))}
        <Box />
      </Flex>
      {children}
    </>
  );
};

export const ColorScale = ({ label, name }: { label: string; name: keyof typeof Colors }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = React.useState(false);

  const scale = Colors[name];

  const isDarkA = name.includes('DarkA');

  return (
    <Flex
      css={{ position: 'relative', marginRight: -25 }}
      onMouseMove={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
    >
      <Flex css={{ width: 'calc(100% - 25px)', gap: 2, mb: 2 }}>
        <Flex align="center" css={{ height: '$6', width: 105 }}>
          <Code variant="gray" css={{ bc: 'transparent', fontSize: '$2' }}>
            {label}
          </Code>
        </Flex>
        {Object.values(scale).map((value, i) => {
          return (
            <Box
              key={i}
              css={{
                height: '$6',
                flex: 1,
                bc: isDarkA ? getBgColorForDarkCell(name) : 'transparent',
              }}
            >
              <Box key={i} css={{ height: '100%', width: '100%', bc: value }} />
            </Box>
          );
        })}
      </Flex>
      {(isHovered || dropdownMenuIsOpen) && (
        <Flex
          align="center"
          justify="center"
          css={{ height: '$6', position: 'absolute', right: '-$1' }}
        >
          <DropdownMenu onOpenChange={(isOpen) => setDropdownMenuIsOpen(isOpen)}>
            <Tooltip content="Copy to Clipboard">
              <DropdownMenuTrigger as={IconButton}>
                <CopyIcon />
              </DropdownMenuTrigger>
            </Tooltip>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onSelect={(e) => navigator.clipboard.writeText(scaleToHSLObject(name, scale))}
                >
                  Copy as Object (HSL)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(e) => navigator.clipboard.writeText(scaleToHexObject(name, scale))}
                >
                  Copy as Object (Hex)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(e) => navigator.clipboard.writeText(scaleToCSS(name, scale))}
                >
                  Copy as CSS
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(e) => navigator.clipboard.writeText(scaleToLESS(scale))}
                >
                  Copy as LESS
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(e) => navigator.clipboard.writeText(scaleToSASS(scale))}
                >
                  Copy as Sass
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={(e) => navigator.clipboard.writeText(scaleToSvg(scale))}
                >
                  Copy as SVG
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
      )}
    </Flex>
  );
};
