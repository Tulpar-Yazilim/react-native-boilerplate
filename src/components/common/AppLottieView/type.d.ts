import {AnimationObject} from 'lottie-react-native';
import {StyleProp, ViewStyle} from 'react-native';

export type LottieViewProps = {
  animation: string | AnimationObject;
  autoPlay?: boolean;
  loop?: boolean;
  style?: StyleProp<ViewStyle>;
};
