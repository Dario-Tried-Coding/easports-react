import { withRouter } from 'storybook-addon-react-router-v6';
import "../src/index.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#f2f2f2',
      },
      {
        name: 'dark',
        value: '#9a9a9a',
      },
    ],
  },
  breakpoints: {
    breakpointNames: {
      'small': '0',
      'medium': '768',
      'large': '1024',
      'xlarge': '1440'
    },
    debounceTimeout: 200
  }
}

export const decorators = [
  withRouter
]