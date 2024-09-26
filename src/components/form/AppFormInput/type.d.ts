import {ValidateResult} from 'react-hook-form/dist/types/validator';

import {AppInputProps} from '../../common/AppInput/type';

export type AppFormInputProps = {
  fieldName: string;

  validate?: Record<string, (value: string) => ValidateResult | Promise<ValidateResult>>;
  pattern?: RegExp;
  patternMessage?: string;

  minLength?: number;
  minLengthMessage?: string;
  maxLength?: number;
  maxLengthMessage?: string;
  numericMin?: number;
  numericMinMessage?: string;
  numericMax?: number;
  numericMaxMessage?: string;
  checkPasswordStrength?: boolean;
  checkPasswordsEqual?: boolean;
  masterPassword?: string;
  minPasswordStrengthMessage?: string;
} & AppInputProps;
