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
    <Box my="5">
      <Box>
        <themes.ScrollArea>
          <Box
            p="4"
            style={{
              boxShadow: 'inset 0 0 0 1px var(--gray-4)',
              borderBottom: 0,
              borderRadius: 'var(--space-3) var(--space-3) 0 0',
              overflow: 'hidden',
            }}
          >
            <Theme className="radix-themes-example" applyBackgroundColor={false}>
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
            </Theme>
          </Box>
        </themes.ScrollArea>
      </Box>

      <Box position="relative" style={{ marginTop: -1 }} className={styles.CodeContainer}>
        <Pre
          {...props}
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
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
