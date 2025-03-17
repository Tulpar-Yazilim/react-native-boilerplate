import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type AppBottomSheetProps = {
  children: ReactNode;
  backdrop?: boolean;
  portal?: boolean;
  customStyles?: ViewStyle;
  isVisible?: boolean;
  enablePanDownToClose?: boolean;
  onClose?: () => void;
};
