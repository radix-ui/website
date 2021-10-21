import React from 'react';
import { IconButton, Tooltip } from '@modulz/design-system';
import { useTheme } from 'next-themes';
import { SunIcon } from '@radix-ui/react-icons';

export const ThemeToggle = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip content="Toggle Theme" side="bottom" align="end">
      <IconButton
        variant="ghost"
        onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
        {...props}
        aria-label="toggle a light and dark color scheme"
      >
        <SunIcon />
      </IconButton>
    </Tooltip>
  );
};
