import { StyleSheet } from 'react-native';
export { StyleSheet };

export const Colors = {
  textDefault: '#222222',
  textGray: '#424242',
  textBackground: '#FFF6F6',
  black: '#000',
  white: '#fff',
  gray: '#AAA',
  red: '#F40009',
  pink: '#FD656A',
  pink$1: '#ffd0d0',
  yellow: '#f3ca3e',
  darkGray: '#4F4F4F',
  background: '#FFF6F6',
  popupOverlay: 'rgba(0, 0, 0, 0.75)',
  popupBlurBackground: 'rgba(255, 255, 255, 0.75)',
  green: '#2AC940',
};

export const Layout = {
  defaultWidth: 300,
  defaultHeight: 45,
  defaultRadius: 6,
  smallRadius: 4,
  smallTextSize: 12,
  normalTextSize: 15,
  mediumTextSize: 17,
  largeTextSize: 20,
};

export const FontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  black: '900',
};

export default StyleSheet.create({
  fontSmallSize: {
    fontSize: Layout.smallTextSize,
  },
  fontNormalSize: {
    fontSize: Layout.normalTextSize,
  },
  fontMediumSize: {
    fontSize: Layout.mediumTextSize,
  },
  fontLargeSize: {
    fontSize: Layout.largeTextSize,
  },
  fontLight: {
    fontFamily: 'Rubik-Light',
    fontWeight: FontWeight.light,
    fontStyle: 'normal',
  },
  fontLightItalic: {
    fontFamily: 'Rubik-LightItalic',
    fontWeight: FontWeight.light,
    fontStyle: 'italic',
  },
  fontRegular: {
    fontFamily: 'Rubik-Regular',
    fontWeight: FontWeight.regular,
    fontStyle: 'normal',
  },
  fontRegularItalic: {
    fontFamily: 'Rubik-Italic',
    fontWeight: FontWeight.regular,
    fontStyle: 'italic',
  },
  fontMedium: {
    fontFamily: 'Rubik-Medium',
    fontWeight: FontWeight.medium,
    fontStyle: 'normal',
  },
  fontMediumItalic: {
    fontFamily: 'Rubik-MediumItalic',
    fontWeight: FontWeight.medium,
    fontStyle: 'italic',
  },
  fontBold: {
    fontFamily: 'Rubik-Bold',
    fontWeight: FontWeight.bold,
    fontStyle: 'normal',
  },
  fontBoldItalic: {
    fontFamily: 'Rubik-BoldItalic',
    fontWeight: FontWeight.bold,
    fontStyle: 'italic',
  },
  fontBlack: {
    fontFamily: 'Rubik-Black',
    fontWeight: FontWeight.black,
    fontStyle: 'normal',
  },
  fontBlackItalic: {
    fontFamily: 'Rubik-BlackItalic',
    fontWeight: FontWeight.black,
    fontStyle: 'italic',
  },
});
