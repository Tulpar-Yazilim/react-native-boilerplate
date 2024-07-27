import {ColorValue, Dimensions, FlexAlignType, FlexStyle, Platform} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import {FontWeightType} from '@/utils';

import {fontPixel, heightPixel} from './size-helper';

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

const textFont = (
  fontSize: number | undefined = undefined,
  fontColor: ColorValue | undefined = projectColors.black,
  fontWeight: 'regular' | 'medium' | 'bold' = 'regular',
  fontStyle: 'normal' | 'italic' = 'normal',
  lineHeight: number | undefined = undefined,
): object => {
  const turnItem: {
    fontSize: number;
    fontFamily: string;
    color?: ColorValue | undefined;
    fontStyle?: string | undefined;
    lineHeight?: number | undefined;
    fontWeight?: FontWeightType;
  } = {
    color: fontColor,
    fontFamily: fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic,
    fontSize: fontPixel(fontSize ? fontSize : 14),
    fontStyle: fontStyle,
    lineHeight: lineHeight ? fontPixel(lineHeight) : undefined,
  };

  switch (fontWeight) {
    case 'bold':
      turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.bold : fontFamily.boldItalic;
      turnItem.fontWeight = 'bold';
      break;
    case 'medium':
      turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.medium : fontFamily.mediumItalic;
      turnItem.fontWeight = '500';
      break;
    case 'regular':
      turnItem.fontFamily = turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic;
      turnItem.fontWeight = 'normal';
      break;
    default:
      turnItem.fontFamily = turnItem.fontFamily = fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic;
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
    alignItems,
    display: 'flex',
    flexDirection,
    flexWrap,
    justifyContent,
  };
};

export const isSmallDevice = Platform.OS === 'ios' ? !DeviceInfo.hasNotch() : Dimensions.get('screen').height < 650;
export const tabbarHeight: number = !isSmallDevice && Platform.OS === 'ios' ? heightPixel(90) : heightPixel(62);

export {boxShadow, flexBox, fontFamily, projectColors, textFont};
