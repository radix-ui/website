import * as React from 'react';
import { Box } from '@modulz/design-system';
import { Pre } from './Pre';
import { CopyCodeButton } from './CopyCodeButton';

const PreWithCopyButton = (props) => {
  const [code, setCode] = React.useState('');
  return (
    <Box css={{ position: 'relative' }}>
      <Pre
        {...props}
        variant="violet"
        css={{ my: '$5' }}
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
  );
};

export { PreWithCopyButton };
