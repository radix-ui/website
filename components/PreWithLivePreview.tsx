import * as React from 'react';
import { Box, Grid, Text, Theme } from '@radix-ui/themes';
import { CopyCodeButton } from './CopyCodeButton';
import { LiveCode } from './LiveCode';
import * as themes from '@radix-ui/themes';
import * as icons from '@radix-ui/react-icons';
import { Pre } from './Pre';
import styles from './PreWithLivePreview.module.css';
import { DecorativeBox } from './ThemesDocsAssets';

const PreWithLivePreview = (props) => {
  const [code, setCode] = React.useState('');
  const liveCode = childrenText(props.children) ?? '';

  return (
    <Box
      my="5"
      style={{
        borderRadius: 'var(--radius-4)',
        boxShadow: '0 0 0 1px var(--gray-a5)',
      }}
    >
      <Box>
        <themes.ScrollArea>
          <Theme className="radix-themes-example" applyBackgroundColor={false} asChild>
            <Box p="4" style={{ borderBottom: '1px solid var(--gray-a5)', overflow: 'hidden' }}>
              <LiveCode
                code={liveCode}
                scope={{
                  ...themes,
                  ...icons,
                  DecorativeBox,
                  RightClickZone: (props) => (
                    <Grid
                      {...props}
                      style={{
                        height: 100,
                        placeItems: 'center',
                        border: '1px dashed var(--accent-a6)',
                        borderRadius: 'var(--radius-2)',
                        cursor: 'default',
                        ...props.style,
                      }}
                    >
                      <Text>Right-click here</Text>
                    </Grid>
                  ),
                }}
              />
            </Box>
          </Theme>
        </themes.ScrollArea>
      </Box>

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
