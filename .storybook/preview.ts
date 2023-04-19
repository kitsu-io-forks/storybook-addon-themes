import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    themes: {
      clearable: true,
      default: 'light',
      property: 'data-theme',
      options: [
        { name: 'Light', value: 'light', color: '#fff' },
        { name: 'Dark', value: 'dark', color: '#777' },
        { name: 'Dark (OLED)', value: 'oled', color: '#000' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
