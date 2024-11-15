import { themeColors, themeVariables } from './theme-variables';
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: colors.blue,
      },
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.gray.200', 'currentColor'),
        ...themeColors.border,
      }),
      textColor: {
        color: {
          ...themeColors.text,
          invert: {
            ...themeColors.textInvert,
          },
        },
      },
      backgroundColor: {
        color: {
          ...themeColors.background,
          invert: {
            ...themeColors.backgroundInvert,
          },
          surface: {
            ...themeColors.surface,
          },
        },
      },
      boxShadowColor: {
        DEFAULT: 'var(--plusui-color-shadow)',
      },
      ringColor: {
        DEFAULT: 'var(--plusui-color-border-focus)',
      },
      animation: {
        'progress-indeterminate': 'progress-indeterminate 3s infinite ease-in-out',
      },
      keyframes: {
        'progress-indeterminate': {
          '0%': { transform: 'translateX(-100%) scaleX(0.3)' },
          '50%': { transform: 'translateX(0%) scaleX(0.3)' },
          '100%': { transform: 'translateX(100%) scaleX(0.3)' },
        },
      },
      ...themeVariables,
    },
  },
  plugins: [],
};
