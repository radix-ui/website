import { CodeBlock } from '@components/CodeBlock';
import {
  CubeIcon,
  DownloadIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  IconJarLogoIcon,
  SketchLogoIcon,
} from '@radix-ui/react-icons';
import { Box, Card, Flex, Heading, Link, Text } from '@radix-ui/themes';
import * as React from 'react';
import { CopyToast, CopyToastVisibility } from './CopyToast';
import { MainContent } from './MainContent';
import { Section } from './Section';

import styles from './IconsPanel.module.css';

export const IconsPanel = () => {
  const [toastIsVisible, setToastIsVisible] = React.useState(false);
  const [toastIcon, setToastIcon] = React.useState('');
  const [toastTimeout, setToastTimeout] = React.useState<ReturnType<typeof setTimeout>>();

  const setToastIsVisibleTimeout = () => {
    setToastIsVisible(true);
    clearTimeout(toastTimeout);
    setToastTimeout(setTimeout(() => setToastIsVisible(false), 3000));
  };

  return (
    <CopyToastVisibility.Provider
      value={{
        icon: toastIcon,
        setIcon: setToastIcon,
        isVisible: toastIsVisible,
        setIsVisible: setToastIsVisibleTimeout,
      }}
    >
      <Card mb="5" className={styles.Panel}>
        <MainContent />
        <Section>
          <Box className={styles.Section}>
            <Box mb="5" style={{ gridColumn: '3 / 4' }}>
              <Heading
                as="h3"
                size="5"
                style={{ fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '30px' }}
              >
                Assets
              </Heading>

              <Flex direction="column" gap="2" mt="2">
                <Link
                  href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons"
                  target="_blank"
                  highContrast
                >
                  <Flex display="flex" align="center" gap="2">
                    <FigmaLogoIcon />
                    <Text size="3">Open in Figma</Text>
                  </Flex>
                </Link>

                <Link
                  href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.sketch"
                  target="_blank"
                  highContrast
                >
                  <Flex display="flex" align="center" gap="2">
                    <SketchLogoIcon />
                    <Text size="3">Download for Sketch</Text>
                  </Flex>
                </Link>

                <Link
                  href="https://raw.githubusercontent.com/radix-ui/icons/master/Radix-Icons.iconjar.zip"
                  target="_blank"
                  highContrast
                >
                  <Flex display="flex" align="center" gap="2">
                    <IconJarLogoIcon />
                    <Text size="3">Download IconJar</Text>
                  </Flex>
                </Link>

                <Link
                  href="https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip"
                  target="_blank"
                  highContrast
                >
                  <Flex display="flex" align="center" gap="2">
                    <DownloadIcon />
                    <Text size="3">Download SVG</Text>
                  </Flex>
                </Link>

                <Link
                  href="https://www.npmjs.com/package/@radix-ui/react-icons"
                  target="_blank"
                  highContrast
                >
                  <Flex display="flex" align="center" gap="2">
                    <CubeIcon />
                    <Text size="3">Install with npm</Text>
                  </Flex>
                </Link>

                <Link href="https://github.com/radix-ui/icons" target="_blank" highContrast>
                  <Flex display="flex" align="center" gap="2">
                    <GitHubLogoIcon />
                    <Text size="3">View on GitHub</Text>
                  </Flex>
                </Link>
              </Flex>
            </Box>

            <Box className={styles.SectionContent}>
              <Heading
                as="h3"
                size="5"
                style={{ fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '30px' }}
              >
                React components
              </Heading>
              <Text as="p" size="3" mt="2" style={{ lineHeight: '25px' }}>
                All icons are available as individual React components. Install Radix Icons from
                npm:
              </Text>
              <CodeBlock mt="2" language="bash" value="npm install @radix-ui/react-icons" />
              <Text as="p" size="3" mt="2" style={{ lineHeight: '25px' }}>
                Import the icons into your React project:
              </Text>
              <CodeBlock
                mt="2"
                language="bash"
                value={`import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

function MyComponent () {
  return (
    <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  )
}`}
              />
            </Box>
            <Box style={{ gridColumn: '3 / 4' }}>
              <Heading
                as="h3"
                size="5"
                style={{ fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '30px' }}
              >
                License
              </Heading>

              <Text as="p" size="3" mt="2" style={{ lineHeight: '25px' }}>
                Licensed under the{' '}
                <Link href="https://github.com/radix-ui/icons/blob/master/LICENSE">
                  MIT License
                </Link>
                . Copyright © 2022–present WorkOS.
              </Text>
            </Box>
          </Box>
        </Section>
      </Card>
      <CopyToast />
    </CopyToastVisibility.Provider>
  );
};
