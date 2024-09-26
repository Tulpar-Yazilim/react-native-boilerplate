import React, {memo} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Animated from 'react-native-reanimated';

import {HtmlRender, textFont} from '@/helpers';
import {useTranslate} from '@/hooks';

import {AppTextType} from './type';

const AppText = (props: Readonly<AppTextType>) => {
  const {children, params, pressable, touchable, html, animated, style, onPress, ...otherProps} = props;

  const _translate = useTranslate(children as string, params);
  const i18nText = _translate || children;

  // Content
  const content = i18nText ?? '';

  const insideStyles = StyleSheet.flatten([
    {
      ...textFont(),
    },
    style,
  ]);

  const TextComponent = animated ? Animated.Text : Text;
  const PressableComponent = pressable ? Pressable : TouchableOpacity;

  if (pressable || touchable) {
    if (html) {
      return (
        <PressableComponent onPress={onPress}>
          <HtmlRender {...otherProps} html={content as string} styles={insideStyles} />
        </PressableComponent>
      );
    }
    return (
      <PressableComponent onPress={onPress}>
        <TextComponent {...otherProps} style={insideStyles}>
          {content}
        </TextComponent>
      </PressableComponent>
    );
  }

  if (html) {
    return <HtmlRender {...otherProps} html={content as string} />;
  }

  return (
    <TextComponent {...otherProps} style={insideStyles}>
      {content}
    </TextComponent>
  );
};

export default memo(AppText);
