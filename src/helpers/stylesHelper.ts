import {FontWeightType} from '@/utils';
import {ColorValue, Dimensions, FlexAlignType, FlexStyle, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {fontPixel, heightPixel} from './sizeHelper';

const projectColors = {
  primary: '#1890ff',
  success: ' #52c41a',
  warning: '#faad14',
  error: '#f5222d',
  info: '#1890ff',
  white: '#FFFFFFFF' as ColorValue,
  textBlack: '#212123FF' as ColorValue,
  black50: '#1A0407' as ColorValue,
  black100: '#1B0407FF' as ColorValue,
  black40: '#00000040' as ColorValue,
  black: '#000000FF' as ColorValue,
  blackShadow: '#00000035' as ColorValue,
  transparentBlack: '#000000A0' as ColorValue,
  red125: '#A1051DFF' as ColorValue,
  red100: '#CE233AFF' as ColorValue,
  red50: '#F4505FFF' as ColorValue,
  red: '#D63031FF' as ColorValue,
  purple100: '#A52DB4FF' as ColorValue,
  purpleLigth2: '#EEECFBFF' as ColorValue,
  purpleLight: '#F4F3FFFF' as ColorValue,
  transparent: '#FFFFFF00' as ColorValue,
  pink: '#FF576D' as ColorValue,
  yellow: '#E9BD66' as ColorValue,
  blackFilter: '#282626' as ColorValue,
};

const fontFamily = {
  regular: 'DMSans-Regular',
  italic: 'DMSans-Italic',
  medium: 'DMSans-Medium',
  mediumItalic: 'DMSans-MediumItalic',
  bold: 'DMSans-Bold',
  boldItalic: 'DMSans-BoldItalic',
};

const boxShadow = (size = 6, shadowColor: ColorValue = '#000'): object => ({
  shadowColor: shadowColor,
  shadowOffset: {width: 0, height: size / 2},
  shadowOpacity: (0.27 * size) / 6,
  shadowRadius: (4.65 * size) / 6,
  elevation: size,
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
    fontStyle: fontStyle,
    fontSize: fontPixel(fontSize ? fontSize : 14),
    lineHeight: lineHeight ? fontPixel(lineHeight) : undefined,
    fontFamily: fontStyle === 'normal' ? fontFamily.regular : fontFamily.italic,
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
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
  };
};

export const isSmallDevice = Platform.OS === 'ios' ? !DeviceInfo.hasNotch() : Dimensions.get('screen').height < 650;
export const tabbarHeight: number = !isSmallDevice && Platform.OS === 'ios' ? heightPixel(90) : heightPixel(62);

export {boxShadow, flexBox, fontFamily, projectColors, textFont};
