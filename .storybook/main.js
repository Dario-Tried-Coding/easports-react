module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "storybook-addon-react-router-v6",
    'storybook-design-token',
    'storybook-addon-breakpoints',
    'storybook-dark-mode',
    '@storybook/addon-storysource',
    "@whitespace/storybook-addon-html",
    "storybook-color-picker"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}