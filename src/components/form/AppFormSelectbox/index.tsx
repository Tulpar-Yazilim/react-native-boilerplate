import React, {memo, useCallback} from 'react';

import {useController, useFormContext} from 'react-hook-form';

import type {AppFormSelectboxProps} from './type';
import {AppSelectbox} from '@/components/common';
import {useTranslation} from 'react-i18next';

const AppFormSelectbox = (props: AppFormSelectboxProps) => {
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

  const handleOnChange = useCallback(
    (val: string) => {
      field.onChange(val);
    },
    [field.onChange],
  );

  return <AppSelectbox {...props} error={hasError} errorMessage={errorMessage} onChange={handleOnChange} />;
};

export default memo(AppFormSelectbox);
