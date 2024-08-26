import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import styles, {flexBoxStyle} from './styles';
import type {FlexProps} from './type';

export const Flex: FunctionComponent<FlexProps> = ({flex, direction, gap, justify, align}) => {
  return (
    <View style={[{height: 200, width: '100%'}, styles.main]}>
      <View style={flexBoxStyle({flex, direction, gap, justify, align})}>
        <View style={{backgroundColor: 'red', flex: 1, width: 40, height: 40}} />
        <View style={{backgroundColor: 'yellow', flex: 1, width: 40, height: 40}} />
        <View style={{backgroundColor: 'green', flex: 1, width: 40, height: 40}} />
        <View style={{backgroundColor: 'purple', flex: 1, width: 40, height: 40}} />
      </View>
    </View>
  );
};
