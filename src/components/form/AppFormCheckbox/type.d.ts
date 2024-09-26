import {ValidateResult} from 'react-hook-form/dist/types/validator';

import {AppCheckboxProps} from '../../common/AppCheckbox/type';
export type AppFormCheckboxProps = {
  fieldName?: string;
  validate?: Record<string, (value: Date) => ValidateResult | Promise<ValidateResult>>;
} & AppCheckboxProps;
