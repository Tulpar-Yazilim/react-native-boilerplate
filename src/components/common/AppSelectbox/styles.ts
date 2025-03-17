import {projectColors, spacing} from '@/assets';
import {textFont} from '@/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    ...spacing.pt2,
    ...spacing.pb2,
    ...spacing.px3,
    borderBottomWidth: 1,
    borderBottomColor: projectColors.black20,
  },
  headerTitle: {
    ...textFont(16, projectColors.black, 'bold'),
  },
  itemText: {
    ...textFont(14, projectColors.black, 'regular'),
  },
});
