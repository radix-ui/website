import * as React from 'react';
import { Box } from '@modulz/design-system';
import { CopyCodeButton } from './CopyCodeButton';
import { LiveCode } from './LiveCode';
import * as themeComponents from '@radix-ui/themes';
import * as icons from '@radix-ui/react-icons';
import { ThemesPre } from './ThemesPre';

const PreWithLivePreview = (props) => {
  const [code, setCode] = React.useState('');

  const liveCode = childrenText(props.children) ?? '';

  return (
    <Box css={{ my: '$5' }}>
      <Box>
        <Box
          css={{
            p: '$4 $4',
            background: 'var(--color2)',
            border: '1px solid var(--color4)',
            borderRadius: '$3 $3 0 0',
            overflow: 'hidden',
          }}
        >
          <LiveCode code={liveCode} scope={{ ...themeComponents, ...icons }} />
        </Box>
      </Box>

      <Box css={{ position: 'relative' }}>
        <ThemesPre
          {...props}
          variant="violet"
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
