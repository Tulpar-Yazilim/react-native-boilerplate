import React, {FC, memo} from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';

import Animated from 'react-native-reanimated';

import {AppViewProps} from './type';
import {generalStyles} from '@/assets';
import {flexBoxStyle} from './styles';

const AppView: FC<AppViewProps> = ({children, animated, onLayout, backgroundImage, resizeMode, display = true, ...props}) => {
  if (display === false) {
    return <></>;
  }

  const insideStyles = StyleSheet.flatten([props.style, props.flex ? {flex: typeof props.flex === 'boolean' ? 1 : props.flex} : {}]);

  const childElement =
    props.flex || props.row ? (
      <View
        style={flexBoxStyle({
          flex: typeof props.flex === 'boolean' || props.row ? 1 : props.flex,
          direction: props.row ? 'row' : props.direction,
          gap: props.gap,
          justify: props.justify,
          align: props.align,
        })}>
        {children}
      </View>
    ) : (
      children
    );

  if (props.onPress) {
    return (
      <Pressable {...props} style={insideStyles}>
        {childElement}
      </Pressable>
    );
  }

  if (animated) {
    return (
      <Animated.View onLayout={onLayout} style={insideStyles}>
        {childElement}
      </Animated.View>
    );
  }

  return (
    <View onLayout={onLayout} style={insideStyles}>
      {backgroundImage ? (
        <ImageBackground source={{uri: backgroundImage}} resizeMode={resizeMode ?? 'cover'} style={generalStyles.flex}>
          {childElement}
        </ImageBackground>
      ) : (
        childElement
      )}
    </View>
  );
};

export default memo(AppView);
