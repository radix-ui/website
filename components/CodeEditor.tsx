import React from 'react';
import Editor from 'react-simple-code-editor';
import { styled } from '@modulz/design-system';
import refractor from 'refractor/core';
import jsx from 'refractor/lang/jsx';
import hastToHtml from 'hast-util-to-html';

refractor.register(jsx);

const highlight = (code: string) => hastToHtml(refractor.highlight(code, 'jsx'));

export const StyledEditor = styled(Editor, {
  minHeight: 200,
  '& >textarea, & > pre': {
    outline: 'none',
    whiteSpace: 'pre !important',
  },
});

type CodeEditorProps = Omit<React.ComponentPropsWithRef<typeof Editor>, 'highlight'>;

export const CodeEditor = (props: CodeEditorProps) => {
  return <StyledEditor highlight={highlight} {...props} />;
};
