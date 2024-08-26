import {StyleSheet} from 'react-native';

import {FlexProps} from './type';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default styles;

export const flexBoxStyle = ({flex, direction, gap, justify, align}: FlexProps) => {
  if (typeof flex !== 'number') console.warn('Flex is not number');
  if (typeof gap !== 'number') console.warn('Gap is not number');

  return {
    ...(flex && {
      flex,
    }),
    ...(direction && {
      flexDirection: direction,
    }),
    ...(gap && {
      gap,
    }),
    ...(justify && {
      justifyContent: justify,
    }),
    ...(align && {
      alignContent: align,
    }),
  };
};
