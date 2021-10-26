import React from 'react';
import { Paragraph } from '@modulz/design-system';

export const HeroQuote = ({ children, ...props }: React.ComponentProps<typeof Paragraph>) => {
  return (
    <Paragraph
      {...props}
      size="2"
      as="blockquote"
      css={{
        mt: '$6',
        py: '$6',
        borderTop: '1px solid $colors$slate5',

        textIndent: '-0.61em',
        '&::before': {
          content: '"“"',
          mr: '0.1em',
        },
        '&::after': {
          content: '"”"',
        },

        '@media (min-width: 1300px)': {
          position: 'relative',
          textIndent: 0,
          '&::after': {
            content: 'none',
          },
          '&::before': {
            position: 'absolute',
            color: '$slate6',
            top: 25,
            left: -85,
            fontSize: 130,
            fontWeight: 700,
            fontFamily: 'Times New Roman, serif',
            lineHeight: '1',
            letterSpacing: '-0.045em',
            content: '"‘‘"',
          },
        },
        ...props.css,
      }}
    >
      {(children as any).props?.children ?? children}
    </Paragraph>
  );
};
