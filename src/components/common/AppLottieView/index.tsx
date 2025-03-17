import React, {memo} from 'react';

import LottieView from 'lottie-react-native';

import {LottieViewProps} from './type';

const AppLottieView = (props: LottieViewProps) => {
  const {animation = '', autoPlay = true, loop = true, style, ...otherProps} = props;
  return <LottieView style={style} source={animation} autoPlay={autoPlay} loop={loop} {...otherProps} />;
};

export default memo(AppLottieView);
