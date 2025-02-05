import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {projectColors} from '@/assets';
import {flexBox, heightPixel, textFont, widthPixel} from '@/helpers';

import {AppInputProps} from './type';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: projectColors.white,
    borderWidth: widthPixel(1),
    borderRadius: widthPixel(10),
    paddingHorizontal: widthPixel(24),
    height: heightPixel(180),
    position: 'relative',
    overflow: 'hidden',
    ...flexBox('row', 'center', 'center'),
  },
  inputContainerDisable: {
    backgroundColor: projectColors.grey,
  },
  inputContent: {
    ...textFont(16, projectColors.black, 'medium'),
    height: heightPixel(180),
    flex: 1,
    paddingHorizontal: 0,
  },
  labelContainer: {
    position: 'absolute',
    left: widthPixel(24),
    right: widthPixel(24),
    top: 0,
    bottom: 0,
  },
  labelContent: {
    padding: 0,
    ...textFont(14, projectColors.black50, 'medium'),
  },
  labelContentFocused: {
    fontWeight: '400',
  },
  blockLabel: {
    marginTop: heightPixel(12),
    ...textFont(11, projectColors.textBlack),
  },
  errorText: {
    ...textFont(12, projectColors.error),
    textAlignVertical: 'top',
    height: 0,
    padding: 0,
    margin: 0,
  },
  iconContainer: {
    height: heightPixel(30),
    width: widthPixel(20),
    marginTop: heightPixel(-13),
    marginLeft: widthPixel(10),
    ...flexBox('column', 'center', 'center'),
  },
  iconContainerBlock: {
    marginTop: 0,
  },
  iconContainerLeft: {
    marginLeft: 0,
    marginRight: widthPixel(10),
  },
  clearIconButton: {
    height: widthPixel(24),
    width: widthPixel(24),
    marginTop: heightPixel(-13),
    marginLeft: widthPixel(10),
    ...flexBox('column', 'center', 'center'),
  },
  spinnerIconContainer: {
    height: heightPixel(40),
    width: widthPixel(30),
    marginTop: heightPixel(-13),
    marginLeft: widthPixel(10),
    position: 'relative',
    overflow: 'hidden',
  },
  spinnerIcon: {
    width: widthPixel(100),
    height: heightPixel(100),
  },
});

export const getInputStyle = (props: AppInputProps): StyleProp<ViewStyle> => {
  const borderColor = props.error ? projectColors.red : projectColors.grey;
  const height = props.multiline ? heightPixel(30 * (props.numberOfLines ?? 1)) : heightPixel(65);

  const paddingTop = props.labelType === 'hidden' ? heightPixel(19.5) : heightPixel(28);
  const paddingBottom = props.labelType === 'hidden' ? heightPixel(19.5) : heightPixel(11);

  return {
    ...styles.inputContainer,
    borderColor,
    height,
    paddingTop,
    paddingBottom,
    alignItems: props.multiline ? 'flex-start' : 'center',
  };
};

export default styles;
