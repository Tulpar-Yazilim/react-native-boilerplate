import React, {forwardRef, memo, PropsWithChildren, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {ActivityIndicator, NativeSyntheticEvent, NativeTouchEvent, Pressable, TextInput, TextInputEndEditingEventData, TextInputFocusEventData, TouchableOpacity, View} from 'react-native';

import MaskInput from 'react-native-mask-input';

import {useTranslation} from 'react-i18next';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

import {projectColors} from '@/assets';
import {heightPixel} from '@/helpers';

import styles, {getInputStyle} from '../AppInput/styles';
import type {AppInputProps, AppInputRefType} from '../AppInput/type';
import AppIcon from '../AppIcon';
import {AppMaskedInputProps} from './type';

const AppMaskedInput = forwardRef<AppInputRefType, PropsWithChildren<AppMaskedInputProps>>((inProps, ref) => {
  const props = inProps as AppMaskedInputProps;
  const {
    labelType = 'animated',
    animationDuration = 150,
    editable = true,
    iconPosition = 'right',
    iconColor = projectColors.black20,
    iconSize = 16,
    cursorColor = projectColors.black,
    onPress,
  } = props;

  const {t} = useTranslation();

  const [labelStatus, setLabelStatus] = useState<boolean>(false);
  const [showClear, setShowClear] = useState<boolean>(false);

  const inputRef = useRef<TextInput | null>(null);
  const errorRef = useRef<TextInput | null>(null);
  const valueRef = useRef<string | null>(null);

  const labelAnimate = useSharedValue(false);

  const focus = useCallback(() => {
    inputRef.current?.focus?.();
  }, []);

  const blur = useCallback(() => {
    inputRef.current?.blur?.();
  }, []);

  const handleOnPress = useCallback(
    (e: NativeSyntheticEvent<NativeTouchEvent>) => {
      onPress?.(e);
      focus();
    },
    [onPress],
  );

  const setNativeProps = useCallback((nativeProps: object) => {
    inputRef.current?.setNativeProps?.(nativeProps);
  }, []);

  const setValue = useCallback(
    (value: string) => {
      inputRef.current?.setNativeProps?.({
        text: value,
      });
      valueRef.current = value;
    },
    [inputRef.current, valueRef.current],
  );

  const getValue = useCallback(() => valueRef.current?.toString?.() ?? '', [valueRef]);

  const setError = useCallback((errorMessage?: string) => {
    errorRef.current?.setNativeProps({
      text: errorMessage ?? '',
      style: {
        height: errorMessage ? heightPixel(15) : 0,
        marginVertical: errorMessage ? heightPixel(3) : 0,
      },
    });

    inputRef.current?.setNativeProps({
      borderColor: errorMessage ? projectColors.error : projectColors.black20,
      placeholderTextColor: errorMessage ? projectColors.error : projectColors.black20,
    });
  }, []);

  useImperativeHandle(ref, () => ({
    setNativeProps,
    setError,
    setValue,
    getValue,
    focus,
    blur,
  }));

  useEffect(() => {
    labelAnimate.value = !!valueRef.current || labelStatus || !!props.mask;
    setShowClear((props.clearable ?? false) && !!valueRef.current);
  }, [valueRef.current, labelStatus]);

  useEffect(() => {
    setError(props.errorMessage);
  }, [props.error, props.errorMessage]);

  useEffect(() => {
    if (props.autoFocus) {
      focus();
    }
  }, [props.autoFocus]);

  useEffect(() => {
    setValue(props.value ?? '');
    setLabelStatus(!!props.value);
  }, [props.value]);

  const labelStyle = useAnimatedStyle(() => {
    return {
      marginTop: withTiming(labelAnimate.value || props.mask ? 12 : 19.5, {
        duration: animationDuration,
      }),
      fontSize: withTiming(labelAnimate.value || props.mask ? 11 : 14, {
        duration: animationDuration,
      }),
      lineHeight: withTiming(labelAnimate.value || props.mask ? 15 : 21, {
        duration: animationDuration,
      }),
    };
  }, []);

  useEffect(() => {
    if (props.labelStatus !== undefined) {
      setLabelStatus(props.labelStatus);
    }
  }, [props.labelStatus]);

  const handleOnChangeText = useCallback(
    (masked: string, unmasked: string, obfuscated: string) => {
      props.onChangeText?.(masked, unmasked, obfuscated);
    },
    [props.onChangeText],
  );

  const handleOnBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      props.onBlur?.(e);
    },
    [props.onBlur],
  );

  const handleOnFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setLabelStatus(true);
      props.onFocus?.(e);
    },
    [labelStatus, props.onFocus],
  );

  const handleOnEndEditing = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
      setLabelStatus(!!e.nativeEvent.text);
      props.onEndEditing?.(e);
    },
    [labelStatus],
  );

  const handleClearValue = () => {
    inputRef.current?.setNativeProps?.({
      text: '',
    });
    valueRef.current = '';
    labelAnimate.value = false;
    setLabelStatus(false);
    setShowClear(false);
    props.onClear?.();
  };

  const renderLabel = (
    <View pointerEvents={'none'} style={[styles.labelContainer, props.labelContainerStyle]}>
      <Animated.Text style={[styles.labelContent, labelStatus && styles.labelContentFocused, labelType === 'animated' ? labelStyle : styles.blockLabel, props.labelStyle]}>
        {t(props.label as string)}
      </Animated.Text>
    </View>
  );

  const renderEraseIcon = (
    <TouchableOpacity onPress={handleClearValue} style={[styles.clearIconButton, labelType === 'hidden' && styles.iconContainerBlock]}>
      <AppIcon type="feather" name="close" color={iconColor} size={iconSize} />
    </TouchableOpacity>
  );

  const renderIcon = (
    <TouchableOpacity
      onPress={props.onPressIcon}
      style={[styles.iconContainer, iconPosition === 'left' && styles.iconContainerLeft, labelType === 'hidden' && styles.iconContainerBlock, props.iconContainerStyle]}>
      <AppIcon type={props.iconType!} name={props.iconName!} color={iconColor} size={iconSize} />
    </TouchableOpacity>
  );

  const renderSpinner = <ActivityIndicator style={styles.spinnerIconContainer} />;

  return (
    <>
      <Pressable onPress={handleOnPress} style={[getInputStyle(props as AppInputProps), props.loading && styles.inputContainerDisable, props.style]}>
        {labelType !== 'hidden' && props.label && renderLabel}
        {props.iconName && iconPosition === 'left' && renderIcon}
        <MaskInput
          {...props}
          ref={inputRef}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onEndEditing={handleOnEndEditing}
          onChangeText={handleOnChangeText}
          style={[styles.inputContent, props.style]}
          cursorColor={cursorColor}
          textAlignVertical={props.multiline ? 'top' : 'center'}
          editable={editable && !props.loading}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          mask={props.mask}
        />
        {props.iconName && iconPosition === 'right' && !props.loading && renderIcon}
        {!props.loading && props.clearable && showClear && renderEraseIcon}
        {props.loading && renderSpinner}
      </Pressable>
      <TextInput readOnly ref={errorRef} style={[styles.errorText]} />
    </>
  );
});

export default memo(AppMaskedInput);
