import React, {memo} from 'react';

import FastImage from '@d11/react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';

import {AppImageProps} from './type';
import {heightPixel, widthPixel} from '@/helpers';
import {projectColors} from '@/assets';
const Image = createImageProgress(FastImage);

const AppImage = (props: AppImageProps) => {
  const {url, size, width = 50, height = 50, resizeMode = 'cover', indicatorColor = projectColors.black, style, ...otherProps} = props;
  return (
    <Image
      source={typeof url === 'string' ? {uri: url, priority: FastImage.priority.high} : url}
      indicatorProps={{
        color: indicatorColor,
      }}
      resizeMode={resizeMode}
      style={{
        width: widthPixel(size ?? width),
        height: heightPixel(size ?? height),
      }}
      imageStyle={style}
      {...otherProps}
    />
  );
};

export default memo(AppImage);
