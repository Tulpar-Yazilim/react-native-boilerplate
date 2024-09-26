import {StyleSheet} from 'react-native';

import {generalStyles, projectColors, spacing} from '@/assets';
import {borderBox, flexBox, heightPixel, textFont, widthPixel} from '@/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthPixel(0),
  },
  scrollContainer: {
    flex: 1,
  },
  fieldLine: {
    marginTop: heightPixel(16),
  },
  fieldLineMulti: {
    ...flexBox('row', 'space-between', 'stretch'),
    marginLeft: widthPixel(-8),
    marginRight: widthPixel(-8),
  },
  fieldLineMultiItem: {
    marginHorizontal: widthPixel(8),
  },
  formContainer: {
    ...generalStyles.flex,
    ...spacing.p1,
    ...borderBox(projectColors.black40, 10, 1),
  },
  formTitle: {
    ...textFont(16, projectColors.textBlack, 'bold'),
  },
  submitButton: {
    marginTop: heightPixel(16),
  },
});
export default styles;
