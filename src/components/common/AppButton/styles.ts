import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {projectColors} from '@/assets';
import {flexBox, heightPixel, textFont, widthPixel} from '@/helpers';

import {AppButtonProps, TextDecorationLine} from './type';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPixel(16),
    ...flexBox('row', 'center', 'center'),
  },
  disabledContainer: {
    backgroundColor: projectColors.grey,
    borderColor: projectColors.grey,
  },
});

export const createCustomButtonStyle = (props: AppButtonProps): ViewStyle => {
  if (props.type === 'icon') {
    return {paddingHorizontal: widthPixel(0)};
  }
  let height: number = typeof props.height === 'number' ? props.height : 55;
  props.height === 'small' && (height = 40);
  props.height === 'large' && (height = 50);

  let width: number | undefined = props.width ? widthPixel(props.width) : undefined;
  props.type === 'circle' && (width = height ?? 0);
  height = props.type === 'circle' ? widthPixel(height) : heightPixel(height);
  width = props.type === 'circle' ? widthPixel(height) : width;

  let radius: number | undefined = typeof props.radius === 'number' ? props.radius : undefined;
  props.radius === 'small-radius' && (radius = 10);
  props.radius === 'full-radius' && (radius = height / 2);

  if (props.height === 'large' && !props.radius) {
    radius = 10;
  } else if (!props.radius) {
    radius = height / 2;
  }

  let {backgroundColor} = props;
  if (props.type !== 'bordered' && props.type !== 'link' && !props.backgroundColor) {
    backgroundColor = projectColors.red;
  }

  const containerStyle: ViewStyle = {
    width,
    height: heightPixel(height),
    backgroundColor: backgroundColor,
    borderRadius: radius && widthPixel(radius),
  };

  if (props.type === 'bordered') {
    containerStyle.borderWidth = widthPixel(2);
    containerStyle.borderColor = projectColors.primary;
  }
  if (props.disabled) {
    containerStyle.backgroundColor = projectColors.grey;
    containerStyle.borderColor = projectColors.grey;
  }
  if (props.type === 'link') {
    containerStyle.backgroundColor = undefined;
    containerStyle.borderWidth = undefined;
    containerStyle.borderColor = undefined;
    containerStyle.height = undefined;
    containerStyle.paddingHorizontal = undefined;
  }

  return containerStyle;
};

export const createCustomTextStyle = (props: AppButtonProps): TextStyle => {
  const fontType = props.height === 'large' ? 'bold' : 'regular';
  let textColor = props.textColor ? props.textColor : projectColors.white;
  let textDecorationLine: TextDecorationLine = 'none';
  if (props.type === 'link') {
    textColor = projectColors.primary;
    textDecorationLine = 'underline';
  } else if (props.type === 'bordered') {
    textColor = projectColors.primary;
  }
  if (props.disabled) {
    textColor = projectColors.black50;
  }
  const fontSize = props.height === 'large' ? 16 : 14;

  return {
    ...textFont(fontSize, textColor, fontType),
    opacity: props.disabled ? 0.3 : 1,
    textDecorationLine,
  };
};

export const createCustomIconStyle = (props: AppButtonProps): ViewStyle => {
  return {
    marginVertical: widthPixel(12),
    marginLeft: widthPixel(props.iconPosition === 'left' ? 0 : 12),
    marginRight: widthPixel(props.iconPosition === 'right' ? 0 : 12),
  };
};

export default styles;
