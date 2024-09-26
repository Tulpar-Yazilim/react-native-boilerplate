import {ColorValue, NativeSyntheticEvent, StyleProp, TextInputEndEditingEventData, TextInputFocusEventData, TextInputProps, TextStyle, ViewStyle} from 'react-native';

import {IconTypes} from '../AppIcon/type';

export type BaseInputMethods = {
  setNativeProps?: (props: object) => void;
  setValue?: (text: string) => void;
  getValue?: () => string;
  setError?: (errorMessage?: string) => void;
};

export type AppInputRefType = {
  focus?: () => void;
  blur?: () => void;
} & BaseInputMethods;

export type AppInputProps = {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  clearable?: boolean;
  error?: boolean;
  errorMessage?: string;

  textFormat?: 'text' | 'email' | 'numeric' | 'password';

  required?: boolean;
  requiredMessage?: string;

  loading?: boolean;

  label?: string;
  labelType?: 'animated' | 'block' | 'hidden';
  labelStyle?: StyleProp<TextStyle>;
  labelStatus?: boolean;
  labelContainerStyle?: StyleProp<ViewStyle>;

  animationDuration?: number;

  iconType?: keyof typeof IconTypes;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconColor?: ColorValue;
  iconSize?: number;

  onPressIcon?: () => void;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
} & TextInputProps;
