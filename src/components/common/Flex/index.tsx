import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import styles, {flexBoxStyle} from './styles';
import type {FlexViewProps} from './type';

export const Flex: FunctionComponent<FlexViewProps> = ({flex, direction, gap, justify, align, ...props}) => {
  return (
    <View style={styles.main} {...props}>
      <View style={flexBoxStyle({flex, direction, gap, justify, align})}>{props.children}</View>
    </View>
  );
};
