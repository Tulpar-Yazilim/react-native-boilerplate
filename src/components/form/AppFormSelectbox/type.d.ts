import {ValidateResult} from 'react-hook-form/dist/types/validator';

import {AppSelectboxProps} from '../../common/AppSelectbox/type';

export type AppFormSelectboxProps = {
  fieldName: string;
  validate?: Record<string, (value: string) => ValidateResult | Promise<ValidateResult>>;
} & AppSelectboxProps;
