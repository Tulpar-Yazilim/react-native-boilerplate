import {ColorValue, StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

import {IconTypes} from '../AppIcon/type';

export type AppInputRefType = {
  focus?: () => void;
  blur?: () => void;
};

export type AppInputProps = {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  clearable?: boolean;
  error?: boolean;
  loading?: boolean;

  label?: string;
  labelType?: 'animated' | 'block' | 'hidden';
  labelStyle?: StyleProp<TextStyle>;
  labelStatus?: boolean;
  labelContainerStyle?: StyleProp<ViewStyle>;

  animationDuration?: number;

  iconType?: keyof typeof IconTypes;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconColor?: ColorValue;
  iconSize?: number;
  onPressIcon?: () => void;
} & TextInputProps;
