module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '*': './src/*',
          src: './src',
          'src/*': './src/*',
          i18n: './src/common/i18n',
          'i18n/*': './src/common/i18n/*',
          ui: './src/component/ui',
          'ui/*': './src/component/ui/*',
          styles: './src/common/styles',
          'styles/*': './src/common/styles/*',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
