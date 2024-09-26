import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {projectColors} from '@/assets';

import styles, {getCheckboxTextContainerStyle, getCheckboxTextStyle} from './styles';
import type {AppCheckboxProps} from './type';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

const AppCheckbox = (props: AppCheckboxProps) => {
  const handlePressCheckbox = () => {
    props.onChanged?.(!props.checked);
  };

  const renderCheckbox = (
    <TouchableOpacity
      onPress={handlePressCheckbox}
      disabled={props.disabled}
      style={[styles.container, props.checked && styles.checkedContainer, props.disabled && styles.disabledContainer, props.error && styles.hasErrorContainer, props.style]}>
      {props.checked && <AppIcon type={props.iconType} color={props.disabled ? projectColors.grey : projectColors.white} size={8} />}
    </TouchableOpacity>
  );

  const renderText = <AppText style={[getCheckboxTextStyle(props), props.textStyle, props.disabled && styles.disabledText]}>{props.text}</AppText>;

  const renderContent = (
    <View pointerEvents={props.textClickable ? 'auto' : 'none'} style={getCheckboxTextContainerStyle(props)}>
      {(props.checkboxPosition === 'left' || props.checkboxPosition === 'top') && renderCheckbox}
      {props.textClickable ? <TouchableOpacity onPress={props.onPressText}>{renderText}</TouchableOpacity> : renderText}
      {(props.checkboxPosition === 'right' || props.checkboxPosition === 'bottom') && renderCheckbox}
    </View>
  );

  return props.textClickable ? (
    <View style={[styles.container, props.style]}>{renderContent}</View>
  ) : (
    <TouchableOpacity onPress={handlePressCheckbox} style={[styles.container, props.style]} disabled={props.disabled}>
      {renderContent}
    </TouchableOpacity>
  );
};

export default memo(AppCheckbox);
