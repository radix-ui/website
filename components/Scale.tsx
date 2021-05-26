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

export const ColorScaleGroup = ({ children }: { children: any }) => {
  return <Grid css={{ gridTemplateColumns: 'repeat(13, 1fr)', my: '$5', gap: 2 }}>{children}</Grid>;
};

export const ColorScale = ({ label, name }: { label: string; name: keyof typeof Colors }) => {
  const scale = Colors[name];

  return (
    <>
      <Flex align="center" css={{ height: '$6', width: 105 }}>
        <Code variant="gray" css={{ bc: 'transparent', fontSize: '$2' }}>
          {label}
        </Code>
      </Flex>
      {Object.values(scale).map((value) => {
        return <Box css={{ height: '$6', bc: value }}></Box>;
      })}
      <Flex align="center" justify="center" css={{ height: '$6' }}>
        <DropdownMenu>
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
              <DropdownMenuItem onSelect={(e) => navigator.clipboard.writeText(scaleToLESS(scale))}>
                Copy as LESS
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => navigator.clipboard.writeText(scaleToSASS(scale))}>
                Copy as Sass
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => navigator.clipboard.writeText(scaleToSvg(scale))}>
                Copy as SVG
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Flex>
    </>
  );
};
