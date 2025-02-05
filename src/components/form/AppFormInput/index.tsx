import React, {memo, useCallback} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

import {useController, useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

import {checkEmail, checkNumeric, checkPassword} from '@/helpers';

import type {AppFormInputProps} from './type';
import AppInput from '../../common/AppInput';

const AppFormInput = (props: AppFormInputProps) => {
  const {t} = useTranslation();
  const formContext = useFormContext();
  const {formState} = formContext;

  const customValidation = {...props.validate};
  if (props.textFormat === 'numeric') {
    customValidation.numericControl = (value: string) => {
      return checkNumeric(value);
    };
  } else if (props.textFormat === 'email') {
    customValidation.eMailControl = (value: string) => {
      return checkEmail(value);
    };
  } else if (props.textFormat === 'password' && props.checkPasswordStrength) {
    customValidation.passwordStrengthCheck = (value: string) => {
      return checkPassword(value);
    };
  } else if (props.textFormat === 'password' && props.checkPasswordsEqual) {
    customValidation.checkPasswordsEqual = value => {
      return props.masterPassword === value ? true : t('validation.passwordNotMatch').toString();
    };
  }

  const {field} = useController({
    name: props.fieldName,
    rules: {
      required: props.required && {
        value: props.required,
        message: props.requiredMessage ?? t('validation.requiredError'),
      },
      minLength: props.minLength && {
        value: props.minLength,
        message:
          props.minLengthMessage ??
          t('validation.minError', {
            min: props.minLength.toString(),
          }),
      },
      maxLength: props.maxLength && {
        value: props.maxLength,
        message: props.maxLengthMessage ?? t('validation.maxError', {max: props.maxLength}),
      },
      min: props.numericMin && {
        value: props.numericMin,
        message:
          props.numericMinMessage ??
          t('validation.numericMinError', {
            min: props.numericMin,
          }),
      },
      max: props.numericMax && {
        value: props.numericMax,
        message:
          props.numericMaxMessage ??
          t('validation.numericMaxError', {
            max: props.numericMax,
          }),
      },
      validate: customValidation,
      pattern: props.pattern && {
        value: props.pattern,
        message: props.patternMessage as string,
      },
    },
  });

  const hasError = Boolean(formState.errors?.[props.fieldName]) || props.error;
  const errorMessage = (formState.errors?.[props.fieldName]?.message || props.errorMessage || '') as string;

  const handleOnChangeText = useCallback(
    (text: string) => {
      field.onChange(text);
      props.onChangeText?.(text);
    },
    [field.onChange, props.onChangeText],
  );

  const handleOnBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      field.onBlur();
      props.onBlur?.(e);
    },
    [field.onBlur, props.onBlur],
  );

  return <AppInput {...props} error={hasError} errorMessage={errorMessage} onBlur={handleOnBlur} onChangeText={handleOnChangeText} />;
};

export default memo(AppFormInput);
