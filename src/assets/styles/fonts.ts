import {StyleSheet} from 'react-native';

import {projectColors} from './colors';

export const fontFamily = Object.freeze({
  bold: 'DMSans-Bold',
  boldItalic: 'DMSans-BoldItalic',
  italic: 'DMSans-Italic',
  medium: 'DMSans-Medium',
  mediumItalic: 'DMSans-MediumItalic',
  regular: 'DMSans-Regular',
});

export const fonts = Object.freeze(
  StyleSheet.create({
    headerTitle: {
      fontFamily: fontFamily.regular,
      fontSize: 20,
      color: projectColors.headerColor,
    },
    largeTitle: {
      fontFamily: fontFamily.regular,
      fontSize: 34,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    largeTitleBold: {
      fontFamily: fontFamily.bold,
      fontSize: 34,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    title: {
      fontFamily: fontFamily.regular,
      fontSize: 28,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    titleBold: {
      fontFamily: fontFamily.bold,
      fontSize: 28,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    title2: {
      fontFamily: fontFamily.regular,
      fontSize: 22,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    titleBold2: {
      fontFamily: fontFamily.bold,
      fontSize: 22,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    title3: {
      fontFamily: fontFamily.regular,
      fontSize: 20,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    titleBold3: {
      fontFamily: fontFamily.bold,
      fontSize: 20,
      letterSpacing: 0.36,
      color: projectColors.black,
    },
    bold: {
      fontFamily: fontFamily.bold,
      letterSpacing: 0.36,
    },
  }),
);
