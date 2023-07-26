import React from 'react';
import * as Icons from '@radix-ui/react-icons';
import { CopyToastVisibility } from './CopyToast';
import { Box, Flex, Grid, Text } from '@radix-ui/themes';

import styles from './SearchResults.module.css';

type SearchResultsProps = {
  value: string;
};

const iconNames = Object.keys(Icons).map((key) => {
  switch (key) {
    // Logos using original PascalCase naming can't be automated
    case 'LinkedInLogoIcon':
      return 'LinkedIn Logo';
    case 'GitHubLogoIcon':
      return 'GitHub Logo';
    case 'IconJarLogoIcon':
      return 'IconJar Logo';
    case 'CodeSandboxLogoIcon':
      return 'CodeSandbox Logo';
    case 'CounterClockwiseClockIcon':
      return 'Counter-Clockwise Clock';
    case 'RotateCounterClockwiseIcon':
      return 'Rotate Counter-Clockwise';

    // Naïve UpperCamelCaseIcon to Title Case conversion otherwise
    default:
      return key.replace(/Icon$/, '').replace(/(.)([0-9A-Z])/g, '$1 $2');
  }
});

export const SearchResults = ({ value }: SearchResultsProps) => {
  const cleanValue = escapeStringRegexp(value.trim().replace(/\s/g, ' '));
  const matchingNames = iconNames.filter((name) => new RegExp(`\\b${cleanValue}`, 'gi').test(name));

  return (
    <CopyToastVisibility.Consumer>
      {({ setIcon, setIsVisible }) => (
        <Box>
          {value && matchingNames.length > 0 && (
            <Grid
              gapX="3"
              align="start"
              py={{ initial: '3', sm: '6' }}
              px={{ initial: '4', sm: '7' }}
              className={styles.ResultsWrapper}
              style={
                {
                  '--total-rows': matchingNames.length,
                } as React.CSSProperties
              }
            >
              {matchingNames.map((name) => (
                <Box style={{ minWidth: 0 }} key={name}>
                  <button
                    className={styles.GhostButton}
                    onClick={(event: React.MouseEvent) => {
                      const svg = event.currentTarget.querySelector('svg');
                      const code = svg && svg.parentElement ? svg.parentElement.innerHTML : null;

                      // Copy code to clipboard via a hidden textarea element
                      if (code) {
                        // Temporary shim until a proper focus-visible handler is added
                        if (document.activeElement instanceof HTMLButtonElement) {
                          document.activeElement.blur();
                        }

                        const textarea = document.createElement('textarea');
                        textarea.value = code.toString();
                        textarea.setAttribute('readonly', '');
                        textarea.style.position = 'absolute';
                        textarea.style.left = '-9999px';
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);

                        // Show CopyToast and set latest icon
                        setIsVisible();
                        setIcon(code);
                      }
                    }}
                  >
                    <Flex align="center" justify="start" gap="2">
                      <Flex p="1">
                        {React.createElement(Object.values(Icons)[iconNames.indexOf(name)] as any)}
                      </Flex>
                      <Text
                        size="2"
                        style={{
                          // flexGrow: 0,
                          // flexShrink: 1,
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          // minWidth: 0,
                          // lineHeight: '25px',
                        }}
                      >
                        {name}
                      </Text>
                    </Flex>
                  </button>
                </Box>
              ))}
            </Grid>
          )}
          {!matchingNames.length && (
            <Flex
              align="center"
              justify="center"
              py="6"
              px="6"
              style={{
                minHeight: 300,
              }}
            >
              <Text size="2" style={{ textAlign: 'center' }}>
                No icons for <span style={{ fontWeight: 500 }}>{value}</span>
              </Text>
            </Flex>
          )}
        </Box>
      )}
    </CopyToastVisibility.Consumer>
  );
};

// https://github.com/sindresorhus/escape-string-regexp/blob/main/index.js
function escapeStringRegexp(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
