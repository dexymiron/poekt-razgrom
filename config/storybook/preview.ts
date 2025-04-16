import { StyleDecorator } from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator],
};

export default preview;