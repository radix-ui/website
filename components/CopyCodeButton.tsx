import * as React from 'react';
import copy from 'copy-to-clipboard';
import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

export const CopyCodeButton = ({ code, ...props }) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  return (
    <IconButton
      aria-label="Copy code to clipboard"
      onClick={() => {
        copy(code);
        setHasCopied(true);
      }}
      {...props}
      mt="3"
      mr="3"
      color="gray"
      variant="soft"
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
      }}
    >
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </IconButton>
  );
};
