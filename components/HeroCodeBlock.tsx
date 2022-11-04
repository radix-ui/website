import * as React from 'react';
import { Box, Flex, Button, IconButton, Tooltip } from '@modulz/design-system';
import * as Tabs from '@radix-ui/react-tabs';
import * as Collapsible from '@radix-ui/react-collapsible';
import { getParameters } from 'codesandbox/lib/api/define';
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons';
import { isValidCssLib, useCssLibPreference } from './CssLibPreference';
import { FrontmatterContext } from './MDXComponents';
import { Pre } from './Pre';
import { CopyCodeButton } from './CopyCodeButton';
import { CSS_LIB_NAMES } from '@lib/constants';
import { Select } from '@components/Select';
import type { CssLib } from '@lib/constants';

export const HeroCodeBlock = ({ children }: { children?: React.ReactNode }) => {
  const frontmatter = React.useContext(FrontmatterContext);
  const [preferredCssLib, setPreferredCssLib] = useCssLibPreference();
  const [isCodeExpanded, setIsCodeExpanded] = React.useState(false);

  const snippets = React.Children.toArray(children).map((pre) => {
    if (pre && typeof pre === 'object' && 'props' in pre) {
      return {
        id: pre.props.title,
        title: pre.props.title,
        cssLib: pre.props.cssLib,
        children: React.Children.only(pre.props.children).props?.children,
        source: pre.props.source,
      };
    }
  });

  const availableCssLibs = snippets.map(({ cssLib }) => cssLib).filter(onlyUnique);
  const currentTabs = snippets.filter(({ cssLib }) => cssLib === preferredCssLib);
  const sources = currentTabs.reduce((sources, tab) => {
    return { ...sources, [tab.title]: tab.source };
  }, {});

  const [currentTabValue, setCurrentTabValue] = React.useState(() => currentTabs[0]?.id);

  React.useEffect(() => {
    // Reset tab if the current one isn't available
    const tabExists = currentTabs.find((tab) => tab.id === currentTabValue);
    if (!tabExists) setCurrentTabValue(currentTabs[0]?.id);
  }, [currentTabValue, currentTabs]);

  return (
    <Box css={{ position: 'relative', '@bp3': { mx: '-$7' }, '@bp4': { mx: '-$8' } }}>
      <Collapsible.Root open={isCodeExpanded} onOpenChange={setIsCodeExpanded}>
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
              value={makeCodeSandboxParams(frontmatter.name, sources, preferredCssLib)}
            />
            <Tooltip content={`Open ${CSS_LIB_NAMES[preferredCssLib]} demo in CodeSandbox`}>
              <IconButton type="submit" css={{ color: '$whiteA12' }}>
                <CodeSandboxLogoIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Collapsible.Content asChild forceMount>
          <Box css={{ position: 'relative' }}>
            <Tabs.Root
              value={currentTabValue}
              onValueChange={(value) => {
                setCurrentTabValue(value);
                setIsCodeExpanded(true);
              }}
            >
              <Flex
                align="center"
                justify="between"
                css={{
                  height: 40,
                  boxShadow: 'inset 0 -1px 0 0 $colors$violet5',
                  backgroundColor: '$violet2',
                  paddingRight: '$2',
                }}
              >
                <Tabs.List
                  style={{
                    height: '100%',
                  }}
                >
                  {currentTabs.map((tab) => (
                    <Tabs.Trigger key={tab.id} value={tab.id} asChild>
                      <Box
                        as="button"
                        css={{
                          appearance: 'none',
                          backgroundColor: 'transparent',
                          border: 'none',
                          lineHeight: '1',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          flexShrink: 0,
                          position: 'relative',
                          userSelect: 'none',
                          paddingLeft: '$2',
                          paddingRight: '$2',
                          gap: '$2',
                          fontSize: '$2',
                          height: '100%',
                          outline: 'none',
                          '&[data-state="active"]': {
                            fontWeight: 500,
                            letterSpacing: '-.025em',
                            '&::before': {
                              boxSizing: 'border-box',
                              content: '""',
                              height: '2px',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                              right: '0',
                              backgroundColor: '$violet9',
                            },
                          },
                        }}
                      >
                        <Flex
                          as="span"
                          align="center"
                          css={{
                            height: '$5',
                            paddingLeft: '$1',
                            paddingRight: '$1',
                            borderRadius: '$1',
                            'button:hover &': {
                              backgroundColor: '$blackA3',
                            },
                            'button:focus &': {
                              boxShadow: '0 0 0 2px $colors$violet7',
                            },
                          }}
                        >
                          {tab.title}
                        </Flex>
                      </Box>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>

                {availableCssLibs.length > 1 ? (
                  <Box>
                    <Select
                      aria-label="Choose a styling solution"
                      value={preferredCssLib}
                      onChange={(event) => {
                        const lib = event.target.value;
                        if (isValidCssLib(lib)) setPreferredCssLib(lib);
                      }}
                    >
                      {availableCssLibs.map((lib) => (
                        <option key={lib} value={lib}>
                          {CSS_LIB_NAMES[lib]}
                        </option>
                      ))}
                    </Select>
                  </Box>
                ) : null}
              </Flex>

              {currentTabs.map((tab) => (
                <Tabs.Content key={tab.id} value={tab.id} asChild>
                  <Box
                    css={{
                      position: 'relative',
                      borderBottomLeftRadius: '$3',
                      borderBottomRightRadius: '$3',
                      '&:focus': {
                        outline: 'none',
                        boxShadow: '0 0 0 2px $colors$violet7',
                      },
                    }}
                  >
                    <Pre
                      variant="violet"
                      css={{
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        maxHeight: isCodeExpanded ? 600 : 100,
                      }}
                    >
                      <code>{tab.children}</code>
                    </Pre>
                    <CopyCodeButton code={sources[tab.id]} />
                  </Box>
                </Tabs.Content>
              ))}
            </Tabs.Root>

            <Flex
              css={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: '$2',
                background: 'linear-gradient(180deg, transparent, $colors$violet2)',
                borderRadius: '0 0 $2 $2',
              }}
              justify="center"
            >
              <Collapsible.Trigger asChild>
                <Button ghost css={{}}>
                  {isCodeExpanded ? 'Collapse' : 'Expand'} code
                </Button>
              </Collapsible.Trigger>
            </Flex>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

const onlyUnique = <T,>(value: T, index: number, self: T[]) => self.indexOf(value) === index;

const makeCodeSandboxParams = (
  componentName: string,
  sources: Record<string, string>,
  cssLib: CssLib
) => {
  const globalCss = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 120px;
}

svg {
  display: block;
}
`;

  const dependencies = {
    react: 'latest',
    'react-dom': 'latest',
    '@radix-ui/colors': 'latest',
    '@radix-ui/react-icons': 'latest',
    [`@radix-ui/react-${componentName}`]: 'latest',
  };

  if (cssLib === 'css') {
    dependencies['classnames'] = 'latest';
  }

  if (cssLib === 'stitches') {
    dependencies['@stitches/react'] = 'latest';
  }

  const files = {
    'package.json': {
      content: {
        dependencies,
        devDependencies: {
          'react-scripts': 'latest',
        },
      } as any,
      isBinary: false,
    },
    'App.js': {
      content: sources['index.jsx'],
      isBinary: false,
    },
    'index.js': {
      content: `import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);`,
      isBinary: false,
    },
    'global.css': {
      content: globalCss,
      isBinary: false,
    },
  };

  if (cssLib === 'css') {
    files['styles.css'] = {
      content: sources['styles.css'],
      isBinary: false,
    };
  }

  return getParameters({ files });
};
