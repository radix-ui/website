import * as React from 'react';
import { Box, Flex, Grid, Text, Theme, ScrollArea } from '@radix-ui/themes';
import { CopyCodeButton } from './CopyCodeButton';
import { LiveCode } from './LiveCode';
import * as themes from '@radix-ui/themes';
import * as icons from '@radix-ui/react-icons';
import { Pre } from './Pre';
import styles from './PreWithLivePreview.module.css';
import { DecorativeBox, ThemesVolumeControlExample } from './ThemesDocsAssets';

const PreWithLivePreview = ({ style, ...props }) => {
  const [code, setCode] = React.useState('');
  const liveCode = childrenText(props.children) ?? '';

  return (
    <Box
      my="5"
      position="relative"
      style={{
        borderRadius: 'var(--radius-4)',
        boxShadow: 'inset 0 0 0 1px var(--gray-a5)',
      }}
    >
      <Box>
        <ScrollArea>
          <Theme className="radix-themes-default-fonts" asChild>
            <Box p="4" width={props.scroll ? 'max-content' : undefined} style={style}>
              <LiveCode
                code={liveCode}
                scope={{
                  ...themes,
                  ...icons,
                  ThemesVolumeControlExample,
                  DecorativeBox,
                  RightClickZone: ({ heading, ...props }) => (
                    <Grid
                      {...props}
                      style={{
                        height: 100,
                        placeItems: 'center',
                        border: '1px dashed var(--accent-a6)',
                        backgroundColor: 'var(--accent-a2)',
                        borderRadius: 'var(--radius-3)',
                        cursor: 'default',
                        ...props.style,
                      }}
                    >
                      <Flex direction="column" align="center">
                        {heading && (
                          <Text weight="bold" size="2">
                            {heading}
                          </Text>
                        )}
                        <Text color="gray" size={heading ? '2' : undefined}>
                          Right-click here
                        </Text>
                      </Flex>
                    </Grid>
                  ),
                }}
              />
            </Box>
          </Theme>
        </ScrollArea>
      </Box>

      <Box
        position="absolute"
        left="1px"
        right="1px"
        style={{ borderBottom: '1px solid var(--gray-a5)' }}
      />

      <Box position="relative" className={styles.CodeContainer}>
        <Pre
          {...props}
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            boxShadow: 'none',
          }}
          ref={(node) => {
            if (node) {
              // remove double line breaks
              const codeElement = node.querySelector('code');
              const code = codeElement.innerText.replace(/\n{2}/g, '\n');
              setCode(code);
            }
          }}
        />
        <CopyCodeButton className={styles.CopyButton} code={code} />
      </Box>
    </Box>
  );
};

const childrenText = (children?: React.ReactNode): string | null => {
  if (isReactElement(children)) {
    return childrenText(children.props?.children);
  }

  if (Array.isArray(children)) {
    return children.map(childrenText).flat().filter(Boolean).join('');
  }

  if (typeof children === 'string') {
    return children;
  }

  return null;
};

const isReactElement = (element?: React.ReactNode): element is React.ReactElement =>
  React.isValidElement(element) && Boolean(element.props.children);

export { PreWithLivePreview };
