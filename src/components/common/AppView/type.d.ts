import {ReactElement, ReactNode} from 'react';
import {ImageResizeMode, LayoutChangeEvent, StyleProp, ViewProps, ViewStyle} from 'react-native';

export type AppViewProps = {
  display?: boolean;
  flex?: boolean;
  children?: ReactElement | ReactNode;
  animated?: boolean;
  backgroundImage?: string;
  resizeMode?: ImageResizeMode;
  onPress?: () => void;
} & ViewProps;
