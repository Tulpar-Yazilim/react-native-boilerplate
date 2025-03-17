import {ColorValue, PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

import {IconTypes} from '../AppIcon/type';
import {AppTextType} from '../AppText/type';

export type AppButtonType = 'regular' | 'bordered' | 'link' | 'circle' | 'icon';
export type AppButtonSizeType = 'small' | 'large' | 'x-large' | number;
export type AppButtonRadiusType = 'none' | 'small-radius' | 'full-radius' | number;
export type AppButtonIconPositionType = 'left' | 'right';
export type TextDecorationLine = 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;

export type AppButtonProps = {
  type?: AppButtonType;
  height?: AppButtonSizeType;
  width?: number;
  radius?: AppButtonRadiusType;
  borderWidth?: number;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;

  text?: string;
  textColor?: ColorValue;
  textSize?: number;
  textStyle?: StyleProp<TextStyle>;
  textProps?: AppTextType;

  iconType?: keyof typeof IconTypes;
  iconName?: string;
  iconSize?: number;
  iconColor?: ColorValue;
  iconStyle?: StyleProp<ViewStyle>;
  iconPosition?: AppButtonIconPositionType;
  iconFontStyle?: 'brand' | 'regular' | 'solid';

  debounce?: boolean;
} & PressableProps;
