import React from 'react';
import { Box, Button, IconButton, Tooltip } from '@modulz/design-system';
import { ClipboardCopyIcon, CheckIcon } from '@radix-ui/react-icons';
import copy from 'copy-to-clipboard';
import { Pre } from './Pre';

export function DocCodeBlock({
  className,
  children,
  id,
  showLineNumbers = false,
  isCollapsible = false,
  variant,
  isHighlightingLines,
}) {
  const [isShowingCode, setisShowingCode] = React.useState(isCollapsible);
  const [isCopied, setIsCopied] = React.useState(false);
  const preRef = React.useRef(null);

  React.useEffect(() => {
    if (isCopied && preRef.current) {
      const codeElement = preRef.current.querySelector('code');
      const codeToCopy = codeElement.innerText.replace(/\n+/g, '\n');
      copy(codeToCopy);
    }
    setTimeout(() => setIsCopied(false), 1000);
  }, [preRef, isCopied]);

  return (
    <>
      {isCollapsible && (
        <Box
          css={{
            textAlign: 'right',
            ...(isShowingCode ? { boxShadow: '0 0 0 1px $colors$violet4' } : {}),
            padding: '$2',
            backgroundColor: '$violet2',
            mx: '-$5',
            '@bp1': { display: 'none' },
            '@bp2': { mx: 0 },
            '@bp4': { mx: '-$8' },
          }}
        >
          <Button ghost onClick={() => setisShowingCode(!isShowingCode)}>
            {isShowingCode ? 'Show' : 'Hide'} code
          </Button>
        </Box>
      )}
      <Box
        css={{
          my: '$5',
          overflow: 'auto',
          mx: '-$5',
          '@bp2': { mx: 0 },
          '@bp4': { mx: '-$8' },
          ...(isCollapsible ? { marginTop: 0 } : {}),
        }}
      >
        <Pre
          data-invert-line-highlight={isHighlightingLines}
          ref={preRef}
          as="pre"
          variant={variant}
          css={{
            position: 'relative',
            float: 'left',
            minWidth: '100%',
            borderRadius: 0,
            ...(isShowingCode ? { display: 'none' } : {}),
            ...(isCollapsible
              ? {
                  maxHeight: 400,
                  '@bp1': { display: 'block !important' },
                  '@bp2': {
                    $$outline: 'inset 0 0 0 1px $colors$violet4',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                    borderBottomLeftRadius: '$3',
                    borderBottomRightRadius: '$3',
                  },
                }
              : {
                  '@bp2': { borderRadius: '$3' },
                }),
          }}
          className={className}
          id={id}
          data-line-numbers={showLineNumbers}
        >
          <Tooltip content={isCopied ? 'Copied!' : 'Copy'}>
            <IconButton
              css={{
                display: 'none',
                position: 'absolute',
                top: '$2',
                right: '$2',
                '@bp1': { display: 'inline-flex' },
              }}
              onClick={() => setIsCopied(true)}
            >
              {isCopied ? <CheckIcon /> : <ClipboardCopyIcon />}
            </IconButton>
          </Tooltip>
          <div>
            <code className={className} children={children} />
          </div>
        </Pre>
      </Box>
    </>
  );
}
