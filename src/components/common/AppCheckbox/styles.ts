import {StyleProp, StyleSheet, TextStyle} from 'react-native';

import {projectColors} from '@/assets';
import {flexBox, heightPixel, textFont, widthPixel} from '@/helpers';

import {AppCheckboxProps} from './type';

const styles = StyleSheet.create({
  container: {
    borderWidth: widthPixel(1),
    borderColor: projectColors.black20,
    borderRadius: widthPixel(5),
    height: widthPixel(22),
    width: widthPixel(22),
    ...flexBox('column', 'center', 'center'),
  },
  text: {
    ...textFont(14, projectColors.black90),
  },
  checkedIconContainer: {
    position: 'absolute',
  },
  checkedContainer: {
    backgroundColor: projectColors.red,
    borderColor: projectColors.red,
  },
  disabledText: {
    color: projectColors.grey,
  },
  disabledContainer: {
    borderColor: projectColors.grey,
    backgroundColor: projectColors.white,
  },
  hasErrorContainer: {
    borderColor: projectColors.red,
  },
});

export const getCheckboxTextContainerStyle = (props: AppCheckboxProps) => {
  return props.checkboxPosition === 'left' || props.checkboxPosition === 'right'
    ? {
        ...flexBox('row', props.checkboxPosition === 'left' ? 'flex-start' : 'flex-end', 'center'),
      }
    : {
        ...flexBox('column', undefined, 'center'),
      };
};

export const getCheckboxTextStyle = (props: AppCheckboxProps) => {
  const marginLeft = props.checkboxPosition === 'left' ? 7 : 0;
  const marginRight = props.checkboxPosition === 'right' ? 7 : 0;
  const marginTop = props.checkboxPosition === 'top' ? 7 : 0;
  const marginBottom = props.checkboxPosition === 'bottom' ? 7 : 0;
  return {
    ...styles.text,
    marginLeft: widthPixel(marginLeft),
    marginRight: widthPixel(marginRight),
    marginBottom: heightPixel(marginBottom),
    marginTop: heightPixel(marginTop),
    textDecorationLine: props.textClickable ? 'underline' : 'none',
    textDecorationColor: projectColors.black40,
  } as StyleProp<TextStyle>;
};

export default styles;
