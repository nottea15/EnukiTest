/* eslint-disable no-undef */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // you configuration might be different
        alias: {
          // add your aliases here
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@navigators': './src/navigators',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
