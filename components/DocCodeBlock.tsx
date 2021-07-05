import React from 'react';
import { Box, Button } from '@modulz/design-system';
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
        as="pre"
        variant={variant}
        css={{
          my: '$5',
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
        <code className={className} children={children} />
      </Pre>
    </>
  );
}
