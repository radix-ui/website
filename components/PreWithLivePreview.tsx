import * as React from 'react';
import { Box, Grid, Text } from '@radix-ui/themes';
import { CopyCodeButton } from './CopyCodeButton';
import { LiveCode } from './LiveCode';
import * as themes from '@radix-ui/themes';
import * as icons from '@radix-ui/react-icons';
import { ThemesPre } from './ThemesPre';
import { Pre } from './Pre';

const PreWithLivePreview = (props) => {
  const [code, setCode] = React.useState('');
  const liveCode = childrenText(props.children) ?? '';

  return (
    <Box my="5">
      <Box>
        <Box
          p="4"
          style={{
            boxShadow: 'inset 0 0 0 1px var(--gray-4)',
            borderBottom: 0,
            borderRadius: 'var(--space-3) var(--space-3) 0 0',
            overflow: 'hidden',
          }}
        >
          <LiveCode
            code={liveCode}
            scope={{
              ...themes,
              ...icons,
              DecorativeBox: (props) => (
                <Box
                  {...props}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--gray-a3)',
                    border: '1px dashed var(--gray-a6)',
                    borderRadius: 'var(--br-2-raw)',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
                    ...props.style,
                  }}
                />
              ),
              RightClickZone: (props) => (
                <Grid
                  {...props}
                  style={{
                    height: 100,
                    placeItems: 'center',
                    border: '1px dashed var(--accent-a6)',
                    borderRadius: 'var(--br-2-raw)',
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
      </Box>

      {/* $$syntax1: 'var(--gray-a12)',
  $$syntax2: 'var(--accent-11)',
  $$syntax3: 'var(--gray-a11)',
  $$syntax4: 'var(--gray-a11)', */}
      <Box position="relative" style={{ marginTop: -1 }}>
        <Pre
          {...props}
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            backgroundColor: 'var(--gray-a1)',
            '---text': 'var(--gray-a11)',
            '---border': 'var(--gray-4)',
            '---syntax1': 'var(--accent-a12)',
            '---syntax2': 'var(--accent-11)',
            '---syntax3': 'var(--gray-a11)',
            '---syntax4': 'var(--gray-a11)',
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
        <CopyCodeButton code={code} />
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
