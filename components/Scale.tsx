import * as React from 'react';
import { Box, DropdownMenu, Flex, IconButton, Text, Tooltip } from '@radix-ui/themes';
import { CopyIcon } from '@radix-ui/react-icons';
import * as Colors from '@radix-ui/colors';
import tinycolor from 'tinycolor2';

type Scale = Record<string, string>;

const toCssCasing = (str: string) =>
  str
    .replace(/([a-z])(\d)/, '$1-$2')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();

const scaleToHSLObject = (name: string, scale: Scale) => {
  const values = Object.entries(scale)
    .map(([key, val]) => `  ${key}: '${val}',`)
    .join('\n');
  return `const ${name} = {\n${values}\n}`;
};

const scaleToHexObject = (name: string, scale: Scale) => {
  const values = Object.entries(scale)
    .map(([key, value]) => {
      // tinycolor doesn't know to parse alpha from the newer hsl syntax, so we extract it ourselves
      const alpha = value.match(/\/\s*((\d|\.)+)/)?.[1] ?? '1';
      // Convert the alpha number to a hex string
      const hexAlpha = Math.round(+alpha * 255)
        .toString(16)
        .padStart(2, '0');

      return `  ${key}: '${tinycolor(value).toHexString()}${hexAlpha === 'ff' ? '' : hexAlpha}',`;
    })
    .join('\n');
  return `const ${name} = {\n${values}\n}`;
};

const scaleToCSS = (name, scale: Scale) => {
  const values = Object.entries(scale)
    .map(([key, val]) => [toCssCasing(key), val])
    .map(([key, val]) => `  --${key}: ${val};`)
    .join('\n');
  return `.${name} {\n${values}\n}`;
};

const scaleToSASS = (scale: Scale) => {
  return Object.entries(scale)
    .map(([key, val]) => [toCssCasing(key), val])
    .map(([key, val]) => `$${key}: ${val};`)
    .join('\n');
};

const scaleToLESS = (scale: Scale) => {
  return Object.entries(scale)
    .map(([key, val]) => [toCssCasing(key), val])
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
    .map((value, i) => {
      const x = i * valueWidth;
      const hex = tinycolor(value).toHexString();
      // tinycolor doesn't know to parse alpha from the newer hsl syntax, so we extract it ourselves
      const alpha = value.match(/\/\s*((\d|\.)+)/)?.[1] ?? '1';
      return `<rect x="${x}" width="${valueWidth}" height="${valueHeight}" fill="${hex}" fill-opacity="${alpha}" />`;
    })
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
      <Flex>
        <Box height="5" style={{ width: 140 }} />
        {colorKeys.map((key, i) => (
          <Box key={key} grow="1" shrink="1" style={{ flexBasis: 0 }}>
            <Text color="gray" size="1" align="center">
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

  const isAlpha = name.endsWith('A');
  const isDarkAlpha = name.endsWith('DarkA');
  const isWhiteA = name.endsWith('whiteA');
  const isBlackA = name.endsWith('blackA');

  return (
    <Flex
      position="relative"
      style={{ marginRight: -25 }}
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex style={{ width: 'calc(100% - 25px)', gap: 1, marginBottom: 1 }}>
        <Flex align="center" height="6" style={{ width: 140 }}>
          <Text color="gray" size="1">
            {label}
          </Text>
        </Flex>
        {Object.values(scale).map((value, i) => {
          return (
            <Box
              key={i}
              height="6"
              grow="1"
              shrink="1"
              style={{
                height: '$6',
                flexBasis: 0,
                backgroundColor: isDarkAlpha
                  ? Colors['grayDark']['gray1']
                  : isAlpha
                  ? 'white'
                  : 'transparent',

                // Show transparency grid for whiteA and blackA
                ...((isWhiteA || isBlackA) && {
                  backgroundColor: 'transparent',
                  backgroundSize: '12px 12px',
                  backgroundPosition: '0px 0px, 6px 0px, 6px -6px, 0px 6px',
                  backgroundImage: `
                      linear-gradient(45deg, var(--gray-6) 25%, transparent 25%),
                      linear-gradient(135deg, var(--gray-6) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, var(--gray-6) 75%),
                      linear-gradient(135deg, transparent 75%, var(--gray-6) 75%)`,
                }),
              }}
            >
              <Box key={i} width="100%" height="100%" style={{ backgroundColor: value }} />
            </Box>
          );
        })}
      </Flex>
      {(isHovered || dropdownMenuIsOpen) && (
        <Flex align="center" justify="center" height="6" position="absolute" right="0" mr="-1">
          <DropdownMenu.Root onOpenChange={(isOpen) => setDropdownMenuIsOpen(isOpen)}>
            <Tooltip content="Copy to Clipboard">
              <DropdownMenu.Trigger>
                <IconButton size="2" variant="ghost" color="gray" highContrast>
                  <CopyIcon />
                </IconButton>
              </DropdownMenu.Trigger>
            </Tooltip>
            <DropdownMenu.Content align="end" size="1">
              <DropdownMenu.Group>
                <DropdownMenu.Item
                  onSelect={(e) => navigator.clipboard.writeText(scaleToHSLObject(name, scale))}
                >
                  Copy as Object (HSL)
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={(e) => navigator.clipboard.writeText(scaleToHexObject(name, scale))}
                >
                  Copy as Object (Hex)
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={(e) => navigator.clipboard.writeText(scaleToCSS(name, scale))}
                >
                  Copy as CSS
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={(e) => navigator.clipboard.writeText(scaleToLESS(scale))}
                >
                  Copy as LESS
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={(e) => navigator.clipboard.writeText(scaleToSASS(scale))}
                >
                  Copy as Sass
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={(e) => navigator.clipboard.writeText(scaleToSvg(scale))}
                >
                  Copy as SVG
                </DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      )}
    </Flex>
  );
};
