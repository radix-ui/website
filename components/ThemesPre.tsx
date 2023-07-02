import { styled, theme } from '@modulz/design-system';

export const ThemesPre = styled('pre', {
  $$background: '$loContrast',
  $$text: 'var(--gray-a12, $colors$hiContrast)',
  $$syntax1: 'var(--gray-a12)',
  $$syntax2: 'var(--accent-11)',
  $$syntax3: 'var(--gray-a11)',
  $$syntax4: 'var(--gray-a11)',
  $$comment: '$colors$slate10',
  $$removed: '$colors$red11',
  $$added: '$colors$green11',
  $$lineNumbers: '$colors$indigo5',
  $$fadedLines: '$colors$slate10',
  $$highlightedLineBg: 'var(--accent-3, $colors$violet3)',
  $$highlightedWord1Bg: 'var(--accent-4, $colors$violet4)',
  $$highlightedWord1BgActive: 'var(--accent-6, $colors$violet6)',
  $$highlightedWord1Text: 'var(--accent-11, $colors$violet11)',
  $$highlightedWord2Bg: '$colors$red3',
  $$highlightedWord2BgActive: '$colors$red5',
  $$highlightedWord2Text: '$colors$red11',
  $$highlightedWord3Bg: '$colors$green3',
  $$highlightedWord3BgActive: '$colors$green5',
  $$highlightedWord3Text: '$colors$green11',

  boxSizing: 'border-box',
  borderRadius: '0 0 $3 $3',
  padding: '$4 $5',
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '$2',
  lineHeight: '21px',
  whiteSpace: 'pre',
  position: 'relative',
  backgroundColor: 'var(--gray-a1)',
  color: '$$text',
  border: '1px solid var(--gray-a3)',

  '.dark-theme &': {
    backgroundColor: 'var(--white-a2)',
  },

  '& > code': {
    display: 'block',
  },

  '.token.parameter': {
    color: '$$text',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$$syntax1',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$$syntax2',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$$syntax3',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax4',
  },

  '.token.comment': {
    color: '$$comment',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$removed',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$added',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWord1Bg',
    $$xOffset: '0px',
    color: '$$highlightedWord1Text',
    backgroundColor: '$$bgAndShadow',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',
    borderRadius: '2px',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&.on': {
      $$bgAndShadow: '$$highlightedWord1BgActive',
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord2Bg',
    color: '$$highlightedWord2Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord2BgActive',
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord3Bg',
    color: '$$highlightedWord3Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord3BgActive',
    },
  },

  // Line numbers
  '&[data-line-numbers=true]': {
    '.highlight-line': {
      position: 'relative',
      paddingLeft: '$4',

      '&::before': {
        content: 'attr(data-line)',
        position: 'absolute',
        left: -5,
        top: 0,
        color: '$$lineNumbers',
      },
    },
    '[data-invert-line-highlight=true]': {
      '.highlight-line': {
        '&::before': {
          left: 10,
        },
      },
    },
  },

  // Styles for highlighted lines
  '[data-invert-line-highlight=false] .highlight-line': {
    '&, *': {
      transition: 'color 150ms ease',
    },
    '&[data-highlighted=false]': {
      '&, *': {
        color: '$$fadedLines',
      },
    },
  },

  // data-invert-line-highlight
  // Styles for inverted line highlighting
  '[data-invert-line-highlight=true] .highlight-line': {
    mx: '-$5',
    px: '$5',
    '&[data-highlighted=true]': {
      backgroundColor: '$$highlightedLineBg',
    },
  },

  // Typewriter styles
  '.typewriter': {
    opacity: 0,
  },
});
