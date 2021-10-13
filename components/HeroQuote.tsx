import React from 'react';
import { Paragraph, styled } from '@modulz/design-system';

export const HeroQuote = ({ children, ...props }: React.ComponentProps<typeof Paragraph>) => {
  return (
    <Paragraph
      {...props}
      size="2"
      as="blockquote"
      css={{
        position: 'relative',
        my: '$6',
        '&::before': {
          color: '$slate6',
          position: 'absolute',
          top: 65,
          left: -100,
          fontSize: 200,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.07em',
          content: '"‘‘"',
        },
        ...props.css,
      }}
    >
      {(children as any).props?.children ?? children}
    </Paragraph>
  );
};
