import {StyleProp, ViewStyle} from 'react-native';

import {IconTypes} from '../AppIcon/type';

export type AppCheckboxProps = {
  fieldName?: string;
  style?: StyleProp<ViewStyle>;
  checked?: boolean;
  checkboxPosition?: 'left' | 'right' | 'top' | 'bottom';

  iconType?: keyof typeof IconTypes;
  iconName?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  requiredMessage?: string;
  validate?: Record<string, (value: Date) => ValidateResult | Promise<ValidateResult>>;

  text?: string;
  textStyle?: StyleProp<TextStyle>;
  textClickable?: boolean;

  onChanged?: (value: boolean) => void;
  onPressText?: () => void;
};
