/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    '@storybook/addon-a11y',
    '@storybook/testing-library',
    "@storybook/addon-interactions",
    '@storybook/addon-designs',
    // "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["..\\public"],
};
export default config;
