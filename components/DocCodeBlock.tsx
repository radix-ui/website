import React from 'react';
import { useRunner } from 'react-runner';
import { Box, Button, IconButton, Tooltip } from '@modulz/design-system';
import copy from 'copy-to-clipboard';
import { getParameters } from 'codesandbox/lib/api/define';
import { ClipboardIcon, CodeSandboxLogoIcon, CheckIcon } from '@radix-ui/react-icons';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Pre } from './Pre';
import { FrontmatterContext } from './MDXComponents';
import { HeroContainer } from './HeroContainer';
import { CodeEditor } from './CodeEditor';
import { scope } from './scope';

export function DocCodeBlock({
  className,
  children,
  id,
  code: initialCode = '',
  showLineNumbers = false,
  isHero = false,
  isCollapsible = false,
  isScrollable = false,
  variant,
  isHighlightingLines,
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(isCollapsible);
  const [hasCopied, setHasCopied] = React.useState(false);
  const frontmatter = React.useContext(FrontmatterContext);

  const [code, setCode] = React.useState(initialCode);
  const { element, error } = useRunner({ code, scope });

  React.useEffect(() => {
    if (hasCopied) copy(code);
    setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  return (
    <>
      {isHero && (
        <HeroContainer>
          {element}
          {error && (
            <Box
              css={{
                position: 'absolute',
                left: '$5',
                bottom: '$3',
                right: 120,
                color: '$orange9',
              }}
            >
              {error}
            </Box>
          )}
        </HeroContainer>
      )}
      <Box
        css={{
          position: 'relative',
          ...(isHero
            ? {
                '@bp3': { mx: '-$7' },
                '@bp4': { mx: '-$8' },
              }
            : {}),
        }}
      >
        <Collapsible.Root open={!isCollapsed} onOpenChange={(isOpen) => setIsCollapsed(!isOpen)}>
          {isCollapsible && (
            <Box
              css={{
                position: 'absolute',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '$1',
                top: '-$6',
                right: '$2',
              }}
            >
              <Collapsible.Trigger asChild>
                <Button
                  ghost
                  css={{ color: '$whiteA12', textShadow: '0 2px 2px rgb(0 0 0 / 12%)' }}
                >
                  {isCollapsed ? 'Show' : 'Hide'} code
                </Button>
              </Collapsible.Trigger>

              {isHero && (
                <Box
                  as="form"
                  css={{
                    display: 'none',
                    color: '$whiteA12',
                    '@bp1': { display: 'inline-block' },
                  }}
                  action="https://codesandbox.io/api/v1/sandboxes/define"
                  method="POST"
                  target="_blank"
                >
                  <input type="hidden" name="query" value="module=App.js" />
                  <input
                    type="hidden"
                    name="parameters"
                    value={makeCodeSandboxParams(frontmatter.name, code)}
                  />
                  <Tooltip content="Open demo in CodeSandbox">
                    <IconButton type="submit" css={{ color: '$whiteA12' }}>
                      <CodeSandboxLogoIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
          )}

          <Collapsible.Content forceMount>
            <Box
              css={{
                position: 'relative',
                ...(isCollapsed ? { display: 'none' } : {}),
                ...(isCollapsible ? { top: '$2' } : { my: '$5' }),
              }}
            >
              <Box
                css={{
                  overflow: 'auto',
                  borderRadius: '$3',
                  // hacks
                  backgroundColor: '$violet2',
                  py: '$4',
                  '& > pre': {
                    backgroundColor: 'transparent',
                    overflow: 'visible',
                    py: 0,
                    float: 'left',
                    minWidth: '100%',
                    $$outline: 'none',
                    borderRadius: 0,
                  },
                  // end hacks
                  ...(isHero || isScrollable ? { maxHeight: 400 } : {}),
                }}
              >
                {isHero ? (
                  <Pre variant={variant} className={className} id={id}>
                    <CodeEditor value={code} onValueChange={setCode} />
                  </Pre>
                ) : (
                  <Pre
                    data-invert-line-highlight={isHighlightingLines}
                    data-line-numbers={showLineNumbers}
                    variant={variant}
                    className={className}
                    id={id}
                  >
                    {isHero ? (
                      <CodeEditor value={code} onValueChange={setCode} />
                    ) : (
                      <code className={className} children={children} />
                    )}
                  </Pre>
                )}
              </Box>
              <IconButton
                aria-label="Copy code to clipboard"
                css={{
                  position: 'absolute',
                  top: '$2',
                  right: '$2',
                  display: 'inline-flex',
                  opacity: 0,
                  '*:hover > &, &:focus': { opacity: 1, transition: '150ms linear' },
                }}
                onClick={() => setHasCopied(true)}
              >
                {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
              </IconButton>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>
    </>
  );
}

const makeCodeSandboxParams = (name, code) => {
  const css =
    '*{box-sizing:border-box;margin:0;padding:0;}body{font-family:system-ui;width:100vw;height:100vh;background-image:linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%);display:flex;align-items:flex-start;justify-content:center;}body>div{padding-top:120px}svg{display:block;}';

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
            [`@radix-ui/react-${name}`]: 'latest',
          },
          devDependencies: {
            'react-scripts': 'latest',
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

ReactDOM.render(<div><App /></div>, document.getElementById('root'));`,
        isBinary: false,
      },
      'styles.css': {
        content: css,
        isBinary: false,
      },
    },
  });

  return parameters;
};
