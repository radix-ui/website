import React from 'react';
import {
  CubeIcon,
  DownloadIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  IconJarLogoIcon,
  SketchLogoIcon,
} from '@radix-ui/react-icons';
import { Flex, Link, Text } from '@radix-ui/themes';

import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <Flex className={styles.Menu}>
      <Flex className={styles.MenuInner}>
        <Link
          href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons"
          target="_blank"
          highContrast
        >
          <Flex display="flex" align="center" gap="2">
            <FigmaLogoIcon />
            <Text size="2">Open in Figma</Text>
          </Flex>
        </Link>
        <Link
          href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.sketch"
          target="_blank"
          highContrast
        >
          <Flex display="flex" align="center" gap="2">
            <SketchLogoIcon />
            <Text size="2">Download for Sketch</Text>
          </Flex>
        </Link>
        <Link
          href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.iconjar.zip"
          target="_blank"
          highContrast
        >
          <Flex display="flex" align="center" gap="2">
            <IconJarLogoIcon />
            <Text size="2">Download IconJar</Text>
          </Flex>
        </Link>
        <Link
          href="https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip"
          target="_blank"
          highContrast
        >
          <Flex display="flex" align="center" gap="2">
            <DownloadIcon />
            <Text size="2">Download SVG</Text>
          </Flex>
        </Link>
        <Link
          href="https://www.npmjs.com/package/@radix-ui/react-icons"
          target="_blank"
          highContrast
        >
          <Flex display="flex" align="center" gap="2">
            <CubeIcon />
            <Text size="2">Install with npm</Text>
          </Flex>
        </Link>
        <Link href="https://github.com/radix-ui/icons" target="_blank" highContrast>
          <Flex display="flex" align="center" gap="2">
            <GitHubLogoIcon />
            <Text size="2">View on GitHub</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};
