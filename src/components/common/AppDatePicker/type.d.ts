export type AppDatePickerProps = {
  visible: boolean;
  mode?: 'date' | 'time' | 'datetime';
  date?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  onConfirm?: (date: Date) => void;
  onCancel?: (date?: Date) => void;
};
