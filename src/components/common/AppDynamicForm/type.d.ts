import {ColorValue, StyleProp, ViewStyle} from 'react-native';

import {AppButtonIconPositionType} from '../AppButton/type';
import {IconTypes} from '../AppIcon/type';

export type AppDynamicFormFieldType = 'text-box' | 'phone' | 'email' | 'date-picker' | 'password' | 'checkbox';
export type AppDynamicFormDataType = 'string' | 'number' | 'date' | 'boolean';

export type AppDynamicFormFieldModel = AppDynamicFormFieldModelBase | AppDynamicFormPasswordFieldModel | AppDynamicFormDateFieldModel;

export type AppDynamicFormFieldModelBase = {
  name: string;
  title: string;
  index?: number;
  dataType: AppDynamicFormDataType;
  type: AppDynamicFormFieldType;
  required?: boolean;
  requiredMessage?: string;
  value?: string | number | Date | boolean;
  clearable?: boolean;
};

export type AppDynamicFormTextFieldModel = {
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
  isMailAddress?: boolean;
  mailAddressErrorMessage?: string;
  multiLine?: boolean;
} & AppDynamicFormFieldModelBase;

export type AppDynamicFormPasswordFieldModel = {
  minPasswordStrength?: 0 | 1 | 2 | 3;
  minPasswordStrengthMessage?: string;
} & AppDynamicFormTextFieldModel;

export type AppDynamicFormDateFieldModel = {
  maxDate?: Date;
  minDate?: Date;
  pickerType?: 'date' | 'time' | 'datetime' | 'countdown';
} & AppDynamicFormFieldModelBase;

export type AppDynamicFormProps = {
  style?: StyleProp<ViewStyle>;
  name?: string;
  title?: string;
  editable?: boolean;
  hideSubmitButton?: boolean;
  fields?: AppDynamicFormFieldModel[];

  submitButtonText?: string;
  submitButtonIconType?: keyof typeof IconTypes;
  submitButtonIconName?: string;
  submitButtonIconSize?: number;
  submitButtonIconColor?: ColorValue;
  submitButtonIconStyle?: StyleProp<ViewStyle>;
  submitButtonIconPosition?: AppButtonIconPositionType;

  onSubmit?: (data: object) => void;
};
