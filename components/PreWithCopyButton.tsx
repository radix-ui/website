import * as React from 'react';
import { Pre } from './Pre';
import { CopyCodeButton } from './CopyCodeButton';
import { Box } from '@radix-ui/themes';
import styles from './PreWithCopyButton.module.css';

const PreWithCopyButton = (props) => {
  const [code, setCode] = React.useState('');

  return (
    <Box position="relative" className={styles.Container}>
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
      <CopyCodeButton className={styles.CopyButton} code={code} />
    </Box>
  );
};

export { PreWithCopyButton };
