import {ColorValue, ImageStyle, StyleProp} from 'react-native';

import {ResizeMode, Source} from '@d11/react-native-fast-image';

export type AppImageProps = {
  url: string | Source;
  size?: number;
  width?: number;
  height?: number;
  resizeMode?: ResizeMode;
  indicatorColor?: ColorValue;
  style?: StyleProp<ImageStyle>;
};
