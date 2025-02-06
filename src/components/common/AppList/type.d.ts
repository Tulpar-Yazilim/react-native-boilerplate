import {ReactNode, RefObject} from 'react';
import {FlatListProps, FlatList as FList, ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {FlashList, FlashListProps} from '@shopify/flash-list';

export interface AppListProps<T> extends FlashListProps<T> {
  data: ReadonlyArray<T>;
  pagination?: boolean;
  loading?: boolean;
  onEndReachedThreshold?: number;
  refreshing?: boolean;
  preloader?: ReactNode;
  preloaderLength?: number;
  preloaderWidth?: number;
  preloaderHeight?: number;
  preloaderContainerStyle?: ViewStyle | TextStyle | ImageStyle;
  contentContainerStyle?: ViewStyle | TextStyle | ImageStyle;
  horizontal?: boolean;
  sticky?: boolean;
  index?: number;
  removeClippedSubviews?: boolean;
  flex?: boolean;

  onEndReached?: () => void;
  onRefresh?: () => void;
  onRefreshData?: () => void | Promise<void>;
}
