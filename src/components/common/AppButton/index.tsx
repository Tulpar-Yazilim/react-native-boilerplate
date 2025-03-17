import React, {memo} from 'react';
import {Pressable} from 'react-native';

import styles, {createCustomButtonStyle, createCustomTextStyle} from './styles';
import type {AppButtonProps} from './type';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

const AppButton = (props: AppButtonProps) => {
  const textStyle = createCustomTextStyle(props);

  const renderIcon = (
    <AppIcon
      type={props.iconType}
      name={props.iconName}
      style={[{marginLeft: props.iconPosition === 'right' ? 10 : 0, marginRight: props.iconPosition === 'left' ? 10 : 0}, props.iconStyle]}
      color={props.iconColor}
      size={props.iconSize}
      iconStyle={props.iconFontStyle}
    />
  );

  return (
    <Pressable {...props} cancelable={false} style={[styles.container, createCustomButtonStyle(props), props.style]}>
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
