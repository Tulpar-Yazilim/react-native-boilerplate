import {ColorValue, StyleProp, TextStyle} from 'react-native';

import {IconProps} from 'react-native-vector-icons/Icon';

export const IconTypes = {
  zocial: 'zocial',
  octicon: 'octicon',
  material: 'material',
  materialCommunity: 'materialCommunity',
  ionicon: 'ionicon',
  foundation: 'foundation',
  evilicon: 'evilicon',
  entypo: 'entypo',
  fontAwesome: 'fontAwesome',
  fontAwesome5: 'fontAwesome5',
  simpleLineIcon: 'simpleLineIcon',
  feather: 'feather',
  antdesign: 'antdesign',
  fontisto: 'fontisto',
};

export type AppIconType = {
  name: string;
  type: keyof typeof IconTypes;
  color?: ColorValue;
  size?: number;
  style?: StyleProp<TextStyle>;
} & IconProps;
