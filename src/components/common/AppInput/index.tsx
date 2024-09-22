import React, {forwardRef, memo, PropsWithChildren, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {Animated, NativeSyntheticEvent, TextInput, TextInputEndEditingEventData, TextInputFocusEventData, TouchableOpacity, View} from 'react-native';

import {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

import {projectColors} from '@/helpers';

import styles, {getInputStyle} from './styles';
import type {AppInputProps, AppInputRefType} from './type';
import AppIcon from '../AppIcon';

const AppInput = forwardRef<AppInputRefType, PropsWithChildren<AppInputProps>>((inProps, ref) => {
  const props = inProps as AppInputProps;

  const [labelStatus, setLabelStatus] = useState<boolean>(!!props.value);
  const inputRef = useRef<TextInput>(null);

  const labelAnimate = useSharedValue(false);

  const focus = () => {
    inputRef?.current?.focus?.();
  };

  const blur = () => {
    inputRef?.current?.blur?.();
  };

  useImperativeHandle(ref, () => ({
    focus,
    blur,
  }));

  useEffect(() => {
    labelAnimate.value = !!props.value || labelStatus;
  }, [props.value, labelStatus]);

  useEffect(() => {
    if (props.autoFocus) {
      focus();
    }
  }, [props.autoFocus]);

  const labelStyle = useAnimatedStyle(() => {
    return {
      marginTop: withTiming(labelAnimate.value ? 12 : 19.5, {
        duration: props.animationDuration,
      }),
      fontSize: withTiming(labelAnimate.value ? 11 : 16, {
        duration: props.animationDuration,
      }),
      lineHeight: withTiming(labelAnimate.value ? 15 : 21, {
        duration: props.animationDuration,
      }),
    };
  }, []);

  useEffect(() => {
    if (labelStatus !== undefined) {
      setLabelStatus(props.labelStatus!);
    }
  }, [props.labelStatus]);
  const handleFocusTextInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setLabelStatus(true);
    props.onFocus?.(e);
  };

  const handleEndEditingTextInput = (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
    setLabelStatus(!!e.nativeEvent.text);
    props.onEndEditing?.(e);
  };

  const renderLabel = (
    <View pointerEvents={'none'} style={[styles.labelContainer, props.labelContainerStyle]}>
      <Animated.Text style={[styles.labelContent, labelStatus && styles.labelContentFocused, props.labelType === 'animated' ? labelStyle : styles.blockLabel, props.labelStyle]}>
        {props.label}
      </Animated.Text>
    </View>
  );

  const renderEraseIcon = (
    <TouchableOpacity onPress={() => props.onChangeText?.('')} style={[styles.clearIconButton, props.labelType === 'hidden' && styles.iconContainerBlock]}>
      <AppIcon type="feather" name="clear" color={projectColors.grey} size={10} />
    </TouchableOpacity>
  );

  const renderIcon = (
    <TouchableOpacity
      onPress={props.onPressIcon}
      style={[styles.iconContainer, props.iconPosition === 'left' && styles.iconContainerLeft, props.labelType === 'hidden' && styles.iconContainerBlock, props.iconContainerStyle]}>
      <AppIcon type={props.iconType} color={props.iconColor} size={props.iconSize} />
    </TouchableOpacity>
  );

  // const renderSpinner = <Lottie source={'Spinner'} style={styles.spinnerIconContainer} playerStyle={styles.spinnerIcon} />;

  return (
    <TouchableOpacity activeOpacity={1} onPress={focus} style={[getInputStyle(props), props.loading && styles.inputContainerDisable, props.style]}>
      {props.labelType !== 'hidden' && props.label && renderLabel}
      {props.iconName && props.iconPosition === 'left' && renderIcon}
      <TextInput
        {...props}
        ref={inputRef}
        onFocus={handleFocusTextInput}
        onEndEditing={handleEndEditingTextInput}
        placeholder={props.labelType !== 'animated' ? props.placeholder : undefined}
        style={[styles.inputContent, props.style]}
        textAlignVertical={props.multiline ? 'top' : 'center'}
        editable={props.editable && !props.loading}
      />
      {props.iconName && props.iconPosition === 'right' && !props.clearable && !props.loading && renderIcon}
      {!props.loading && props.clearable && props.value && renderEraseIcon}
      {/* {props.loading && renderSpinner} */}
    </TouchableOpacity>
  );
});

export default memo(AppInput);
