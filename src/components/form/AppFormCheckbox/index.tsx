import React, {memo} from 'react';

import {useController, useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

import type {AppFormCheckboxProps} from './type';
import AppCheckbox from '../../common/AppCheckbox';
import styles from './styles';

const AppFormCheckbox = (props: AppFormCheckboxProps) => {
  const {t} = useTranslation();
  const formContext = useFormContext();
  const {formState} = formContext;

  const {field} = useController({
    name: props.fieldName as string,
    rules: {
      required: props.required && {
        value: props.required,
        message: props.requiredMessage ?? t('validation.requiredError'),
      },
    },
  });

  const hasError = Boolean(formState.errors?.[props.fieldName as never]) || props.error;
  const errorMessage = (formState.errors?.[props.fieldName as never]?.message || props.errorMessage || '') as string;

  const handleOnChanged = (value: boolean) => {
    field.onChange(value);
    props.onChanged?.(value);
  };

  return <AppCheckbox {...props} checkboxPosition="left" checked={field.value} error={hasError} errorMessage={errorMessage} onChanged={handleOnChanged} style={styles.container} />;
};

export default memo(AppFormCheckbox);
