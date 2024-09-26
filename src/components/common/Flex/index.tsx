import React, {memo} from 'react';
import {View} from 'react-native';

import {generalStyles} from '@/assets';

import {flexBoxStyle} from './styles';
import type {FlexViewProps} from './type';

const Flex = ({flex, direction, gap, justify, align, ...props}: Readonly<FlexViewProps>) => {
  return (
    <View style={generalStyles.flex} {...props}>
      <View style={flexBoxStyle({flex, direction, gap, justify, align})}>{props.children}</View>
    </View>
  );
};

export default memo(Flex);
