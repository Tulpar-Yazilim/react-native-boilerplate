import {ReactNode} from 'react';
import {ImageResizeMode, ViewStyle} from 'react-native';

import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type AppPageProps = {
  scroll?: boolean;
  keyboardScroll?: boolean;
  safeArea?: boolean;
  style?: ViewStyle;
  navigationOptions?: NativeStackNavigationOptions;
  children: ReactNode;
  loading?: boolean;
  title?: string;
  canGoBack?: boolean;
  backgroundImage?: string;
  backgroundResizeMode?: ImageResizeMode;
  onRefreshData?: () => Promise<void> | void;
};
