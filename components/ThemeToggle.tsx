import React from 'react';
import { darkTheme, IconButton, Tooltip } from '@modulz/design-system';
import { useTheme } from 'next-themes';
import { SunIcon } from '@radix-ui/react-icons';

export const ThemeToggle = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip content="Toggle theme" side="bottom" align="end">
      <IconButton
        variant="ghost"
        onClick={() => {
          const newTheme = theme === 'dark' ? 'light' : 'dark';

          document.documentElement.classList.toggle(darkTheme.className);
          document.documentElement.classList.toggle('light-theme');
          document.documentElement.style.setProperty('color-scheme', newTheme);

          // Finally, we still need to let `next-themes` know of the theme change so that it saves it to local storage.
          setTheme(newTheme);
        }}
        {...props}
        aria-label="toggle a light and dark color scheme"
      >
        <SunIcon />
      </IconButton>
    </Tooltip>
  );
};
