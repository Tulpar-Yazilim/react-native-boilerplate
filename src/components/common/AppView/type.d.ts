import {ReactElement, ReactNode} from 'react';
import {ImageResizeMode, LayoutChangeEvent, StyleProp, ViewProps, ViewStyle} from 'react-native';

export type AppViewProps = {
  display?: boolean;
  children?: ReactElement | ReactNode;
  animated?: boolean;
  backgroundImage?: string;
  resizeMode?: ImageResizeMode;
  flex?: number | boolean;
  row?: boolean;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
  onPress?: () => void;
} & ViewProps;
