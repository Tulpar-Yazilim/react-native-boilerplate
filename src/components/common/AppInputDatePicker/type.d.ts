import {AppInputProps} from '../AppInput/type';

export type AppInputDatePickerProps = {
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
  minDate?: Date;
  maxDate?: Date;
} & AppInputProps;
