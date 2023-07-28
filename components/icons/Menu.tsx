import React from 'react';
import {
  CubeIcon,
  DownloadIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  IconJarLogoIcon,
  SketchLogoIcon,
} from '@radix-ui/react-icons';
import { Flex, Link } from '@radix-ui/themes';

export const Menu = () => {
  return (
    <Flex
      m="6"
      justify="end"
      display={{ initial: 'none', md: 'inline-flex' }}
      position="fixed"
      right="0"
      style={{ top: 'var(--space-6)' }}
    >
      <Flex
        direction="column"
        gap="2"
        py="4"
        px="5"
        style={{
          background: 'var(--accent-3)',
          borderRadius: 'var(--radius-1)',
          boxShadow: '0 10px 40px -10px hsla(174, 100%, 30%, 0.05)',
          userSelect: 'none',
        }}
      >
        <Flex align="center" gap="2" asChild>
          <Link
            href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons"
            target="_blank"
            highContrast
          >
            <FigmaLogoIcon />
            Open in Figma
          </Link>
        </Flex>
        <Flex align="center" gap="2" asChild>
          <Link
            href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.sketch"
            target="_blank"
            highContrast
          >
            <SketchLogoIcon />
            Download for Sketch
          </Link>
        </Flex>

        <Flex align="center" gap="2" asChild>
          <Link
            href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.iconjar.zip"
            target="_blank"
            highContrast
          >
            <IconJarLogoIcon />
            Download IconJar
          </Link>
        </Flex>

        <Flex align="center" gap="2" asChild>
          <Link
            href="https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip"
            target="_blank"
            highContrast
          >
            <DownloadIcon />
            Download SVG
          </Link>
        </Flex>
        <Flex align="center" gap="2" asChild>
          <Link
            href="https://www.npmjs.com/package/@radix-ui/react-icons"
            target="_blank"
            highContrast
          >
            <CubeIcon />
            Install with npm
          </Link>
        </Flex>
        <Flex align="center" gap="2" asChild>
          <Link href="https://github.com/radix-ui/icons" target="_blank" highContrast>
            <GitHubLogoIcon />
            View on GitHub
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
