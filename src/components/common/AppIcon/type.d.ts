import {ColorValue, StyleProp, TextStyle} from 'react-native';

import {IconProps} from '@react-native-vector-icons/common';

export const IconTypes = {
  material: 'material',
  fontAwesome: 'fontAwesome',
  feather: 'feather',
};

export type AppIconType = {
  name: string;
  type: keyof typeof IconTypes;
  color?: ColorValue;
  size?: number;
  style?: StyleProp<TextStyle>;
  iconStyle?: 'brand' | 'regular' | 'solid';
} & IconProps;
