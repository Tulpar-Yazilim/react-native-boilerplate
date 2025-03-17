import React, {memo, useCallback, useEffect} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

import {useController, useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

import type {AppMaskedFormInputProps} from './type';
import AppMaskedInput from '../../common/AppMaskedInput';

const AppFormMaskedInput = (props: AppMaskedFormInputProps) => {
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
  const errorMessage = (formState.errors?.[props.fieldName]?.message || props.errorMessage || '') as string;

  const handleOnChangeText = useCallback(
    (masked: string, unmasked: string, obfuscated: string) => {
      field.onChange(masked, unmasked, obfuscated);
      props.onChangeText?.(masked, unmasked, obfuscated);
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

  return <AppMaskedInput {...props} value={field.value} error={hasError} errorMessage={errorMessage} onBlur={handleOnBlur} onChangeText={handleOnChangeText} />;
};

export default memo(AppFormMaskedInput);
