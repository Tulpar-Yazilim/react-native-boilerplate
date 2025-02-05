import React, {memo} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

import {useController, useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

import {AppInputDatePicker} from '@/components/common';

import type {AppFormInputDatePickerProps} from './type';

const AppFormInputDatePicker = (props: AppFormInputDatePickerProps) => {
  const {t} = useTranslation();
  const formContext = useFormContext();
  const {formState} = formContext;

  const {field} = useController({
    name: props.fieldName,
    rules: {
      required: props.required && {
        value: props.required,
        message: props.requiredMessage ?? t('validation.requiredError'),
      },
    },
  });

  const hasError = Boolean(formState.errors?.[props.fieldName]) || props.error;
  const errorMessage = (formState.errors?.[props.fieldName as never]?.message || props.errorMessage || '') as string;

  const handleOnClear = () => {
    field.onChange('');
    props.onChangeText?.('');
  };

  const handleOnConfirm = (value: Date) => {
    field.onChange(value);
    props.onConfirm?.(value);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    field.onBlur();
    props.onBlur?.(e);
  };

  return <AppInputDatePicker {...props} error={hasError} errorMessage={errorMessage} onConfirm={handleOnConfirm} onBlur={handleOnBlur} onClear={handleOnClear} />;
};

export default memo(AppFormInputDatePicker);
