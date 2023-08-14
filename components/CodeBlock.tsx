// Inspired by https://github.com/rexxars/react-refractor
import React from 'react';
import refractor from 'refractor/core';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';
import bash from 'refractor/lang/bash';
import css from 'refractor/lang/css';
import diff from 'refractor/lang/diff';
import hastToHtml from 'hast-util-to-html';
import rangeParser from 'parse-numeric-range';
import highlightLine from '@lib/rehype-highlight-line';
import highlightWord from '@lib/rehype-highlight-word';
import { Pre } from './Pre';
import { CopyCodeButton } from './CopyCodeButton';

import styles from './CodeBlock.module.css';

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

type PreProps = Omit<React.ComponentProps<typeof Pre>, 'css'>;

type CodeBlockProps = PreProps & {
  language: 'js' | 'jsx' | 'bash' | 'css' | 'diff';
  value: string;
  line?: string;
  isInteractive?: boolean;
  showLineNumbers?: boolean;
  showCopyCodeButton?: boolean;
};

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  (_props, forwardedRef) => {
    const {
      language,
      value,
      line = '0',
      className = '',
      style,
      showLineNumbers,
      showCopyCodeButton = true,
      isInteractive,
      ...props
    } = _props;
    let result = refractor.highlight(value, language);

    result = highlightLine(result, rangeParser(line));

    result = highlightWord(result);

    // convert to html
    result = hastToHtml(result);

    const classes = `language-${language} ${className}`;

    return (
      <Pre
        ref={forwardedRef}
        className={`${styles.Container} ${classes}`}
        style={style}
        data-line-numbers={showLineNumbers}
        {...props}
      >
        <code
          className={classes}
          dangerouslySetInnerHTML={{ __html: result }}
          style={
            isInteractive
              ? { willChange: 'transform', transition: 'transform 200ms ease-in-out' }
              : {}
          }
        />
        {showCopyCodeButton && <CopyCodeButton code={value} className={styles.CopyButton} />}
      </Pre>
    );
  }
);
