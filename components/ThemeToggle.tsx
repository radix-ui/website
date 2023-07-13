import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@radix-ui/react-icons';
import { IconButton, Tooltip } from '@radix-ui/themes';

export const ThemeToggle = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip content="Toggle theme" side="bottom" align="end">
      <IconButton
        size="3"
        variant="ghost"
        color="gray"
        onClick={() => {
          const newTheme = theme === 'dark' ? 'light' : 'dark';
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
