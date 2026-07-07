module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      // Must run last — compiles Reanimated's worklets
      'react-native-worklets/plugin',
    ],
  };
};
