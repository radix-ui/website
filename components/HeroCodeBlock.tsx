import * as React from 'react';
import { Box, Flex, Button, IconButton, Tooltip } from '@modulz/design-system';
import * as Tabs from '@radix-ui/react-tabs';
import * as Collapsible from '@radix-ui/react-collapsible';
import { getParameters } from 'codesandbox/lib/api/define';
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons';
import { isValidStylingSolution, useStylingSolution } from './StylingSolutionContext';
import type { StylingSolution } from './StylingSolutionContext';
import { FrontmatterContext } from './MDXComponents';
import { Pre } from './Pre';
import { CopyCodeButton } from './CopyCodeButton';
import { STYLING_SOLUTION_NAMES } from '@lib/constants';

export const HeroCodeBlock = ({ children }: { children?: React.ReactNode }) => {
  const frontmatter = React.useContext(FrontmatterContext);
  const [stylingSolution, setStylingSolution] = useStylingSolution();
  const [collapsed, setCollapsed] = React.useState(true);

  const snippets = React.Children.toArray(children).map((pre) => {
    if (pre && typeof pre === 'object' && 'props' in pre) {
      return {
        id: pre.props.title,
        title: pre.props.title,
        stylingSolution: pre.props.stylingSolution,
        children: React.Children.only(pre.props.children).props?.children,
        source: pre.props.source,
      };
    }
  });

  const availableStylingSolutions = snippets
    .map(({ stylingSolution }) => stylingSolution)
    .filter(onlyUnique);

  const currentTabs = snippets.filter((snippet) => snippet.stylingSolution === stylingSolution);
  const sources = currentTabs.reduce((sources, tab) => {
    return { ...sources, [tab.title]: tab.source };
  }, {});

  const [currentTabValue, setCurrentTabValue] = React.useState(() => currentTabs[0]?.id);

  React.useEffect(() => {
    // Reset tab if the current one isn't available
    const tabExists = currentTabs.find((tab) => tab.id === currentTabValue);
    if (!tabExists) setCurrentTabValue(currentTabs[0]?.id);
  }, [currentTabValue, currentTabs]);

  React.useEffect(() => {
    // Reset to first tab when collapsed
    if (collapsed) setCurrentTabValue(currentTabs[0]?.id);
  }, [collapsed, currentTabs]);

  return (
    <Box css={{ position: 'relative', '@bp3': { mx: '-$7' }, '@bp4': { mx: '-$8' } }}>
      <Collapsible.Root open={!collapsed} onOpenChange={(isOpen) => setCollapsed(!isOpen)}>
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
            <Button ghost css={{ color: '$whiteA12', textShadow: '0 2px 2px rgb(0 0 0 / 12%)' }}>
              {collapsed ? 'Show' : 'Hide'} code
            </Button>
          </Collapsible.Trigger>

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
              value={makeCodeSandboxParams(stylingSolution, frontmatter.name, sources)}
            />
            <Tooltip
              content={`Open ${STYLING_SOLUTION_NAMES[stylingSolution]} demo in CodeSandbox`}
            >
              <IconButton type="submit" css={{ color: '$whiteA12' }}>
                <CodeSandboxLogoIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Collapsible.Content asChild>
          <Box css={{ position: 'relative', top: '$2' }}>
            <Tabs.Root value={currentTabValue} onValueChange={setCurrentTabValue}>
              <Flex>
                <Tabs.List>
                  {currentTabs.map((tab) => (
                    <Tabs.Trigger key={tab.id} value={tab.id}>
                      {tab.title}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>

                {availableStylingSolutions.length > 1 ? (
                  <select
                    value={stylingSolution}
                    onChange={(event) => {
                      const stylingSolution = event.target.value;
                      if (isValidStylingSolution(stylingSolution)) {
                        setStylingSolution(stylingSolution);
                      }
                    }}
                    style={{ marginLeft: 'auto' }}
                  >
                    {availableStylingSolutions.map((stylingSolution) => (
                      <option key={stylingSolution} value={stylingSolution}>
                        {STYLING_SOLUTION_NAMES[stylingSolution]}
                      </option>
                    ))}
                  </select>
                ) : null}
              </Flex>

              {currentTabs.map((tab) => (
                <Tabs.Content key={tab.id} value={tab.id} asChild>
                  <Box
                    css={{
                      position: 'relative',
                      borderRadius: '$3',
                      '&:focus': {
                        outline: 'none',
                        boxShadow: '0 0 0 2px $colors$slateA8',
                      },
                    }}
                  >
                    <Pre variant="violet" css={{ maxHeight: 400 }}>
                      <code>{tab.children}</code>
                    </Pre>
                    <CopyCodeButton code={sources[tab.id]} />
                  </Box>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

const onlyUnique = <T,>(value: T, index: number, self: T[]) => self.indexOf(value) === index;

const makeCodeSandboxParams = (
  stylingSolution: StylingSolution,
  componentName: string,
  sources: Record<string, string>
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

  if (stylingSolution === 'stitches') {
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

  if (stylingSolution === 'css') {
    files['styles.css'] = {
      content: sources['styles.css'],
      isBinary: false,
    };
  }

  return getParameters({ files });
};
