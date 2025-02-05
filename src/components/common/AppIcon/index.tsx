import React, {memo} from 'react';

import Feather from '@react-native-vector-icons/feather';
import FontAwesome from '@react-native-vector-icons/fontawesome6';
import MaterialDesign from '@react-native-vector-icons/material-design-icons';

import {widthPixel} from '@/helpers';

import {AppIconType, IconTypes} from './type';

const getIconType = (type: keyof typeof IconTypes) => {
  switch (type) {
    case 'material':
      return MaterialDesign;
    case 'fontAwesome':
      return FontAwesome;
    case 'feather':
      return Feather;
    default:
      return Feather;
  }
};
const AppIcon = (props: AppIconType) => {
  const {type, name, size, iconStyle = 'regular', ...rest} = props;
  const IconComponent = getIconType(type);
  return <IconComponent {...rest} name={name} size={widthPixel(size ?? 24)} iconStyle={iconStyle} />;
};

export default memo(AppIcon);
