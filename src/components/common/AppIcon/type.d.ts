import {ColorValue, StyleProp, TextStyle} from 'react-native';

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
  color?: ColorValue | string;
  style?: StyleProp<TextStyle>;
} & IconProp;
