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