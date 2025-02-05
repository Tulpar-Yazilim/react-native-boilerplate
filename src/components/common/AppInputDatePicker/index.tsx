import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';

import dayjs from 'dayjs';

import {useThemeColors} from '@/hooks';

import type {AppInputDatePickerProps} from './type';
import AppDatePicker from '../AppDatePicker';
import AppInput from '../AppInput';
import {AppInputRefType} from '../AppInput/type';

const AppInputDatePicker = (props: AppInputDatePickerProps) => {
  const inputRef = useRef<AppInputRefType | null>(null);

  const [visible, setVisible] = useState<boolean>(false);

  const colors = useThemeColors();

  const handleOnPress = () => {
    setVisible(true);
  };

  const handleOnConfirm = useCallback((_date: Date) => {
    props.onConfirm?.(_date);
    setVisible(false);
    inputRef.current?.setValue?.(dayjs(new Date(_date)).format('DD.MM.YYYY'));
  }, []);

  const handleOnCancel = useCallback(() => {
    props.onCancel?.();
    setVisible(false);
  }, []);

  const handleOnClear = useCallback(() => {
    props.onClear?.();
  }, []);

  useEffect(() => {
    if (props.value) {
      inputRef.current?.setValue?.(props.value);
    }
  }, [props.value]);

  return (
    <View style={props.style}>
      <AppInput
        ref={inputRef}
        onPress={handleOnPress}
        onClear={handleOnClear}
        readOnly
        iconType="material"
        iconName="calendar-blank-outline"
        iconPosition="right"
        iconSize={22}
        iconColor={colors.black}
        label="date"
        {...props}
      />
      <AppDatePicker minimumDate={props.minDate} maximumDate={props.maxDate} visible={visible} onCancel={handleOnCancel} onConfirm={handleOnConfirm} />
    </View>
  );
};

export default memo(AppInputDatePicker);
