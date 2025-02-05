import React, {FC, memo} from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';

import Animated from 'react-native-reanimated';

import {AppViewProps} from './type';
import {generalStyles} from '@/assets';

const AppView: FC<AppViewProps> = ({children, animated, onLayout, backgroundImage, resizeMode, display = true, ...props}) => {
  if (display === false) {
    return <></>;
  }

  const insideStyles = StyleSheet.flatten([props.style, props.flex ? {flex: 1} : {}]);

  if (props.onPress) {
    return (
      <Pressable {...props} style={insideStyles}>
        {children}
      </Pressable>
    );
  }

  if (animated) {
    return (
      <Animated.View onLayout={onLayout} style={insideStyles}>
        {children}
      </Animated.View>
    );
  }

  return (
    <View onLayout={onLayout} style={insideStyles}>
      {backgroundImage ? (
        <ImageBackground source={{uri: backgroundImage}} resizeMode={resizeMode ?? 'cover'} style={generalStyles.flex}>
          {children}
        </ImageBackground>
      ) : (
        children
      )}
    </View>
  );
};

export default memo(AppView);
