import * as React from 'react';
import { Pre } from './Pre';
import { CopyCodeButton } from './CopyCodeButton';
import { Box } from '@radix-ui/themes';

const PreWithCopyButton = (props) => {
  const [code, setCode] = React.useState('');

  return (
    <Box position="relative">
      <Pre
        {...props}
        my="5"
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
