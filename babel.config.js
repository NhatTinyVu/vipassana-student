module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '*/': './src/*',
          src: './src',
          'src/*': './src/*',
          i18n: './src/common/i18n',
          'i18n/*': './src/common/i18n/*',
          styles: './src/common/styles',
          'styles/*': './src/common/styles/*',
          constants: './src/common/constants',
          ui: './src/components/ui',
          'ui/*': './src/components/ui/*',
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
