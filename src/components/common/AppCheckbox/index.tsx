import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {projectColors} from '@/assets';

import styles, {getCheckboxTextContainerStyle, getCheckboxTextStyle} from './styles';
import type {AppCheckboxProps} from './type';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import AppView from '../AppView';

const AppCheckbox = (props: AppCheckboxProps) => {
  const {checkboxPosition = 'left', ...otherProps} = props;

  const handlePressCheckbox = () => {
    otherProps.onChanged?.(!otherProps.checked);
  };

  const renderCheckbox = (
    <TouchableOpacity
      onPress={otherProps.textClickable ? otherProps.onPressText : handlePressCheckbox}
      disabled={otherProps.disabled}
      style={[styles.container, otherProps.checked && styles.checkedContainer, otherProps.disabled && styles.disabledContainer, otherProps.error && styles.hasErrorContainer, otherProps.style]}>
      {otherProps.checked && (
        <AppView style={styles.checkedIconContainer}>
          <AppIcon name="check" color={otherProps.disabled ? projectColors.grey : projectColors.white} size={20} />
        </AppView>
      )}
    </TouchableOpacity>
  );

  const renderText = <AppText style={[getCheckboxTextStyle(props), otherProps.textStyle, otherProps.disabled && styles.disabledText]}>{otherProps.text}</AppText>;

  const renderContent = (
    <View pointerEvents={otherProps.textClickable ? 'auto' : 'none'} style={getCheckboxTextContainerStyle(props)}>
      {(checkboxPosition === 'left' || checkboxPosition === 'top') && renderCheckbox}
      {otherProps.textClickable ? <TouchableOpacity onPress={otherProps.onPressText}>{renderText}</TouchableOpacity> : renderText}
      {(checkboxPosition === 'right' || checkboxPosition === 'bottom') && renderCheckbox}
    </View>
  );

  return props.textClickable ? (
    <View style={otherProps.style}>{renderContent}</View>
  ) : (
    <TouchableOpacity onPress={handlePressCheckbox} style={otherProps.style} disabled={otherProps.disabled}>
      {renderContent}
    </TouchableOpacity>
  );
};

export default memo(AppCheckbox);
