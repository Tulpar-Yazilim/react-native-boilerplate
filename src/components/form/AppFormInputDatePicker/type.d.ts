import {ValidateResult} from 'react-hook-form/dist/types/validator';

import {AppInputDatePickerProps} from '@/components/common/AppInputDatePicker/type';
export type AppFormInputDatePickerProps = {
  fieldName: string;
  validate?: Record<string, (value: string) => ValidateResult | Promise<ValidateResult>>;
} & AppInputDatePickerProps;
