'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextProps = {
  darkTheme: boolean;
  toggleTheme: () => void;
};

const themeContextDefaultProps: ThemeContextProps = {
  darkTheme: false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(themeContextDefaultProps);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(themeContextDefaultProps.darkTheme);

  const toggleTheme = () => {
    setDarkTheme((curr) => !curr);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (!currentTheme) {
      if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark)')) {
        setDarkTheme(true);
      }
    } else {
      setDarkTheme(currentTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.body.className = darkTheme ? 'theme-dark' : 'theme-light';
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  const value = useMemo(() => ({ darkTheme, toggleTheme }), [darkTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
