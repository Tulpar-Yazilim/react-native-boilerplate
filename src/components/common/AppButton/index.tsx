import React, {memo} from 'react';
import {Pressable} from 'react-native';

import styles, {createCustomButtonStyle, createCustomTextStyle} from './styles';
import type {AppButtonProps} from './type';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

const AppButton = (props: AppButtonProps) => {
  const textStyle = createCustomTextStyle(props);

  const renderIcon = <AppIcon type={props.iconType} name={props.iconName} style={props.iconStyle} color={props.iconColor} size={props.iconSize} />;

  return (
    <Pressable disabled={props.disabled} style={[styles.container, createCustomButtonStyle(props), props.style]} onPress={props.onPress}>
      {props.type === 'icon' && renderIcon}
      {props.iconName && (props.iconPosition === 'left' || props.type === 'circle') && renderIcon}
      {props.text && (
        <AppText style={[textStyle, props.textStyle]} {...props.textProps}>
          {props.text}
        </AppText>
      )}
      {props.iconName && props.iconPosition === 'right' && renderIcon}
    </Pressable>
  );
};

export default memo(AppButton);
