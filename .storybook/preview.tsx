import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';

import '../src/storybook-setup.ts';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-theme'
    }),
    (Story) => (
      <div className="bg-background text-foreground p-6 min-h-30">
        <Story />
      </div>
    )
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Configure your project',
          'Welcome',
          'Components',
          'Transitions',
          'Layout',
          'Overlays',
          'Units',
          'Forms',
          'Widget',
          '*'
        ]
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  initialGlobals: {
    theme: 'light'
  }
};

export default preview;
