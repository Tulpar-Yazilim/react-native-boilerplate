import {ColorValue, StyleProp, ViewStyle} from 'react-native';

import {AppButtonIconPositionType} from '../AppButton/type';
import {IconTypes} from '../AppIcon/type';

export type AppDynamicFormFieldType = 'text-box' | 'phone' | 'email' | 'date-picker' | 'password' | 'checkbox' | 'select-box';
export type AppDynamicFormDataType = 'string' | 'number' | 'date' | 'boolean' | 'phone';

export type AppDynamicFormFieldModel = AppDynamicFormFieldModelBase | AppDynamicFormPasswordFieldModel | AppDynamicFormDateFieldModel | AppDynamicFormCheckboxFieldModel;

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
  options?: SelectOptionItemType[];
  editable?: boolean;
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

export type AppDynamicFormCheckboxFieldModel = {
  checkboxPosition?: 'left' | 'right' | 'top' | 'bottom';
  textClickable?: boolean;
  onPressText?: () => void;
} & AppDynamicFormFieldModelBase;

export type AppDynamicFormDateFieldModel = {
  maxDate?: Date;
  minDate?: Date;
  pickerType?: 'date' | 'time' | 'datetime' | 'countdown';
} & AppDynamicFormFieldModelBase;

export type AppDynamicFormSelectBoxFieldModel = {
  headerTitle?: string;
  editable?: boolean;
  placeholder?: string;
  options?: SelectOptionItemType[];
  valueProp?: string;
  displayProp?: string;
  name?: string;
  value?: string;
  label?: string;
  clearable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onChange?: (value: string) => void;
} & AppDynamicFormFieldModelBase;

export type AppDynamicFormProps = {
  style?: StyleProp<ViewStyle>;
  name?: string;
  title?: string;
  editable?: boolean;
  hideSubmitButton?: boolean;
  fields?: AppDynamicFormFieldModel[];
  watchForm?: (values: any) => void;
  submitButtonText?: string;
  submitButtonIconType?: keyof typeof IconTypes;
  submitButtonIconName?: string;
  submitButtonIconSize?: number;
  submitButtonIconColor?: ColorValue;
  submitButtonIconStyle?: StyleProp<ViewStyle>;
  submitButtonIconPosition?: AppButtonIconPositionType;
  resetData?: Partial<FormData> | null;
  onSubmit?: (data: object) => void;
};
