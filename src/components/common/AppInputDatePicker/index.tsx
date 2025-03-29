import React, {memo, useCallback, useEffect, useRef, useState} from 'react';

import dayjs from 'dayjs';

import {useThemeColors} from '@/hooks';

import type {AppInputDatePickerProps} from './type';
import AppDatePicker from '../AppDatePicker';
import AppInput from '../AppInput';
import {AppInputRefType} from '../AppInput/type';

const AppInputDatePicker = (props: AppInputDatePickerProps) => {
  const {editable = true} = props;

  const colors = useThemeColors();

  const inputRef = useRef<AppInputRefType | null>(null);

  const [visible, setVisible] = useState<boolean>(false);

  const format = props.format ?? 'DD.MM.YYYY';

  const handleOnPress = () => {
    setVisible(true);
  };

  const handleOnConfirm = useCallback((_date: Date) => {
    props.onConfirm?.(_date);
    setVisible(false);
    inputRef.current?.setValue?.(dayjs(new Date(_date)).format(format));
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
      inputRef.current?.setValue?.(dayjs(props.value).format(format));
    }
  }, [props.value]);

  return (
    <>
      <AppInput
        {...props}
        ref={inputRef}
        onPress={editable ? handleOnPress : undefined}
        onPressIcon={editable ? handleOnPress : undefined}
        onClear={editable ? handleOnClear : undefined}
        readOnly
        iconType={props.iconType ?? 'material'}
        iconName={props.iconName ?? 'calendar-blank-outline'}
        iconPosition={props.iconPosition ?? 'right'}
        iconSize={props.iconSize ?? 16}
        iconColor={props.iconColor ?? (editable ? colors.black : colors.black20)}
        label={props.label ?? 'date'}
        value={props.value ? dayjs(props.value).format(format) : ''}
      />
      <AppDatePicker
        date={props.value ? dayjs(props.value).toDate() : dayjs().toDate()}
        minimumDate={props.minDate}
        maximumDate={props.maxDate}
        visible={visible}
        onCancel={handleOnCancel}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

export default memo(AppInputDatePicker);
