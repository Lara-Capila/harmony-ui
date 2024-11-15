import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export function useTheme() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return { darkTheme, toggleTheme };
}
