import {StyleProp, ViewStyle} from 'react-native';

export type AppSelectboxProps = {
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
  required?: boolean;
  requiredMessage?: string;
  fieldName?: string;
  error?: boolean;
  errorMessage?: string;
};

export type SelectOptionItemType = {
  label: string;
  value: string | number;
  icon?: React.ReactNode | React.ReactElement | null;
  isIcon?: boolean;
  iconColor?: string;
  iconName?: string;
};
