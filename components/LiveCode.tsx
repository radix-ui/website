import * as React from 'react';
import { transform as sucraseTransform } from 'sucrase';

interface LiveCodeProps {
  /** Code string to evaluate */
  code?: string;

  /** Scope, or rather, arguments, of the evaluated code */
  scope?: Record<string, unknown>;

  /** When component has rendered. Will pass `undefined` if there was no error. */
  onRender?: (error: Error | undefined) => void;
}

export const LiveCode = ({ code = '', scope = {}, onRender = () => undefined }: LiveCodeProps) => {
  try {
    const transformedCode = transform(code);
    const Preview = evaluate(transformedCode, {
      ...scope,
    });

    return <>{Preview}</>;
  } catch (error) {
    console.error(error);
  }

  return null;
};

const evaluate = (code = '', scope: Record<string, unknown> = {}) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map((key) => scope[key]);
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function('React', ...scopeKeys, code);
  const result = fn(React, ...scopeValues);
  return injectReactClassComponentPrototype(result, code);
};

const transform = (code = '') => {
  // Remove trailing semicolon to get an expression
  const expression = code.trim().replace(/;$/, '');

  if (expression) {
    // Wrap `return (...)` around the expression and inject try / catch
    const withoutImports = removeImports(expression);
    const withFragment = injectFragment(withoutImports);
    const withReturn = injectReturnTryCatch(withFragment);
    const transformed = sucraseTransform(withReturn, {
      transforms: ['jsx', 'typescript'],
    }).code;
    return transformed;
  }

  return '';
};

// Wrap JSX code in React fragment so it's easier to author code that renders multiple elements
const injectFragment = (code = '') => (/^<[^]*>$/m.test(code) ? `<>${code}</>` : code);

// Wrap code in `return` statement so we can create a function and inject try / catch into the expression body
const injectReturnTryCatch = (code = '') => {
  let regexp: RegExp;
  const catchBlock = 'catch (error) { internal__onError(error); return null; }';

  // This might be a class component declared like this: class LoremIpsum extends React.Component ... { ... }
  regexp = /^(class\s+)(\w+)(\s+extends\s+React\.Component)(\s*\{[^]+)/m;
  if (regexp.test(code)) {
    return code.replace(
      regexp,
      `return (function $2 () { try { ${code}; return new $2() } ${catchBlock} })`
    );
  }

  // This might be a function component declared like this: function (...) { ... }
  regexp = /^(function(\s+\w*\s*)?\([^]*?\)\s*\{)([^]+)(\})/m;
  if (regexp.test(code)) {
    return code.replace(regexp, `return ($1 try { $3 } ${catchBlock} })`);
  }

  // This might be a function component declared like this: () => { ... }
  regexp = /^((?:\([^]*?\)|\w+)\s*=>\s*\{)([^]+)(\})/m;
  if (regexp.test(code)) {
    return code.replace(regexp, `return ($1 try { $2 } ${catchBlock} })`);
  }

  // This might be a function component declared like this: () => ...
  regexp = /^((?:\([^]*?\)|\w+)\s*=>\s*)([^]+)/m;
  if (regexp.test(code)) {
    return code.replace(regexp, `return ($1 { try { return $2 } ${catchBlock}})`);
  }

  // No match found, don't do anything fancy
  return `return (${code})`;
};

// We might be creating a function component that returns a class instance.
// Let's make React happy, otherwise it complains with this message:
// “The component appears to be a function component that returns a class instance. [...]
// If you can't use a class try assigning the prototype on the function as a workaround.”
const injectReactClassComponentPrototype = (fn: () => null, code = '') => {
  const regexp = /(class\s+)(\w+)(\s+extends\s+React\.Component)(\s*\{[^]+)/m;

  if (regexp.test(code)) {
    fn.prototype = React.Component.prototype;
  }

  return fn;
};

const removeImports = (code = '') => code.replace(/^(import .+?;|'|")$/gms, '');
