import React from 'react';
import { Box, Button, IconButton } from '@modulz/design-system';
import copy from 'copy-to-clipboard';
import { getParameters } from 'codesandbox/lib/api/define';
import { ClipboardIcon, CodeSandboxLogoIcon, CheckIcon } from '@radix-ui/react-icons';
import { Pre } from './Pre';
import { FrontmatterContext } from './MDXComponents';

export function DocCodeBlock({
  className,
  children,
  id,
  showLineNumbers = false,
  isHero = false,
  isCollapsible = false,
  isScrollable = false,
  variant,
  isHighlightingLines,
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(isCollapsible);
  const [hasCopied, setHasCopied] = React.useState(false);
  const [code, setCode] = React.useState(undefined);
  const preRef = React.useRef(null);
  const frontmatter = React.useContext(FrontmatterContext);

  React.useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector('code');
      // remove double line breaks
      const code = codeElement.innerText.replace(/\n{3,}/g, '\n');
      setCode(code);
    }
  }, [preRef]);

  React.useEffect(() => {
    if (hasCopied) {
      copy(code);
    }
    setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  const css =
    '*{ margin:0;padding:0;}body{font-family:system-ui;width:100vw;height:100vh;background-image:linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%);display:flex;align-items:center;justify-content:center;}';

  const parameters = getParameters({
    files: {
      'package.json': {
        content: {
          dependencies: {
            react: 'latest',
            'react-dom': 'latest',
            '@stitches/react': 'latest',
            '@radix-ui/colors': 'latest',
            '@radix-ui/react-icons': 'latest',
            [`@radix-ui/react-${frontmatter.name}`]: 'latest',
          },
        } as any,
        isBinary: false,
      },
      'App.js': {
        content: code,
        isBinary: false,
      },
      'index.js': {
        content: `import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));`,
        isBinary: false,
      },
      'styles.css': {
        content: css,
        isBinary: false,
      },
    },
    template: 'create-react-app',
  });

  return (
    <Box>
      {isCollapsible && (
        <Box
          css={{
            textAlign: 'right',
            padding: '$2',
            position: 'relative',
            marginTop: '-$7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '$1',

            ...(isCollapsed
              ? { borderRadius: '$3' }
              : {
                  borderTopLeftRadius: '$3',
                  borderTopRightRadius: '$3',
                }),

            ...(isCollapsible
              ? {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }
              : {}),

            ...(isHero
              ? {
                  '@bp3': { mx: '-$7' },
                  '@bp4': { mx: '-$8' },
                }
              : {}),
          }}
        >
          <Button ghost onClick={() => setIsCollapsed(!isCollapsed)} css={{ color: '$whiteA12' }}>
            {isCollapsed ? 'Show' : 'Hide'} code
          </Button>
          <Box
            as="form"
            css={{
              display: 'none',
              color: '$whiteA12',
              verticalAlign: 'middle',
              '@bp2': {
                display: 'inline-block',
              },
            }}
            action="https://codesandbox.io/api/v1/sandboxes/define"
            method="POST"
            target="_blank"
          >
            <input type="hidden" name="query" value="module=App.js" />
            <input type="hidden" name="parameters" value={parameters} />
            <IconButton type="submit" css={{ color: '$whiteA12' }}>
              <CodeSandboxLogoIcon />
            </IconButton>
          </Box>
        </Box>
      )}

      <Box
        css={{
          position: 'relative',
          ...(isHero
            ? {
                mt: '$2',
                '@bp3': { mx: '-$7' },
                '@bp4': { mx: '-$8' },
              }
            : { my: '$5' }),
          ...(isCollapsed ? { display: 'none' } : {}),
        }}
      >
        <IconButton
          css={{
            display: 'none',
            '@bp2': {
              position: 'absolute',
              zIndex: 3,
              opacity: 0,
              top: '$2',
              right: '$2',
              display: 'inline-flex',

              '*:hover > &': { opacity: 1, transition: '150ms linear' },
            },
          }}
          onClick={() => setHasCopied(true)}
        >
          {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
        </IconButton>
        <Box
          css={{
            overflow: 'auto',
            borderRadius: '$3',
            position: 'relative',
            // hacks
            backgroundColor: '$violet2',
            py: '$4',
            '& > pre': {
              backgroundColor: 'transparent',
              overflow: 'visible',
              py: 0,
            },
            // end hacks
          }}
        >
          <Pre
            ref={preRef}
            data-invert-line-highlight={isHighlightingLines}
            data-line-numbers={showLineNumbers}
            variant={variant}
            className={className}
            id={id}
            css={{
              float: 'left',
              minWidth: '100%',
              $$outline: 'none',
              borderRadius: 0,
              ...(isHero || isScrollable ? { maxHeight: 400 } : {}),
            }}
          >
            <div>
              <code className={className} children={children} />
            </div>
          </Pre>
        </Box>
      </Box>
    </Box>
  );
}
