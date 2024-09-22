import {TextProps} from 'react-native';

export type AppTextType = {
  params?: object;
  animated?: boolean;
  html?: boolean;
  pressable?: boolean;
  touchable?: boolean;
  multiline?: boolean;
} & TextProps;
