import {ColorValue, KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, TextInputEndEditingEventData, TextInputFocusEventData, TextInputProps, TextStyle, ViewStyle} from 'react-native';

import {Mask} from 'react-native-mask-input';
import {AppInputProps} from '../AppInput/type';
import {AppFormInputProps} from '../../common/AppInput/type';

export type AppMaskedInputProps = {
  mask?: Mask;

  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  clearable?: boolean;
  error?: boolean;
  errorMessage?: string;

  required?: boolean;
  requiredMessage?: string;

  editable?: boolean;

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

  value?: string;
  placeholder?: string;
  cursorColor?: ColorValue;
  autoFocus?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;

  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onPressIcon?: () => void;
  onChangeText?: (masked: string, unmasked: string, obfuscated: string) => void;
  onClear?: () => void;
  onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
