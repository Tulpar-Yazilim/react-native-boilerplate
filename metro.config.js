/* eslint-disable no-undef */
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');
const path = require("path")

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
