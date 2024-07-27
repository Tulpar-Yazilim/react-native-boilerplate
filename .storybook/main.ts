const main = {
  stories: ['../src/components/**/**/__stories__/*.stories.?(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-react-native-web'],
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
};

export default main;
