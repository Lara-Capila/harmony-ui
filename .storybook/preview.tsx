import '../src/index.css';

import { withThemeByClassName } from '@storybook/addon-themes';

const preview = {
  parameters: {
    control: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'theme-light',
      dark: 'theme-dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview;
