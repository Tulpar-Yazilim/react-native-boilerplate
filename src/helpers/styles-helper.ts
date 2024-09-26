import {ColorValue, Dimensions, FlexAlignType, FlexStyle, Platform, ViewStyle} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import {fontFamily, projectColors} from '@/assets';
import {FontWeightType} from '@/utils';

import {fontPixel, heightPixel, widthPixel} from './size-helper';

const boxShadow = (size = 6, shadowColor: ColorValue = '#000'): object => ({
  elevation: size,
  shadowColor: shadowColor,
  shadowOffset: {height: size / 2, width: 0},
  shadowOpacity: (0.27 * size) / 6,
  shadowRadius: (4.65 * size) / 6,
});

const textFont = (fontSize?: number, fontColor?: ColorValue, fontWeight?: 'regular' | 'medium' | 'bold', fontStyle?: 'normal' | 'italic', lineHeight?: number): object => {
  const turnItem = {
    color: fontColor ?? projectColors.black,
    fontFamily: (fontStyle ?? 'normal') === 'normal' ? fontFamily.regular : fontFamily.italic,
    fontSize: fontPixel(fontSize ?? 14),
    fontWeight: (fontWeight ?? 'regular') as FontWeightType,
    fontStyle: fontStyle ?? 'normal',
    lineHeight: lineHeight ? fontPixel(lineHeight) : undefined,
  } as {
    fontSize: number;
    fontFamily?: string;
    color?: ColorValue;
    fontStyle?: string;
    lineHeight?: number;
    fontWeight?: FontWeightType | 'regular' | 'medium';
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

const borderBox = (borderColor = projectColors.grey, borderRadius = 0, borderWidth = 1): ViewStyle => {
  return {
    borderWidth: widthPixel(borderWidth),
    borderColor,
    borderRadius: widthPixel(borderRadius),
  };
};

export const isSmallDevice = Platform.OS === 'ios' ? !DeviceInfo.hasNotch() : Dimensions.get('screen').height < 650;
export const tabbarHeight: number = !isSmallDevice && Platform.OS === 'ios' ? heightPixel(90) : heightPixel(62);

export const tabIconSize = widthPixel(20);

export {boxShadow, flexBox, textFont, borderBox};
