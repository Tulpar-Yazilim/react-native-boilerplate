import {ColorValue, Dimensions, FlexAlignType, FlexStyle, Platform, StyleSheet} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import {FontWeightType} from '@/utils';

import {fontPixel, heightPixel, widthPixel} from './size-helper';

const projectColors = {
  black: '#000000FF' as ColorValue,
  black40: '#00000040' as ColorValue,
  black50: '#1A0407' as ColorValue,
  black100: '#1B0407FF' as ColorValue,
  blackFilter: '#282626' as ColorValue,
  blackShadow: '#00000035' as ColorValue,
  error: '#f5222d',
  info: '#1890ff',
  pink: '#FF576D' as ColorValue,
  primary: '#1890ff',
  purple100: '#A52DB4FF' as ColorValue,
  purpleLight: '#F4F3FFFF' as ColorValue,
  purpleLigth2: '#EEECFBFF' as ColorValue,
  red: '#D63031FF' as ColorValue,
  red50: '#F4505FFF' as ColorValue,
  red100: '#CE233AFF' as ColorValue,
  red125: '#A1051DFF' as ColorValue,
  success: ' #52c41a',
  textBlack: '#212123FF' as ColorValue,
  transparent: '#FFFFFF00' as ColorValue,
  transparentBlack: '#000000A0' as ColorValue,
  warning: '#faad14',
  white: '#FFFFFFFF' as ColorValue,
  yellow: '#E9BD66' as ColorValue,
  grey: '#F3F3F3FF' as ColorValue,
  blue: '#4032CFFF' as ColorValue,
};

const themeColors = {
  light: projectColors,
  dark: projectColors,
};

const fontFamily = {
  bold: 'DMSans-Bold',
  boldItalic: 'DMSans-BoldItalic',
  italic: 'DMSans-Italic',
  medium: 'DMSans-Medium',
  mediumItalic: 'DMSans-MediumItalic',
  regular: 'DMSans-Regular',
};

const boxShadow = (size = 6, shadowColor: ColorValue = '#000'): object => ({
  elevation: size,
  shadowColor: shadowColor,
  shadowOffset: {height: size / 2, width: 0},
  shadowOpacity: (0.27 * size) / 6,
  shadowRadius: (4.65 * size) / 6,
});

const textFont = (fontSize?: number, fontColor?: ColorValue, fontWeight?: 'regular' | 'medium' | 'bold', fontStyle?: 'normal' | 'italic', lineHeight?: number): object => {
  const turnItem: {
    fontSize: number;
    fontFamily: string;
    color?: ColorValue;
    fontStyle?: string;
    lineHeight?: number;
    fontWeight?: FontWeightType | 'regular' | 'medium';
  } = {
    color: fontColor ?? projectColors.black,
    fontFamily: fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic,
    fontSize: fontPixel(fontSize ?? 14),
    fontWeight: (fontWeight ?? 'regular') as FontWeightType,
    fontStyle: fontStyle ?? 'normal',
    lineHeight: lineHeight ? fontPixel(lineHeight) : undefined,
  };

  switch (turnItem.fontWeight) {
    case 'bold':
      turnItem.fontFamily = turnItem.fontStyle === 'normal' ? fontFamily.bold : fontFamily.boldItalic;
      turnItem.fontWeight = 'bold';
      break;
    case 'medium':
      turnItem.fontFamily = turnItem.fontStyle === 'normal' ? fontFamily.medium : fontFamily.mediumItalic;
      turnItem.fontWeight = '500';
      break;
    case 'regular':
      turnItem.fontFamily = turnItem.fontFamily = turnItem.fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic;
      turnItem.fontWeight = 'normal';
      break;
    default:
      turnItem.fontFamily = turnItem.fontFamily = turnItem.fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic;
  }

  return turnItem;
};

const flexBox = (
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined = undefined,
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined = undefined,
  alignItems: FlexAlignType | undefined = undefined,
  flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined = undefined,
): FlexStyle => {
  return {
    display: 'flex',
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
  };
};

export const isSmallDevice = Platform.OS === 'ios' ? !DeviceInfo.hasNotch() : Dimensions.get('screen').height < 650;
export const tabbarHeight: number = !isSmallDevice && Platform.OS === 'ios' ? heightPixel(90) : heightPixel(62);

export const tabIconSize = widthPixel(20);
export const tabIconColor = projectColors.black;
export const tabIconSelectedColor = projectColors.red;

export const generalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  overflow: {overflow: 'hidden'},
  noMargin: {margin: 0},
  noPadding: {padding: 0},
  noSpacing: {padding: 0, margin: 0},
  fullWidthHeight: {
    width: '100%',
    height: '100%',
  },
  fullMinHeight: {
    minHeight: '100%',
  },
  relative: {position: 'relative'},
  absolute: {position: 'absolute'},
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9991,
  },
  tab: {
    alignItems: 'center',
    backgroundColor: projectColors.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    width: '100%',
    height: tabbarHeight,
  },
});

export {boxShadow, flexBox, fontFamily, projectColors, themeColors, textFont};
