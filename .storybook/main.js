const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    'storybook-preset-inline-svg',
    'storybook-react-i18next',
    'addon-redux',
    // '@react-theming/storybook-addon',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },

  // fix react theme provider issue
  // ref: https://github.com/mui-org/material-ui/issues/24282#issuecomment-1000619912
  features: { emotionAlias: false },

  webpackFinal: async (config, { configType }) => {
    // for storybook to read '~' prefix
    {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../src/'),
      }
    }
    return config
  },
}
