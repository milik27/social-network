const path = require("path")

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/register"
  ],

  webpackFinal: (config) => {
    config.resolve.alias['@src'] = path.resolve(__dirname, '../src')

    // inline svg
    config.module.rules.find(({ test }) => test.test(".svg")).exclude = /\.svg$/
    config.module.rules.unshift({
     test: /\.svg$/,
     use: ["react-svg-loader"]
    })

    return config
  },
}
