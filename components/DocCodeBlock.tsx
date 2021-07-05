import React from 'react';
import { Box, Button } from '@modulz/design-system';
import copy from 'copy-to-clipboard';
import { Pre } from './Pre';

export function DocCodeBlock({
  className,
  children,
  id,
  showLineNumbers = false,
  collapsed = false,
  variant,
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
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
      {collapsed && (
        <Box
          data-code-toggle
          css={{
            textAlign: 'right',
            ...(collapsed ? {} : { display: 'none' }),
            ...(isCollapsed ? { boxShadow: '0 0 0 1px $colors$violet4' } : {}),
            padding: '$2',
            backgroundColor: '$violet2',
            mx: '-$5',

            '@bp1': { display: 'none' },
            '@bp2': { mx: 0 },
            '@bp4': { mx: '-$8' },
          }}
        >
          <Button ghost onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? 'Show' : 'Hide'} code
          </Button>
        </Box>
      )}
      <Pre
        ref={preRef}
        as="pre"
        variant={variant}
        css={{
          my: '$5',
          position: 'relative',
          ...(isCollapsed ? { display: 'none' } : {}),
          '[data-code-toggle] + &': {
            maxHeight: 400,
            overflow: 'auto',
            marginTop: 0,

            mx: '-$5',
            ...(isCollapsed ? { borderRadius: 0 } : {}),
            '@bp1': { display: 'block !important' },
            '@bp2': {
              $$outline: 'inset 0 0 0 1px $colors$violet4',
              mx: 0,
              borderBottomLeftRadius: '$3',
              borderBottomRightRadius: '$3',
            },
            '@bp4': { mx: '-$8' },
          },
        }}
        className={className}
        id={id}
        data-line-numbers={showLineNumbers}
      >
        <Button
          ghost
          css={{
            display: 'none',
            position: 'absolute',
            top: '$2',
            right: '$2',
            '@bp1': {
              display: 'block',
            },
          }}
          onClick={() => setIsCopied(true)}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </Button>
        <code className={className} children={children} />
      </Pre>
    </>
  );
}
